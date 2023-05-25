document.addEventListener("DOMContentLoaded", () => {

    const value1 = document.querySelector('.add-task input'),
        btn = document.querySelector('.add-task button'),
        list = document.querySelector('.list')

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
                p = document.createElement('p'),
                span = document.createElement('span')
            li.style.cssText = 'display: flex; width: 100%; justify-content: space-between;'

            p.innerHTML = text
            li.insertAdjacentElement("afterbegin", p)
            span.setAttribute('class', 'material-symbols-outlined delete')
            span.innerText = 'delete'
            li.insertAdjacentElement("beforeend", span)
            list.insertAdjacentElement("afterbegin", li)
            value1.value = ""
            console.log(list);
            let arr = []
            arr.push(li)
            let json = JSON.stringify(arr)
            localStorage.setItem('arr', json)
            saveTasks()
        }
    }


    list.addEventListener('click', function (e) {
        if (e.target.tagName === "P") {
            e.target.classList.toggle("checked")
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