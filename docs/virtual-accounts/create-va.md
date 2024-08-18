Create and Setup VA

## Onboard on a virtual accounts provider

Before creating and operating your virtual accounts, you need to onboard a provider bank on the BaseOne dashboard UI.

Follow the following **steps to request to onboard a provider** bank for virtual accounts:

1. Log in to your BaseOne dashboard or sign up for a new account for free [here](https://www.baseone.co/).
2. Navigate to **Products > Account Service**. 
3. Hover on **Virtual Accounts** and click **Open**.
4. In the overview page of the Virtual Accounts, click the **Onboard** button to onboard your merchant account to a provider bank.
5. Select your country to see the list of provider banks available.
6. Select your preferred provider bank and click the **Onboard** button.
7. You will get a feedback modal with _"your onboarding has been initiated."_ This implies that you have requested to onboard a provider bank.
8. You will receive an email update on your request within two business days.

### Create a virtual account on the provider bank

After onboarding a provider bank, you can make a `POST` request to the Virtual Accounts APIs to create a virtual account. See the following code snippet for an example.

```curl Create virtual account
curl --request POST \
     --url https://gateway.baseone.co/virtual-accounts/v1/account/create \
     --header 'Accept: application/json' \
     --header 'Api-Key: xxxxxxxxxxxxxxx' \
     --header 'Content-Type: application/json'
```

### API Reference

You can view the [API reference](https://developer.baseone.co/reference/create-virtual-account) for full details of the Virtual Accounts API. You also get code samples for all the endpoints in different languages, such as Node.js, PHP, Python, Ruby, and more.