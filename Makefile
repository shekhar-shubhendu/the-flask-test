
FLASK_APP=the_flask_test/app.py

requirements:
	@echo Generating requirements.txt
	poetry export --dev -f requirements.txt > requirements.txt
	@echo Done.

deps: requirements

dev-start:
	@echo Stating Flask App
	FLASK_APP=$(FLASK_APP) flask run --debugger --reload

start:
	@echo Stating Flask App
	FLASK_APP=$(FLASK_APP) flask run --with-threads

db-init:
	@echo initializing database
	FLASK_APP=$(FLASK_APP) flask db init

db-migrate:
	@echo migrate database
	FLASK_APP=$(FLASK_APP) flask db migrate

db-upgrade:
	@echo upgrade database
	FLASK_APP=$(FLASK_APP) flask db upgrade

start-prod: db-upgrade
	@echo Stating gunicorn server
	gunicorn --config gunicorn_config.py wsgi:application