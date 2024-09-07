---
sidebar_position: 4
---

# Webhooks (Notification)

Webhooks work like SMS notifications, sending automated messages when an event occurs. BaseOne uses webhooks to deliver real-time notifications about transactions that occur when you use our APIs.

**Webhook event:** an action that occurs in your BaseOne integration, and you are notified of it. In virtual accounts, you get notified of external credit transactions.

**Webhook payload:** body of details of the webhook event. The payload is in JSON format and includes the event name, DateTime signature, and the event object. The event object has the full details of the action that occurs. In the case of a credit transaction, it has the details of the source and beneficiary accounts, transaction amount, charges, and other necessary details.

**Webhook URL:** an endpoint in your application that receives webhook events from BaseOne. Make it ready to accept `POST` method requests.

To use webhooks in BaseOne, you need to register your webhook URL on your BaseOne dashboard to receive webhook events. Your webhook URL should be an endpoint you have created to accept notification payload through `POST` requests. You will then receive notifications when external credit transactions occur in a virtual account in your merchant integration.

> 📘 External Credit Transactions
>
> These are transactions between a static virtual account in BaseOne and another account domiciled in another financial institution, such as commercial banks.

## Why use Webhooks?

Webhooks enable you to do the following action in your application:

1. You can set up your accounting system to get alerts when your virtual accounts receive external payments.

2. You can use webhooks to auto-generate receipts for in-app transactions. You can also implement a logic to deliver the receipts to your customers via email.

## How to register your webhook URL on the BaseOne dashboard

1. Create a webhook URL and make it publicly available.
2. Log in to your BaseOne dashboard or create a new account for free if you don't have one yet.
3. Navigate to **Settings > Developers**
4. Scroll down to the **Webhook URL** section.
5. Supply your webhook URL in the **Webhook URL** field.
6. Finally, click the **Update** button.

The following is a sample webhook notification payload.

```curl Credit notification event
"payload": {
	"EventName": "Credit Notification"
	"EventTime": "2022-080-15 01:15:30"
	"EventService": "Notification"
	"NotificationData": "{JSON Object in String}"
	"EventId": "2fc5bc14-2e0d-4541-bca7-9082b682243a"
}
```
