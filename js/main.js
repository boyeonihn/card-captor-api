//Fetch Using Animechan API 
document.querySelector('button').addEventListener('click', cardSearch)
document.querySelector('#randomCard').addEventListener('click', randomCard)
const h3 = document.querySelectorAll('h3')
const img = document.querySelectorAll('img')


let secret = document.querySelectorAll('img')

const url = `https://protected-taiga-89091.herokuapp.com/api/card`


function cardSearch(){
  let choice = document.querySelector('input').value
  let cardName = `The ${choice[0].toUpperCase()}${choice.slice(1)}`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        let cardData = data.data

        console.log(data)
        for (let i = 0; i < cardData.length; i++) {
          if (cardData[i]['englishName'] === cardName) {

            document.querySelector('#clow').src = cardData[i]['clowCard']
            document.querySelector('#sakura').src = cardData[i]['sakuraCard']
            document.querySelector('h2').textContent = cardName
            Array.from(h3).forEach((element) => {
              element.style.display = 'block'
            })

            Array.from(img).forEach((element) => {
              element.style.display = 'block'
            })
            
          }
        }        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function randomCard() {
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    let cardData = data.data

    console.log(data)
    const cardNum = Math.floor(Math.random() * cardData.length)
    document.querySelector('#clow').src = cardData[cardNum]['clowCard']
    document.querySelector('#sakura').src = cardData[cardNum]['sakuraCard']
    document.querySelector('h2').innerText = cardData[cardNum]['englishName']
    Array.from(h3).forEach((element) => {
      element.style.display = 'block'
    })

    Array.from(img).forEach((element) => {
      element.style.display = 'block'
    })

     
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}



// for(var key in person){
//   keywords.forEach(function(keyword){
//     var value = person[key].toLowerCase(),
//         term = keyword.toLowerCase();
//     if( value.indexOf(term) !== -1){
//       match = true;
//     }
//   });
// }