import React from 'react';
import PayButton from '../lib';

const App = () => (
  <div className='app'>
    <PayButton to='0xb20287507e81c67ed9ce672df35655776fede3bb' currency='eth' value='0.1' />
    <PayButton to='0xb20287507e81c67ed9ce672df35655776fede3bb' value={0.2} caption='Buy with' currency='eth' />
    <PayButton to='0xb20287507e81c67ed9ce672df35655776fede3bb' value='1' caption='打赏' title='使用以太坊打赏' />
    <PayButton to='0xb20287507e81c67ed9ce672df35655776fede3bb' value={-1} caption='Book with' />

    <div style={{ display: 'flex', width: 200 }}>
      <PayButton style={{ width: '100%', }} caption='立即购买' />
    </div>

    <PayButton currency='dai' to='0x4ED9232873D1a0cac85d92497a5e9FA312Cfe30d' value={10} />
    <PayButton style={{ width: 180, }} caption='Buy with' currency='dai' />

    <PayButton currency='usdt' />
    <PayButton currency='usdt' caption='打赏' />
    <PayButton currency='usdc' to='0x4ED9232873D1a0cac85d92497a5e9FA312Cfe30d' value={5} />
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
