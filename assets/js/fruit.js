const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '351f4d8624msh78bf695a7c0b1c4p101dc6jsnada3e3e49a87',
    'X-RapidAPI-Host': 'fit-life-food.p.rapidapi.com'
	}
};
function fetchFruits() {
	fetch('https://fit-life-food.p.rapidapi.com/food', options)
		.then(response => response.json())
		.then(response => response.forEach(fruit =>{
			console.log(fruit)
			displayfruitsName(fruit)
		 }))
		.catch(err => console.error(err));
	}
	function displayfruitsName(dataName) {
		let h=document.createElement('h2')
		let containerCard=document.getElementById('myFruitsContainer')
		let card=document.createElement('div')
		h.innerText=dataName.charAt(0).toUpperCase() + dataName.slice(1)
		h.style.paddingLeft='20px'
		card.appendChild(h)
		containerCard.appendChild(card)
		}
		let clickFruits=document.getElementById('clickFruit')
		clickFruits.addEventListener('click', (e)=>{
			e.preventDefault()
			let formContainer=document.getElementById('formContainer')
			formContainer.style.display='block'
			let headingFruit=document.getElementById('headingFruit')
			headingFruit.style.display='block'
			let containerCard=document.getElementById('myFruitsContainer')
			containerCard.style.display='block'			
			fetchFruits()
		})
		let form = document.getElementById('form')
		function fetchNutrients(fruitPassed) {
			form.addEventListener('submit', (e)=>{
				e.preventDefault()
				let input= `${e.target['input-fruit'].value} `.toLowerCase();
				console.log(input)
				fetch(`https://fit-life-food.p.rapidapi.com/nutrition/${input}`, options)
					.then(response => response.json())
					.then(nutrients=>{	Object.entries(nutrients).forEach(([key,value])=>{
						let nutrient=`${key}:${value}`
						console.log(nutrient)
						displayNutrients(nutrient)
			document.getElementById("btnSubmit").disabled = "false"
		


					}
						)})
						.catch(err => console.error(err));

		}
	)}
fetchNutrients()
let container=document.getElementById('contEach')
function displayNutrients(dataFruit) {
	let eachNutrients = document.createElement("p");
  container.append(eachNutrients)
  eachNutrients.textContent=dataFruit

}


	
