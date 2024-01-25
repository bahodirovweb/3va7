var elInp = document.querySelector('.inp')
var elTitle = document.querySelector('h1')

function bt() {
    var vall = elInp.value
    if (vall % 3 == 0 && vall % 7 == 0) {
        elTitle.textContent = 'FIZZBUZZ'
    } else if (vall % 7 == 0) {
        elTitle.textContent = 'BUZZ'
    } else if (vall % 3 == 0) {
        elTitle.teAxtContent = 'FIZZ'
    } else {
        elTitle.textContent = "7 va 3 bolinmaydi"
    }
    elInp.value = ''
    elInp.focus()
}