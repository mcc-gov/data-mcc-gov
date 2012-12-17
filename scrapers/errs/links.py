import feedparser
import urllib2

from lxml.html import parse
import lxml
import json

index_url="http://data.mcc.gov/raw/index.json"

index=urllib2.urlopen(index_url)

print index

errs_url="http://www.mcc.gov/pages/activities/activity/economic-rates-of-return"


doc=parse(errs_url).getroot()
compacts=doc.cssselect('div#activity-content-04 li a')

#print compacts[0].text_content()

links=[]

for c in compacts:	
	link=c.text_content().strip()
	#print c.text_content()
	#print c.attrib['href']
	links.append(c.attrib['href'])
	
#print links

for link in links:
	#print "-----------"
	#print link
	
	doc=parse(link).getroot()
	errs=doc.cssselect('ul.unstyled li.span4 a')
	
	for err in errs:
	
		href= err.attrib["href"]
		name=err.cssselect("span")[0].text_content()
		
		#print href, name


	