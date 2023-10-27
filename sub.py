import redis

redis_connection = redis.StrictRedis(host="localhost", port=6379, db=0)


def receive_messages():
    pubsub = redis_connection.pubsub()
    pubsub.subscribe("chat")

    for message in pubsub.listen():
        if message["type"] == "message":
            print(message["data"].decode("utf-8"))


receive_messages()
