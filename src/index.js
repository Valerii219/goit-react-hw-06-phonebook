import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {store} from './store/store'
import { Provider } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <ContactForm />
  </React.StrictMode>
 </Provider>
);
