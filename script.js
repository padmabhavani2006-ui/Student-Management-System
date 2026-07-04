let students = JSON.parse(localStorage.getItem("students")) || [];

const table = document.getElementById("studentTable");

const count = document.getElementById("count");

function save() {
    localStorage.setItem("students", JSON.stringify(students));
}

function display(data = students) {

    table.innerHTML = "";

    data.forEach((student,index)=>{

        table.innerHTML += `

        <tr>

        <td>${index+1}</td>

        <td>${student.name}</td>

        <td>${student.roll}</td>

        <td>${student.department}</td>

        <td>${student.year}</td>

        <td>${student.email}</td>

        <td>${student.phone}</td>

        <td>

        <button class="edit" onclick="editStudent(${index})">

        Edit

        </button>

        </td>

        <td>

        <button class="delete"

        onclick="deleteStudent(${index})">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

    count.innerText = students.length;

}

display();

document.getElementById("studentForm").addEventListener("submit",function(e){

e.preventDefault();

students.push({

name:name.value,

roll:roll.value,

department:department.value,

year:year.value,

email:email.value,

phone:phone.value

});

save();

display();

this.reset();

});

function deleteStudent(index){

if(confirm("Delete Student?")){

students.splice(index,1);

save();

display();

}

}

function editStudent(index){

let s=students[index];

name.value=s.name;

roll.value=s.roll;

department.value=s.department;

year.value=s.year;

email.value=s.email;

phone.value=s.phone;

students.splice(index,1);

save();

display();

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

display(students.filter(s=>s.name.toLowerCase().includes(value)));

});

document.getElementById("filter").addEventListener("change",function(){

if(this.value=="All"){

display();

}else{

display(students.filter(s=>s.department==this.value));

}

});