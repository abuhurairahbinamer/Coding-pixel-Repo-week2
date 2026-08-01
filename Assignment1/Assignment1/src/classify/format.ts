export const format=(n: number): string=> {
  return n.toLocaleString();
}
//deeper
 export const formatWithDeeper=(n: number): string=>{
  if (n > 999) return "999+";
  return n.toLocaleString();
}