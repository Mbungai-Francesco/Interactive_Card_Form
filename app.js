const names = document.querySelectorAll('.above input')
const nums = document.querySelectorAll('.nums input')
const cvc = document.querySelector('.below label input')
const err = document.querySelector('#error')

const card_cvc = document.querySelector('#cvc')
const card_name = document.querySelector('#name')
const card_num = document.querySelector('#card_num')
const card_date = document.querySelectorAll('#base_date span')

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
  }
  else err.style.display = 'block'
})

nums[0].addEventListener('focusout', function (){
  if(nums[0].value.length == 0) document.querySelectorAll('#base_date span')[0].textContent = '00'
})
nums[0].addEventListener('keyup', function (e){
  document.querySelectorAll('#base_date span')[0].textContent = nums[0].value
  console.log(nums[0].value)
})
nums[1].addEventListener('focusout', function (){
  if(nums[1].value.length == 0) document.querySelectorAll('#base_date span')[1].textContent = '00'
})
nums[1].addEventListener('keyup', function (e){
  document.querySelectorAll('#base_date span')[1].textContent = nums[1].value
  console.log(nums[1].value)
})

cvc.addEventListener('focusout', function (){
  if(cvc.value.length == 0) document.querySelector('#cvc').textContent = '000'
})
cvc.addEventListener('keyup', function (e){
  document.querySelector('#cvc').textContent = cvc.value
  console.log(cvc.value)
})