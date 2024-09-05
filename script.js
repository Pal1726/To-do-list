const addbtn = document.querySelector("#add-btn");
const newTaskInput =document.querySelector("#containt input");
const tasksContainer= document.querySelector("#tasks");
const error= document.getElementById("error");
const countvalue= document.querySelector(".count-value");
let taskcount=0;

 const displaycount = (taskcount)=> 
 {  countvalue.innerText = taskcount;
};
 const addTask = () => 
 {
    const taskName = newTaskInput.value.trim();
    error.style.display="none";
    if(!taskName)
    {
        setTimeout(() =>
        { error.style.display="block";

        },200);
        return;   
    }
    const task =`<div class="task">
    <input type="checkbox" class="task-check">
    <span class="task-name">${taskName}</span>
    <button class="edit"> 
    <i class='fa fa-edit'></i>
    </button>
   <button class="delete"><i class='fa fa-trash'></i></i>
    </button>
    </div>`;
    tasksContainer.insertAdjacentHTML("beforeend",task);
   

    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((buutton)=>
    {
        buutton.onclick =()=>{
            buutton.parentNode.remove();
            taskcount -= 1;
            displaycount(taskcount);
        };
    });
const editButtons = document.querySelectorAll(".edit");
editButtons.forEach((editbtn)=> {
    editbtn.onclick =(e)=>{
let targetElement =e.target;
if(!(e.target.className=="edit")){
    targetElement=e.target.parentElement;
}
newTaskInput.value =targetElement.previousElementSiblings?.innerText;
targetElement.parentNode.remove();
taskcount -= 1;
displaycount(taskcount);
    };
});
  const tasksCheck =  document.querySelectorAll(".task-check");
  tasksCheck.forEach((checkBox)=>{
    checkBox.onchange= ()=> {
        checkBox.nextElementSibling.classList.toggle("completed");
        if(checkBox.checked){
            taskcount -= 1;
        }
        else{
            taskcount += 1;
        }
        displaycount(taskcount);
    };
  });
  taskcount +=1;
  displaycount(taskcount);
  newTaskInput.value="";
 };
 addbtn.addEventListener("click",addTask);

 window.onload= () => {
    taskcount=0;
    displaycount(taskcount);
    newTaskInput.value=""; 
 };
