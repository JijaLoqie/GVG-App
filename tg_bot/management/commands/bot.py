import requests
import json

from django.core.management.base import BaseCommand
from django.db.utils import settings
from loguru import logger
from telegram import Update
from telegram.ext import ApplicationBuilder, CallbackContext, CommandHandler, ContextTypes, filters, MessageHandler, Updater

def log_errors(f):

    def inner(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except Exception as e:

            error_message = f'Произошла ошибка: {e}'
            logger.error(error_message)
            raise e

    return inner

@log_errors
async def do_echo(update: Update, context: CallbackContext):
    chat_id = update.message.chat_id
    text = update.message.text

    reply_text = "Говорит: {}👤\n\n{}".format(chat_id, text)
    await update.message.reply_text(text=reply_text)

@log_errors
async def do_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(update.effective_chat.id, text="Here will be dragons")

@log_errors
async def send_dragons(application):
    await application.bot.send_message(618853011, text="Here will be dragons")



class Command(BaseCommand):
    help = "Телеграм-бот"

    def handle(self, *args, **options):


        token = settings.TG_TOKEN
        chat_id = 618853011

        URL = 'https://api.telegram.org/bot' + token + '/sendMessage'
        data = {'chat_id': chat_id, 'text': 'Dragons',}
        r = requests.post(URL, data=data)

        logger.debug(r.json())
