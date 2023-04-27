const task = document.getElementById("task")
const btn = document.getElementById("btn")


btn.addEventListener("click", () =>{
    //if nothing is in input box
    if(task.value==""){
        alert('NO TASK TO ADD')
        
    }else{
    const ul = document.getElementById("myUl")
    const li = document.createElement("li")
    li.textContent = task.value
    ul.append(li)
     
    task.addEventListener("focus", () =>{
        task.value = ""
    })
    li.addEventListener("dblclick", () =>{
        li.remove()
    })


    }
     
})

