import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance',
          amount: 1500,
          type: 'deposit',
          category: 'Desenvolvimento web',
          createdAt: new Date('2021-01-15 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 800,
          type: 'withdraw',
          category: 'casa',
          createdAt: new Date('2021-02-05 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
