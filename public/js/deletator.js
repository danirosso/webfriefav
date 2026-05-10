export async function deletate(id) {
	var password = document.getElementById("passwordin" + id)
	const passwordobj = {
		id: id,
		password: password.value
	}

	fetch("/api/deletepost",{
		method: "DELETE",
		headers: {"Content-Type": "application/json",},
		body: JSON.stringify(passwordobj),
	}).then(response => response.json())
	.then(response => { if (response.allGood) {
		window.location.href = '/'
	}else{
		password.value = ''
	}
	})
}
