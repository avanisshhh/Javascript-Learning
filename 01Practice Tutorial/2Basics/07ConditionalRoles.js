//Create an app with following roles
//admin:-get full access
//subadmin -access to create and delete course
//testprep-access to create/ delete test
//user-get access to consume content

var user = "testprep";
switch (user) {
    case "admin": console.log("get full access");

        break;
    case "subadmin": console.log("access to create and delete course");

        break;
    case "testprep": console.log("access to create/ delete test");

        break;
    case "user": console.log("");

        break;

    default: console.log("enjoy");
        break;
}