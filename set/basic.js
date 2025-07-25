const fffSet = new Set();

fffSet.add(1);
fffSet.add(6);
fffSet.add(6);
console.log('fffSet:', fffSet, 'size:', fffSet.size);

fffSet.add('fff');
console.log('fffSet:', fffSet, 'size:', fffSet.size);

fffSet.add({
  a: 'a',
  b: 'b',
})
console.log('fffSet:', fffSet, 'size:', fffSet.size);

const fff = {
  f: 'f'
}
fffSet.add(fff)
console.log('fffSet:', fffSet);

console.log('fffSet has 1?', fffSet.has(1));
console.log('fffSet has fff object?', fffSet.has(fff));

fffSet.delete(6);
console.log('fffSet:', fffSet, 'size:', fffSet.size);

for (const item of fffSet) {
  console.log('item:', item)
}

// converting a set object to array object
const fffArr1 = Array.from(fffSet)
console.log('fffArr1:', fffArr1);

const fffArr2 = [...fffSet]
console.log('fffArr2:', fffArr2);