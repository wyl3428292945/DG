var box = document.getElementById('box')
axios.get("http://localhost:3000/cartoon").then(res => {
	var str = '';
	for (var i = 0; i < res.data.length; i++) {
		str += `
			<div class="img" onclick='getList(${res.data[i].id})'>
				<div class="hidden">
					<img src="${res.data[i].img}" >
				</div>
				<p>${res.data[i].title}</p>
			</div>
		`
		box.innerHTML = str;
	}
}).catch(err => {
	console.log(err);
})
function getList(i) {
	console.log(i)
	localStorage.setItem("id", i)
	window.location.href = `cartoon-xq.html`
}
