
var occurence=(val)=>{
    let obj={};
    val.split('').forEach((ele)=>{
      if(obj.hasOwnProperty(ele)){
        obj[ele]++;
      }
      else{
        obj[ele]=1;
      }
    })
    return obj;
    
  }