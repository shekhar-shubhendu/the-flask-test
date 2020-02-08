FROM python:3.7-alpine as app-base
USER root
RUN apk add --no-cache musl-dev postgresql-dev gcc python3-dev linux-headers
RUN pip wheel --wheel-dir=/root/wheels psycopg2

FROM python:3.7-alpine as app-release
USER root
EXPOSE 8080
WORKDIR /app
COPY --from=app-base /root/wheels /root/wheels
COPY . .
RUN pip install -r requirements.txt
CMD ["make", "start-prod"]
