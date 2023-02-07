// Cria as cartas dinamicamente
const cardObjetctDefinitions = [
  { id:1, imagePath: '/Ache-os-as/src/images/card-Kinghearts.png' },
  { id:2, imagePath: '/src/images/card-JackClubs.png' },
  { id:3, imagePath: '/src/images/card-QueenDiamonds.png' },
  { id:4, imagePath: '/src/images/card-AceSpades.png' }
]

const cardBackImgPath = '/src/images/card-back-blue.png'

const cardContainerElem = document.querySelector('.card-container')

createCards()

function createCards(){
  cardObjetctDefinitions.forEach((cardItem)=>{
    createCard(cardItem)
  })
}

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
  addClassToElement(cardInner, 'card-inner')
  addClassToElement(cardFront, 'card-front')
  addClassToElement(cardBack, 'card-back')

  addSrcToElementImage(cardBackImg, cardBackImgPath)
  addSrcToElementImage(cardFrontImg, cardItem.imagePath)
  addClassToElement(cardBackImg, 'card-img')
  addClassToElement(cardFrontImg, 'card-img')

  addChildElement(cardFront, cardFrontImg)
  addChildElement(cardBack, cardBackImg)
  addChildElement(cardInner, cardFrontImg)
  addChildElement(cardInner, cardBackImg)

  addChildElement(cardElem, cardInner)

  addCardToGridCell(cardElem)

}

function createElement(elemType) {
  return document.createElement(elemType)
}

function addClassToElement(elem, className) {
  elem.classList.add(className)
}

function addIdToElement(elem, id) {
  elem.id = id
}

function addSrcToElementImage(imgElem, src) {
  imgElem.src = src
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem)
}

function addCardToGridCell(card) {
  const cardPositionClassName = mapCardIdToGridCell(card)
  const cardPosElem = document.querySelector(cardPositionClassName)
  addChildElement(cardPosElem, card)
}

function mapCardIdToGridCell(card){
  if(card.id == 1) {
    return '.card-pos-a'
  }
  if(card.id == 2) {
    return '.card-pos-b'
  }
  if(card.id == 3) {
    return '.card-pos-c'
  }
  if(card.id == 4) {
    return '.card-pos-d'
  }
}