from django.urls import path
from .views import BlocklyImplement

urlpatterns = [
    path('', BlocklyImplement, name='blockly-index')
]
