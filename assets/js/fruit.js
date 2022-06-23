let container = document.getElementById('contEach')
let url ='http://localhost:3000/fruit'
function fetchFruits() {
	fetch('http://localhost:3000/fruit')
		.then(response => response.json())
		.then(response => response.forEach(fruit => {

			let h = document.createElement('h2')
			let containerCard = document.getElementById('myFruitsContainer')
			let card = document.createElement('div')
			h.innerText = fruit.name.charAt(0).toUpperCase() + fruit.name.slice(1)
			h.style.paddingLeft = '20px'
			card.appendChild(h)
			containerCard.appendChild(card)

			h.addEventListener('click' , ()=>{
				container.innerHTML = ''

				getNutrients(fruit.name)
			

			})

		}))
		.catch(err => console.error(err));
}
function displayfruitsName(dataName) {
	let h = document.createElement('h2')
	let containerCard = document.getElementById('myFruitsContainer')
	let card = document.createElement('div')
	h.innerText = dataName.charAt(0).toUpperCase() + dataName.slice(1)
	h.style.paddingLeft = '20px'
	card.appendChild(h)
	containerCard.appendChild(card)
}
let clickFruits = document.getElementById('clickFruit')
clickFruits.addEventListener('click', (e) => {
	e.preventDefault()
	let formContainer = document.getElementById('formContainer')
	formContainer.style.display = 'block'
	let headingFruit = document.getElementById('headingFruit')
	headingFruit.style.display = 'block'
	let containerCard = document.getElementById('myFruitsContainer')
	containerCard.style.display = 'block'
	fetchFruits()
})
let form = document.getElementById('form')
function fetchNutrients(fruitPassed) {
	form.addEventListener('submit', (e) => {
		e.preventDefault()
		let input = `${e.target['input-fruit'].value} `.toLowerCase();
		console.log(input)
		fetch(url)
			.then(response => response.json())
			.then(nutrients => {  console.log(nutrients.nutritions)
			})
			.catch(err => console.error(err));

	}
	)
}
fetchNutrients()
function displayNutrients(dataFruit) {
	let eachNutrients = document.createElement("p");
	eachNutrients
	eachNutrients.style.fontSize='20px'
	container.append(eachNutrients)
	eachNutrients.textContent = dataFruit.charAt(0).toUpperCase() + dataFruit.slice(1) + ' g'

}


function getNutrients(fruitName) {
	fetch(url)
	  .then(function (response) {
		return response.json();
	  })
	  .then(function (data) {


	  });
  }
