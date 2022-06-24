// Declaring my global scobe
let url = 'https://carreuky.github.io/db.json/db.json'
let container = document.getElementById('contEach')
let formContainer = document.getElementById('formContainer')

//function to fetch my fruits
function fetchFruits() {
	fetch(url)
		.then(res => res.json())
		.then(resp => {
			resp.fruit
			let fruitAll = resp.fruit
//Getting each element of my array which is an object
			fruitAll.forEach(fruitEach => {
				console.log(fruitEach.name)
				// Data with me
				let h = document.createElement('h2')
				let containerCard = document.getElementById('myFruitsContainer')
				let card = document.createElement('div')
				h.innerText = fruitEach.name.charAt(0).toUpperCase() + fruitEach.name.slice(1)
				h.style.paddingLeft = '20px'
				card.appendChild(h)
				containerCard.appendChild(card)
// Creating a mouse over to change when mouse is over my fruit name
				h.addEventListener('mouseover', () => {
					h.style.color = '#edd927'
				})
				h.addEventListener('mouseout', () => {
					h.style.color = 'white'
				})

				h.style.paddingLeft = '20px'
				card.appendChild(h)
				containerCard.appendChild(card)
				h.addEventListener('mouseover', () => {
					h.style.color = '#edd927'
				})
				h.addEventListener('mouseout', () => {
					h.style.color = 'white'

				})
				h.addEventListener('click', () => {
					container.innerHTML = ''
					formContainer.style.display = 'block'
					getNutrients(fruitEach.name)
				})
				console.log(h)
				// .catch(err => console.error(err));
			})
		})
}

//  click fuction to display fruit list
let clickFruits = document.getElementById('clickFruit')
clickFruits.addEventListener('click', (e) => {
	e.preventDefault()
	let headingFruit = document.getElementById('headingFruit')
	headingFruit.style.display = 'block'
	let containerCard = document.getElementById('myFruitsContainer')
	containerCard.style.display = 'block'
	fetchFruits()
})
// creating a dom for my nutrients
let bh = document.createElement('h1')
function displayNutrients(dataFruit, frtNm) {
	bh.innerText = frtNm
	bh.style.border = '2px solid #edd927'
	bh.style
	formContainer.append(bh)
	let eachNutrients = document.createElement("p");
	eachNutrients.style.fontSize = '20px'
	formContainer.append(bh)
	container.append(eachNutrients)
	eachNutrients.textContent = dataFruit.charAt(0).toUpperCase() + dataFruit.slice(1) + ' g'

}
///// Geting the nutrients from my data
function getNutrients(fruitName) {
	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then((data) => {
			let dat = (data.fruit)
			console.log(fruitName)
			for (let i = 0; i < dat.length; i++) {
				let frtNm = dat[i].name
				if (frtNm === fruitName) {
					let element = (dat[i].nutritions)
					Object.entries(element).forEach(([key, value]) => {
						let nutrient = `${key} : ${value}`
						// let bh=document.createElement('h2')
						// bh.innerText=frtNm
						console.log(bh)
						displayNutrients(nutrient, frtNm)
					})
				}
			}

		});
}
getNutrients()