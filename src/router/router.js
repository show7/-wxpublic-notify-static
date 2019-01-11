import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PublicHome from './PublicHome/PublicHome'

const router = (
  <BrowserRouter>
    <div>
      <Route path="/wx_public"
             component={PublicHome}>
      </Route>
    </div>
  </BrowserRouter>
)

export default router