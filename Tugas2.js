const mtk = 75;
const bahasaindonesia = 80;
const bahasainggris = 70;
const ipa = 80;

let ratarata = (mtk + bahasaindonesia + bahasainggris + ipa) / 4;
let grade;

if (isNaN(mtk, bahasaindonesia, bahasainggris, ipa) == false) {
  if (90 <= ratarata && ratarata <= 100) {
    grade = 'A';
    console.log(ratarata);
    console.log(grade);
  } else if (80 <= ratarata && ratarata <= 89) {
    grade = 'B';
    console.log(ratarata);
    console.log(grade);
  } else if (70 <= ratarata && ratarata <= 79) {
    grade = 'C';
    console.log(ratarata);
    console.log(grade);
  } else if (60 <= ratarata && ratarata <= 69) {
    grade = 'D';
    console.log(ratarata);
    console.log(grade);
  } else if (0 <= ratarata && ratarata <= 59) {
    grade = 'E';
    console.log(ratarata);
    console.log(grade);
  }
} else {
  console.log('data tidak di temukan');
}
