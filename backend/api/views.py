from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
# Create your views here.
import pandas as pd
import json

# Consider adding class based views instead of function based ones

def getRoutes(request):
    return JsonResponse('Hello', safe=False)

def getArtist(request, year):
    data = pd.read_csv('./csv_data/artist_data.csv')
    results = data[pd.DatetimeIndex(data['ts']).year==year].drop('ts', axis=1)['master_metadata_album_artist_name'].value_counts().sort_values(ascending=False)[0:5].to_json()
    return JsonResponse(results, safe=False)

def getGenre(request, year):
    data = pd.read_csv('./csv_data/genre_data.csv')
    results = data[pd.DatetimeIndex(data['ts']).year==year].drop('ts', axis=1)['genres'].value_counts().sort_values(ascending=False)[0:10].to_json()
    return JsonResponse(results, safe=False)

def getAllTopPlays(request):
    data = pd.read_csv('./csv_data/merged_data.csv').drop('Unnamed: 0', axis=1)
    results = {}
    years = pd.DatetimeIndex(data.ts).year.unique()
    for year in years:
        temp_dict = data[pd.DatetimeIndex(data['ts']).year==year][['master_metadata_track_name', 'master_metadata_album_artist_name']].value_counts().sort_values(ascending=False)[0:7].to_dict()
        results[year] = {str(k): v for k, v in temp_dict.items()}
    return JsonResponse(json.dumps(results), safe=False)
    

def getAllArtist(request):
    data = pd.read_csv('./csv_data/artist_data.csv')
    years = pd.DatetimeIndex(data.ts).year.unique()
    results = {}
    for year in years:
        results[int(year)] = data[pd.DatetimeIndex(data['ts']).year==int(year)].copy().drop(['ts', 'Unnamed: 0'], axis=1)['master_metadata_album_artist_name'].value_counts().sort_values(ascending=False)[0:7].to_dict()
    return JsonResponse(json.dumps(results), safe=False)

def getAllGenre(request):
    data = pd.read_csv('./csv_data/genre_data.csv')
    years = pd.DatetimeIndex(data.ts).year.unique()
    results = {}
    for year in years:
        results[year] = data[pd.DatetimeIndex(data['ts']).year==int(year)].copy().drop(['ts', 'Unnamed: 0'], axis=1)['genres'].value_counts().sort_values(ascending=False)[0:10].to_dict()
    return JsonResponse(json.dumps(results), safe=False)
