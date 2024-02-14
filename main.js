//유저가 값을 입력한다
//+버튼을 클릭하면, 할일이 추가된다.
//delete버튼을 누르면 할 일이 삭제된다.
//check버튼을 누르면 할일이 끝나면서 밑줄이 간다
//1. check버튼을 클릭하는 순간 true false
//2. true이면 끝난걸로 간주하고 밑줄 보여주기
//3. false이면 안 끝난걸로 간주하고 그대로

//진행 중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은, 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체 아이템으로 돌아옴

let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let taskList=[];

addButton.addEventListener('click',addTask);

function addTask(){
    // let taskContent = ;
    let task = {
        id: randomIDGenerate(), //아이디는 유니크한 값이 들어가야된다. 정보에는 아이디 값이 필요하고 generate random id javascript식으로 검색하면됨
        taskContent : taskInput.value,
        isComplete : false,
    }
    taskList.push(task);
    console.log(taskList);
    render();
}   

function render(){
    let resultHTML = '';
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].isComplete == true){
            resultHTML += `<div class="task" style="background-color: #eee;">
            <div id="taskDone" class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">
                    <i class="fa-solid fa-rotate-left"></i>
                </button>
                <button onclick="deleteTask('${taskList[i].id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>`
        } else {
            resultHTML += 
            `<div class="task">
                <div>${taskList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${taskList[i].id}')">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button onclick="deleteTask('${taskList[i].id}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>`
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id){
    console.log("id",id);
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

function deleteTask(id){
    console.log("삭제하자", id);
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
}
function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
    //어떤 함수의 결과물이 다른 곳에서 쓰일 때에 리턴을 하는 것
}

// document.getElementById("test").innerHTML = `<h1>Noona</h1>`;
// document.getElementById("test").textContent = `<h1>Noona</h1>`;
// console.log(document.getElementById("test").innerHTML);
// console.log(document.getElementById("test").textContent);
