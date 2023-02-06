// Cria as cartas dinamicamente
const cardObjetctDefinitions = [
  {id:1, imagePath:'/src/images/card-KingHearts.png'},
  {id:2, imagePath:'/src/images/card-JackClubs.png'},
  {id:3, imagePath:'/src/images/card-QueenDiamonds.png'},
  {id:4, imagePath:'/src/images/card-AceSpades.png'}
]

function creatCard(cardItem) {
  //Cria os elementos da div que faz a carta
  const cardElem = document.createElement('div')
  const cardInner = createElement('div')
  const cardFront = createElement('div')
  const cardBack = createElement('div')
  //Cria as imagens da carta
  const cardFrontImg = createElement('img')
  const cardBackImg = createElement('img')

  addClassToElement(cardElem, 'card')
  addIdToElement(cardElem, cardItem.id)

  //23:47
}

function createElement(elemType) {
  return cardElem = document.createElement(elemType)
}

function addClassToElement(elem, className) {
  elem.classList.add(className)
}

function addIdToElement(elem, id) {

}