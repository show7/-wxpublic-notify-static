import * as React from 'react'
import { observer, inject } from 'mobx-react'
import ScrollContainer from '../../components/ScrollContainer/ScrollContainer'
import articleCenterModel from './ArticleCenterModel'

import './ArticleCenter.less'

class ArticleSingle extends React.Component {

  render () {
    const {
      onClick = () => {
      },
      article = {}
    } = this.props

    const {
      recordId,
      title,
      avatar,
      url,
      nickname,
      pushDate,
      status,
      isRead
    } = article

    return (
      <div className="article-single-component"
           onClick={() => onClick()}>
        <div className="article-top">{title}</div>
        <div className="article-middle">
          <img className="public-avatar"
               src={avatar}/>
          <div className="public-name">{nickname}</div>
        </div>
        <div className="article-bottom">
          <div className="push-date">{pushDate}</div>
          <div className={`status-tag ${isRead ? 'disable' : 'active'}`}>{status}</div>
        </div>
      </div>
    )
  }

}

@inject('articleCenterModel')
@observer
export default class ArticleCenter extends React.Component {

  componentDidMount () {
    const { articleCenterModel } = this.props
    articleCenterModel.loadInitData()
  }

  render () {
    const { articleCenterModel } = this.props

    return (
      <div className="article-center-container">
        <ScrollContainer className="article-center-scroll-block"
                         enableReachBottom={true}
                         onReachBottom={() => articleCenterModel.loadMoreAlreadyReadArticles()}>
          <div className="category-title">———— 未读文章 ————</div>
          <div className="un-read-articles-box">
            {
              articleCenterModel.unReadArticles.map((article, index) => (
                <ArticleSingle key={article.recordId}
                               article={article}
                               onClick={() => articleCenterModel.clickArticle(article)}/>
              ))
            }
          </div>
          <div className="category-title">———— 已读文章 ————</div>
          <div className="already-read-articles-box">
            {
              articleCenterModel.alreadyReadArticles.map((article, index) => (
                <ArticleSingle key={article.recordId}
                               article={article}
                               onClick={() => articleCenterModel.clickArticle(article)}/>
              ))
            }
            <div className="scroll-reach-bottom-tips">
              {articleCenterModel.isAlreadyReadArticlesLoadEnded ? '我也是有底线的' : '上拉加载更多'}
            </div>
          </div>
        </ScrollContainer>
      </div>
    )
  }

}