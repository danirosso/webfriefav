const params = new URLSearchParams(window.location.search)
const url = new URL(location.href)
let pagenum = params.get("page")
if (pagenum == null){
	pagenum = 0
}
const previouspagebutton = document.createElement("button")
previouspagebutton.textContent = '<< previous'
previouspagebutton.addEventListener("click", function () {changePage('p')})
document.body.appendChild(previouspagebutton)

const nextpagebutton = document.createElement("button")
nextpagebutton.textContent = 'next >>'
nextpagebutton.addEventListener("click", function () {changePage('n')})
document.body.appendChild(nextpagebutton)

function changePage(norp){
	console.log(norp)
	if (norp === 'n'){
		pagenum ++
	}
	if (norp === 'p' && pagenum > 0){
		pagenum --
	}

	params.set("page", pagenum)
	window.location.search = params.toString();
}
