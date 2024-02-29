let qiymat = 0

function addValue() {
    qiymat += 1
  

  updateValues();
}

function removeValue() {
  if (qiymat != 0) {
    qiymat -= 1;
    
    updateValues();removeValue
  }
}

function updateValues() {
  let qiymatlarElement = document.getElementById('qiymatlar');
  qiymatlarElement.innerHTML = 'Qiymat: ' + qiymat;
}
