const submitbutton = document.querySelector('button')
console.log(submitbutton)

submitbutton.addEventListener('click', (e) => {
  e.preventDefault()
  const adduserptw = document.querySelector('p')
  console.log(adduserptw)
  const username = document.getElementById('input-user')
  console.log(username.value)
  if (username.value.length === 0) {
    adduserptw.innerHTML = 'Error is null'
  } else {
    adduserptw.innerHTML = 'Added'
  }

  const password = document.getElementById('input-psw')
  console.log(password.value)
  if (password.value.length === 0) {
    adduserptw.innerHTML = 'Error is null'
  } else {
    adduserptw.innerHTML = 'Added'
  }
})

const submitButton = document.querySelector('button')
// console.log(submitButton)
submitButton.addEventListener('click', (e) => {
  e.preventDefault()
  const allInputElements = document.querySelectorAll('input')
  const isComplete = Array.from(allInputElements).every(
    (input) => input.value.length > 0
  )
  const pElement = document.getElementsByTagName('p')[0]
  if (isComplete) {
    pElement.textContent = 'Your input are complete'
  } else {
    pElement.innerHTML =
      '<span style="color:red"> Missing some value, plese enter</span>'
  }
})
