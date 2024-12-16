const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// fuction to add item on click of button
function addTask() {
    if(inputBox.value === '')
        alert("Don't be dumb, you should write something!")
    else { let li = document.createElement("Li");
       li.innerHTML = inputBox.value;
       listContainer.appendChild(li)
       let span = document.createElement("span")
       span.innerHTML = "\u00D7"
           li.appendChild(span)  
    }
    inputBox.value = '';
    saveData()
}


// Click function
listContainer.addEventListener('click', function(e) {
     if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
     } else if (e.target.tagName === 'SPAN' ) {
        e.target.parentElement.remove()
        saveData()
     }
}
, false)

// store data in local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// to display the data when we open the browser again
function getData() {
    listContainer.innerHTML = localStorage.getItem("data")
}

getData()