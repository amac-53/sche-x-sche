FROM python:3.10-slim-buster

WORKDIR /backend
COPY ./requirements.txt /backend/
RUN pip install --upgrade pip && pip install -r requirements.txt

ENTRYPOINT ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--reload"]