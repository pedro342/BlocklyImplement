from django.shortcuts import render

# Create your views here.

def BlocklyImplement(request):
    return render(request, 'catalog/BlocklyImplement.html')