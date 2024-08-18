# Payouts
Learn how to make payments with BaseOne



BaseOne Payouts allows you to send out funds instantly to one or multiple recipients. Payouts can be used for e-commerce refunds, salary payments, and loan disbursements. 

You can pay out funds to one or multiple accounts in Ghana, Kenya, or Nigeria, and the funds get settled almost instantly.

To get started, [sign up](https://app.baseone.co/) for a new account if you don't have one yet. Then, onboard Payouts to your merchant dashboard. We will send your onboarding confirmation via email. Then, you can initiate payouts directly from your dashboard or with the API.

> 🥇 Supported Countries
> 
> Currently, the BaseOne Payouts API can disburse to  
> <span>Nigeria</span> 🇳🇬  
> <span>Ghana </span> 🇬🇭    
> <span>Kenya</span> 🇰🇪


## How to onboard Payouts

Before using the API, you must onboard Payouts on your merchant integration in the dashboard UI. The following steps guide you through the Payouts onboarding process.

1. Login to your  BaseOne dashboard

2. Navigate to **Products** on the left menu of the dashboard

3. Click **Payments** to open the Payments services page.

4. Hover on **Payouts** and click the **Open** button. This leads to the Payouts overview page.

5. On the **Payouts** overview page, click the **Onboard** button and follow the prompts to initiate the onboarding request. We will reach out to you via email within two business days on the approval status of your request.

6. After successfully onboarding Payouts to your merchant integration, you can then make payouts from the Payouts dashboard. 

7. Otherwise, go to **Settings > Developers** on your dashboard to generate your API keys to integrate the [Payouts API](https://developer.baseone.co/reference/single-payout) in your application.

## Payouts API

Check out the [Payouts API Reference](https://developer.baseone.co/reference/single-payout) for the REST endpoints that you can use to interact with the Payouts API.

## Testing Payouts

The sandbox allows you to test the features and APIs. Start testing by creating an account in the **sandbox dashboard** and following the steps outlined in the [how to onboard Payouts](https://developer.baseone.co/docs/payouts#how-to-onboard-payouts)

 The sandbox API keys work with the sandbox environment. 

```text Sandbox dashboard
https://sandbox-app.baseone.co/payouts
```
```text Sandbox API baseURL
https://sandbox.baseone.co/payouts/v1
```

When you're ready to go live or do production transactions, you can carry out live implementations in the production environment. Be sure to generate keys for production implementation in your BaseOne **live dashboard** environment. `**Use live keys only in production live mode.**`

For the API gateway:

```Text Live dashboard
https://app.baseone.co/payouts
```
```text Live API baseURL
https://gateway.baseone.co/payouts/v1
```