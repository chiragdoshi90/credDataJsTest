let temp = {};
let isGrid = false;

loadMeth = function () {
  document.getElementById('funBtn').value = 'Create Grid';
  document.getElementById('code').style.display = 'none';
}

createGrid = function () {
  const code = document.getElementById('code');
  if (isGrid == true) {
    resetGrid();
  } else {
    isGrid = true;
    document.getElementById('code').style.display = 'grid';
    document.getElementById('funBtn').value = 'Reset';
    const v = document.getElementById("mySelect").value;
    code.style.cssText = `grid-template-columns: repeat(` + v + `, auto);`;

    for (let i = 0; i < v; i++) {
      const div = document.createElement('div');
      const addBoxBtn = document.createElement('button');
      addBoxBtn.innerHTML = 'Add Box';
      addBoxBtn.id = i;
      addBoxBtn.onclick = addBoxMeth;
      div.className = 'grid-item';
      div.appendChild(addBoxBtn);
      code.appendChild(div);
    }
  }
}

addBoxMeth = function (event) {
  if (temp[event.srcElement.id] == undefined) {
    temp[event.srcElement.id] = 1;
  } else {
    temp[event.srcElement.id]++;
  }

  const box = document.createElement('div');
  box.className = 'box';
  const span = document.createElement('span');
  span.innerHTML = temp[Object.keys(temp).find(i => i === event.srcElement.id)];
  span.className = 'incremData';
  box.appendChild(span);
  delBtn = document.createElement('button');
  delBtn.innerHTML = 'X';
  delBtn.className = 'delBtn';
  delBtn.onclick = deleteBtnMeth;
  box.appendChild(delBtn);
  event.srcElement.parentElement.appendChild(box);
}

deleteBtnMeth = function (event) {
  event.srcElement.parentElement.parentElement.removeChild(event.srcElement.parentElement)
}

resetGrid = function () {
  isGrid = false;
  document.getElementById('funBtn').value = 'Create Grid';
  document.getElementById('code').style.display = 'none';
  while (code.firstChild) {
    code.removeChild(code.firstChild);
  }
}
