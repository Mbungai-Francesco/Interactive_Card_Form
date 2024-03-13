const names = document.querySelectorAll('.above input')
const nums = document.querySelectorAll('.nums input')
const cvc = document.querySelector('.below label input')
const card_name = document.querySelector('#name')
const card_nums = document.querySelectorAll('#card_num span')
// var here_name = ""
// var here_num = ""

const checker = () =>{
  if(names[0].value.length != 0 && names[1].value.length == 16 && (nums[0].value.length>=1 && nums[0].value.length<=12) && (nums[1].value.length>=1874 && nums[1].value.length<=2024) && cvc.value.length == 3){
    card_name = names[0].value
    for (let j = 0; j < 4; j++) {
      const element = array[j];
      
    }
    card_nums
  }
}