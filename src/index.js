import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './components/app'
import './style.css'


const render = (App) => (
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('react-root')
  )
)

render(App)

if (module.hot) {
  module.hot.accept('./components/app', () => {
    render(App)
}) }