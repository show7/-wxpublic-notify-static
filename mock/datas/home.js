let express = require('express')
let router = express.Router()

// 全部订阅号
router.get('/api/webwechat/all/list', (req, res) => {
  req.params = {
    page: 1
  }
  res.status(200).json({
    code: 200,
    msg: {
      isEnd: false,
      content: [
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: false
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: false
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: false
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: false
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: false
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
      ]
    }
  })
})
// 订阅过的订阅号
router.get('/api/webwechat/subscribe/list', (req, res) => {
  req.params = {
    page: 1
  }
  res.status(200).json({
    code: 200,
    msg: {
      isEnd: false,
      content: [
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        },
        {
          weChatPublicId: 2,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true
        }
      ]
    }
  })
})
router.get('/api/webwechat/search', (req, res) => {
  req.params = {
    weChatName: ''
  }
  res.status(200).json({
    code: 200,
    msg: {
      // 已经收录的列表
      ownerList: [
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: false,
          isSearchResult: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true,
          isSearchResult: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true,
          isSearchResult: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true,
          isSearchResult: true
        },
        {
          weChatPublicId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSubscribe: true,
          isSearchResult: true
        },
      ],
      // 网络搜索结果
      searchList: [
        {
          searchId: 1,
          avatar: 'https://thirdwx.qlogo.cn/mmopen/siaKjia9aBPcJHOCEV6z4Ayic3SEaztBgIHFjfNZCFnvibW7bURBmYJIwfoRgN2guicWOGEPX1S05NqJyTwA1EzoIJgWEdJg3nXlZ/132',
          weChatName: '公众号名字',
          isSearchResult: true
        }
      ]
    }
  })
})
router.get('', (req, res) => {
  req.params = {}
  res.status(200).json({
    code: 200,
    msg: 'success'
  })
})
router.get('', (req, res) => {
  req.params = {}
  res.status(200).json({
    code: 200,
    msg: 'success'
  })
})

// 订阅
router.post('/api/webwechat/subscribe', (req, res) => {
  req.params = {
    weChatPublicId: 1
  }
  res.status(200).json({
    code: 200,
    msg: 'success'
  })
})
// 取消订阅
router.post('/api/webwechat/unsubscribe', (req, res) => {
  req.params = {
    weChatPublicId: 1
  }
  res.status(200).json({
    code: 200,
    msg: 'success'
  })
})
router.post('/api/webwechat/recommend', (req, res) => {
  req.params = {
    searchId: 1, // 网络搜索结果
    weChatName: '', // 指定名字推荐
  }
  res.status(200).json({
    code: 200,
    msg: 'success'
  })
})
router.post('', (req, res) => {
  req.params = {}
  res.status(200).json({
    code: 200,
    msg: 'success'
  })
})

module.exports = router