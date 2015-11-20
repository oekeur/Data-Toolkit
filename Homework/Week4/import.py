import json
import csv

data = [[]]
csvfile = open('data.txt')
datafile = csv.reader(csvfile)
for row in datafile:
	data.append(row)


json.dump(data, open('jsonfile.txt', 'w'))