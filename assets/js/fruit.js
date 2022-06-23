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
				let formContainer = document.getElementById('formContainer')
				formContainer.style.display = 'block'
				getNutrients(fruit.name)
			

			})

		}))
		.catch(err => console.error(err));
}
let clickFruits = document.getElementById('clickFruit')
clickFruits.addEventListener('click', (e) => {
	e.preventDefault()
	let headingFruit = document.getElementById('headingFruit')
	headingFruit.style.display = 'block'
	let containerCard = document.getElementById('myFruitsContainer')
	containerCard.style.display = 'block'
	fetchFruits()
})
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

		for(let i = 0; i<data.length;i++){
			let frtNm = data[i].name
			if(frtNm === fruitName){
				let element = (data[i].nutritions)
				Object.entries(element).forEach(([key, value]) => {
				let nutrient = `${key} : ${value}`
				displayNutrients(nutrient)
				})
			}
		}

	  });
  }
