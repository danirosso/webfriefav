import {
	sendpost
} from "./addpost.js"

const postform = document.createElement("div")
postform.id = "postform"

//TODO: there must be a better way of getting these linebreaks
const br = document.createElement("br")
const br2 = document.createElement("br")

const title = document.createElement("input")
title.type = "text"
title.id = "title"
title.size = "45"
title.maxLength = "240"
postform.appendChild(title)
postform.appendChild(br)

const post = document.createElement("textarea")
post.rows = "6"
post.cols = "60"
post.maxLength = "2400"
post.id = "post"
postform.appendChild(post)
postform.appendChild(br2)

const password = document.createElement("input")
password.type = "password"
password.size = "20"
password.maxLenght = "21"
password.id = "password"
postform.appendChild(password)

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
