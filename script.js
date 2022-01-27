const btnMobile = document.getElementById('btn-mobile')
const menuItems = document.querySelectorAll('.menu ul a')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event){
    event.preventDefault()
    const to = getScrollTopByHref(event.target)

    scrollToPosition(to)
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

//carrossel
document.querySelector('#items').addEventListener('wheel', event => {
    if(event.deltaY > 0){
        event.target.scrollBy(300, 0)
    }
    else{
        event.target.scrollBy(-300, 0)
    }
})

//evitar com que o scroll do body role junto com o scroll do carrossel
function mouseOut(){
    let body = document.getElementsByTagName('body')
    let media = window.matchMedia("(max-width: 768px)")
    document.body.style.overflow = 'hidden'
    if(media.matches){
        document.body.style.overflow = 'initial'
    }
}

function mouseOver(){
    let body = document.getElementsByTagName('body')
    document.body.style.overflow = 'initial'
}