// const { eco, sum, MAX_VALUE } = require('./lib/util.js')
// import { eco, sum, MAX_VALUE } from './lib/util.js'
// import total from './lib/util.js'
// import sum, { eco, MAX_VALUE } from './lib/util.js'
// console.log(eco('Hello'))
// console.log(sum(0, 1, 2, 3, 4))
// console.log(total(0, 1, 2, 3, 4))
// console.log(MAX_VALUE)

const rootNode = window.document
// console.log(rootNode)
// console.log(rootNode.nodeName)
// console.log(rootNode.nodeType)
// console.log(rootNode.nodeValue)

// console.log(document.documentElement) //html element
// console.log(document.documentElement.nodeName) //HTML
// console.log(document.documentElement.nodeType) //1
// console.log(document.documentElement.nodeValue) //null

// console.log(document.body) // body element
// console.log(document.body.nodeName) //BODY
// console.log(document.body.nodeType) //1
// console.log(document.body.nodeValue) //null

// console.log(document.head) // head element
// console.log(document.head.nodeName) //HEAD
// console.log(document.head.nodeType) // 1
// console.log(document.head.nodeValue) // null

// console.log(document.title) // title element
// console.log(document.title.nodeName) //undefined
// console.log(document.title.nodeType) //undefined
// console.log(document.title.nodeValue) //undefined

const headElement = document.head
// console.log(headElement)

//Child relationship
//1. childNodes(NodeList data types) = query children with all node types
// const headChildren = headElement.childNodes
// console.log(headChildren)
// console.log('length', headElement.childNodes.length)
// headChildren.forEach((hc) => {
//   console.log(hc.nodeName), console.log(hc.nodeType), console.log(hc.nodeValue)
// })

//2 children (HTMLCollection data type) = query children with ELEMENT type only
//convert array-like to array before using foreach function
// console.log('length', headElement.children.length)
// Array.from(headElement.children).forEach((hc) => {
//   console.log(hc.nodeName), console.log(hc.nodeType), console.log(hc.nodeValue)
// })

//parent relationship
//get parent including all node type
const headParentNode = headElement.parentNode
//get parent only element node type
const headParentElement = headElement.parentElement
console.log(headParentNode)
console.log(headParentElement)

//get previous sibling including all node type
const headPreviousSibing = headElement.previousSibling
//get previous sibling including element node type
const headPreviousSibingElement = headElement.previousElementSibling
console.log(headPreviousSibing)
console.log(headPreviousSibingElement)

//get next sibling including all node type
const headNextSibing = headElement.nextSibling
//get next sibling including element node type
const headNextSibingElement = headElement.nextElementSibling
console.log(headNextSibing)
console.log(headNextSibingElement)

//get first child
console.log(headElement.firstChild)
console.log(headElement.firstElementChild)

//get last child
console.log(headElement.lastChild)
console.log(headElement.lastElementChild)


