export default function getListStudentIds(arr) {
  let newArry = [];
  if (arr instanceof Array) {
    newArry = arr.map((item) => item.id);
  }

  return newArry;
}
