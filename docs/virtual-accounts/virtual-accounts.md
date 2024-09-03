# 🏦 Virtual Accounts

Virtual accounts enable you to offer your customers accounts with real account numbers to accept funds. They work like standard bank accounts, allowing for both inward and outward transactions.

## 🔢 Types of Virtual Accounts

### 🔄 Dynamic accounts

- ⏳ Valid for a limited time (typically 30 minutes)
- 💸 Can't hold money
- 🏦 Funds are passed into a merchant settlement account

### 📊 Static-collection accounts

- 🔢 Generate permanent account numbers
- 🏦 Funds are passed into a virtual account collection pool account
- 💼 Ideal when you have your own ledger system

### 💰 Static accounts

- 🔢 Create permanent virtual account numbers
- 📒 Mapped to BaseOne's account ledger
- 💼 Leverage BaseOne's robust ledger for customer balances
- 💰 Funds collected reflect in the specific static account wallet

## 🏛️ Virtual Account Providers

| Provider Bank | Dynamic | Static-collection | Static |
| ------------- | ------- | ----------------- | ------ |
| Providus      | ✅      | ✅                | ✅     |
| Sterling      | ✅      | ✅                | ✅     |

> 🥇 Supported Countries
>
> Currently, the BaseOne Virtual Accounts API is available in <span>Nigeria 🇳🇬</span>

## 🛠️ Development Environments

### 🧪 Sandbox

Test features and APIs in the sandbox environment.

🖥️ Dashboard UI: `https://sandbox-app.baseone.co/virtual-accounts`

🌐 API Gateway: `https://sandbox.baseone.co/virtual-accounts`

### 🚀 Production

Carry out live implementations in the production environment.

🖥️ Dashboard UI: `https://baseone.co/virtual-accounts`

🌐 API Gateway: `https://gateway.baseone.co/virtual-accounts`

> ⚠️ Use sandbox API keys for testing and live keys only in production mode.

## 📢 Credit notification via webhooks

To receive notifications for credit events on virtual accounts:

1. 🔐 Log in to your BaseOne dashboard
2. ⚙️ Go to the **Settings** section
3. 🔗 Fill in your webhook URL under **Company Settings**
4. 💾 Click **Update**

Learn more about [Webhooks](doc:webhooks).

## 📚 [API Reference](https://developer.baseone.co/reference/create-virtual-account)

Check out the details of the Virtual Accounts API features in our [API reference 🔗](https://developer.baseone.co/reference/create-virtual-account).
