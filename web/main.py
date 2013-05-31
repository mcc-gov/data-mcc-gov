import json
from flask import Flask
from flask import render_template
import requests
import StringIO

app = Flask(__name__)

#location of data.json folder on server e.g. /var/www/smthing
root="/var/www/raw/"
#root=""

@app.route('/')
def hello_world():
	f=open(root+"data.json")

	data = json.loads(f.read())
	f.close()

	meta={}
	meta["api"]={}
	meta["machine-readable"]={}
	meta["human-readable"]={}
	meta["external-catalog"]={}

	for item in data:
		if item["keyword"].find("api")>0:
			if item["theme"] not in meta["api"].keys():
				meta["api"][item["theme"]]=[]
			meta["api"][item["theme"]].append(item)
		elif item["keyword"].find("human-readable")>0:
			if item["theme"] not in meta["human-readable"].keys():
				meta["human-readable"][item["theme"]]=[]
			meta["human-readable"][item["theme"]].append(item)
		elif item["keyword"].find("external-catalog")>0:
			if item["theme"] not in meta["external-catalog"].keys():
				meta["external-catalog"][item["theme"]]=[]
			meta["external-catalog"][item["theme"]].append(item)
		else:
			if item["theme"] not in meta["machine-readable"].keys():
				meta["machine-readable"][item["theme"]]=[]
			meta["machine-readable"][item["theme"]].append(item)

	print meta
	return render_template('home.html', data=meta)

@app.route('/metadata/<identifier>')
def hello(identifier=None):
	f=open(root+"data.json")
	data = json.loads(f.read())
	f.close()

	meta={}
	for item in data:
		if item["identifier"]==identifier:
			meta=item
			break
	return render_template('meta.html', meta=meta)

@app.route('/api')
def api(identifier=None):
	return """{"url": "http://data.mcc.gov/api", "resources":{"list":{"url":http://data.mcc.gov/api/list"}}"""


@app.route('/api/list')
def api_list(identifier=None):
	f=open(root+"data.json")
	data = json.loads(f.read())
	f.close()

	items={}
	for item in data:
		try:
			for distr in item["distribution"]:
				if distr["format"]=="csv":
					items[item["identifier"]]={"url":"http://data.mcc.gov/api/dataset/"+item["identifier"]}
		except:
			pass

	return json.dumps(items, indent=4)

import csv

@app.route('/api/dataset/<identifier>')
def api_dataset(identifier=None):
	f=open(root+"data.json")
	data = json.loads(f.read())
	f.close()

	url=""
	for item in data:
		if identifier==item["identifier"]:
			for distr in item["distribution"]:
				if distr["format"]=="csv":
					url=distr["accessURL"]
	
	data = requests.get(url).text
	csv_reader = csv.reader( StringIO.StringIO(data) )
	header=[]
	dataset=[]
	for i,row in enumerate(csv_reader):
		if i==0:
			header=row
		else:
			el={}
			for j, item in enumerate(row):
				el[header[j]]=item
			dataset.append(el)

	return json.dumps(dataset, indent=4)


if __name__ == '__main__':
	#app.debug = True
	app.run()