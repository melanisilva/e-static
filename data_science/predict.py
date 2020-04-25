import numpy as np
import random, os
from pandas import DataFrame
from pymongo import MongoClient
import pandas as pd

client = MongoClient('mongodb+srv://admin:admin@cluster0-1er6h.mongodb.net/estatic?retryWrites=true&w=majority')
db = client.estatic
collection = db['demand_forecast']
cursor = collection.find({})

df = DataFrame([], columns=list('ABCDEFGHI'))
for post in cursor:
    df2 = DataFrame([[post["Year"], post["Population"], post["GDP Agriculture"], post["GDP Per Capita"], post["Domestic Consumer Account"], post["Average Electricity Price"], post["Electricity Sales"], post["Electricity Classes"], post["GDP Service"]]], columns=list('ABCDEFGHI'))
    df = df.append(df2, ignore_index = True)

weights = [1,1,1,1,1] #Saves random weights in a list. Weights are modified during the learning process.
error = 0

##filename = r'CombinedDataset1.xlsx'
##df = pd.read_excel(filename)

print(df)
modelFile = open("Model.txt","w+")

def Learn(input1, output,x) :
   outputP = input1+weights[x]  #get the output from from the function
   errorRate = output - outputP	# get the differenc between the output that you get and the actual input given by the user.
   #change the weightages according to the errors.
   weights[x] = weights[x]+errorRate


#Learning

for i in range(1,len(df.index)-4):   #Population
   #print(df.loc[i][0])
   Learn(float(df.loc[i][1]),float(df.loc[i+1][1]),0)
   
for i in range(1,len(df.index)-4):  #GDP Per capita
   #print(df.loc[i][0])
   Learn(float(df.loc[i][3]),float(df.loc[i+1][3]),1)

for i in range(1,len(df.index)-4):    #Domestic consumer account  
   #print(df.loc[i][0])
   Learn(float(df.loc[i][4]),float(df.loc[i+1][4]),2)

for i in range(1,len(df.index)-4):    #GDP Agriculture  
   #print(df.loc[i][0])
   Learn(float(df.loc[i][2]),float(df.loc[i+1][2]),3)

for i in range(1,len(df.index)-4):    #GDP Service  
   #print(df.loc[i][0])
   Learn(float(df.loc[i][8]),float(df.loc[i+1][8]),4)

#print(weights)

#testing
predictedPopulation = []
predictedGdp = []
predictedDCA = []
predictedAgriculture = []
predictedService = []
#print("Start testing")
#print("Testing population")
for i in range(len(df.index)-4,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = float(df.loc[i][1])+weights[0]
    #print((outputP/df.loc[i+1][1])*100) #prints percentage
    predictedPopulation.append(outputP)

#print("GDP Per Capita")
for i in range(len(df.index)-4,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = float(df.loc[i][3])+weights[1]
    #print((outputP/df.loc[i+1][3])*100) #prints percentage
    predictedGdp.append(outputP)

#print("Domestic Consumer Acc")
for i in range(len(df.index)-4,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = float(df.loc[i][4])+weights[2]
    #print((outputP/df.loc[i+1][4])*100) #prints percentage
    predictedDCA.append(outputP)

#print("Agriculture")
for i in range(len(df.index)-4,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = float(df.loc[i][2])+weights[3]
    #print((outputP/df.loc[i+1][2])*100) #prints percentage
    predictedAgriculture.append(outputP)

#print("Service")
for i in range(len(df.index)-4,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = float(df.loc[i][8])+weights[4]
    #print((outputP/df.loc[i+1][8])*100) #prints percentage
    predictedService.append(outputP)


#print("End Test \n")
#print("Train sales")

#Train Sales Model

a = np.array([[1,float(df.loc[1][1]),float(df.loc[1][3]),float(df.loc[1][4]),float(df.loc[1][2]),float(df.loc[1][8])]])
for i in range(2,len(df.index)-4):
        b = np.array([[1,float(df.loc[i][1]),float(df.loc[i][3]),float(df.loc[i][4]),float(df.loc[i][2]),float(df.loc[i][8])]])
        #print(df.loc[i][0])
        a = np.append(a,b,axis=0)

b = np.transpose(a)
c = np.dot(b,a)
#print(" ")
#print(a)
#print(" ")
d = np.linalg.inv(c)
#print(d)
#print(" ")

e = np.array([[float(df.loc[1][6])]])
for i in range(2,len(df.index)-4):
        f = np.array([[float(df.loc[i][6])]])
        e = np.append(e,f,axis=0)


#print(" ")

g = np.dot(b,e)
#print(g)

coeff = np.dot(d,g)
#print(" ")
#print(coeff[0][0])
#print(predicted)
#print(df.loc[10][6])
#print((predicted/df.loc[10][6])*100)

print(len(coeff))
for i in range(len(coeff)):
   modelFile.write(str(coeff[i][0]))
   modelFile.write("\n")

modelFile.close()

print(coeff)

percentage = 0
theCount = 0
for i in range(len(df.index)-4,len(df.index)-3):
        #predicted = coeff[0][0]+(df.loc[i][1]*coeff[1][0])+(df.loc[i][3]*coeff[2][0])+(df.loc[i][4]*coeff[3][0])
        predicted = coeff[0][0]+(predictedPopulation[theCount]*coeff[1][0])+(predictedGdp[theCount]*coeff[2][0])+(predictedDCA[theCount]*coeff[3][0])+(predictedAgriculture[theCount]*coeff[4][0])+(predictedService[theCount]*coeff[5][0])
        theCount = theCount + 1
        percentage =  percentage + predicted/float(df.loc[i][6])*100
        #percentage =  percentage + predicted - df.loc[i][6]



#print("")
print("accuracy percentage : ", percentage/(theCount))
#End train sales model




#print("done") 
