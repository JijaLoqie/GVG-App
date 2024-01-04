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



class Command(BaseCommand):
    help = "Телеграм-бот"

    def handle(self, *args, **options):
        # 1 -- подключение
        application = ApplicationBuilder().token(settings.TG_TOKEN).build()

        # 2 -- обработчики
        start_handler = CommandHandler("start", do_start)
        message_handler = MessageHandler(filters.TEXT, do_echo)
        application.add_handler(start_handler)
        application.add_handler(message_handler)

        # 3 -- бесконченая работа на сервере
        application.run_polling()
        logger.debug("HELLO WORLD")
