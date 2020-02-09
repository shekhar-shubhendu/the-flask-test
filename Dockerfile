FROM python:3.7-alpine as app-base
USER root
ENV LANG=C.UTF-8
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PATH="/venv/bin:$PATH"
RUN python -m venv /venv
COPY requirements.txt .
RUN apk add --no-cache musl-dev postgresql-dev gcc python3-dev linux-headers \
    && pip install --no-cache-dir -r requirements.txt

FROM python:3.7-alpine as app-release
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PIP_DISABLE_PIP_VERSION_CHECK=1
ENV PATH="/venv/bin:$PATH"
USER root
EXPOSE 8080
WORKDIR /app
COPY --from=app-base /venv /venv
COPY . .
RUN apk add libpq bash make
CMD ["make", "start-prod"]
