const studentDetailsDiv = document.querySelector("#student-details")
const addBtn = document.getElementById("add-btn")
const delBtn = document.getElementById("del-btn");

function gen_inp(id){
    section = document.createElement("section");
    section.innerHTML =`<span>Student ${id} Details</span>
        <input type="text" placeholder="Full Name" name="s${id}-name"  />
        <input type="number" placeholder="Roll Number" name="s${id}-rollno"  />
        <input type="number" placeholder="Phone Number" name="s${id}-phone"  />
        <input type="email" placeholder="Email address" name="s${id}-email"  />`

    studentDetailsDiv.appendChild(section);
}

var count_students = 1;

function delStudent(){
    studentDetailsDiv.removeChild(studentDetailsDiv.lastChild)
    count_students--;
    setBtnVisibility();
    if(count_students == 2) delStudent();
}

function addAnotherStudent() {
    count_students++;
    gen_inp(count_students);
    setBtnVisibility();
    if(count_students == 2) addAnotherStudent();
}

function setBtnVisibility(){
    if(count_students>3)
        addBtn.classList.add("disabled");
    else
        addBtn.classList.remove("disabled");

    if(count_students>1)
        delBtn.classList.remove("disabled");
    else
        delBtn.classList.add("disabled");
}