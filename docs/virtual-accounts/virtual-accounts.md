# Virtual Accounts

Virtual accounts enable you to offer your customers accounts with real account numbers to accept funds. They work like standard bank accounts. Therefore, you can use them for inward and outward transactions.

## Types of Virtual Accounts

- **Dynamic accounts:** Dynamic virtual accounts enables you to create virtual account numbers that are only valid for a limited time — typically 30 minutes. They can't hold money. The funds collected by dynamic accounts are passed into a merchant settlement account that holds the funds.

- **Static-collection accounts:** Static-collection virtual account types generate permanent account numbers. Unlike dynamic types, this won't expire, but like dynamic types, the funds collected will be passed into a virtual account collection pool account. You can use this type of virtual account when you have a ledger in your system that keeps the account balance of your customers, and you don't want the account to expire.

- **Static accounts:**  BaseOne static virtual accounts is a powerful system that enables businesses to create permanent virtual account numbers mapped to BaseOne's account ledger. You can therefore use static accounts to leverage the robust ledger in BaseOne to keep the account balance for your customers without having to build your ledger. Unlike other types, funds collected into a static virtual account will not be pooled. The funds collected will reflect in the specific static account wallet. 

### Virtual Account Providers

The following table lists the virtual account providers available on BaseOne and the type of virtual accounts they support.

| Provider Bank | Dynamic | Static-collection | Static |
| ------------- | ------- | ----------------- | ------ |
| Providus      | ✅       | ✅                 | ✅      |
| Sterling      | ✅       | ✅                 | ✅      |

> 🥇 Supported Countries
> 
> Currently, the BaseOne Virtual Accounts API is available in  <span>Nigeria 🇳🇬</span> 

## Development Environments

The sandbox allows you to test the features and APIs. You can carry out live implementations in the production environment. The sandbox API keys work with the sandbox environment. Use live keys only in production live mode. 

For the dashboard UI: 

```text Sandbox UI
https://sandbox-app.baseone.co/virtual-accounts
```
```text Live UI
https://baseone.co/virtual-accounts
```

For the API gateway:

```text Sandbox Gateway
https://sandbox.baseone.co/virtual-accounts
```
```text Live Gateway
https://gateway.baseone.co/virtual-accounts
```

## Credit notification via webhooks

You can configure your merchant integration to get notifications for credit events on virtual accounts. Take the following steps to set up webhooks:

1. Log in to your BaseOne dashboard and go to the **Settings** section.
2. Fill in your webhook URL and other details under the **Company Settings** 
3. Click **Update**

Next, you can start to receive the notification payload via your webhook endpoint. Learn more about [Webhooks](doc:webhooks).

## [API Reference](https://developer.baseone.co/reference/create-virtual-account)

You can check out the details of the features provided by the Virtual Accounts API in the [API reference](https://developer.baseone.co/reference/create-virtual-account).