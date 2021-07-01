import React from 'react'
import { store } from './redux/store';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';

const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default CalendarApp;
