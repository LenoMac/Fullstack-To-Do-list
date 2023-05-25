document.addEventListener("DOMContentLoaded", () => {

    const value1 = document.querySelector('.add-task input'),
        btn = document.querySelector('.add-task button'),
        list = document.querySelector('.list'),
        img = document.createElement('nav'),
        div1 = document.createElement('div')

    value1.addEventListener('input', () => {
        if (value1.value) {
            btn.style.background = 'blueviolet'
            btn.style.cursor = 'pointer'
        } else {
            btn.style.background = 'rgb(181, 101, 255)'
            btn.style.cursor = 'no-drop'
        }
    })
    btn.onclick = () => {
        var text = value1.value
        let test = text.trim()
        if (text === "") {
            return 0
        } else if (test === "") {
            alert(new Error)
        }
        else {
            list.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;'
            let li = document.createElement('li'),
                div = document.createElement('div'),
                p = document.createElement('p')


            span = document.createElement('span')
            div.style.cssText = 'display: flex; gap: 7px;'
            div1.style.cssText = 'align-self: center;'
            img.style.cssText = 'min-width: 20px; min-height: 20px; align-self: center; border-radius: 50%; border: 1px solid gray;'
            li.style.cssText = 'display: flex; width: 100%; justify-content: space-between;'
            p.innerHTML = text


            div1.insertAdjacentElement("afterbegin", img)
            div.insertAdjacentElement("afterbegin", div1)
            div.insertAdjacentElement("beforeend", p)
            li.insertAdjacentElement("afterbegin", div)
            span.setAttribute('class', 'material-symbols-outlined delete')
            span.innerText = 'delete'
            li.insertAdjacentElement("beforeend", span)
            list.insertAdjacentElement("afterbegin", li)
            value1.value = ""
            saveTasks()
        }
    }


    list.addEventListener('click', function (e) {
        if (e.target.tagName === "P") {
            e.target.classList.toggle("checked")

            if (e.target.classList.contains("checked")) {
                div1.innerHTML = `<img src="./img/todo.png" style="width: 20px; align-self:center;" />`
                saveTasks()
            } else {
                div1.innerHTML = `<nav style="min-width: 20px; min-height: 20px; align-self: center; border-radius: 50%; border: 1px solid gray;"></nav>`
                saveTasks()
            }
            saveTasks()
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove()
            saveTasks()
        }

        let liElements = list.getElementsByTagName('li')
        if (liElements.length === 0) {
            list.style.display = 'none'
            saveTasks()
        }
    })
    function saveTasks() {
        localStorage.setItem("data", list.innerHTML)
        localStorage.setItem("style", list.style.cssText)
    }

    function showTasks() {
        list.innerHTML = localStorage.getItem("data")
        list.style.cssText = localStorage.getItem("style")
    }

    showTasks()

})