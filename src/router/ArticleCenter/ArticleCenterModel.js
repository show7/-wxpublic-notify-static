import { observable, action } from 'mobx'
import Api from '../../api/Api'

class ArticleCenterModel {

  ARTICLE_STATUS_TYPE = {
    UN_READ: 2, // 未读
    ALREADY_READ: 1,  // 已读
  }

  @observable unReadArticles = [] // 未读文章列表
  @observable alreadyReadArticles = [] // 已读文章列表

  @observable isAlreadyReadArticlesLoadEnded = false
  @observable currentAlreadyReadArticlesPage = 1

  @action.bound
  async loadInitData () {
    let unReadRes = await Api.loadArticleList(this.ARTICLE_STATUS_TYPE.UN_READ)
    this.unReadArticles = unReadRes.msg.content
    let alreadyReadArticlesRes = await Api.loadArticleList(this.ARTICLE_STATUS_TYPE.ALREADY_READ)
    this.alreadyReadArticles = alreadyReadArticlesRes.msg.content
    this.isAlreadyReadArticlesLoadEnded = alreadyReadArticlesRes.msg.isEnd
  }

  @action.bound
  async loadMoreAlreadyReadArticles () {
    if (!this.isAlreadyReadArticlesLoadEnded) {
      let alreadyReadArticlesRes = await Api.loadArticleList(this.ARTICLE_STATUS_TYPE.ALREADY_READ, ++this.currentAlreadyReadArticlesPage)
      this.alreadyReadArticles = this.alreadyReadArticles.concat(alreadyReadArticlesRes.msg.content)
      this.isAlreadyReadArticlesLoadEnded = alreadyReadArticlesRes.msg.isEnd
    }
  }

  @action.bound
  async clickArticle (article) {
    await Api.openArticle({ recordId: article.recordId })
    window.location.href = article.url
  }

}

let articleCenterModel = new ArticleCenterModel()
export default articleCenterModel