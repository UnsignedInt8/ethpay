import React from 'react';
import Example, { PayButton } from '../lib';
import { SecondExample } from '../lib';

const App = () => (
  <div className='app'>
    <Example />
    <SecondExample />
    <PayButton />
    <PayButton caption='Buy with' />
  </div>
);

export default App;
