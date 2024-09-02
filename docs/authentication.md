---
sidebar_position: 3
---

# 🔐 Authentication

The BaseOne API uses API keys to authenticate requests. You can view and manage your API keys in the BaseOne dashboard.

:::caution ⚠️ API Keys Support Update
Existing customers can continue using **public API keys** for authenticating API requests until January 2023. After January 2023, only **secret API keys** will be supported for API requests.
:::

## 🌍 API Key Environments

| Environment   | Purpose  | URL                                                                |
| ------------- | -------- | ------------------------------------------------------------------ |
| 🧪 Sandbox    | Testing  | [https://sandbox-app.baseone.co/](https://sandbox-app.baseone.co/) |
| 🚀 Production | Live use | [https://app.baseone.co/](https://app.baseone.co/)                 |

:::important 📌
Use your live keys only in production mode.
:::

## 🛠 Managing API Keys

### 📥 Fetching or Creating API Keys

1. **[Sign Up](https://app.baseone.co/signup) 🔑:** Create a BaseOne account if you don’t have one, or **[Sign In](https://app.baseone.co/signin) 🔓** if you do.
2. Go to the **Settings** menu on the left-side navigation bar.
3. Navigate to the **Developers** tab.
4. **Copy** the private key for authenticating your API requests.
5. Use the **Generate Keys** button to create new key pairs if needed.

### 🛠 Using Your API Keys

1. Copy the secret key of your API key pair.
2. Include it as `api-key` in the request headers when making API requests to BaseOne APIs.

**Example using Postman:**

![Postman API Key Header](/img/api_auth-api-postman.png)

:::tip 💡
[Postman](https://www.postman.com/) is a popular tool for creating, testing, and sharing APIs.
:::

## 🔒 API Key Security

:::danger 🚨
Keep your API keys secure! They are sensitive and contain crucial privileges.
:::

- **Do not** share them publicly.
- **Never** expose them on platforms like GitHub or in client-side application code.
- **Set** your API keys as part of your environment variables or use a secret manager.
- **Generate** new key pairs if you suspect a security breach.
