import * as React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import DemoPage from './DemoPage/DemoPage'
import MobxDemo from './MobxDemo/MobxDemo'

export default (
  <MemoryRouter>
    <Switch>
      <Route exact
             path="/"
             component={MobxDemo}/>
    </Switch>
  </MemoryRouter>
)