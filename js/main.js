'use strict'
let taskid = 0;
//イベントリスナ―を登録
const add_btn = document.getElementById('btn');
add_btn.addEventListener('click', () => {
  const id_td = document.createElement("td");
  id_td.textContent = taskid;
  const comment = document.getElementById("id_text").value;
  const commentEl = document.createElement("td");
  commentEl.textContent = (comment);


  const createWorkingBtn = function () {
    //作業中ボタンを生成する処理
    const workingBtn = document.createElement("button");
    workingBtn.textContent = "作業中";
    workingBtn.addEventListener('click', () => {
      console.log('表示を変更');
      if (workingBtn.textContent === "作業中") {
        workingBtn.textContent = "完了";
      } else {
        workingBtn.textContent = "作業中";
      }
    })
    //生成した作業中ボタンを返す処理
    return workingBtn;
  }
  const workingBtn = createWorkingBtn();


  const createDelBtn = function () {
    //削除ボタンを生成する処理
    const delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.addEventListener('click', () => {
      idTbody.removeChild(trEl);
    })
    //生成した削除ボタンを返す処理
    return delBtn;
  }
  const delBtn = createDelBtn()
  

  const trEl = document.createElement("tr");
  trEl.appendChild(id_td);
  trEl.appendChild(commentEl);
  trEl.appendChild(workingBtn);
  trEl.appendChild(delBtn);
  const todoEl = document.getElementById("idTbody");

  todoEl.appendChild(trEl);
  taskid++;


}, false); 