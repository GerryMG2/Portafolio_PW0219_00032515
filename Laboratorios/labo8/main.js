let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

var contador = 0;
/*
    Función para agregar un hijo a la tabla
*/

let addStudent = (carnet, schedule, late)=>{
    let new_row = document.createElement("tr")
    let datetime = new Date()
    carnet_field.addEventListener("keyup", (e)=>{
        let keyCode = e.keyCode
    });
    new_row.classList.add("table-active")
    new_row.id = `elemento${contador}`;
    new_row.innerHTML = 
        `<th scope='row' id='carnet${contador}'>${carnet}</th>
        <td>${schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${late}</td>
        <td>  <input class="cb" onclick='delete_bt(${contador})' type="button" name="carnet" id="delete_btn" value='${contador}'> </td>
        <td><input type='text' id='confirmar${contador}'></td>`
    
        contador++;
    table_body.appendChild(new_row)
}

/*
    Función para parsear el valor booleano del late_switch
*/


function delete_bt(event){
    let confirmar = document.getElementById(`confirmar${event}`);
    let carnet_conf = document.getElementById(`carnet${event}`)
    let elemento_del = document.getElementById(`elemento${event}`)
    console.log(carnet_conf.innerText.split(" ")[0])
    console.log(confirmar.value);
    if(confirmar.value == carnet_conf.innerHTML){
        elemento_del.parentNode.removeChild(elemento_del);
    
    }
    
}




let parseLateSwitch= (value)=>{
    if(value){
        return "Tardisimo"
    }
    return "A tiempo"
}

/*
    Listener para detectar el click en el boton
*/

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

   

    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
    }else{
        alert("Formáto de carnet no válido")
    }
})


/*
    Listener para disparar el botón cuando se aprete enter
*/

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
    submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
});