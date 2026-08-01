//p7 task done with deeper

//useLocalStorage reads once via lazy initializer, writes via useEffect on [key, value], uses initial state if storage is empty, and JSON breaks non-primitive types like Date.


const now = new Date();
localStorage.setItem("x", JSON.stringify(now));
const get=localStorage.getItem('x');
const parsed = JSON.parse(get!);
// console.log(parsed.getTime());// error
//instead
const date = new Date(parsed);
console.log("P7 task done with deeper : ",date);