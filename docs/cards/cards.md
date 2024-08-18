
# Cards 
Learn how to create and manage virtual cards for your customers


BaseOne Cards lets you quickly and easily create and manage a card service for your customers. Cards are used to buy items online, make in-app payments, and in-store purchases worldwide. You can go from setting up your card integration to making real-time transactions in minutes without costly processing and transaction fees. With BaseOne Card, you get to create different types of cards and select from a varied source of value.

When your customers are issued with cards, they can manage and control their cards. When they load their virtual cards, they get instant and secure access to the cards.

## How to Issue Cards

1. Onboard on the **Cards** service by navigating to **Products > Cards** on the left menu bar on your dashboard.
2. Then, hover on the **Cards Service** card to get an overview of the Cards product. 
3. Click the **Open** button to go to the onboarding page.
4. Click the **Onboard** button to initiate an onboarding request. We will then assess your service compliance and send you an email on the approval state of your request within 2 business days. 
5. After receiving a successful onboarding email, you can then go to **Settings > Developers** to generate your API key pair. You will need the **_secret key_** to make API requests.
6. After generating the keys, use the [Card API](https://developer.baseone.co/reference/create-card) to create a card and pass the **_secret key_** as `api-key` in your API request.

## Card Ledger Types

The following are the 3 possible sources of value for your card ledger.

1. **Internal:** These cards have their ledger mapped to the various services offered on the BaseOne platform, not the Card service ledger itself. 
2. **Intracard:**  You maintain your own ledger that enables you to load funds on the cards directly.
3. **External:** These cards point to your merchant settlement account as the source of value but allow you to host and maintain the ledger in your own system. 

> 🥇 Supported Countries
> 
> Currently, the BaseOne Card is available in  <span>USD</span> and can be used by businesses and startups anywhere.

## Testing Cards

You can test Cards in sandbox mode without incurring live transactions. Start testing by [creating a BaseOne account](https://sandbox-app.baseone.co/signup) in the **sandbox dashboard** and following the steps outlined in the [how to issue Cards](https://developer.baseone.co/docs/cards#how-to-issue-cards)

 The sandbox API keys work with the sandbox environment. 

```text Sandbox dashboard
https://sandbox-app.baseone.co/card
```
```text Sandbox API baseURL
https://sandbox.baseone.co/card/v1
```

When you're ready to go live or do production transactions, you can carry out live implementation in the production environment. Be sure to generate keys for production implementation in your BaseOne **live dashboard** environment. `**Use live keys only in production live mode.**`

For the API gateway:

```Text Live dashboard
https://app.baseone.co/card
```
```text Live API baseURL
https://gateway.baseone.co/card/v1
```

## [API Reference](https://developer.baseone.co/reference/create-card)

You can check out the details of the features provided by the Card API in the [API reference](https://developer.baseone.co/reference/create-card).

