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

    
    for e in dom.by_class("title")[:]:
        for a in e.by_tag("a.href")[:1]: # First href

    for e in dom.by_class("value")[:]:
        for a in e.by_tag("a.href")[:1]: # First <a class="title"> in entry.

    for e in dom.by_class("credit")[:]:
        for a in e.by_tag("a.href")[:]: # all hrefs.

    for e in dom.by_class("genre")[:]:
        for a in e.by_tag("a.href")[:]: # all hrefs

    for e in dom.by_class("runtime")[:]:
        for a in e.by_tag("a.href")[:1]: # First <a class="title"> in entry.

    return []  # replace this line as well as appropriate


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    with open(tvseries.csv , w) as f
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for x in len(title):
        writer.writerow([title[x], ranking[x], credit[x], genre[x], runtime[x])

    

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