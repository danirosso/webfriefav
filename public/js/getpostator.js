import { 
	postable
}from "./tablenator.js"

async function getpost(){
	const response = await fetch("/api/postlist" + window.location.search)
	const postArray = await response.json()
	postArray.forEach((post) => {
		postable(post)
	})
}

getpost()
