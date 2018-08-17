
//options为数据表名

window.Model=function(Options){
    let messageName=Options;
    return {
        //初始化数据库
        init: function() {
            //初始化leancloud
            var APP_ID = "uIYIoLNwz3v4F1P0wIMobPvU-gzGzoHsz";
            var APP_KEY = "Kcm7BYxMpwGKtWHXBJW2ymVs";
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        //获取数据
        fetch: function () {
            //从云获取历史留言
            var query = new AV.Query(messageName);
            //注意这里，要用箭头函数。this内外指向一至。要不然里面就不饿能够用this，this指向花发生变化。
            return query.find();
        },
        //存储数据
        save: function (name,content) {
            //创建message表
            var xxx = AV.Object.extend(messageName);
            //在message表中创建一行数据
            var testObject = new xxx();
            //数据的内容是 'content': content 保存
            //如果保存成功执行consol
            return testObject.save({ name: name, content: content })
        }
    }

}