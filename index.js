let submit=document.getElementById("submit")
submit.addEventListener("click", function() {
    let date=document.getElementById("date")
    let categories=document.getElementById("categories")
    let spending=document.getElementById("spending")

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = date.value
    tr.appendChild(td1)
    let td2 = document.createElement("td");
    td2.innerText = categories.value
    tr.appendChild(td2)
    let td3 = document.createElement("td")
    td3.innerText = spending.value
    tr.appendChild(td3)
    let table = document.getElementById("b")
    table.appendChild(tr)
    let total = document.getElementById("total")
    total.innerText = Number(total.innerText)+Number(spending.value)
    

    
})