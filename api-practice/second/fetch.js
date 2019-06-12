const app = document.getElementById('root');

const logo = document.createElement('h1');
const logoText = document.createTextNode("Posts");
logo.appendChild(logoText);

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

function getData() {
	var url = "https://jsonplaceholder.typicode.com/posts";
	fetch(url, { method: "GET"})
		.then(function(response) {
			return response.json();
		})
		.then(function(myJson) {
			console.log(myJson);
			var data = myJson;
			data.forEach(post => {
				const card = document.createElement("div");
				card.setAttribute("class", "card");

				const h1 = document.createElement("h1");
				const link = document.createElement("a");
				link.href = "../first/index.html";
				link.target = "_blank";
				link.textContent = post.title;
				h1.appendChild(link);

				const p = document.createElement("p");
				post.body = post.body.substring(0, 300);
				p.textContent = `${post.body}...`;

				card.appendChild(h1);
				card.appendChild(p);
				container.appendChild(card);
			});
		})
		.catch(error => {
			logoError = document.createElement("h1");
			errorText = document.createTextNode("Sorry, something went wrong!");
			logoError.appendChild(errorText);
			app.insertBefore(logoError, container);
		});
}
getData();