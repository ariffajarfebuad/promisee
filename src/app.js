import { getNews } from "../api/News.js";

window.onload = () => {
	const searchFieldElement = document.getElementById("searchField");
	searchFieldElement.onkeyup = (event) => {
		getNews(searchFieldElement.value);
	}
}
