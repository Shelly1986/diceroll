function rolldice(){

		  const firstNumber = Math.floor(Math.random()*6)+1

		  const image1 = 'dicepics/' + firstNumber + '.png'

		  const secondNumber = Math.floor(Math.random()*6)+1

		  const image2 = 'dicepics/' + secondNumber + '.png'
		  
		  document.querySelectorAll('img')[0].setAttribute('src',image1)
		  document.querySelectorAll('img')[1].setAttribute('src',image2)

		  if (firstNumber > secondNumber) {
			document.querySelector('h1').innerHTML = "The winner is User 1";
		  } else if (secondNumber > firstNumber) {
			document.querySelector('h1').innerHTML = "The winner is User 2"
		  } else {
			document.querySelector('h1').innerHTML = "It's a draw"
		  }
	}
	
