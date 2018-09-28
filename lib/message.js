"use strict";

!function () {
    var model = Model("message");

    var view = window.view('section#LeaveMessage');

    var controller = {
        view: null, messageBoard: null, myForm: null, model: null,
        init: function init() {
            this.view = view;
            this.messageBoard = document.querySelector("#historyMessage");
            this.myForm = this.view.querySelector("#messageForm");
            this.model = model;
            this.model.init();
            this.loadMessage();
            this.bindEvent();
        },

        loadMessage: function loadMessage() {

            model.fetch().then(function (messages) {
                var arr = messages.map(function (items) {
                    return items.attributes;
                });
                arr.forEach(function (items) {
                    var name = items.name;
                    var content = items.content;
                    var li = document.createElement("li");
                    li.innerText = name + ":" + content;
                    var theFirstChild = controller.messageBoard.firstChild;
                    controller.messageBoard.insertBefore(li, theFirstChild);
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
        bindEvent: function bindEvent() {
            var _this = this;

            this.myForm.addEventListener("submit", function (event) {
                event.preventDefault();
                //存储留言到云
                _this.saveMessage();
            });
        },
        saveMessage: function saveMessage() {
            var _this2 = this;

            var myForm = controller.myForm;
            var content = myForm.querySelector('input[name="content"]').value;
            var name = myForm.querySelector('input[name="name"]').value;
            if (content === '') {
                alert('请输入内容');
            } else {
                var li = document.createElement("li");
                li.innerText = name + ":" + content;
                var theFirstChild = controller.messageBoard.firstChild;
                controller.messageBoard.insertBefore(li, theFirstChild);
                this.model.save(name, content).then(function () {
                    _this2.myForm.querySelector('input[name="content"]').value = '';
                    _this2.myForm.querySelector('input[name="name"]').value = '';
                }, function () {
                    console.log('留言失败');
                });
            }
        }
    };
    controller.init();
}.call();