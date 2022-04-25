FROM python:alpine3.15

COPY hello_1.py hello_1.py
COPY hello_2.py hello_2.py

# Para garantir que o comando será executado.
# CMD da pra mudar
# ENTRYPOINT não da pra mudar
ENTRYPOINT ["python"]
CMD ["hello_1.py"]
