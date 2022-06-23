let container = document.getElementById('contEach')
let formContainer = document.getElementById('formContainer')
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
			h.addEventListener('mouseover', ()=>{
				h.style.color='#edd927'
			})
			h.addEventListener('mouseout',()=>{
				h.style.color='white'
			})

			h.addEventListener('click' , ()=>{
				container.innerHTML = ''
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
let bh=document.createElement('h1')
function displayNutrients(dataFruit,frtNm) {
	bh.innerText=frtNm
	bh.style.border='2px solid #edd927'
	bh.style
	formContainer.append(bh)
	let eachNutrients = document.createElement("p");
	eachNutrients.style.fontSize='20px'
	formContainer.append(bh)
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
				// let bh=document.createElement('h2')
				// bh.innerText=frtNm
				console.log(bh)

				displayNutrients(nutrient,frtNm)
				})
			}
		}

	  });
  }
