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
  const working_btn = document.createElement("button");
  working_btn.textContent = "作業中";
  const delete_btn = document.createElement("button");
  delete_btn.textContent = "削除";
  const trEl = document.createElement("tr");
  trEl.appendChild(id_td);
  trEl.appendChild(commentEl);
  trEl.appendChild(working_btn);
  trEl.appendChild(delete_btn);
  const todoEl = document.getElementById("id_tbody");

  todoEl.appendChild(trEl);
  taskid++;

  delete_btn.addEventListener('click', () => {
    console.log('リストを削除');
    id_tbody.removeChild(trEl);
  });
  working_btn.addEventListener('click', () => {
    console.log('表示を変更');
    if (working_btn.textContent === "作業中") {
      working_btn.textContent = "完了";
    } else {
      working_btn.textContent = "作業中";
    }
  });

}, false);