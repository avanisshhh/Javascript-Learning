import { of, map } from 'rxjs'; 
obs=of(1,2,3,4,5);
obs1=of([1,2,3,4,5]);
this.obs.subscribe((val)=>console.log(val));