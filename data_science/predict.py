import numpy as np
import random, os
from pandas import DataFrame
import pandas as pd

weights = [1,1,1,1,1,1] #Saves random weights in a list. Weights are modified during the learning process.
error = 0

filename = r'CombinedDataset.xlsx'
df = pd.read_excel(filename)


def Learn(input1, output,x) :
   outputP = input1+weights[x]  #get the output from from the function
   errorRate = output - outputP	# get the differenc between the output that you get and the actual input given by the user.
   #change the weightages according to the errors.
   weights[x] = weights[x]+errorRate


#Learning

for i in range(1,len(df.index)-10):   #Population
   #print(df.loc[i][0])
   Learn(df.loc[i][1],df.loc[i+1][1],0)
   
for i in range(1,len(df.index)-10):  #GDP Per capita
   #print(df.loc[i][0])
   Learn(df.loc[i][3],df.loc[i+1][3],1)

for i in range(1,len(df.index)-10):    #Domestic consumer account  
   #print(df.loc[i][0])
   Learn(df.loc[i][4],df.loc[i+1][4],2)

for i in range(1,len(df.index)-10):    #GDP Agriculture  
   #print(df.loc[i][0])
   Learn(df.loc[i][2],df.loc[i+1][2],3)

for i in range(1,len(df.index)-10):    #GDP Service  
   #print(df.loc[i][0])
   Learn(df.loc[i][8],df.loc[i+1][8],4)

print(weights)

#testing
predictedPopulation = []
predictedGdp = []
predictedDCA = []
print("Start testing")
print("Testing population")
for i in range(len(df.index)-10,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = int(df.loc[i][1])+weights[0]
    #print((outputP/df.loc[i+1][1])*100) #prints percentage
    predictedPopulation.append(outputP)

print("GDP Per Capita")
for i in range(len(df.index)-10,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = int(df.loc[i][3])+weights[1]
    #print((outputP/df.loc[i+1][3])*100) #prints percentage
    predictedGdp.append(outputP)

print("Domestic Consumer Acc")
for i in range(len(df.index)-10,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = int(df.loc[i][4])+weights[2]
    #print((outputP/df.loc[i+1][4])*100) #prints percentage
    predictedDCA.append(outputP)

print("End Test \n")
print("Train sales")

#Train Sales Model

a = np.array([[1,df.loc[1][1],df.loc[1][3],df.loc[1][4]]])
for i in range(2,len(df.index)-10):
        b = np.array([[1,df.loc[i][1],df.loc[i][3],df.loc[i][4]]])
        print(df.loc[i][0])
        a = np.append(a,b,axis=0)

b = np.transpose(a)
c = np.dot(b,a)
print(" ")
print(" ")
d = np.linalg.inv(c)
print(d)
print(" ")

e = np.array([[df.loc[1][6]]])
for i in range(2,len(df.index)-10):
        f = np.array([[df.loc[i][6]]])
        e = np.append(e,f,axis=0)


print(" ")

g = np.dot(b,e)
print(g)

coeff = np.dot(d,g)
print(" ")
print(coeff[0][0])

predicted = coeff[0][0]+(df.loc[10][1]*coeff[1][0])+(df.loc[10][3]*coeff[2][0])+(df.loc[10][4]*coeff[3][0])
print(predicted)
print(df.loc[10][6])
print((predicted/df.loc[10][6])*100)

theCount = 0
for i in range(len(df.index)-10,len(df.index)-3):
        #predicted = coeff[0][0]+(df.loc[i][1]*coeff[1][0])+(df.loc[i][3]*coeff[2][0])+(df.loc[i][4]*coeff[3][0])
        predicted = coeff[0][0]+(predictedPopulation[theCount]*coeff[1][0])+(predictedGdp[theCount]*coeff[2][0])+(predictedDCA[theCount]*coeff[3][0])
        theCount = theCount + 1
        print((predicted/df.loc[i][6])*100) #prints percentage


#End train sales model




print("done") 
