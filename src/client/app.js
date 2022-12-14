// index.js
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from 'src/client/modules/Routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)
