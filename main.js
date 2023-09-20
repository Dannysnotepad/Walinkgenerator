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
  /*navigator.clipboard.writeText(`${linkTemplate}`)
  alert(`Copied ${linkTemplate}`)*/
  
  /*navigator.clipboard.writeText(`${linkTemplate}`).then(() => {
    console.log('Content copied to clipboard');
  }, () => {
    console.error('Failed to copy');
  })*/
  alert('>_< This feature is still under development')
}

function delet(e){
  /*ulEl = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.remove()*/
  
/*  linkArray.filter(function(linkArrayContent) {
    return linkArrayContent.id == e
  }).map(function(e) {
    if (document.querySelector('li').id == linkArrayContent.id){
      
    }*/
  
  
  /*console.log(ulEl);
  document.querySelector('li').removeChild(ulEl)*/
  alert('>_< This feature is still under development')

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
  console.log(linkArray)
  
  
  
  for (let i = 0; i < linkArray.length; i++){
    liText = `
    <li data-key="${linkArrayContent.id}"><a href="${linkArrayContent.linkTemplate}">${linkArrayContent.linkTemplate}</a> <span class="material-symbols-outlined hi" onclick="copy(this)">
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