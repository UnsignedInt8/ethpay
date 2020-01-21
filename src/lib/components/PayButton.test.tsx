import React from 'react';
import ReactDOM from 'react-dom';
import PayButton from './PayButton';

it('Example renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PayButton currency='eth' value={1} to='' />, div);
});
