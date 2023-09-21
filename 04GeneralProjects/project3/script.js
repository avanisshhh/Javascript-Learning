

const courses = [
    {
        name: "Complete ReactJS course",
        price: "1999"
    },
    {
        name: "Complete Angular course",
        price: "2999"
    },
    {
        name: "Complete C++ course",
        price: "1499"
    },
    {
        name: "Complete Mern course",
        price: "499"
    },
];


function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "" 
    courses.forEach((course) => {
        const li = document.createElement("li") //create diamond <></> in html
        li.classList.add("list-group-item"); //it will add class list in html
        const name = document.createTextNode(course.name) //it will create ref of name
        li.appendChild(name) //appending name inside li

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode(" INR " + course.price);
        span.appendChild(price);

        //here we create seperate li and span. In order to append span inside li
        li.appendChild(span);
        ul.appendChild(li);

    });

}

//generateList();

window.addEventListener("load", generateList) //on page load it ll work


const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});