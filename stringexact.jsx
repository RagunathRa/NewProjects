var chk = "The cat sat on the caterpillar near the cat cafe"
function check(str1, word){
    const reg = new RegExp("\\b"+ word + "\\b");

console.log("checks", str1.indexOf(word));

return reg.test(str1)
}
console.log( check(chk, "cat"),"---- check----)-----");
// 4. Find ALL occurrences
function findAllIndex(str, word) {
  const results = [];
  let i = str.indexOf(word);
  while (i !== -1) {
    results.push(i);
    i = str.indexOf(word, i + 1);
  }
  return results;
}
console.log(findAllIndex(chk, "cat"), "----000000"); // 4,19,40