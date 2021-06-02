import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalProvider} from '../src/Context/globalContext';
import './i18n';
ReactDOM.render(<React.Suspense fallback={(<div>Loading Translations~~~~~~~</div>)}> <GlobalProvider><App /></GlobalProvider></React.Suspense>, document.getElementById("root"));