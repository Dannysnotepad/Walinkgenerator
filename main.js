/*
*WhatsApp links generator
*from
*Dannysnotepad
*/

const input = document.getElementById('input')
const generateBtn = document.getElementById('generate')
let ulEl = document.querySelector('ul')
let linkTemplate = `https://wa.me/`
let linkArray = []
let liText = ''


function copy(){
  /*navigator.clipboard.writeText(`${linkTemplate}`)
  alert(`Copied ${linkTemplate}`)*/
  
  navigator.clipboard.writeText(`${linkTemplate}`).then(() => {
    console.log('Content copied to clipboard');
  }, () => {
    console.error('Failed to copy');
  });
}

function delet(e){
  ulEl = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.remove();
}

function createLinks(){
  let value = input.value
  linkTemplate = `https://wa.me/${value}`
  linkArray.push(linkTemplate)
  
  for (let i = 0; i < linkArray.length; i++){
    liText = `
    <li><a href="${linkTemplate}">${linkTemplate}</a> <span class="material-symbols-outlined" onclick="copy(this)">
              content_copy
            </span><span class="material-symbols-outlined" onclick="delet(this)">
              delete
            </span></li>
    `
  }
  
  ulEl.innerHTML += liText
}


generate.addEventListener('click', () => {
  createLinks()
  input.value = ''
})