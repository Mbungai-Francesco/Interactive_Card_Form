const names = document.querySelectorAll('.above input')
const nums = document.querySelectorAll('.nums input')
const cvc = document.querySelector('.below label input')
const err = document.querySelector('#error')
const err2 = document.querySelector('#error2')
const label = document.querySelector('.below label')

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

const err2Block = () =>{
  err2.style.display = 'block'
  label.style.alignSelf = 'flex-start'
}
const err2none = () =>{
  err2.style.display = 'none'
  label.style.alignSelf = 'flex-end'
}

nums[0].addEventListener('focusout', function (){
  if(nums[0].value.length == 0) document.querySelectorAll('#base_date span')[0].textContent = '00'
})
nums[0].addEventListener('keyup', function (e){
  if(nums[0].value.length <= 2){
    err2none()
    document.querySelectorAll('#base_date span')[0].textContent = nums[0].value
    console.log(nums[0].value)
  }
  else err2Block()
})
nums[1].addEventListener('focusout', function (){
  if(nums[1].value.length == 0) document.querySelectorAll('#base_date span')[1].textContent = '00'
})
nums[1].addEventListener('keyup', function (e){
  if(nums[1].value.length <= 2){
    err2none()
    document.querySelectorAll('#base_date span')[1].textContent = nums[1].value
    console.log(nums[1].value)
  }
  else err2Block()
})

cvc.addEventListener('focusout', function (){
  if(cvc.value.length == 0) document.querySelector('#cvc').textContent = '000'
})
cvc.addEventListener('keyup', function (e){
  if(cvc.value.length <= 3){
    err2none()
    document.querySelector('#cvc').textContent = cvc.value
    console.log(cvc.value)
  }
  else err2Block()
})
console.log('loop')