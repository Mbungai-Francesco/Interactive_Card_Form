const names = document.querySelectorAll('.above input')
const nums = document.querySelectorAll('.nums input')
const cvc = document.querySelector('.below label input')
const err = document.querySelector('#error')
const err2 = document.querySelector('#error2')
const err3 = document.querySelector('#error3')
const label = document.querySelector('.below label')
const gray = 'hsl(283, 5%, 73%)'

const card_cvc = document.querySelector('#cvc')
const card_name = document.querySelector('#name')
const card_num = document.querySelector('#card_num')
const card_date = document.querySelectorAll('#base_date span')

const errBlock = (...ele) =>{
  ele[0].style.display = 'block'
  ele[1].style.alignSelf = 'flex-start'
  ele[2].style.borderColor = 'red'
}
const errNone = (...ele) =>{
  ele[0].style.display = 'none'
  ele[1].style.alignSelf = 'flex-end'
  ele[2].style.borderColor = gray
}
const checkDate = (m,y) =>{
  console.log(typeof m)
  // var date = moment(`20${y}-0${m}`);
  // console.log(date)
  date = new Date(`20${y}-0${m}`)
  console.log(date)
  if (isNaN(date.getTime()) || date.getTime() < 0) return false
  else return true
}

const  formatCardNumber = (input) => {
  const cleanedInput = input.value.replace(/\D/g, "");
  const regex = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;
  const formatted = cleanedInput.replace(regex, "$1 $2 $3 $4");
  return formatted;
}

names[0].addEventListener('focusout', function (){
  if(names[0].value.length == 0) document.querySelector('#name').textContent = 'Jane Appleseed'
})
names[0].addEventListener('keyup', function (e){
  document.querySelector('#name').textContent = names[0].value
  console.log(names[0].value)
})

names[1].addEventListener('focusout', function (){
  if(names[1].value.length == 0) document.querySelector('#card_num').textContent = '0000 0000 0000 0000'
})
var take,taker
names[1].addEventListener('keyup', function (e){
  if(names[1].value.length <= 16){
    names[1].style.borderColor = gray
    err.style.display = 'none'
    take = names[1].value
    taker = ''
    for (let i = 0; i < take.length; i++) {
      taker += take[i]
      console.log(taker)
      if((i+1)%4 == 0){
        taker += " "
      }
    }
    document.querySelector('#card_num').textContent = taker
    // names[1].value = formatCardNumber(names[1])
  }
  else {
    err.style.display = 'block'
    names[1].style.borderColor = 'red'
  }
})

nums[0].addEventListener('focusout', function (){
  if(nums[0].value.length == 0) document.querySelectorAll('#base_date span')[0].textContent = '00'
})
nums[0].addEventListener('keyup', function (e){
  if(nums[0].value.length <= 2){
    errNone(err2,label,nums[0])
    document.querySelectorAll('#base_date span')[0].textContent = nums[0].value
    nums[0].value = formatCardNumber(nums[0])
    console.log(nums[0].value)
  }
  else errBlock(err2,label,nums[0])
})
nums[1].addEventListener('focusout', function (){
  if(nums[1].value.length == 0) document.querySelectorAll('#base_date span')[1].textContent = '00'
  else if(! checkDate(nums[0].value,nums[1].value)) errBlock(err3,label,nums[1])
})
nums[1].addEventListener('keyup', function (e){
  if(nums[1].value.length <= 2){
    errNone(err2,label,nums[1])
    document.querySelectorAll('#base_date span')[1].textContent = nums[1].value
    nums[1].value = formatCardNumber(nums[1])
    console.log(nums[1].value)
  }
  else errBlock(err2,label,nums[1])
})

cvc.addEventListener('focusout', function (){
  if(cvc.value.length == 0) document.querySelector('#cvc').textContent = '000'
})
cvc.addEventListener('keyup', function (e){
  if(cvc.value.length <= 3){
    errNone(err2,label,cvc)
    document.querySelector('#cvc').textContent = cvc.value
    cvc.value = formatCardNumber(cvc)
    console.log(cvc.value)
  }
  else errBlock(err2,label,cvc)
})
console.log('loop')

console.log(moment(`19${11}-0${5}`))