FROM python:3.7-slim
USER root
WORKDIR /app
COPY . .
RUN mv example.env .env
RUN pip install -r requirements.txt && pip install gunicorn
EXPOSE 8080
CMD ["gunicorn", "-b", "0.0.0.0:8080", "wsgi:application", "--workers=4"]
