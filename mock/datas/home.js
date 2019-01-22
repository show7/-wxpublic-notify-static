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
// 消息列表  type: 1-已读，2-未读
router.get('/api/webwechat/article/list', (req, res) => {
  const {
    type = 1, // 1-已读，2-未读
    page = 1 // type = 1 时 page 参数必传，type = 2 时 page 参数可不传
  } = req.param

  res.status(200).json({
    'msg': {
      'isEnd': true,
      'content': [
        {
          'recordId': 4,
          'title': '她为什么要裸辞百万年薪的工作？答案太颠覆了',
          'avatar': 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM5y7dYeYjRQVyHDvCo7A0hM3GESRO5tTug4KSicBib0OQuw/0',
          'url': 'https://mp.weixin.qq.com/s?__biz=MzAxODk3MTM4MA==&mid=2247486136&idx=1&sn=bd5934321ae0f1262a45a685f5dc2274&chksm=9bcf6523acb8ec355209ccc25878663b3a734c91eede4bb7f3c7ec52c63804745e8a843d1007&scene=0#rd',
          'nickname': '临公子的后花园',
          'pushDate': '2019-01-04',
          'status': '未读',
          'isRead': false
        },
        {
          'recordId': 3,
          'title': '9点1氪：路透：苹果用高价把自己送出了中国市场；智联招聘：全国平均32人竞争一个岗位；罗振宇疑回应演讲风波',
          'avatar': 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM6bia44ArPNMqFIeUFznyuic1EJI0PVZfLL9NZ6PJZH4NaQ/0',
          'url': 'https://mp.weixin.qq.com/s?__biz=MzI2NDk5NzA0Mw==&mid=2247530204&idx=1&sn=8eca2ad9c39190d7e297121110ae0748&chksm=eaa62700ddd1ae1605f601618d84e361953035a31bb8ea9bb468d06f823ad4034c88fe6e27ba&scene=0&xtrack=1#rd',
          'nickname': '36氪',
          'pushDate': '2019-01-04',
          'status': '未读',
          'isRead': false
        },
        {
          'recordId': 2,
          'title': '硅谷是个什么谷｜第二十九章 俗人俗事',
          'avatar': 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7I5OrwfqvgqdcarXuBuWbHUicpGtv9ZoazOmxcjySBz6Q/0',
          'url': 'https://mp.weixin.qq.com/s?__biz=MzA3NDMyOTcxMQ==&mid=2651248669&idx=1&sn=9743da65806705e8aec45facb274f4a4&chksm=84f3031db3848a0bf938056510a6636400c37a623c1e01c71aa575ef20c79838c7029a92b430&scene=0#rd',
          'nickname': '奴隶社会',
          'pushDate': '2019-01-04',
          'status': '已读',
          'isRead': true
        },
        {
          'recordId': 1,
          'title': '《跑跑卡丁车官方竞速版》1月4日预约开启 端游经典焕新出发',
          'avatar': 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM6L8myjjXPiamo2F1UybxtgEXsdrz5yn8OzUchTkQVfF3Q/0',
          'url': 'https://mp.weixin.qq.com/s?__biz=MjcwNjgyMjY0MA==&mid=2653250967&idx=1&sn=800765e4401775a7aa93c54c23505e9c&chksm=92b8e708a5cf6e1e949664dde3524fd4fee7a0f946bdc4bf64228a3a081192155e3acaf23df6&scene=0&xtrack=1#rd',
          'nickname': '腾讯游戏',
          'pushDate': '2019-01-04',
          'status': '已读',
          'isRead': true
        }
      ]
    },
    'code': 200
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
// 打开文章，返回结果后再跳转
router.post('/api/webwechat/article/open', (req, res) => {
  const {
    recordId = 4
  } = req.body

  res.status(200).json({
    'msg': 'ok',
    'code': 200
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





