// Variables 
const courses = document.querySelector('#courses-list');






// Functions 
let buyCourse = (e) => {
    e.preventDefault();
    // Use delegation to find course that was added
    if (e.target.classList.contains('add-to-cart')) {
        //  read the course values 
        const course = e.target.parentElement.parentElement;

        // read the values

        getCourseInfo(course);

    }
}

// Reads the HTML information of the selected course

let getCourseInfo = course => {
    console.log('get info', course);
}




// Listeners 



let loadEventListeners = () => {
    // when a new course is added 
    courses.addEventListener('click', buyCourse);

}


loadEventListeners();