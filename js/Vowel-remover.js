function shortcut (string) {
  
  let vowel = ['a', 'e','i', 'o', 'u']
    
  return string.split('').filter(item => !vowel.includes(item)).join('')
      
  return '';
}
