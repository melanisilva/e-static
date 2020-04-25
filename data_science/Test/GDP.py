from pandas import DataFrame
import pandas as pd
import numpy as np

filename = r'CombinedDataset.xlsx'
df = pd.read_excel(filename)

a = np.array([[1,df.loc[1][1],df.loc[1][3],df.loc[1][4]]])
for i in range(2,len(df.index)-10):
        b = np.array([[1,df.loc[i][1],df.loc[i][3],df.loc[i][4]]])
        print(df.loc[i][0])
        a = np.append(a,b,axis=0)

b = np.transpose(a)
c = np.dot(b,a)
print(" . ")
print(b)
print(" ")
d = np.linalg.inv(c)
print(" ")

e = np.array([[df.loc[1][6]]])
for i in range(2,len(df.index)-10):
        f = np.array([[df.loc[i][6]]])
        e = np.append(e,f,axis=0)


print(" . ")
print(e)
print(".")
g = np.dot(b,e)
print(g)

coeff = np.dot(d,g)
print(" ")
print(coeff[0][0])

predicted = coeff[0][0]+(df.loc[10][1]*coeff[1][0])+(df.loc[10][3]*coeff[2][0])+(df.loc[10][4]*coeff[3][0])
print(predicted)
print(df.loc[10][6])
print((predicted/df.loc[10][6])*100)

for i in range(len(df.index)-10,len(df.index)-2):
        predicted = coeff[0][0]+(df.loc[i][1]*coeff[1][0])+(df.loc[i][3]*coeff[2][0])+(df.loc[i][4]*coeff[3][0])
        print((predicted/df.loc[i][6])*100)
