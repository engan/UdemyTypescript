function addFunc(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function printResultFunc(num: number): void {
    console.log('Result: ' + num);
  }
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  printResultFunc(addFunc(5, 12));
  
  // FUNCTION TYPES
  // Function types define the parameters and return type of a function
  let combineValues: (a: number, b: number) => number;
  
  combineValues = addFunc;
  
  addAndHandle(10, 20, (result) => {
    console.log(result);
  });


  // Callback functions can return something, even if 
  // the argument on which they're passed does NOT expect a returned value.
  function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });