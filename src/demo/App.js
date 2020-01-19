import React from 'react';
import Example, { PayButton } from '../lib';
import { SecondExample } from '../lib';

const App = () => (
  <div className='app'>
    <PayButton />
    <PayButton caption='Buy with' />
    <PayButton caption='打赏' htmlTitle='使用以太坊打赏' />
    <PayButton caption='Book with' mode='black' />

    <div style={{ display: 'flex', width: 200 }}>
      <PayButton cssStyle={{ width: '100%', }} caption='Buy with' />
    </div>

    <PayButton cssStyle={{ width: 170, }} caption='Buy with' mode='black' />
  </div>
);

export default App;
