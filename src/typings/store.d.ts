declare namespace StoreState {
  export interface overview {
    publicList: []
    totalSubscribeCount: number
    totalUnReadCount: number
    unReadArticles: object[]
  }
  export interface typelist {
    id: number
    page: number
    isEnd: boolean
    category: number
  }
}
