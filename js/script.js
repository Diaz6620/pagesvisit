const count = document.getElementById('contadorVisitas')
const reset = document.getElementById('btnReestablecer')

if (!localStorage.getItem('visits')) {
    localStorage.setItem('visits', 10)
}

const visitsCount = () => {
    let visits = parseInt(localStorage.getItem('visits'), 10)
    visits += 1
    localStorage.setItem('visits', visits)
    count.innerHTML = visits
}

reset.addEventListener('click', () => {
    localStorage.setItem('visits', 0)
    location.reload()
})

visitsCount()