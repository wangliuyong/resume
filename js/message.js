!function () {
    var model = {
        //初始化数据库
        initAV: function() {
            //初始化leancloud
            var APP_ID = "uIYIoLNwz3v4F1P0wIMobPvU-gzGzoHsz";
            var APP_KEY = "Kcm7BYxMpwGKtWHXBJW2ymVs";
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        //获取数据
        fetch: function () {
            //从云获取历史留言
            var query = new AV.Query("message");
            //注意这里，要用箭头函数。this内外指向一至。要不然里面就不饿能够用this，this指向花发生变化。
            return query.find();
        },
        //存储数据
        save: function (name,content) {
            //创建message表
            var xxx = AV.Object.extend("message");
            //在message表中创建一行数据
            var testObject = new xxx();
            //数据的内容是 'content': content 保存
            //如果保存成功执行consol
            return testObject.save({ name: name, content: content })
        }
    }

    var view = document.querySelector('section#LeaveMessage')


    var controller = {
        view: null, messageBoard: null, myForm: null,model:null,
        init: function () {
            this.view = view;
            this.messageBoard = document.querySelector("#historyMessage");
            this.myForm = this.view.querySelector("#messageForm");
            this.model=model;
            this.model.initAV();
            this.loadMessage();
            this.bindEvent();
        },

        loadMessage: function () {

            model.fetch().then((messages) => {
                let arr = messages.map(items => {
                    return items.attributes;
                });
                arr.forEach(items => {
                    let name = items.name;
                    let content = items.content;
                    let li = document.createElement("li");
                    li.innerText = `${name}:${content}`;
                    var theFirstChild = controller.messageBoard.firstChild;
                    controller.messageBoard.insertBefore(li,theFirstChild);
                });
                return AV.Object.saveAll(messages);
            }).then(function (messages) {
                    // 更新成功
                    console.log(messages);
                }, function (error) {
                    // 异常处理
                    alert(error);
                });
        },
        bindEvent: function () {
            
            this.myForm.addEventListener("submit", (event) => {
                event.preventDefault();
                //存储留言到云
                this.saveMessage();
            });
        },
        saveMessage: function () {
            let myForm = controller.myForm;
            var content = myForm.querySelector('input[name="content"]').value;
            var name = myForm.querySelector('input[name="name"]').value;
            if(content===''){
                alert('请输入内容')
            } else {
                let li = document.createElement("li");
                li.innerText = `${name}:${content}`;
                var theFirstChild = controller.messageBoard.firstChild;
                controller.messageBoard.insertBefore(li,theFirstChild);
                this.model.save(name, content).then(
                    ()=> {
                        this.myForm.querySelector('input[name="content"]').value='';
                        this.myForm.querySelector('input[name="name"]').value='';
                    },
                    () => { 
                        console.log('留言失败')
                    }
                );
            }
            

        }
    };
    controller.init();
}.call()






