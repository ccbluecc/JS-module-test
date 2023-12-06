const submitbutton = document.querySelector('button')
console.log(submitbutton)

submitbutton.addEventListener('click', (e) => {
  e.preventDefault()
})
const username = document.getElementById('input-user')
const password = document.getElementById('input-psw')

username.addEventListener('focus', () => {
  console.log('Your focus is on Username')
})

username.addEventListener('blur', () => {
  console.log('Your username input textbox is blured')
})

username.addEventListener('keypress', (e) => {
  console.log(`${e.key}, ${e.code}`)
  if (e.key > 0 && e.key <= 9) {
    e.preventDefault()
  }
})

//when user relase enter key, text value on username will show  at <p></p> element
username.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pElement = document.querySelector('p')
    pElement.textContent = e.target.value
  }
})

username.addEventListener('input', (e) => {
  const pElement = document.querySelector('p')
  pElement.textContent = e.target.value
})
