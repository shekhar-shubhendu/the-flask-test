FROM python:3.7-slim
USER root
WORKDIR /app
COPY . .
RUN mv example.env .env
RUN apt-get update && apt-get install -y --no-install-recommends \
		make gcc python-dev libpq-dev \
	    && rm -rf /var/lib/apt/lists/* \
        && pip install -r requirements.txt
EXPOSE 8080
CMD ["make", "start-prod"]
