var carnet = document.getElementById("carnet_field");
var horario = document.getElementById("schedule_field");
var check = document.getElementById("late_switch");
var btn = document.getElementById("submit_btn");

let carnet_validate = new RegExp("[0-9]{8}");
let tabla = document.getElementById("table_body");

let addStudent = (carnet,horario, tarde) => {
    let new_row = document.createElement("tr");
    let date = new Date();

    new_row.className = "Table_active";

    new_row.innerHTML = `<th  scope="row">${carnet}  </th> 
    <td>${horario}</td>
    <td>${date}</td>
    <td>${tarde1(tarde)}</td>
    
    
    `

    tabla.appendChild(new_row);
}
btn.addEventListener("click", () =>{
    let texto_carnet = carnet.value;
    let horario_texto = horario.value
    let late = check.checked;
    console.log(texto_carnet)
    if(carnet_validate.test(texto_carnet)){
        console.log("validado")
        addStudent(texto_carnet,horario_texto,late);
    }else{

    }
    
})

function tarde1(tarde){
    if(tarde){
        return "tarde";
    }
    else{
        return "a tiempo";
    }
}