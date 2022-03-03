export function palindromeAlgo(str){
  // fix algo to accept either a single word or sentence, regex works but app doesn't
  str.toUpperCase()
  str.replace(/\s+/g, '')
  let left = 0;
  let right = str.length - 1;
  
  if(str.length === 0) {
    return alert('Please enter a word to begin')
 }

while(left < right){
 if(str[left] !== str[right]) return alert(`${str} is not a palindrome :(`) 
    left++;
    right--
  }
  return alert(`${str} is a palindrome!`)
}
