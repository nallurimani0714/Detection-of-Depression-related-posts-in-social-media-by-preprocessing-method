from flask import Flask
from flask import render_template
from flask import request, jsonify
from flask import request
import dataCollection
import pre_process
import MiniBatchGradient
import matplotlib.pyplot as plt
import numpy as np
#from sklearn.metrics import jaccard_score
from io import BytesIO
import base64
from flask import request
import predictModule

app = Flask(__name__)
app = Flask(__name__, template_folder='template')
app.static_folder = 'static'
app.secret_key = 'super secret key'
@app.route('/')
def index():
    return render_template('view.html')


@app.route('/collect')
def collect():
    x= dataCollection.retrieve()
    return render_template("view.html", data=x.head(20))
   

@app.route("/preprocess")
def preprocess():
    df,label = pre_process.preProcess()
    return render_template("view.html", la=label,data2=df)

@app.route("/train")
def Bayes():
    score = MiniBatchGradient.train()
    return render_template("view.html",s=score)

@app.route("/predict", methods = ['GET', 'POST'])
def predict():

    ain = request.args.get("ain")
    aout = request.args.get("aout")
    online = request.args.get("online")
    offline = request.args.get("offline")
    nstrong = request.args.get("nstrong")
    nweak = request.args.get("nweak")
    ssb = request.args.get("ssb")
    emoticon = request.args.get("emoticon")
    selfies = request.args.get("selfies")
    duration = request.args.get("duration")
    label = request.args.get("label")

    predicted_label = predictModule.predict2(ain,aout,online,offline,nstrong,nweak,ssb,emoticon,selfies,duration,label)

    return render_template("predict.html", p=predicted_label)

if __name__ == '__main__':
    app.run(debug=True)
