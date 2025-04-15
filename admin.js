const { Kafka, Kafka } = require('kafkajs')

const Kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['http://192.168.1.16:9092'],
});

async function init(){
    const admin = Kafka.admin();
    console.log("admin connecting...")
    admin.connect();
    console.log("Adming Connection Success...")

    console.log("Creating Topic [rider-updates");
    await admin.createTopics({
        topics: [
            {
                topics: "rider-updates",
                numPartitions: 2,
            },
        ],
    }),
    console.log("Topic Created Success [rider-updates]")
} 