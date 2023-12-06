//1.selete target HTML object
const summitbutton = document.querySelector('button')
console.log(summitbutton)

//2.selete handler function on a target HTML object
const doSomething = (e) => {
  // console.log('submit button is clicked')
  //   console.log(e)
  console.log(e.target.id)
  //   console.log(e.type)
  //   console.log(e.target)
  console.log(e.currentTarget)
  console.log(e.eventPhase)
}
const doSometime = (e) => {
  console.log(`Goodbye, ${e.target.id}`)
}
// summitbutton.addEventListener('click', doSomething, false)

//add multiple handler function on the same event type and HTML object
summitbutton.addEventListener(
  'click',
  (e) => {
    console.log(`hello, ${e.target.id}`)
  },
  false
)
summitbutton.addEventListener('click', doSometime, false)

//remove event listener
summitbutton.removeEventListener('click', doSometime, false)

//outer-div
// const outerDiv = document.getElementById('outer-div')
// outerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })

// // inner div
// const innerDiv = document.getElementById('inner-div')
// // console.log(innerDiv)
// innerDiv.addEventListener('click', (event) => {
//   console.log(event.target.id)
//   console.log(event.currentTarget)
//   console.log(event.eventPhase)
// })
