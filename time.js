// Class contains constructor method to return value of the class variable
class order{
    constructor(name, address, email , phone){
        this.name=name;
        this.address=address;
        this.email=email;
        this.phone = phone;
    }
    addorder(objorder){
        let tr = document.createElement("tr");
        tr.innerHTML= `
        <td class="text-white"> ${objorder.name} </td> 
        <td class="text-white"> ${objorder.address} </td> 
        <td class="text-white"> ${objorder.email} </td> 
        <td class="text-white"> ${objorder.phone} </td> 
        <td> <button class="delete btn btn-light">X</td> 
        `;
        adding_list.appendChild(tr);
    }
    clean_inputs(){
        document.getElementById("input_name").value="";
        document.getElementById("input_address").value="";
        document.getElementById("input_email").value="";
        document.getElementById("input_phone").value="";
    }
}
let adding_list=document.getElementById("adding_list");
document.getElementById("btn_sub").addEventListener("click",(e)=>{
    let name= document.getElementById("input_name").value;
    let address= document.getElementById("input_address").value;
    let email= document.getElementById("input_email").value;
    let phone= document.getElementById("input_phone").value;
    let objorder= new order (name,address,email,phone);
    let ord= new order();
    objorder.addorder(objorder);

    if(name==="",address==="",email==="",phone===""){
        document.getElementById("empty_alert").style.display="block";
        setTimeout(()=>{
            document.getElementById("empty_alert").remove()
        },4000);
        adding_list.style.display="none";
    }else{
    document.getElementById("added_alert").style.display="block";
    setTimeout(()=>{
        document.getElementById("added_alert").remove()
    },4000);
    objorder.clean_inputs()
}
e.preventDefault()

document.querySelector(".delete").addEventListener("click",(v)=>{
    let ord= new order();
    v.target.parentElement.parentElement.remove();
})
})