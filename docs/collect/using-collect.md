# 📚 Using Collect

Learn how to integrate Collect into your application.

## 🏛️ Background Information

- **[Development Environments](https://developer.baseone.co/docs/using-collect#development-environments):** Explore the available environments for BaseOne services. Sandbox is for testing, while Live is for production.
- **[API Keys](https://developer.baseone.co/docs/using-collect#api-keys):** Learn about using the private API key for Collect API requests and the public API key for the widget.

## 🌍 Development Environments

- **Sandbox Environment:** Use the sandbox to test features and APIs. 🧪
- **Live Environment:** Implement in production with live keys only. 🚀

**Dashboard UI:**

```text
🌐 Sandbox UI: https://sandbox-app.baseone.co/collect
🏢 Live UI: https://baseone.co/collect

```

**For the APIs:**

```text
🔬 Sandbox API: https://sandbox.baseone.co/collect
🏛️ Live API: https://gateway.baseone.co/collect

```

## 🔑 API Keys

### **🔐 Private Key Authorization (API)**

To use the API, first generate the **_private API key_** from the **Developers** tab in the **Settings** page of your BaseOne dashboard. Use this key to authorize requests through the Collect [Payment](https://developer.baseone.co/reference/collect-charge) endpoints.

### **🔓 Public Key Authorization (Widget)**

The widget uses the **_public API key_**. Obtain this key from the **Developers** tab in the **Settings** page of your BaseOne dashboard. Include it in the `baseoneCollect` method of your widget code. For more details, see our guide on [using the Collect widget](https://developer.baseone.co/docs/using-collect#interacting-the-widget).

## 🔧 Integrating Collect

This section explains how to integrate the Collect API and widget into your application.

### 📡 Using the API

The [API Reference](https://developer.baseone.co/reference/collect-charge) lists REST endpoints for interacting with the Collect API:

- **[Charge](https://developer.baseone.co/reference/collect-charge):** Initiate a payment transaction via **_bank transfer_**, **_card collection_**, or **_mobile money_**. An OTP is generated for card or mobile money options.

- **[Validate](https://developer.baseone.co/reference/collect-validate):** Authorize the initiated transaction with the OTP code from the Charge endpoint. Needed only for card or mobile money collections.

- **[Status](https://developer.baseone.co/reference/collect-status):** Confirm the status of the transaction.

### 🧩 Interacting with the Widget

1. **Load the Widget:** Add BaseOne inline JavaScript to your HTML to load the widget.

2. **Initialize the Widget:** Add the following JavaScript code snippet to your source.

```javascript
baseoneCollect(
    {
        callbackUrl: "YOUR_CALLBACK_URL",
        publicKey: "YOUR_BASEONE_PUBLIC_KEY", // Get your public key from your BaseOne dashboard
        imageUrl: "YOUR_LOGO_URL",
        onSuccess: {}, // Define actions for successful payment
        onFailure: {}, // Define actions for failed payment
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
        "transactionMeta": {}, // Optional transaction-related information
        "channel": "transfer", // Could be transfer, mobile money, or card
        "currency": "NGN", // Currency for the transaction
        "env": "staging", // Use STAGING for sandbox or PROD for live transactions
        "country": "NGA", // 3-letter country code
        "amount": 26, // Amount to collect
        "clientReference": "UNIQUE_VALUE", // Unique identifier for each transaction
    }


```

3. **Open Payment Methods Dialog:** When your application runs and the widget is triggered, the **payment methods dialog** opens for the customer. The options displayed depend on the `country` specified in the widget code. This dialog lets the customer choose their preferred payment method.

<!-- ![Payment Methods Dialog](/img/api_auth-api-postman.png) -->

4. **Select Payment Method:** You can select any of the following the payment method from the payment methods dialog.

   - **Card Payment:** Customers can enter their card details.
   - **Bank Transfer:** Customers will receive bank account details to complete the payment.

<!-- ![Card Payment](/img/api_auth-api-postman.png) -->
<!-- ![Bank Transfer](/img/api_auth-api-postman.png) -->

5. **OTP Code Verification:** For **Card Payment** or **Mobile Money**, customers will receive an OTP code to complete the transaction. They need to enter this code as shown below.

<!-- ![OTP Code](/img/api_auth-api-postman.png) -->

6. **Transaction Outcomes:** the transaction can either be successful or failed.

   - **Success:** If the transaction is successful, the customer receives a confirmation.
   - **Failure:** If the transaction fails, the customer receives an error message.

<!-- ![Success Confirmation](/img/api_auth-api-postman.png) -->
<!-- ![Error Message](/img/api_auth-api-postman.png) -->
