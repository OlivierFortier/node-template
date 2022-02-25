// const { SubscriptionClient } = require("@azure/arm-resources-subscriptions");
const { DefaultAzureCredential } = require("@azure/identity");

exports.handler = async (context, inputs) => {
    // console.log('Inputs were ' + JSON.stringify(inputs));
    console.log("salut")

    // const subscriptionId = "f5c25c0b-39d1-48b7-a644-c1f6b4d83b49";
    // const client = new SubscriptionClient(new DefaultAzureCredential(), subscriptionId);
    const creds = new DefaultAzureCredential();
    console.log(JSON.stringify(creds));
    console.log(creds.getToken());
}