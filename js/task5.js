/*
限制输入的数字在10-100
队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
队列展现方式变化如图，直接用高度表示数字大小
实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来
*/
var text=document.getElementsByTagName('input')[0];
var buttons=document.getElementsByTagName('button');
var div=document.getElementById('box');
//插入数字函数
function insert(direction) {
        if(text.value==""){//如果输入框为空，按钮点击时，跳出提示框
            alert('请输入数字');
            text.focus()
        }else if(isNaN(text.value)){//如果输入框为非数字，按钮点击时，跳出提示框
            alert('您输入的不是数字，请重新输入');
            text.value='';
            text.focus();       
        }else if(text.value>=10||text.value<=100){//输入数字情况下
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
//排序功能函数
function sort(){
	var length = div.children.length;//div下有几个div子节点
	if(length>60){
		alert('此时已经有60个元素，不能再添加');
	}else{
		for (var i = 0; i < length; i++) {
			for (var j = i+1; i < length; j++) {
				var num1=parseInt(div.children[i].style.height.replace('px',''));
				var num2=parseInt(div.children[j].style.height.replace('px',''));
				var temp;
				if(num1>num2){
					temp=num1;
					num1=num2;
					num2=num1;//进行冒泡排序，小的在前，大的在后
				}
				div.children[i].style.height=num1+'px';
				div.children[j].style.height=num2+'px';
			}
		}
	}
	
}
buttons[0].onclick=insert("left");
buttons[1].onclick=insert("right");
buttons[2].onclick=delete(-1,"left");
buttons[3].onclick=delete(-1,"right");
buttons[4].onclick=sort();
div.onclick=delete(event.target);