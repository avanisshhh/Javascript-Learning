  

  function Phone(){
    this.modelNumber="";
    this.getModelNumber=function(){
        return this.modelNumber;
    }
  }

  function Samsung(){
    this.modelNumber="XXXX-YYY";
    this.latestFeature=function(){
        console.log(`Samsung has a galaxy Z foldable smartphone`);
    }
  }


  Samsung.prototype=new Phone(); //typical inheritence
  let obj=new Samsung();
  console.log(obj.getModelNumber());
  console.log( obj.latestFeature());
