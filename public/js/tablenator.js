export function postable (post) {
	const params = new URLSearchParams(window.location.search)
	const postable = document.createElement("table")
	postable.border = "1"

	const headrow = document.createElement("tr")

	const thid = document.createElement("th")
	const idlink =document.createElement("a")
	idlink.textContent = "Id: " + post.id
	//TODO: use the window.location.seach method to modify the search params
	idlink.href = "?id=" + post.id
	thid.appendChild(idlink)
	//idlink.addEventListener("click", funcion(){params.set("id", post.id)}))

	headrow.appendChild(thid)

	const thtitle = document.createElement("th")
	thtitle.textContent = post.title
	headrow.appendChild(thtitle)


	const bodyrow = document.createElement("tr")

	const tdpost = document.createElement("td")
	tdpost.textContent = post.post
	tdpost.colSpan = "2"
	bodyrow.appendChild(tdpost)

	const feetrow = document.createElement("tr")

	const manycomments = document.createElement("td")
	manycomments.textContent = "#: " + post.commentnum

	feetrow.appendChild(manycomments)

	const deletepost = document.createElement("td")

	const passwordtextin = document.createElement("input")
	passwordtextin.type = 'password'
	deletepost.appendChild(passwordtextin)

	const deletebutton = document.createElement("button")
	deletebutton.id = 'deletebutton'
	deletebutton.textContent = 'Delete'
	deletepost.appendChild(deletebutton)

	feetrow.appendChild(deletepost)


	postable.appendChild(headrow)
	postable.appendChild(bodyrow)
	postable.appendChild(feetrow)

	document.getElementById("postable").appendChild(postable);
}
