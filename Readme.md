 1. Start Zookeeper Container and expose PORT 2181

 docker run -d --name zookeeper -p 2181:2181 zookeeper
 
 2. Start Kafka Container, expose PORT 9092 and setup ENV variables.

  docker run -d --name kafka \
  -p 9092:9092 \
  -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
  -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 \
  --link zookeeper \
  confluentinc/cp-kafka

