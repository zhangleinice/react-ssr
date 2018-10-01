import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

// hydrate instead of render
hydrate(<App/>, document.getElementById('root'));
