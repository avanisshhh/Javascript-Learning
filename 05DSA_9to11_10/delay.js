const printNumbersForEvery2Sec = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          console.log(i)
        }, i * 2000)
      }
  }
  printNumbersForEvery2Sec(10);