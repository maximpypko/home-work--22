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

const arrNumbers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q'];

function getItem(arr, letter, start, end) {
  arr = arr.slice(start, end)
  start = 0;
  
  const indexMiddleElement = Math.floor(arr.length / 2);
  
  if (letter === arr[indexMiddleElement]) {
    console.log(arr[indexMiddleElement]);
    return
  }
  else if (letter < arr[indexMiddleElement]) {
    arr = arr.slice(start, indexMiddleElement);
    end = arr.length;
  }
  else if (letter > arr[indexMiddleElement]) {
    arr = arr.slice(indexMiddleElement + 1, end);
    end = arr.length + 1;
  } else {
    console.log('Введите другой диапазон или другой символ');
    return
  }
  return getItem(arr, letter, start, end)
}

getItem(arrNumbers, 'n', 6, 13)