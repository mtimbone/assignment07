// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let form = document.querySelector('#addForm');
let table = document.querySelector('#employees');


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    
    // PREVENT FORM SUBMISSION

    e.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES

    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let extension = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    let row = table.insertRow(1);
   
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    let ID = row.insertCell(0);
    let Name = row.insertCell(1);
    let Email = row.insertCell(2);
    let Ext = row.insertCell(3);
    let Department = row.insertCell(4);
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    ID.appendChild(document.createTextNode(id));
    Name.appendChild(document.createTextNode(name));
    Email.appendChild(document.createTextNode(email));
    Ext.appendChild(document.createTextNode(extension));
    Department.appendChild(document.createTextNode(department));
      
    // CREATE THE DELETE BUTTON
     
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    Department.appendChild(deleteBtn);

    // RESET THE FORM
      
    form.reset();

       
    // SET FOCUS BACK TO THE ID TEXT BOX

    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  
});


table.addEventListener('click', (e) => {
    // CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
    
    
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
       
        if (confirm('Are you sure you want to delete this task?')) {  
         
            table.deleteRow(e.target.parentElement.rowIndex);  
        }
    }
});

