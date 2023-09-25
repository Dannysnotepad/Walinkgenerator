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
let linkArray = localStorage.getItem('linkArray') ? JSON.parse(localStorage.getItem('linkArray')) : [];
renderLinks();




function copy(e) {
  //alert('>_< This feature is still under development')
  navigator.clipboard.writeText(linkArray.linkTemplate)
}

function delet(e) {
  e.parentElement.remove();
  linkArray.splice(e.parentElement.id, 1);
  localStorage.setItem("linkArray", JSON.stringify(linkArray));
}

function renderLinks() {
  let liText = ''
  for (const link of linkArray) {
    liText += `
        <li data-key="${link.id}"><a href="${link.linkTemplate}">${link.linkTemplate}</a> <span class="material-symbols-outlined hi" onclick="copy()">
                    content_copy
                    </span><span class="material-symbols-outlined" onclick="delet(this)">
                    delete
                </span></li>
        `
  }
  ulEl.innerHTML += liText
}

function createLinks() {
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
  localStorage.setItem('linkArray', JSON.stringify(linkArray))
  renderLinks()
}

generate.addEventListener('click', () => {
  location.replace(location.href)
  createLinks()
  input.value = ''
  
})