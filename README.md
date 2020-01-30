ETHPay
==========
A Button to the Web3, [Demo](https://ethpay.now.sh/demo1)

## Quick Start

For React developers, just install it from NPM:

```bash
npm i ethpay
```

## React Usage

```javascript
import ETHPay from 'ethpay';
import 'ethpay/build/index.css';

const App = () => (
  <div>
      <ETHPay to='0x123456...' value={0.1} currency='eth' />
  </div>
);
```

| Props | Desc | Type | Required |
|---|---|---|---|
| currency | Which currency do you want to the user pays | String: 'eth' | Yes |
| to | Address | String | Yes |
| value | The amount of currency | Number | Yes |
| caption | Button caption | String | No |
| title | HTML Title | String | No |
| mode | Dark mode or light mode | `'dark'/'light'` | No |
| style | CSS Style | CSSProperties | No |
| data | The data append to Tx | String, starts with '0x' | No |
| showValue | Show value on button | boolean | No |
| onTxSent | Called when Tx sent or user rejects | `(hash: string) => void` | No |

[More examples](./src/demo/App.js)

## Typescript

Typescript is supported.

## LISENCE

MPL-2.0