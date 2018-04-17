export const sorter = (a, b) => {
  if(a.title.toUpperCase() < b.title.toUpperCase()) return -1;
  if(a.title.toUpperCase() > b.title.toUpperCase()) return 1;
  return 0;
}