const { Kafka } = require('./client')

async function init(){
    const consumer = Kafka.consumer();
    await consumer.connect();

    await consumer.subscribe{}
}