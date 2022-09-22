function printSegitiga(number) {
  let hasil = '';
  for (let i = number; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      hasil += j;
    }
    hasil += '\n';
  }
  return console.log(hasil);
}

printSegitiga(5);
