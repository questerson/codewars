function insertDash(num) {
   return num.toString().split('').reduce((acc, c, i, arr) => {
     if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
       acc = acc + '-';
     
     return acc + c;
   }, '');
}