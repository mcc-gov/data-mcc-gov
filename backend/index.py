#export tables to CSV
import pymssql
import json

from settings import settings



conn = pymssql.connect(host=settings["host"], user=settings["user"], password=settings["pswd"], database=settings["opendata_db"])
cur = conn.cursor()
#print "DB Connected"

cur.execute('SELECT * FROM Groups')

row = cur.fetchone()
count=0

cats=[]
while row:

        rraw={}
        for i, el in enumerate(cur.description):

                for i, el in enumerate(row):
                        rraw[cur.description[i][0]]=row[i]

        #print json.dumps(rraw)
        cats.append(rraw)
        row=cur.fetchone()


cur.execute('SELECT d.*, g.type, g.location as group_location FROM Datasets d, Groups g WHERE d.group_id=g.id')

row = cur.fetchone()
count=0

sets=[]
while row:

	rraw={}
	for i, el in enumerate(cur.description):
	
		for i, el in enumerate(row):
			rraw[cur.description[i][0]]=row[i]

	#print json.dumps(rraw)
	sets.append(rraw)
	row=cur.fetchone()
conn.close()

index={"categories":cats, "datasets":sets}

print json.dumps(index, indent=4)

#print count

