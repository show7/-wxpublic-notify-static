import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PublicHome from './PublicHome/PublicHome'
import PublicHomeBak from './PublicHome/PublicHomeBak'
import ArticleCenter from './ArticleCenter/ArticleCenter'

const router = (
  <BrowserRouter>
    <div>
      <Route path="/wx_public"
             exact={true}
             component={PublicHome}/>
      <Route path="/wx_public/bak"
             component={PublicHomeBak}/>
      <Route path="/wx_public/articles"
             component={ArticleCenter}/>
    </div>
  </BrowserRouter>
)

export default router