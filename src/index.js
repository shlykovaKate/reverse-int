module.exports = function reverse (n) {
    let reversedN;

    if(n < 0) {
        reversedN = Number(String(n).split('-')[1].split('').reverse().join(''));
    } else {
        reversedN = Number(String(n).split('').reverse().join(''));
    }
  
  return reversedN;
}
