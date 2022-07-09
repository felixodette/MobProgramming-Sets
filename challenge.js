function findDuplicates(array) {
  let ourSet = new Set();
  let duplicatedElement = [];
  array.forEach((el) => {
    if (ourSet.has(el) === false) {
      ourSet.add(el);
    } else {
      duplicatedElement.push(el);
    }
  });
  return duplicatedElement;
}