# 🔔 Webhooks in Virtual Accounts

When using our Virtual Accounts API, you'll receive notifications for **external credit transactions** in your virtual accounts. Here's what you need to know:

## 🚀 Getting Started

1. 🖥️ Log into your BaseOne dashboard
2. 🔗 Register your webhook URL
   - Follow our guide on [how to register your webhook URL 🔗](https://developer.baseone.co/docs/webhooks#how-to-register-your-webhook-url-on-the-baseone-dashboard)

## 📦 Event Payload

The event payload you receive will contain an `event` object with full transaction details. Here's what it looks like:

```text
EventObject:
"{
     "TotalAmount": "200.00",
     "CreditAmount": "175.00",
     "Charges": "25.00",
     "BeneficiaryAccount": "0000000048",
     "BeneficiaryName": Charles Ayeni,
     "BeneficiaryBankCode": 255,
     "SourceBankCode": null,
     "SourceBankName": "Label Bank Co.",
     "SourceAccount": "2020394434",
     "SourceAccountName": "Lade Okonkwo",
     "BankVerificationNumber": 12345678901,
     "TransactionReference": "VGN50513A9E0DA22045250B9600FFE977942E76",
     "TransactionDate": "2022-07-01 11:44:28.572093",
     "IsProcessed": true,
     "Currency": "NGN",
     "Id": 24
}"
```

> 📘 External Credit Transactions
>
> These are transactions between a static virtual account in BaseOne and another account domiciled in another financial institution such as commercial banks.
