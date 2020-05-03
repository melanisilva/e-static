import numpy as np
import random, os
from pandas import DataFrame
from pymongo import MongoClient
import pandas as pd

weights = [1,1,1,1,1] #Saves random weights in a list. Weights are modified during the learning process.
error = 0
    
def Learn(input1, output,x) :
   outputP = input1+weights[x]  #get the output from from the function
   errorRate = output - outputP	# get the differenc between the output that you get and the actual input given by the user.
   #change the weightages according to the errors.
   weights[x] = weights[x]+errorRate

def databaseConnect():

    client = MongoClient('mongodb+srv://admin:admin@cluster0-1er6h.mongodb.net/estatic?retryWrites=true&w=majority')
    print(type(client))
    db = client.estatic
    print(type(db))    
    collection = db['demand_forecast']
    print(type(collection))    
    cursor = collection.find({})
    print(type(cursor))    

    df = DataFrame([], columns=list('ABCDEFGHI'))
    for post in cursor:
        df2 = DataFrame([[post["Year"], post["Population"], post["GDP Agriculture"], post["GDP Per Capita"],
                          post["Domestic Consumer Account"], post["Average Electricity Price"],
                          post["Electricity Sales"], post["Electricity Classes"], post["GDP Service"]]], columns=list('ABCDEFGHI'))
        df = df.append(df2, ignore_index = True)
    return df


def main():
    df = databaseConnect()
    modelFile = open("Model.txt","w+")

    #Learning
    for i in range(1,len(df.index)-1):   #Population
       Learn(float(df.loc[i][1]),float(df.loc[i+1][1]),0)
       
    for i in range(1,len(df.index)-1):  #GDP Per capita
       Learn(float(df.loc[i][3]),float(df.loc[i+1][3]),1)

    for i in range(1,len(df.index)-1):    #Domestic consumer account  
       Learn(float(df.loc[i][4]),float(df.loc[i+1][4]),2)

    for i in range(1,len(df.index)-1):    #GDP Agriculture  
       Learn(float(df.loc[i][2]),float(df.loc[i+1][2]),3)

    for i in range(1,len(df.index)-1):    #GDP Service  
       Learn(float(df.loc[i][8]),float(df.loc[i+1][8]),4)

    #testing
    predictedPopulation = []
    predictedGdp = []
    predictedDCA = []
    predictedAgriculture = []
    predictedService = []
    #print("Testing population")
    for i in range(len(df.index)-1,len(df.index)):
        outputP = float(df.loc[i][1])+weights[0]
        predictedPopulation.append(outputP)

    #print("GDP Per Capita")
    for i in range(len(df.index)-1,len(df.index)):
        outputP = float(df.loc[i][3])+weights[1]
        predictedGdp.append(outputP)

     #print("Domestic Consumer Acc")
    for i in range(len(df.index)-1,len(df.index)):
        outputP = float(df.loc[i][4])+weights[2]
        predictedDCA.append(outputP)

    #print("Agriculture")
    for i in range(len(df.index)-1,len(df.index)):
        outputP = float(df.loc[i][2])+weights[3]
        predictedAgriculture.append(outputP)
        
    #print("Service")
    for i in range(len(df.index)-1,len(df.index)):
        outputP = float(df.loc[i][8])+weights[4]
        predictedService.append(outputP)

    a = np.array([[1,float(df.loc[1][1]),float(df.loc[1][3]),float(df.loc[1][4]),float(df.loc[1][2]),float(df.loc[1][8])]])
    for i in range(2,len(df.index)-1):
        b = np.array([[1,float(df.loc[i][1]),float(df.loc[i][3]),float(df.loc[i][4]),float(df.loc[i][2]),float(df.loc[i][8])]])
        print(df.loc[i][0])
        a = np.append(a,b,axis=0)

    b = np.transpose(a)
    c = np.dot(b,a)
    d = np.linalg.inv(c)
    e = np.array([[float(df.loc[1][6])]])
    for i in range(2,len(df.index)-1):
            f = np.array([[float(df.loc[i][6])]])
            e = np.append(e,f,axis=0)

    g = np.dot(b,e)

    coeff = np.dot(d,g)
    print(weights)
    for i in range(len(weights)):
       modelFile.write(str(weights[i]))
       modelFile.write("\n")
       
    for i in range(len(coeff)):
       modelFile.write(str(coeff[i][0]))
       modelFile.write("\n")

    modelFile.close()

    print(coeff)

    percentage = 0
    theCount = 0
    print(predictedPopulation)
    for i in range(len(df.index)-1,len(df.index)):
            print(df.loc[i][1],df.loc[i][3],df.loc[i][4],df.loc[i][2],df.loc[i][8])
            #popu gdppercapita Dmc agri serv
            predicted = coeff[0][0]+(float(df.loc[i][1])*coeff[1][0])+(float(df.loc[i][3])*coeff[2][0])+(float(df.loc[i][4])*coeff[3][0])+(float(df.loc[i][2])*coeff[4][0])+(float(df.loc[i][8])*coeff[5][0])
            theCount = theCount + 1
            percentage =  percentage + predicted/float(df.loc[i][6])*100

    print("accuracy percentage : ", percentage/(theCount))
    print("done")
   

if __name__ == "__main__":
        main()

    


