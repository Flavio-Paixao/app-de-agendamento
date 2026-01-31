from django.contrib import admin
from django.urls import path
from agendamentos.views import index, agenda

urlpatterns = [
    path('admin/', admin.site.urls), #-- PÁGINA INICIAL DO SALÃO --#
    path('', index, name='index'),
    path('agenda/', agenda, name='agenda'), 
]