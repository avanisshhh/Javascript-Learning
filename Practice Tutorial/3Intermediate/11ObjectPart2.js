var user = {
    firstName: "Avanish",
    lastName: "Kumar",
    role: "admin",
    loginCount: 20,
    facebookSignIn: true,
    courseList: [],
    buyCourse: function (courseName) {

        this.courseList.push(courseName);
    },

    getCoursecount: function () {
        return `${this.firstName} is enrolled in total of  ${this.courseList.length} courses`
    }

};
//var courseList = true;
console.log(user.firstName);
console.log(user.getCoursecount());
user.buyCourse("React JS");
user.buyCourse("Angular");
console.log(user.getCoursecount());