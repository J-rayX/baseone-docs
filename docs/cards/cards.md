# 🎴 Cards

**Learn how to create and manage virtual cards for your customers**

BaseOne Cards lets you quickly and easily create and manage a card service for your customers. Cards are used to buy items online, make in-app payments, and in-store purchases worldwide. You can go from setting up your card integration to making real-time transactions in minutes, without costly processing and transaction fees. With BaseOne Cards, you can create different types of cards and select from various sources of value.

Once issued, your customers can manage and control their cards, and when they load their virtual cards, they gain instant and secure access.

## 📝 How to Issue Cards

1. **Onboard** on the **Cards** service by navigating to **Products > Cards** on the left menu bar on your dashboard.
2. Hover over the **Cards Service** card to get an overview of the Cards product.
3. Click the **Open** button to go to the onboarding page.
4. Click the **Onboard** button to initiate an onboarding request. We will assess your service compliance and notify you via email within 2 business days regarding the approval status.
5. After receiving a successful onboarding email, navigate to **Settings > Developers** to generate your API key pair. You will need the **_secret key_** to make API requests.
6. After generating the keys, use the [Card API](/api/api-cards) to create a card, passing the **_secret key_** as `api-key` in your API request.

## 💳 Card Ledger Types

There are three possible sources of value for your card ledger:

1. **Internal:** Cards with a ledger mapped to the various services offered on the BaseOne platform, not the Card service ledger itself.
2. **Intracard:** You maintain your own ledger, enabling you to load funds onto the cards directly.
3. **External:** Cards that point to your merchant settlement account as the source of value, while allowing you to host and maintain the ledger in your own system.

## 🌍 Supported Countries

> 🥇 **Currently, the BaseOne Card is available in USD**  
> and can be used by businesses and startups anywhere.

## 🧪 Testing Cards

You can test Cards in sandbox mode without incurring live transactions. Start testing by [creating a BaseOne account](https://sandbox-app.baseone.co/signup) in the **sandbox dashboard** and following the steps outlined in [how to issue Cards](/docs/cards/#-how-to-issue-cards).

- **Sandbox dashboard:**  
  `https://sandbox-app.baseone.co/card`

- **Sandbox API baseURL:**  
  `https://sandbox.baseone.co/card/v1`

When you're ready to go live or perform production transactions, carry out the implementation in the production environment. Ensure that you generate keys for production in your BaseOne **live dashboard** environment.

> ⚠️ **Use live keys only in production mode.**

- **Live dashboard:**  
  `https://app.baseone.co/card`

- **Live API baseURL:**  
  `https://gateway.baseone.co/card/v1`

## 📚 [API Reference](/api/api-cards)

Check out the [API reference](/api/api-cards) for detailed information on the features provided by the Card API.
