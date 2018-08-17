!function () {
    var model = Model("message");
    

    var view = window.view('section#LeaveMessage')


    var controller = {
        view: null, messageBoard: null, myForm: null,model:null,
        init: function () {
            this.view = view;
            this.messageBoard = document.querySelector("#historyMessage");
            this.myForm = this.view.querySelector("#messageForm");
            this.model=model;
            this.model.init();
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






