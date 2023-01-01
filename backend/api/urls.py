from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('artist_year/<int:year>',views.getArtist, name='artistByYear'),
    path('genre_year/<int:year>', views.getGenre, name='genreByYear'),
    path('genre_all', views.getAllGenre, name='getAllGenre'),
    path('artist_all', views.getAllArtist, name='getAllArtist'),
    path('top_plays', views.getAllTopPlays, name='topplays')
]