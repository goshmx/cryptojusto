# CryptoJusto | React app for crypto monitoring.

This project was bootstrapped with [Create React App], Redux and functional components.

## Currencies urk API's.
- [Cryptocompare](https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD)
- [Coingecko](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple)
- [Storm Gain](https://public-api.stormgain.com/api/v1/ticker)
- [Freecurrencyapi](https://freecurrencyapi.net/api/v2/latest?apikey=dabc0050-99d6-11ec-8760-8fb87a0be7ae)

## Components
- **Header**. Contains header behavior and session info.
- **Panel**. Component for contain information.
- **WelcomeForm**. Form to set user data(firstname, lastname, phone & email).
- **DashboardContainer**. Component for visualize currencies & MXN convertion.
- **CurrencyCard**. Component for visualize currency and data logo of market passed as prop.

## Project structure
```
.
├── App.js
├── App.scss
├── App.test.js
├── assets
│   ├── styles
│   │   └── variables.scss
│   └── svg
│       └── logo.svg
├── components
│   ├── CurrencyCard
│   │   ├── CurrencyCard.jsx
│   │   ├── index.jsx
│   │   └── style.scss
│   ├── DashboardContainer
│   │   ├── DashboardContainer.jsx
│   │   ├── index.jsx
│   │   └── style.scss
│   ├── Header
│   │   ├── Header.jsx
│   │   ├── index.jsx
│   │   └── style.scss
│   ├── Panel
│   │   ├── Panel.jsx
│   │   ├── index.jsx
│   │   └── style.scss
│   └── WelcomeForm
│       ├── InputShowErrors.jsx
│       ├── WelcomeForm.jsx
│       ├── index.jsx
│       └── style.scss
├── index.js
├── pages
│   ├── Dashboard.jsx
│   └── Welcome.jsx
├── redux
│   ├── actions
│   │   ├── currencyActions.js
│   │   ├── mxnActions.js
│   │   └── userActions.js
│   ├── constants
│   │   └── action-types.js
│   ├── reducers
│   │   ├── currencyReducer.js
│   │   ├── index.js
│   │   ├── mxnReducer.js
│   │   └── userReducer.js
│   └── store.js
├── reportWebVitals.js
├── setupTests.js
└── utils
    ├── config
    │   └── market-urls.js
    ├── request
    │   ├── requestMXN.js
    │   └── requestMarkets.js
    └── schema
        └── welcomeSchema.js
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
