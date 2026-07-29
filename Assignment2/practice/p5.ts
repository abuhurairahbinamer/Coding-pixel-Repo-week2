export function counts(tasks: { completed: boolean }[]) {
  const total = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = total - active;

  return { total, active, completed };
}

console.log("p5 task done with deeper",counts([{completed:true},{completed:false},{completed:false}]))

// deeper
//Keeping activeCount in state is a bug because it can go out of sync with tasks.it means if we update the state of one and forgot to update the state of other ,it will print wrong reults
