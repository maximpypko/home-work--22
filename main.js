function reverseString(string, result = '') {
  if (string == '') {
    return result;
  } else {
    result += string.slice(- 1);
    string = string.slice(0, -1);
  }
  return reverseString(string, result);
}

reverseString('Надо сделать домашку');

///////////////////////////////////////////////////
/////////////////////0   1   2   3   4   5   6   7   8   9   10  11 12  13  14  15  16
const arrNumbers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];

function getItem(arr, letter, start, end) {
  const indexMiddleElement = Math.ceil( (start + end) / 2);
 
  if (letter === arr[indexMiddleElement]) {
    return indexMiddleElement;
  }
  else if (indexMiddleElement === start) {
    return -1;
  }
  else if (letter < arr[indexMiddleElement]) {
    end = indexMiddleElement - 1;
  }
  else if (letter > arr[indexMiddleElement]) {
    start = indexMiddleElement;
  } 
  return getItem(arr, letter, start, end);
}

console.log(getItem(arrNumbers, 'e', 2, 11));