
// let schoolname = 'Circo' 

// let date = 2022

// console.log(schoolname)

// console.log(date)

// let currenthighscore = 200

// let playerscore = 250

// if (250 > 400) {
//     console.log("congratulations you have a new high score")}

// else console.log("nigger")

    

// let numbertocheck = 40;

// if (numbertocheck % 2 === 0) {
//     console.log(`the number ${numbertocheck} is even.`);
// }else{
//     console.log('the number {numbertocheck} is odd.');
// }

// if (numbertocheck % 2 ==! 0) {console.log('the number {numbertocheck} is odd.'); }


// let numberToCheck = 126263572538253839

// let message = (numberToCheck % 2 === 0) ? `${numberToCheck} is even`: ` ${numberToCheck} is odd`

// console.log(message)

// console.log(message) 


// let choice = prompt('choose')

// switch (choice) {
//    case "1":
//      console.log('balance');
//     break;
//      case "2": console.log('withdrawal');
//     break;
//     case '3': console.log('deposit');
//     break;
//     default:
//          console.log('invalid option')
// }

// let choice = prompt('word man')






// let numbers = '1'

// for (let i=0; i <= 10; i++)

//     console.log(i)

// function myfunction () {
//     let vintage = '(Inside the function)';
//     console.log(vintage);
// }

// myfunction()
// let vintage = 'wtf man'
// console.log(vintage);

// function createcounter() {
//     let count = 0;
//     return function() {
//         count ++;
//         console.log(count);
//         };
// }
// let mycounter = createcounter();
// mycounter();
// mycounter();

// function greet() {
//     let name = "myse"
//     console.log ('hello , ${name}')

// const tasks = localStorage('tasks', 'buy groceries') 
// localStorage.setItem(buy groceries)
// localStorage.getItem(buy groceries)
// li.localStorage.getItem(buy groceries)

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
          alert('enter a text nigga!');
        return
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
   

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = function() {
        if (checkbox.checked) {
            li.classList.add('completed');
            
        } else {
            li.classList.remove('completed');
        }
    };

    

    
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        li.remove(); 
    };

    li.append(checkbox);
    li.append(taskSpan);
    li.append(deleteButton);
    taskList.append(li);

    
    taskInput.value = '';

    // let age = document.createElement('p')
    // age.textContent = ('new text')
    // document.querySelector('.input-section').append(age)
}

