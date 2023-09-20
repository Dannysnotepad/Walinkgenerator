/*
*WhatsApp links generator
*from
*Dannysnotepad
*/

const input = document.getElementById('input')
const generateBtn = document.getElementById('generate')
const emptyState = document.querySelector('emptyState')
let ulEl = document.querySelector('ul')
let linkTemplate = `https://wa.me/`
let linkArray = []
let liText = ''


function copy(){
  alert('>_< This feature is still under development')
  
}

function delet(e){
  e.parentElement.remove();
  linkArray.splice(e.parentElement.id, 0);
}

function createLinks(){
  if (input.value == '' || input.value == null || isNaN(input.value)) {
    
    input.focus()
    return false
  }
  let value = input.value
  linkTemplate = `https://wa.me/${value}`
  let linkArrayContent = {
    linkTemplate,
    id: Date.now()
  }
  linkArray.push(linkArrayContent)
  
  
  
  for (let i = 0; i < linkArray.length; i++){
    liText = `
    <li data-key="${linkArrayContent.id}"><a href="${linkArrayContent.linkTemplate}">${linkArrayContent.linkTemplate}</a> <span class="material-symbols-outlined hi" onclick="copy()">
              content_copy
            </span><span class="material-symbols-outlined" onclick="delet(this)">
              delete
            </span></li>
    `
  }
  const item = document.querySelector(`[data-key='${linkArrayContent.id}']`);
  ulEl.innerHTML += liText
  
}


generate.addEventListener('click', () => {
  createLinks()
  input.value = ''
})