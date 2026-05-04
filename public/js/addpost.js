export function sendpost () {
	const params = new URLSearchParams(window.location.search)
	const title = document.getElementById("title").value;
	const post = document.getElementById("post").value;
	const password  = document.getElementById("password").value;
	const tag = params.get("id")
	const postobj = {
		title: title,
		post: post,
		password: password,
		tag: tag
	};
	console.log(postobj)
	fetch("/api/addpost",{
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body:JSON.stringify(postobj),
	})
		.then(response => response.json())
		.then(response => { if (response.allGood){
			console.log("Posted!")
			window.location.href = "?&id=" + response.id
		}})
}
