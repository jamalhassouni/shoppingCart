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
    // Create an Object with Course data 
    const courseInfo = {

        image: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }

    // insert into the shopping cart 
    addIntoCart(courseInfo);
}

// Display the selected course into the shopping cart 
let addIntoCart = courseInfo => {
  // Create a <tr>
 const row = document.createElement('tr');

 // Build the template 
  
}



// Listeners 



let loadEventListeners = () => {
    // when a new course is added 
    courses.addEventListener('click', buyCourse);

}


loadEventListeners();