# 💸 Payouts

**Learn how to make payments with BaseOne**

BaseOne Payouts allows you to send out funds instantly to one or multiple recipients. Payouts can be used for e-commerce refunds, salary payments, and loan disbursements. You can pay out funds to one or multiple accounts in Ghana, Kenya, or Nigeria, and the funds get settled almost instantly.

To get started, [sign up](https://app.baseone.co/) for a new account if you don't have one yet. Then, onboard Payouts to your merchant dashboard. We will send your onboarding confirmation via email. You can then initiate payouts directly from your dashboard or with the API.

## 🌍 Supported Countries

> 🥇 **Currently, the BaseOne Payouts API can disburse to:**
>
> - **Nigeria** 🇳🇬
> - **Ghana** 🇬🇭
> - **Kenya** 🇰🇪

## 📝 How to Onboard Payouts

Before using the API, you must onboard Payouts on your merchant integration in the dashboard UI. Follow these steps to onboard:

1. **Login** to your BaseOne dashboard.
2. Navigate to **Products** on the left menu of the dashboard.
3. Click **Payments** to open the Payments services page.
4. Hover over **Payouts** and click the **Open** button to go to the Payouts overview page.
5. On the **Payouts** overview page, click **Onboard** and follow the prompts to initiate the onboarding request. We will notify you via email within two business days regarding the approval status.
6. Once Payouts is successfully onboarded, you can make payouts from the Payouts dashboard.
7. Alternatively, go to **Settings > Developers** on your dashboard to generate your API keys to integrate the [Payouts API](/api/api-payout) into your application.

## 🔗 Payouts API

Check out the [Payouts API Reference](/api/api-payout) for the REST endpoints that you can use to interact with the Payouts API.

## 🧪 Testing Payouts

The sandbox allows you to test the features and APIs. Start testing by creating an account in the **sandbox dashboard** and following the steps outlined in [how to onboard Payouts](/docs/payouts/#-how-to-onboard-payouts).

- **Sandbox dashboard:**  
  `https://sandbox-app.baseone.co/payouts`

- **Sandbox API baseURL:**  
  `https://sandbox.baseone.co/payouts/v1`

When you're ready to go live or do production transactions, implement them in the production environment. Ensure that you generate keys for production in your BaseOne **live dashboard** environment.

> ⚠️ **Use live keys only in production mode.**

- **Live dashboard:**  
  `https://app.baseone.co/payouts`

- **Live API baseURL:**  
  `https://gateway.baseone.co/payouts/v1`
