/*
模拟一个队列，队列的每个元素是一个数字，初始队列为空

有一个input输入框，以及4个操作按钮

    点击"左侧入"，将input中输入的数字从左侧插入队列中；
    点击"右侧入"，将input中输入的数字从右侧插入队列中；
    点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
    点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；

点击队列中任何一个元素，则该元素会被从队列中删除
*/
var text=document.getElementsByTagName('input')[0];
var buttons=document.getElementsByTagName('button');
var div=document.getElementById('box');
//插入数字函数
function insert(direction) {
        if(text.value==""){//如果输入框为空，按钮点击时，跳出提示框
            alert('请输入数字');
            text.focus();
        }else if(isNaN(text.value)){//如果输入框为非数字，按钮点击时，跳出提示框
            alert('您输入的不是数字，请重新输入');
            text.value='';
            text.focus();
        }else{//输入数字情况下
            divs=document.creatElement('div');
            divs.innerHTML=text.value;
            if(direction=="left"){
                div.insertBefore(divs,div.firstChild);//点击左键入将输入的数字从左侧添加到队列
            }else if(direction=="right"){
                div.append(divs);//点击右键入将输入的数字从右侧添加到队列
            }
        }           
    }
//删除数字函数
function delete(node,direction){
    if(div.childNodes.length<=0){//此时没有div中没有元素
        alert('没有元素可以删除');
    }else if(direction=="left"){//点击左键出从左侧将队列的第一个元素删除
        alert('删除的元素是'+div.firstChild.innerText);//innerText不携带html标签，即不携带子标签div
        div.removeChild(div.firstChild);
    }else if(direction=="right"){//点击右键出从右侧将队列的最后一个元素删除
        alert('删除的元素是'+div.lastChild.innerText);//innerText不携带html标签，即子标签div
        div.removeChild(div.lastChild);
    }else{//点击队列中的任意一个元素，该元素会被删除
        div.removeChild(node);
    }                     
}
buttons[0].onclick=insert("left");
buttons[1].onclick=insert("right");
buttons[2].onclick=delete(-1,"left");
buttons[3].onclick=delete(-1,"right");
div.onclick=delete(event.target);