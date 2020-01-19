import React from 'react';
import Example, { PayButton } from '../lib';
import { SecondExample } from '../lib';

const App = () => (
  <div className='app'>
    <PayButton />
    <PayButton caption='Buy with' />
    <PayButton caption='打赏' htmlTitle='使用以太坊打赏' />
    <PayButton caption='Book with'/>

    <div style={{ display: 'flex', width: 200 }}>
      <PayButton cssStyle={{ width: '100%', }} caption='立即购买' />
    </div>

    <PayButton currency='dai' />
    <PayButton cssStyle={{ width: 170, }} caption='Buy with' currency='dai' />

    <PayButton currency='usdt' />
    <PayButton currency='usdt' caption='打赏' />
    <PayButton currency='usdc' />
    <PayButton currency='usdc' caption='Buy with' mode='light' />
    <PayButton currency='tusd' />
    <PayButton currency='husd' caption='立即支付' />
    <PayButton currency='pax' caption='Subscribe with' />
    <PayButton currency='usdk' caption='Checkout with' />
    <PayButton currency='busd' />
    <PayButton currency='gusd' />
    <PayButton currency='usdx' />
    <PayButton currency='sai' />
    <PayButton currency='btc' caption='Buy with' />
    <PayButton currency='bch' />
    <PayButton currency='bsv' />
    <PayButton currency='eos' />
    <PayButton currency='tron' />
    <PayButton currency='zec' caption='购买' />
    <PayButton currency='xmr' />
    <PayButton currency='ltc' />
  </div>
);

export default App;
