//select node with its id
const urlStudent1 = document.getElementById('students')
console.log(urlStudent1)

//select the first node with CSS selector
const urlStudent2 = document.querySelector('#students') // id selector
// console.log(urlStudent2)

const courseClass = document.querySelector('.courses')

const programminglecturers = document.querySelector('.programming') // class selector
// console.log(programminglecturers)

const urlStudent3 = document.querySelector('ul,[id="students"]') //tag with attibute
// console.log(urlStudent3)

const ulEle = document.querySelector('ul') //tag name
// console.log(ulEle)

const divUl = document.querySelector('div>ul')
// console.log(divUl)

//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
// console.log(firstNode1)
//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
// console.log(firstNode2)

//select a collection of specified condition
const programmingLect = document.getElementsByClassName('programming')
//return HTMLCollection data type - array - like (can use index or length, cannot use array function
// (filter,map,...))
// console.log(programmingLect)
// console.log(programmingLect.length)
//HTMLCollection

const ulTagname = document.getElementsByTagName('ul')
// console.log(ulTagname)
// console.log(ulTagname.length)

const coursesEle = document.querySelectorAll('.courses')
// console.log(coursesEle)
//NodeList data type - array-like (can use index .length) but Note
//implement only forEach but can't other array function
divEle = document.getElementById
const coursesUnderDiv = document.querySelectorAll('.courses')
// console.log(coursesUnderDiv)

const courseUnderDoc = document.querySelectorAll('.courses')
// console.log(courseUnderDoc)

//NodeList
const programmingLect1 = document.querySelectorAll('.programming')
console.log(programmingLect1)
programmingLect1.forEach((pl) => {
  console.log(pl)
  console.log(pl.nodeName)
  console.log(pl.nodeType)
  console.log(pl.nodeValue)
  console.log(pl.attributes) //get all attibute of element //NameNodeMap
  Array.from(pl.attributes).forEach((attr) => console.log(attr))
})

const pEle = document.getElementById('p-01')
const pEleAttribute = pEle.attributes
console.log(pEleAttribute)
console.log(pEleAttribute.length)
Array.from(pEleAttribute).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(pEle.getAttribute('id'))

const ulEle1 = document.getElementsByTagName('ul')
//return HTMLCollection array-like  not implement forEach
Array.forEach(ulEle1).forEach((ul) => console.log(ul))
