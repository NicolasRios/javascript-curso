document.querySelector('.tag').array.forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()
    
    elemento.style.boderColor = '#616161'

    if( !elemento.classLista.contaoins('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = '616161'
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
});