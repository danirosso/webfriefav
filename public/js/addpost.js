document.getElementById("send").addEventListener("click", sendpost);
function sendpost() {
	const title = document.getElementById("title").value;
	const post = document.getElementById("post").value;
	console.log(post.lenght)
	const password  = document.getElementById("password").value;
	const postobj = {
		title: title,
		post: post,
		password: password
	};
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
			window.location.href = "/postlist"
		}})
}
