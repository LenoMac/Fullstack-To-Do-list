document.addEventListener("DOMContentLoaded", () => {

    const value1 = document.querySelector('.add-task input'),
        btn = document.querySelector('.add-task button'),
        list = document.querySelector('.list'),
        left = document.querySelector('.left')

    value1.addEventListener('input', () => {
        if (value1.value) {
            btn.style.background = 'blueviolet'
            btn.style.cursor = 'pointer'

            setTimeout(() => {
                left.style.cssText = 'opacity: 1; width: 300px;'
            }, 1000)
        } else {
            btn.style.background = 'rgb(181, 101, 255)'
            btn.style.cursor = 'no-drop'
            setTimeout(() => {
                left.style.cssText = 'opacity: 0; width: 10px;'
            }, 500)
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
                p = document.createElement('p'),
                img = document.createElement('nav')
            span = document.createElement('span')
            div.style.cssText = 'display: flex; gap: 7px;'
            img.style.cssText = 'min-width: 20px; min-height: 20px; align-self: center; border-radius: 50%; border: 1px solid gray;'
            li.style.cssText = 'display: flex; width: 100%; justify-content: space-between;'
            p.innerHTML = text

            div.insertAdjacentElement("afterbegin", img)
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
                e.target.parentElement.classList.add('done')
            } else {
                e.target.parentElement.classList.remove('done')
            }
            saveTasks()
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove()
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