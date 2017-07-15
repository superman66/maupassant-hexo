(function () {
    var SITE_VIEWS_TITLE = 'SITE_TITLE';
    var HOST = 'chenhuichao.com';
    var leancloudService = {
        url: window.location.href,
        title: $('.post-title').text().trim(),
        Counter: null,
        init: function () {
            AV.init('DicCxG3axqqCc9PCCxf8WAyv-gzGzoHsz', 'yfU0qujWrNIU2tnf3ooNfmgX');
            this.Counter = AV.Object.extend('Counter');
            if (this.isDetail()) {
                this.addDetailCount(this.Counter, this.detailCountSaveCallback);
            } else {
                this.addExceptDedtailCount(this.Counter, this.siteCountSaveCallback);
            }
        },
        /**
         * 获取文章详情访问数
         */
        getDetailCount: function (Counter) {
            var query = new AV.Query(Counter);
            query.equalTo("url", this.url);
            return query.find();
        },

        /**
         * 获取 site 访问数
         */
        getSiteCount: function (Counter) {
            var query = new AV.Query(Counter);
            query.equalTo("title", SITE_VIEWS_TITLE);
            return query.find();
        },

        /**
         * 增加文章详情页面访问数
         */
        addDetailCount: function (Counter, cb) {
            // site views increment
            this.addExceptDedtailCount(Counter, this.siteCountSaveCallback);

            this.getDetailCount(Counter)
                .then(function (results) {
                    if (results.length > 0) {
                        var counter = results[0];
                        counter.increment("time");
                        counter.save({
                            fetchWhenSave: true,
                        }).then(cb);
                    }
                    else {
                        var newCounter = new Counter();
                        newCounter.set('title', title);
                        newCounter.set('url', url);
                        newCounter.set('time', 1);
                        newCounter.save().then(cb, function (error) {
                            console.error(error);
                        })
                    }
                })
        },
        /**
        * 统计非详情页的访问，主要是首页、列表页，归档页，关于，category，tag页面
        */
        addExceptDedtailCount: function (Counter, cb) {
            this.getSiteCount(Counter)
                .then(function (results) {
                    if (results.length > 0) {
                        var counter = results[0];
                        counter.increment("time");
                        counter.save({
                            fetchWhenSave: true,
                        }).then(cb);
                    }
                    else {
                        var newCounter = new Counter();
                        newCounter.set('title', SITE_VIEWS_TITLE);
                        newCounter.set('url', HOST);
                        newCounter.set('time', 1);
                        newCounter.save().then(cb, function (error) {
                            console.error(error);
                        })
                    }
                })
        },
        /**
         * 判断是否是文章详情页面
         */
        isDetail: function () {
            var $title = $('.post-title');
            return $title.length == 1 && $title.text();
        },

        /**
         * 详情页保存成功回调
         */
        detailCountSaveCallback: function (counter) {
            $('#leancloud_value_page_pv').text(counter.attributes.time);
        },

        siteCountSaveCallback: function (counter) {
            $('#site-view').text(counter.attributes.time);
        }
    };

    leancloudService.init();
})()