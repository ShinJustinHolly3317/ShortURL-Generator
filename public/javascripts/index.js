/* html elements */
const copyBtn = document.querySelector('.copy-btn')
const copiedBtn = document.querySelector('.copied-btn')
const newShortenEle = document.querySelector('.newShorten input')
const regenBtn = document.querySelector('.re-gen')


/* listeners */
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(newShortenEle.value)
  .then(() => {
    copyBtn.classList.toggle('hidden')
    copiedBtn.classList.toggle('hidden')
    console.log('Copied successfully~')
  })
})

regenBtn.addEventListener('click', () => {
  // remove cookie from client side
  document.cookie = 'urlMessage=;expires=Thu, 01 Jan 1970 00:00:00 GMT' 
  location.reload()
})
