const { Kafka} = require('kafkajs')
exports.Kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['192.168.1.8:9092'],
});