# Exemplo Pub/Sub

Esse repositório contém um exemplo simples de um sistema que implementa uma arquitetura publish-subscribe. O projeto foi escrito
em python e nodejs.

### Executando

1. Execute uma instância do redis, recomendo usar docker caso não possua o redis na sua máquina

```
docker run --name redis -d -p 6379:6379 redis
```

2. Crie um ambiente virtual python

```
python -m venv venv
```

3. Ative o ambiente virtual

```
source venv/bin/activate
```

4. Instale as dependências do projeto para o python

```
pip install -r requirements.txt
```

5. Execute o arquivo `sub.py` em um terminal

```
python sub.py
```

6. Agora abra outro terminal e instale as dependencias do projeto para o nodejs

```
npm install
```

7. Execute o arquivo `pub.js` no outro terminal aberto

```
node pub.js
```

8. Interaja com o terminal do `pub.js` e observe as saídas no terminal executando o `sub.py`
