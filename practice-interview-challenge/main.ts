function getRangeReport(start: number, end: number): number[] {
  const range: number[] = [];
  for (let i = 0; i <= length; i++) {
    range[i].length;
    console.log('range:', getRangeReport(1, 10));
  }

  for (let i = 0; i <= length; i++) {
    if (i % 2 === 0) {
      range.push(i);
    } else {
      range.push(i + 1);
    }
    console.log('odds', getRangeReport(1, 17));
    console.log('evens', getRangeReport(1, 12));
  }

  let sum: number = 0;
  for (let i = 0; i <= range.length; i++) {
    sum += range[i];
  }
  console.log('total', getRangeReport(1, 10));

  for (let i = 0; i <= range.length; i++) {
    sum += range[i] / range.length;
  }
}
