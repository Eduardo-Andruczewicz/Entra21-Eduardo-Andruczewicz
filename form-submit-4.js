function mostrarModal(html, callback) {
    let div = document.createElement("div")
    let userContent = document.createElement("div")
    let form = document.createElement("form")
    let input = document.createElement("input")
    let buttons = document.createElement("div")
    let cancelBtn = document.createElement("button")
    let okBtn = document.createElement("button")
    
    div.classList.add("popup")
    userContent.classList.add("popup__usercontent")
    form.classList.add("popup__form")
    input.classList.add("popup__form__input")
    buttons.classList.add("popup__form__buttons")
    cancelBtn.classList.add("popup__form__buttons__button")
    okBtn.classList.add("popup__form__buttons__button")

    userContent.innerHTML = html

    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })
    okBtn.addEventListener("click", (e) => {
        callback(input.value)
        document.body.removeChild(div)
    })
    cancelBtn.addEventListener("click", (e) => {
        callback(null)
        document.body.removeChild(div)
    })
    document.body.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
            callback(null)
            document.body.removeChild(div)
        }
    })

    document.body.append(div)
    div.append(form)
    form.append(userContent)
    form.append(input)
    form.append(buttons)
    buttons.append(okBtn)
    okBtn.innerHTML = "OK"
    buttons.append(cancelBtn)
    cancelBtn.innerHTML = "Cancelar"

    input.focus()
}

mostrarModal("<h1>Teste</h1>", console.log)