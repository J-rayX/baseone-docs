Webhooks in VA

When you use our Virtual Accounts API, you will receive notifications when **external credit transactions** happen in your virtual accounts. However, take note of the following bits of information.

- You need to register your webhook URL on your BaseOne dashboard. Follow the official guide on [how to register your webhook URL](https://developer.baseone.co/docs/webhooks#how-to-register-your-webhook-url-on-the-baseone-dashboard)

- The event payload that you get will contain the event object which has the full details of the transaction that you're being notified of. The event object will look like the following: 

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