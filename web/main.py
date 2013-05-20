import json
from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
	f=open("data.json")

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

@app.route('/meta/<name>')
def hello(name=None):
	return render_template('hello.html', name=name)

if __name__ == '__main__':
	app.debug = True
	app.run()