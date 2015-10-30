#!/usr/bin/env python
# Name: Oscar Keur
# Student number: 11122102
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM
from exercise import 

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'


def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    # <td class="title"></span> eerste href
    # <span class="value">9.5</span>
    # <span class="credit"></span> elke href
    # <span class="genre"> </span>elke href
    # <span class="runtime">47 mins.</span>

    # maybe a named tuples would be better, but those are immutable..
    title = []
    value = []
    credit = []
    genre =[]
    runtime = []
    
    # extract the title based on title tag
    for e in dom.by_class("title")[:]:
        for a in e.by_tag("a.href")[:1]: # First href
            title.append(element('e:first-child'))

    # extract the rating based on value tag
    for e in dom.by_class("value")[:]:
        value.append(element('e:first-child'))

    # extract the credit based on credit tag
    for e in dom.by_class("credit")[:]:
        for a in e.by_tag("a.href")[:]: # all hrefs.
            temp_credit.append(element('e:first-child'))
        credit.append(temp_credit)

    # extract the genre based on genre tag
    for e in dom.by_class("genre")[:]:
        for a in e.by_tag("a.href")[:]: # all hrefs
            temp_genre.append(element('e:first-child'))
        genre.append(temp_genre)

    # extract the runtime based on runtime tag
    for e in dom.by_class("runtime")[:]:
        runtime.append(element('e:first-child'))

    return title, value, credit, genre, runtime 


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    with open(tvseries.csv , w) as f
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for x in len(title):
        writer.writerow([title[x], ranking[x], credit[x], genre[x], int(runtime[x])

    

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)