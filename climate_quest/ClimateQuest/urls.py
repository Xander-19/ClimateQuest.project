from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path('articles/', views.article_list, name='articles'),
    path('about/', views.about, name='about'),
    path('multimedia/', views.multimedia, name='multimedia'),
    path('activities/', views.activities, name='activities'),
    path('game/', views.game, name='game'),
    path('monkeyconnectgame/', views.monkeyconnectgame, name='monkeyconnectgame'),
    path('cubeblockgame/', views.cubeblockgame, name='cubeblockgame'),
    path('goblinrungame/', views.goblinrungame, name='goblinrungame'),
    path('article/<slug:slug>/', views.article_detail, name='article_detail'),
]