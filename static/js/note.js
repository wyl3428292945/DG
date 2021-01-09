function waterFall() {
	// 1 确定图片的宽度 - 滚动条宽度
	var pageWidth = getClient().width - 920;
	var columns = 4; //3列
	var itemWidth = parseInt(pageWidth / columns); //得到item的宽度
	$(".item").width(itemWidth); //设置到item的宽度
	var arr = [];
	$(".box .item").each(function (i) {
		var height = $(this).find("img").height();
		if (i < columns) {
			// 2 第一行按序布局
			$(this).css({
				top: 0,
				left: (itemWidth) * i + 20 * i,
			});
			//将行高push到数组
			arr.push(height);
		} else {
			// 其他行
			// 3 找到数组中最小高度  和 它的索引
			var minHeight = arr[0];
			var index = 0;
			for (var j = 0; j < arr.length; j++) {
				if (minHeight > arr[j]) {
					minHeight = arr[j];
					index = j;
				}
			}
			// 4 设置下一行的第一个盒子位置
			// top值就是最小列的高度
			$(this).css({
				top: arr[index] + 115, //设置30的距离
				left: $(".box .item").eq(index).css("left")
			});

			// 5 修改最小列的高度
			// 最小列的高度 = 当前自己的高度 + 拼接过来的高度
			arr[index] = arr[index] + height + 100; //设置30的距离
		}
	});
}
//clientWidth 处理兼容性
function getClient() {
	return {
		width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}
}
// 页面尺寸改变时实时触发
window.onresize = function () {
	//重新定义瀑布流
	waterFall();
};
//初始化
// window.onload = function() {
// 	//实现瀑布流
// 	waterFall();

// }
var app3 = document.getElementById('app3');
axios.get('http://localhost:3000/note').then(res => {
	var str = ''
	for (var i = 0; i < res.data.length; i++) {
		str += `
		 <div class="item"  onclick='getList(${res.data[i].id})'>
			<div class="con">
				<img src="${res.data[i].img}" onload='abc()'>
				<div class="text">
					<p>${res.data[i].title}</p>
					<div class="user">
						<div class="user-l">
							<img src="img/微信图片_20201204144650.jpg">
							<p class="nema">${res.data[i].name}</p>
						</div>
						<div class="user-r">
							<i class="zan"></i>
							<span>${res.data[i].like}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		`
	}
	app3.innerHTML = str
	console.log(res)
}).catch(err => {
	console.log(err);
})
function abc() {
	waterFall();
}
function getList(i) {
	console.log(i)
	localStorage.setItem("id", i)
	window.location.href = `note-xq.html`
}