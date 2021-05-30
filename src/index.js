import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
ReactDOM.render(<React.Suspense fallback={(<div>Loading Translations~~~~~~~</div>)}> <App /></React.Suspense>, document.getElementById("root"));