from django.db.utils import settings
from django.http import JsonResponse
from django.http.response import json
from loguru import logger
import requests
from rest_framework.views import APIView






class OrderInTelegram(APIView):
    def post(self, request, format=None):
        logger.debug(request.data)

        name = request.data['name']
        number = request.data['number']
        email = request.data['email']

        products = request.data['products']
        logger.debug(type(products))

        productsView = json.dumps(products, indent=2)

        response_text = f"Имя - {name}\nНомер - {number}\nEmail - {email}\n\n\n Товары: {productsView}"

        token = settings.TG_TOKEN
        chat_id = 618853011

        URL = 'https://api.telegram.org/bot' + token + '/sendMessage'
        data = {'chat_id': chat_id, 'text': response_text,}
        r = requests.post(URL, data=data)
        r.encoding = "utf-8"
        return JsonResponse(r.json())
