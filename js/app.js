// Variables 
const courses = document.querySelector('#courses-list'),
    shoppingCartContent = document.querySelector('#cart-content tbody'),
    clearCartBtn = document.querySelector('#clear-cart');






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
let addIntoCart = course => {
    // Create a <tr>
    const row = document.createElement('tr');

    // Build the template 
    row.innerHTML = `
     <tr>
         <td>
            <img src="${course.image}" width = '100px'>       
         </td>
         <td>${course.title}</td>
         <td>${course.price}</td>
         <td>
          <a href="#" class="remove" data-id="${course.id}">X</a>
         </td>


     </tr>
  `;
    // Add into the shopping cart
    shoppingCartContent.appendChild(row);

    // Add course into Storage
    saveIntoStorage(course);

}

// Add the courses into  the local storage

let saveIntoStorage = course => {
    let courses = getCourseFromStorage();

    // add the course into the array
    courses.push(course);

    // since storage only saves strings , we need to convert JSON into String
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Get the contents from storage

let getCourseFromStorage = () => {
    let courses;

    // if something exist on storage then we get the value,otherwise create an empty array

    if (localStorage.getItem('courses') === null) {
        courses = [];
    } else {
        courses = JSON.parse(localStorage.getItem('courses'));
    }

    return courses;
}

// Remove course from the dom


let removeCourse = (e) => {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.parentElement.remove();
    }
}


// Clears the shopping cart 

let clearCart = (e) => {
    // shoppingCartContent.innerHTML = '';
    while (shoppingCartContent.firstChild) {
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }

    // Clear from Local Storage
    clearLocalStorage();
}

// Clears the whole local storage
let clearLocalStorage = () => {
    localStorage.clear();
}

// Loads when document is ready and print courses into shopping cart

let getFromLocalStorage = () => {
    let coursesLS = getCourseFromStorage();

    // Loop throught the courses and print into the cart

    coursesLS.forEach(course => {
        // create the <tr>
        const row = document.createElement('tr');

        // Build the template 
        row.innerHTML = `
         <tr>
             <td>
                <img src="${course.image}" width = '100px'>       
             </td>
             <td>${course.title}</td>
             <td>${course.price}</td>
             <td>
              <a href="#" class="remove" data-id="${course.id}">X</a>
             </td>
    
    
         </tr>
      `;
        shoppingCartContent.appendChild(row);
    });

}

// Listeners 



let loadEventListeners = () => {
    // when a new course is added 

    courses.addEventListener('click', buyCourse);

    // when the remove button is clicked

    shoppingCartContent.addEventListener('click', removeCourse);

    // when  Clear Cart  

    clearCartBtn.addEventListener('click', clearCart);

    // Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);

}


loadEventListeners();