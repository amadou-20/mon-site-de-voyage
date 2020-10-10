const myPromise = new Promise((resolve, rejected) =>{
  
    let condition = true;
    
    if(condition){
      resolve('Promise is resolved successfully.');
    } else {
      rejected('Promise is rejected');
    }
    
  });   
  
  var result = myPromise.then((message) => {
    alert(message)
  }).catch((message) => {
    console.log(message)
  });
  