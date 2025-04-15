 1. Start Zookeeper Container and expose PORT 2181

  docker run -p 2181:2181 zookeeper

 2. Start Kafka Container, expose PORT 9092 and setup ENV variables.

    docker run -p 9092:9092 `
  -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.16:2181 `
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.16:9092 `
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 `
  confluentinc/cp-kafka
