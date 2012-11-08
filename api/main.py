import json
from flask import Flask, url_for
app = Flask(__name__)

"""

/selection/countries
/selection/indicators
/selection/indicator_categories

#/selection/indicators_threshold

#/selection/gni
#/selection/gni_limits

#/selection/income_categories

#/selection/lmic
#/selection/lic

"""

fy13_data="../fy13/"


@app.route('/')
def api_root():
    return 'Welcome'

@app.route('/selection/lmic')
def api_lmic():
	list=[]
	f=open(fy13_data+"lmic_indicators_fy13.csv")
	for i, line in enumerate(f):
		if len(line)<1 or i==0:
			continue
		country, stuff = line.split(',',1)
		list.append({"country":country})
	f.close()
	return json.dumps({"countries":list}, sort_keys=True, indent=4)

@app.route('/selection/lic')
def api_lic():
	list=[]
	f=open(fy13_data+"lic_indicators_fy13.csv")
	for i, line in enumerate(f):
		if len(line)<1 or i==0:
			continue
		country, stuff = line.split(',',1)
		list.append({"country":country})
	f.close()
	return json.dumps({"countries":list}, sort_keys=True, indent=4)
	
@app.route('/selection/gni_limits')
def api_gni_limits():
	list=[]
	f=open(fy13_data+"gni_limits_fy13.csv")
	for i, line in enumerate(f):
		if len(line)<1 or i==0:
			continue
		year, limit, low, high = line.strip().split(',')
		list.append({"income_category":limit, "low":low, "high":high})
	f.close()
	return json.dumps({"gni_limits":list}, sort_keys=True, indent=4)

@app.route('/selection/gni')
def api_gni():
	list=[]
	f=open(fy13_data+"gni_fy13.csv")
	for i, line in enumerate(f):
		if len(line)<1 or i==0:
			continue
		country, year, gni, override = line.strip().split(',')
		list.append({"country":country.strip(), "gni":gni.strip(), "override":override.strip()})
	f.close()
	return json.dumps({"gni":list}, sort_keys=True, indent=4)

@app.route('/selection/income_categories')
def api_income_categories():
	list=[]
	f=open(fy13_data+"income_categories_fy13.csv")
	for i, line in enumerate(f):
		if len(line)<1 or i==0:
			continue
		category, description = line.strip().split(',')
		list.append({"category":category.strip(), "description":description.strip()})
	f.close()
	return json.dumps({"gni":list}, sort_keys=True, indent=4)

@app.route('/selection/indicators_threshold')
def api_indicators_threshold():
	list=[]
	f=open(fy13_data+"indicators_threshold_fy13.csv")
	for i, line in enumerate(f):
		if len(line)<1 or i==0:
			continue
		code, cat, year, median, se, threshold = line.strip().split(',')
		list.append({"indicator":code.lower().strip(), "income_category":cat.strip(), "median":median.strip(), "se":se.strip(), "threshold":threshold.strip()})
	f.close()
	return json.dumps({"indicators_threshold":list}, sort_keys=True, indent=4)



@app.route('/selection/countries')
def api_countries():
	list=""
	f=open("countries.json")
	list=f.read()
	return list

@app.route('/selection/indicators')
def api_indicators():
	list=""
	f=open("indicators.json")
	list=f.read()
	return list








@app.route('/articles/<articleid>')
def api_article(articleid):
    return 'You are reading ' + articleid

if __name__ == '__main__':
	app.debug = True
	app.run()