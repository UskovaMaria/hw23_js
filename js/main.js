const doc = document;
const myForm = doc.forms.myForm;
const choice = myForm.choice;
const Auto = myForm.Auto;
const Notebooks = myForm.Notebooks;
const myForm1 = doc.forms.myForm1;
const brands = myForm1.brands;
const model = myForm1.model;
const send = myForm.send;

const auto = [
  {id:'id0', brand: 'BMW'},
  {id:'id1', brand: 'Honda'},
  {id:'id2', brand: 'Ford'},
];

const notebooks = [
  {id:'id0', brand: 'asus'},
  {id:'id1', brand: 'hp'},
  {id:'id2', brand: 'samsung'},
];

console.log(choice);
console.log(brands);
console.log(model);

Array.from(choice).forEach(function(Auto) {
  Auto.onchange = function() {
    const value = this.value;
  
    console.log(value);
    const optionEl = doc.querySelector('.brands');
    console.log(optionEl);
    
  }
});
  
Array.from(choice).forEach(function(Notebooks) {
  Notebooks.onchange = function() {
    const value = this.value;
  
    console.log(value);
    const optionEl = doc.querySelector('.brands');
    console.log(optionEl);
    
  }
});

// send.onclick = function(e) {
//   e.preventDefault();
  
  
// }



