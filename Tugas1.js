const nama = 'Rofiq Hidayat';
const age = 23;
const hobbies = ['Playing Badminton', 'Playing Game'];
const IsMarried = false;

const schoolList = {
  sekolah: 'SMAN 1 ANJATAN',
  yearIn: 2014,
  yearOut: 2017,
  major: 'IPA',
};

const skills = {
  skillName: 'Badminton',
  level: ['beginner', 'advance', 'expert'],
};

console.log(nama);
console.log(age);
console.log(hobbies[0]);
console.log(IsMarried);
console.log(`${schoolList.sekolah} yearIn ${schoolList.yearIn} - yearOut ${schoolList.yearOut} ${schoolList.major}`);
console.log(`${skills.skillName} ${skills.level[1]}`);
