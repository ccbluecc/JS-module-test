// const currentCookie = document.cookie
// console.log(currentCookie);

// import { CookieUtil  } from './myLib/cookieUtil.js'
// document.cookie = 'username=Umaporn'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// const currentCookie = document.cookie
// console.log(currentCookie)

// import { CookieUtil } from './myLib/cookieUtil.js'
// CookieUtil.set('username', 'Umaporn', new Date(2023, 11, 25))
// CookieUtil.set('course', 'INT201', new Date(2023, 11, 25))
// CookieUtil.set('credit', '2', new Date(2024, 0, 1))

// console.log(CookieUtil.get('username'))
// console.log(CookieUtil.get('course'))
// console.log(CookieUtil.unset('credit'))
// console.log(CookieUtil.get('credit'))

import { CookieUtil } from './myLib/cookieUtil.js'

const Name = document.getElementById('color')
const color = document.querySelector('input')
const button = document.getElementById('font')

button.addEventListener('click', () => {
  const text = document.getElementById('text')
  console.log(text.value)
  Name.style.font = text.value
  localStorage.setItem('fonts', text.value)
  text.value = ''
})

color.addEventListener('input', (colors) => {
  console.log(colors.target.value)
  Name.style = `color:${colors.target.value}`
  Name.style.font = storedtext
  localStorage.setItem('color', `${colors.target.value}`)
})

const storedColor = localStorage.getItem('color')
const storedtext = localStorage.getItem('fonts')
if (storedtext || storedColor) {
  Name.style.font = storedtext
  Name.style.color = storedColor
  color.value = storedColor
}
