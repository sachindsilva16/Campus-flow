
from django.shortcuts import render
from myapp.my_function import my_function
import json
def my_view(request):
   
    return render(request, 'index.html')

from django.http import JsonResponse, HttpResponseBadRequest

from django.views.decorators.csrf import csrf_exempt
from myapp.my_function import db


@csrf_exempt
def preprocess_text(request):
    
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        input_text = data['input_text']

        # Preprocess the input text
        
        processed_text = db(input_text)
        

        return JsonResponse({'processed_text': processed_text})
    else:
        return HttpResponseBadRequest("Invalid request")



