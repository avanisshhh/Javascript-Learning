/*
Define a function that can answer role of user.
user with following roles:
admin:-get full access
subadmin -access to create and delete course
testprep-access to create/ delete test
user-get access to consume content
other-trial user
*/

//another way to define fn is>> function getUserRole(name, role)
var getUserRole=function(name,role){
    switch (role) {
            case "admin":
            return `${name} is admin with delete/create  access`
            break;
            case "subadmin":
            return `${name} is sub-admin with all access`
            break;
            case "testprep":
            return `${name} is test prep  with create/delete test`
            break;
            case "user":
            return `${name} is user with consume content`
            break;
            
    
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Avanish","testprep"));