const { Kafka} = require('kafkajs')
exports.Kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['http://192.168.1.16:9092'],
});