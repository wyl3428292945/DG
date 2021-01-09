var app = document.getElementById('section');
axios.get('http://localhost:3000/shopping').then(res => {

	var str = ''
	for (var i = 0; i < res.data.length; i++) {
		str += `
		<div class="box" onclick='getList(${res.data[i].id})'>
			<img src="${res.data[i].img}" >
			<p>${res.data[i].title}</p>
			<div class="text">
				<span class="price">
					${res.data[i].pirce}
				</span>
				<span >
					${res.data[i].num}
				</span>
			</div>
		</div>
		`
	}
	app.innerHTML = str
}).catch(err => {
	console.log(err);
})
function abc() {
	waterFall();
}
function getList(i) {
	console.log(i)
	localStorage.setItem("id", i)
	window.location.href = `shopping-xq.html`
}
