# 🏦 Create and Setup Virtual Accounts

## 🚀 Onboard a Virtual Accounts Provider

Before creating and operating your virtual accounts, you need to onboard a provider bank on the BaseOne dashboard UI.

### 📝 Steps to Request Provider Onboarding:

1. 🔑 Log in to your BaseOne dashboard or [sign up for a free account](https://www.baseone.co/).
2. 🧭 Navigate to **Products > Account Service**.
3. 🖱️ Hover on **Virtual Accounts** and click **Open**.
4. 👀 In the Virtual Accounts overview page, click the **Onboard** button.
5. 🌍 Select your country to see available provider banks.
6. ✅ Choose your preferred provider bank and click **Onboard**.
7. 📨 You'll see a feedback modal: _"Your onboarding has been initiated."_
8. ⏳ Expect an email update on your request within two business days.

## 💳 Create a Virtual Account

After onboarding a provider bank, you can use the Virtual Accounts API to create a virtual account.

### 🖥️ API Request Example:

```curl Create virtual account
curl --request POST \
     --url https://gateway.baseone.co/virtual-accounts/v1/account/create \
     --header 'Accept: application/json' \
     --header 'Api-Key: xxxxxxxxxxxxxxx' \
     --header 'Content-Type: application/json'
```

### API Reference

You can view the [API reference](/api/api-va) for full details of the Virtual Accounts API. You also get code samples for all the endpoints in different languages, such as Node.js, PHP, Python, Ruby, and more.
