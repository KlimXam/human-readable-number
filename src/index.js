module.exports = function toReadable(num)
{
const arr    = []; 
const numArr = []; 
const numberStr =
    { 
    '0': 'zero',         
    '1': 'one',   
    '2': 'two',      
    '3': 'three',   
    '4': 'four',    
    '5': 'five',     
    '6': 'six',      
    '7': 'seven', 
    '8': 'eight',   
    '9': 'nine',   
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve', 
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen', 
    '18': 'eighteen',
    '19': 'nineteen',
    '20' : 'twenty',
    '30' : 'thirty',
    '40' : 'forty',
    '50' : 'fifty',
    '60' : 'sixty',
    '70' : 'seventy',
    '80' : 'eighty',
    '90' : 'ninety',
    '100': 'hundred'
  }
, numbers = val =>
  {
  let
    vTen   = val % 100
  , valStr = val.toString(10)  
  , res    = []
    ;
  if (val > 100) res.push( numberStr[valStr[0]], numberStr[100] )
  
  if (val === 0) res.push( numberStr['0'] ) 
  else if (vTen < 20)  
    { if (vTen)  res.push( numberStr[vTen] ) }
  else 
    {
    let n = vTen % 10;
    vTen -= n;
    res.push( numberStr[vTen] )
    if (n>0) res.push( numberStr[n] )
    }
  return res.join(' ')
  }
let n3d;
do{
  n3d = num % 1000
  arr.push( n3d )
  num -= n3d
  num /= 1000
  }
  while(num > 0)

for (let i=arr.length;i--;) 
  {
  if (i>0)
    {
    if (arr[i] > 0) numArr.push(numbers(arr[i]), mParts[i] )
    }
  else if (arr.length===1 || arr[i] > 0 ) 
    numArr.push( numbers(arr[i]) )
  }
return numArr.join(' ') 
}