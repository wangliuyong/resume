
//存储留言到云
var myForm=document.querySelector('#LeaveMessage');
myForm.addEventListener('submit',function(event){
    event.preventDefault();
    var content=myForm.querySelector('input[name="content"]').value;
    var name=myForm.querySelector('input[name="name"]').value;
    console.log(content);

    //创建message表
    var xxx = AV.Object.extend('message');
    //在message表中创建一行数据
    var testObject = new xxx();
    //数据的内容是 'content': content 保存
    //如果保存成功执行consol
    testObject.save({
        'name':name,
        'content': content
    }).then(function (object) {
        window.location.reload()
        console.log('存入一条数据')
        console.log(content);
    },()=>{})
})

//从云获取历史留言
var messageBoard=document.querySelector('#historyMessage')
var query = new AV.Query('message');
query.find().then(function (messages) {
    let arr=messages.map((items)=>{return items.attributes})
    arr.forEach((items) => {
        let name =items.name
        let content =items.content
        let li =document.createElement('li')
        li.innerText=`${name}:${content}`
        messageBoard.appendChild(li)
        
    });
    return AV.Object.saveAll(messages);
}).then(function(messages) {
  // 更新成功
  console.log(messages)
}, function (error) {
  // 异常处理
  alert('留言失败，请再试一次')
});