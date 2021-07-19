/* html elements */
const copyBtn = document.querySelector('.copy-btn')
const copiedBtn = document.querySelector('.copied-btn')
const newShortenEle = document.querySelector('.newShorten input')


/* listeners */
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(newShortenEle.value)
  .then(() => {
    copyBtn.classList.toggle('hidden')
    copiedBtn.classList.toggle('hidden')
    console.log('Copied successfully~')
  })
})