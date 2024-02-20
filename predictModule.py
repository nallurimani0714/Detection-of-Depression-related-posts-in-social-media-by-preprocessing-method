import pre_process
from sklearn import linear_model
from pandas_ml import ConfusionMatrix
import matplotlib.pyplot as plt
def predict2(ain,aout,online,offline,nstrong,nweak,ssb,emoticon,selfies,duration,label):
    

    print("ain =  " + ain)
    print("aout = " + aout)
    print("online = " + online)
    print("offline = " + offline)
    print("nstrong = " + nstrong)
    print("nweak = " + nweak)
    print("ssb = " + ssb)
    print("emoticon = " + emoticon)
    print("selfies = " + selfies)
    print("duration = " + duration)
    label2 = ['CR','NC','IO']
    
    (df,y) = pre_process.preProcess()
 
    pr = []
    onOFF = []
    sc = []
    x = []
	
    pr =int(ain) / int(aout)
    onOFF = int(online) / int(offline)
    sc = int(nstrong) / int(nweak)
    df = df.drop(["label"],axis=1)
    clf = linear_model.SGDClassifier()
    clf.fit(df.values, y)

    y_pred_class = clf.predict(df.values)
    # plot the line, the points, and the nearest vectors to the plane
    cm = ConfusionMatrix(y, y_pred_class)
    #y_pred_class.tolist()
    cm.plot()
    #plt.show()
    plt.savefig("static/img/graph.png")
    print(clf)
    x.append(pr)
    x.append(onOFF)
    x.append(sc)
    x.append(int(duration))
  
    x = []
    x.append([])
    
    x[0].append(pr)
    x[0].append(onOFF)
    x[0].append(sc)
    x[0].append(int(duration))
    print(x)
    labels = label2[clf.predict(x)[0]]


    return labels
