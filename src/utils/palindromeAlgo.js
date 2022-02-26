export function palindromeAlgo(str){
  let left = 0;
  let right = str.length - 1;
  if(str.length === 0){
    return alert('Please enter a word to begin')
 }

while(left < right){
 if(str[left] !== str[right]) return alert(`${str} is not a palindrome :(`) 
    left++;
    right--
  }
  return alert(`${str} is a palindrome!`)
}
