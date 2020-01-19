import React from 'react';
import './Example.css';
const udiliaLogo = require('./udilia-logo.svg');

const Example = () => (
  <div className="Example">
    <img src={udiliaLogo} alt="React logo" width="64" />
    <h1 className="Example-text">Create React Libraryery</h1>
  </div>
);

export default Example;
