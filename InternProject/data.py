import requests
from osisoft.pidevclub.piwebapi.pi_web_api_client import PIWebApiClient


url = "https://cb-oakpi4-vis.dev.osisoft.int/piwebapi/"
client = PIWebApiClient(url, False, "kfrank", "Dinosaur8!", True)

print(client.data.get_recorded_values("pi:\\\\PIKFRANK\\internproject"))

import requests
from flask import Flask, render_template
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


# @app.route("/")
# def hello():
#     return "Hello World!"

# # print('testing')


# @app.route("/getPoint")
# def testing():
#     url = "https://cb-oakpi4-vis.dev.osisoft.int/piwebapi/"
#     return getVal(url)
