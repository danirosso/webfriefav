const params = new URLSearchParams(window.location.search)
const pagenum = params.get("page")

function postbunch() {
fetch ("/api/post")
	.then(res => res.json())
	.then(res => console.log(res))
}
