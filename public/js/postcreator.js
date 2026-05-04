import {
	sendpost
} from "./addpost.js"

const postform = document.createElement("div")
postform.id = "postform"

const br = document.createElement("br")

const title = document.createElement("input")
title.type = "text"
title.id = "title"
postform.appendChild(title)

const password = document.createElement("input")
password.type = "password"
password.id = "password"
postform.appendChild(password)
postform.appendChild(br)

const post = document.createElement("textarea")
post.rows = "6"
post.cols = "40"
post.maxLength = "2400"
post.id = "post"
postform.appendChild(post)

const send = document.createElement("button")
send.id = "send"
send.textContent = "Send"
send.addEventListener("click", function () { sendpost() } )
postform.appendChild(send)

const postcreator = document.getElementById("postcreator")
const cpostlink = document.createElement("button")
cpostlink.id = "makeapostbtn"
cpostlink.textContent = "[ Create a post ]"
cpostlink.addEventListener("click", function () {
	var clicked = document.getElementById("postform")
	if ( clicked === null){
		postcreator.appendChild(postform)
	}
	else {
		postcreator.removeChild(postform)
	}
})
postcreator.appendChild(cpostlink)
