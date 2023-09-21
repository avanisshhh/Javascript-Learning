class User{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    //courseList=[];
    #courseList=[];

    getInfo(){
        return { name:this.name,email:this.email} ;    //return an object here
    }
    enrollCourse(name){
        // this.courseList.push(name);
        this.#courseList.push(name);

    }
    getCourseList(){
        // return this.courseList;
        return this.#courseList;
    }
    login(){
        return "you are logged in.."
    }
    //if we use static before any method it will not going to inherit in subclass not any other place
}
class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }

    getAdminInfo(){
        return "I am Subadmin"
    }
    login(){
        return "login for admin only"
    }
}


module.exports=User; //export entire class

//55 private use of getter and setter
const rock=new User("rock","rock@avi.com")
//console.log(rock.getInfo());
rock.enrollCourse("AngularJs bootcamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList);

//Inheritence

const tom =new SubAdmin("tom","tom@dev.in");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());