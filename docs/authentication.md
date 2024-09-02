---
sidebar_position: 3
---

# Authentication

The BaseOne API uses API keys to authenticate requests. You can view and manage your API keys in the BaseOne dashboard.

> ⚠️ _API Keys Support Update_
>
> _Existing customers can maintain the use of **public API keys** for authenticating API requests till January 2023. After January 2023, we will only support **secret API keys** for API requests._

## A. Keys in Sandbox and Production Environments

- You can create test API keys in the [sandbox](https://sandbox-app.baseone.co/) for testing purposes
- Use your live keys only in [production](https://app.baseone.co/) mode.

## B. How to fetch or create API keys

To follow these steps, you must first [sign up](https://app.baseone.co/signup) for a BaseOne account if you don't have one. But you can [sign in](https://app.baseone.co/signin) if you have an account already.

1. Go to the **Settings** menu on the left-side navigation menu bar.
2. Navigate to the **Developers** tab.
3. Copy and use the private key for authenticating your API requests.
4. There is a **Generate Keys** button under the key pair; use the button to create new key pairs.

## C. How to use your API keys

See these steps to understand how to use your API keys.

1. Firstly, copy the secret key of your API key pair.
2. Then, supply it as **_`api-key`_** in the request headers when making API requests to BaseOne APIs

The following screenshot describes how you can input the **_api-key_** in the **Headers** tab of a **Request** in Postman. [Postman](https://www.postman.com/) is a popular tool developers use to create, test, and share APIs.

<br />
<br />

> ❗️ API Key Security
>
> Be sure to keep your API keys secure! They are sensitive and contain several crucial privileges. Please do not share them publicly; never make them available on platforms like GitHub, client-side application code, etc.
>
> You can set your API keys as part of your environment variables or use them in a secret manager.
>
> Generate new key pairs when you suspect or experience a security breach.
