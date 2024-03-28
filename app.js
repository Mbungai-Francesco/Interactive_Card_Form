const form = document.querySelector('form')
const thanks = document.querySelector('.thanks')
const labels = document.querySelectorAll('.above label')
const names = document.querySelectorAll('.above input')
const nums = document.querySelectorAll('.nums input')
const cvc = document.querySelector('.below label input')
const err0 = document.querySelector('#error0')
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
  // console.log(ele.length);
  if(ele.length == 4) ele[3].style.borderColor = 'red'
}
const errNone = (...ele) =>{
  ele[0].style.display = 'none'
  ele[1].style.alignSelf = 'flex-end'
  ele[2].style.borderColor = gray
  if(ele.length == 4) ele[3].style.borderColor = gray
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

const now = moment();
console.log(now.format("YYYY"));

const submits = () =>{
  var trues = []
  trues.push(true)
  console.log('lop')
  if(names[0].value.length == 0){
    err0.style.display = 'block'
    trues[0] = false
  }
  if(names[1].value.length == 0 || names[1].value.length < 16){
    names[1].style.borderColor = 'red'
    err.style.display = 'block'
    trues.push(false)
  }
  else{
    names[1].style.borderColor = gray
    err.style.display = 'none'
    trues.push(true)
  }
  const future = eval(`${Number(now.format("YYYY"))} - 20${nums[1].value}`) <= 0 ? 0 : 1
  console.log(`${future} future`)
  if(! checkDate(nums[0].value,nums[1].value) || future ) {
    errBlock(err3,label,nums[0],nums[1])
    trues.push(false)
  }
  else {
    trues.push(true)
    errNone(err3,label,nums[0],nums[1])
  }
  if(cvc.value.length == 0 || cvc.value.length < 3) {
    trues.push(false)
    errBlock(err3,label,cvc)
  }
  else {
    trues.push(true)
    errNone(err3,label,cvc)
  }
  console.log(trues.length)
  trues.forEach(element => {
    console.log(element)
  });
  if(trues[0]==true && trues[1]==true && trues[2]==true && trues[3]==true){
    form.style.display = 'none'
    thanks.style.display = 'block'
  }
  // if(nums[0].value.length == 0 || nums[1].value.length == 0 || cvc.value.length == 0){
  //   errBlock
  // }
}

names[0].addEventListener('focusout', function (){
  if(names[0].value.length == 0) document.querySelector('#name').textContent = 'Jane Appleseed'
})
names[0].addEventListener('keyup', function (e){
  document.querySelector('#name').textContent = names[0].value
  err0.style.display = 'none'
  // console.log(names[0].value)
})

names[1].addEventListener('focusout', function (){
  if(names[1].value.length == 0) document.querySelector('#card_num').textContent = '0000 0000 0000 0000'
})
var take,taker
names[1].addEventListener('keyup', function (e){
  if(names[1].value.length <= 16 || e.key == 'Backspace'){
    take = names[1].value
    taker = ''
    for (let i = 0; i < take.length; i++) {
      taker += take[i]
      if((i+1)%4 == 0){
        taker += " "
      }
    }
    document.querySelector('#card_num').textContent = taker
    names[1].value = formatCardNumber(names[1])
  }
})

nums[0].addEventListener('focusout', function (){
  if(nums[0].value.length == 0) document.querySelectorAll('#base_date span')[0].textContent = '00'
})
nums[0].addEventListener('keyup', function (e){
  document.querySelectorAll('#base_date span')[0].textContent = nums[0].value
  nums[0].value = formatCardNumber(nums[0])
})

nums[1].addEventListener('focusout', function (){
  if(nums[1].value.length == 0) document.querySelectorAll('#base_date span')[1].textContent = '00'
})
nums[1].addEventListener('keyup', function (e){
  // errNone(err2,label,nums[1])
  document.querySelectorAll('#base_date span')[1].textContent = nums[1].value
  nums[1].value = formatCardNumber(nums[1])
})

cvc.addEventListener('focusout', function (){
  if(cvc.value.length == 0) document.querySelector('#cvc').textContent = '000'
})
cvc.addEventListener('keyup', function (e){
  document.querySelector('#cvc').textContent = cvc.value
  cvc.value = formatCardNumber(cvc)
  // console.log(cvc.value)
})