from django.db.utils import settings
from django.http import JsonResponse
from django.http.response import json
from loguru import logger
import requests
from rest_framework.views import APIView

from configs.models import Telegram

class OrderInTelegram(APIView):
    def post(self, request, format=None):
        try: 
            chat_id_list = Telegram.objects.all()

            logger.debug(request.data)

            name = request.data['name']
            number = request.data['number']
            email = request.data['email']

            products = request.data['products']
            logger.debug(type(products))

            productsView = json.dumps(products, indent=2)

            response_text = f"Имя - {name}\nНомер - {number}\nEmail - {email}\n\n\n Товары: {productsView}"

            token = settings.TG_TOKEN

            URL = 'https://api.telegram.org/bot' + token + '/sendMessage'

            for chat_id in chat_id_list:
                data = {'chat_id': chat_id.chatId, 'text': response_text,}
                r = requests.post(URL, data=data)
                r.encoding = "utf-8"

        except Exception as error:
            logger.error(error)
            return JsonResponse({"ok": False, "text": type(error).__name__})

        return JsonResponse({"ok": True})
