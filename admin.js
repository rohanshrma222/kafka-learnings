const { Kafka } = require("./client");

async function init(){
    const admin = Kafka.admin();
    console.log("admin connecting...")
    admin.connect();
    console.log("Adming Connection Success...")

    console.log("Creating Topic [rider-updates");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2,
            },
        ],
    }),
    console.log("Topic Created Success [rider-updates]")

    console.log("Disconnecting Admin..");
    await admin.disconnect();
} 

init();