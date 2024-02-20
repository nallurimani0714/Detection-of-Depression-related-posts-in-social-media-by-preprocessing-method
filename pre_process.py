# train a logistic regression model
from sklearn import tree
import matplotlib.pyplot as plt
from sklearn import metrics
from sklearn.naive_bayes import GaussianNB
import pandas as pd
import MiniBatchGradient
logreg = None
y_pred_class = None
import dataCollection
from io import BytesIO
import base64
from sklearn.model_selection import train_test_split

def preProcess():
    df= dataCollection.retrieve()
    pr = []
    onOFF = []
    sc = []
    for index, row in df.iterrows():
            pr.append(int(row["ain"])/int(row["aout"]))
            onOFF.append(int(row["online"])/ int(row["offline"]))
            sc.append(int(row["nstrong"]) / int(row["nweak"]))

    dur = df["duration"]
    label = df["label"]
    d = {'PR': pr, 'ONOFF': onOFF,'SC':sc,'dur':dur,'label':label}
   
    df = pd.DataFrame(data=d)
    label = df["label"].values
    Y = label
    return(df,Y)
