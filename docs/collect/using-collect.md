# Using Collect
Learn how to integrate Collect into your application


# **Background Information**

- **[Development Environments](https://developer.baseone.co/docs/using-collect#development-environments): **This section specifies the environments available for BaseOne services. Sandbox is a testing environment, and Live is a production environment.
- **[API Keys](https://developer.baseone.co/docs/using-collect#api-keys):** This section discusses using the private API key for authorizing Collect API requests and the public API key for the widget.

## Development Environments

The sandbox allows you to test the features and APIs. You can carry out live implementations in the production environment. The sandbox API keys work with the sandbox environment. Use live keys only in production live mode. 

**For the dashboard UI:**

```text Sandbox UI
https://sandbox-app.baseone.co/collect
```
```text Live UI
https://baseone.co/collect
```

**For the APIs:**

```text Sandbox API
https://sandbox.baseone.co/collect
```
```text Live API
https://gateway.baseone.co/collect
```

## API Keys

### **Private Key Authorization (API):**

When using the API, you must first generate the **_private API key_** from the **Developers** tab in the **Settings** page of your BaseOne dashboard. You can then run requests through the Collect [Payment](https://developer.baseone.co/reference/collect-charge) endpoints with the **_private API key_**.

### Public Key Authorization (Widget):

The widget will be authorized with the **_public API key_**, unlike the API endpoints that use the private key. You can get the **_public key_** from the **Developers** tab in the **Settings** page of your BaseOne dashboard. You will then include it in the `baseoneCollect` method of the widget code in your source. Check out our guide on [using the Collect widget](https://developer.baseone.co/docs/using-collect#interacting-the-widget) for more information.

# **Integrating Collect**

This section explains integrating the Collect API and widget in your application.

## Using the API

The [API Reference](https://developer.baseone.co/reference/collect-charge) lists REST endpoints that you can use to interact with the Collect API.

- **[Charge](https://developer.baseone.co/reference/collect-charge):** Initiate a payment transaction from your customer via **_bank transfer_**, _**card collection**_, and _**mobile money**_. A one-time PIN (OTP) is generated if you are using the _card _ or _mobile money_ option.

- **[Validate](https://developer.baseone.co/reference/collect-validate): **Authorize the initiated transaction with the OTP code gotten from the Charge endpoint used to authorize the transaction. You only need this endpoint when doing _card _ or _ mobile money_ collections.

- **[Status](https://developer.baseone.co/reference/collect-status): **Confirm the status of the transaction.

## Interacting the Widget

1. You start by loading the widget into your application. You will do this by adding BaseOne inline JavaScript in your HTML.
2. Then, you can initialize the Collect widget in your application. You can achieve this by adding the following JavaScript code snippet to your source.

```javascript JavaScript
baseoneCollect(
    { 
        callbackUrl: "YOUR_CALLBACK_URL", 
        publicKey: "YOUR_BASEONE_PUBLIC_KEY", // Get your public key from your BaseOne dashboard
        imageUrl: "YOUR_LOGO_URL", 
        onSuccess: {}, // Define what you want the widget to do upon successful payment
        onFailure: {}, // Define what you want the widget to do when payment fails
        "customerInformation": { 
            "firstName": "CUSTOMER_FIRST_NAME", 
            "lastName": "CUSTOMER_LAST_NAME", 
            "email": "CUSTOMER_EMAIL",
            "phoneNumber": "CUSTOMER_PHONE_NUMBER", 
            "address": { 
                "city": "Ikeja", 
                "postCode": "10232", 
                "state": "Lagos", 
                "country": "Nigeria" 
            },
        }, 
        "transactionMeta": {}, // You can pass your own transaction related information here. 
        "channel": "transfer", // Could be transfer, mobile money or card
        "currency": "NGN", // The currency you want to trasnact in
        "env": "staging", // Environment is determines publickey, use STAGING for sandbox  or PROD for live transactions.
        "country": "NGA", // 3-letter country code
        "amount": 26, // Amount of money you want to Collect from the customer
        "clientReference": "UNIQUE_VALUE", // Supply a unique identifier for each transaction. This is mandatory field
    }

```

3. When your application runs and the widget is triggered, the **payment methods dialog** opens on your application for the customer. **The payment method options displayed are determined by the `country` specified in the widget code for initializing (2.) above.** The dialog allows the customer to select their preferred payment method, as shown in the following image:

[block:image]

[/block]


4. Customers can input their card details When they select the **Card Payment **option. If they choose ** Bank Transfer**, they will get the details of a bank account to which they can pay.

[block:image]
{

}
[/block]


[block:image]
{
  
}
[/block]


5. Customers who use Card Payment or Mobile Money will receive an OTP code, which they must supply, as shown in the following screenshot.

[block:image]
{
  
}
[/block]


6. If the Collect transaction is successful, the customer gets a confirmation as shown. Otherwise, if it fails, they get an error message.

[block:image]
{
  
}
[/block]


[block:image]
{
  
}
[/block]