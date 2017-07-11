/*
	将新元素输入框从input改为textarea
	允许一次批量输入多个内容，格式可以为数字、中文、英文等，
可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
	增加一个查询文本输入框，和一个查询按钮，
当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。
举例，内容中有abcd，查询词为ab或bc，则该内容需要标识
*/
var text=document.getElementsByTagName('textarea')[0];
var buttons=document.getElementsByTagName('button');
var div=document.getElementById('box');
//插入数字函数
function insert(direction) {
        if(text.value==""){//如果输入框为空，按钮点击时，跳出提示框
            alert('请输入数据');
            text.focus();
        }else{
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
//搜索函数
function search(){
	var search_value=document.getElementById('text_search').value;
	if(search_value=""){
		alert('请输入查询数据');
		text.focus();
	}else{
		for (var i = 0; i < div.childNodes.length; i++) {
			var divs_value=div.children[i].innerText;
			if(div_value.indexOf(text)>-1){
				div.children[i].style.backgroundColor="f00";
				div.children[i].color="fff";
			}else{
				div.children[i].style.backgroundColor="fff";
				div.children[i].color="f00";
			}
		}
	}
}
buttons[0].onclick=insert("left");
buttons[1].onclick=insert("right");
buttons[2].onclick=delete(-1,"left");
buttons[3].onclick=delete(-1,"right");
buttons[4].onclick=sort();
buttons[5].onclick=search();
div.onclick=delete(event.target);
