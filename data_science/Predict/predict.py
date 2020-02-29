import numpy, random, os
from pandas import DataFrame
import pandas as pd

weights = [1,1,1,1] #Saves random weights in a list. Weights are modified during the learning process.
error = 0
weights2 = [1,1,1]

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

print(weights)

#testing
print("Start testing")
print("Testing population")
for i in range(len(df.index)-10,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = df.loc[i][1]+weights[0]
    #print((outputP/df.loc[i+1][1])*100) #prints percentage
    predictedPopulation = outputP

print("GDP Per Capita")
for i in range(len(df.index)-10,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = df.loc[i][3]+weights[1]
    #print((outputP/df.loc[i+1][3])*100) #prints percentage
    predictedPopulation = outputP

print("Domestic Consumer Acc")
for i in range(len(df.index)-10,len(df.index)-3):
    #print(df.loc[i][0])
    outputP = df.loc[i][4]+weights[2]
    #print((outputP/df.loc[i+1][4])*100) #prints percentage
    predictedPopulation = outputP
    
print("End Test \n")
print("Train sales")
for i in range(1,len(df.index)-10):   #Sales
   outputQ = df.loc[i][1]*weights2[0]+df.loc[i][3]*weights2[1]+df.loc[i][4]*weights2[2]
   errorRate = df.loc[i][6]-outputQ
   print(df.loc[i][6])
   print("predicted : ")
   print(outputQ)
   print(".")
   print(errorRate)
   weights2[0] += errorRate * df.loc[i][1]
   weights2[1] += errorRate * df.loc[i][3]
   weights2[2] += errorRate * df.loc[i][4]

print("WEights")
print(weights2)
print("Test Sales\n")
for i in range(len(df.index)-10,len(df.index)-3):
   print(df.loc[i][0])
   outputQ = df.loc[i][1]*weights2[0]+df.loc[i][3]*weights2[1]+df.loc[i][4]*weights2[2]
   print((outputQ/df.loc[i][6])*100) #prints percentage
   #print(outputQ)
   #print(df.loc[i][6])
   #print(weights2)
   predictedSales = outputP

print("done") 
