export default function () {
    const mainContainer = document.getElementById('content');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    const heading = document.createElement('p');
    heading.classList.add('heading');
    heading.textContent = "Denver's Rocky Mountain Pancakes";
    headingContainer.appendChild(heading);

    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review-container');
    const review = document.createElement('p');
    review.classList.add('review');
    review.textContent = `Denver's pancakes were unlike anything I've ever experienced!
    It's hard to describe how much of a pleasure eating these pancakes was.
    If you can remember the first time you heard your favorite song or saw your
    favorite movie, then I think you can start to get the picture!`;
    const customer = document.createElement('p');
    customer.classList.add('customer');
    customer.textContent = "--James Owens - CEO and Founder of IHOP";
    reviewContainer.appendChild(review);
    reviewContainer.appendChild(customer);

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    const hoursTitle = document.createElement('p');
    hoursTitle.classList.add('hours');
    hoursTitle.textContent = "Hours";
    hoursContainer.appendChild(hoursTitle);

    function makeDay(day) {
        const item = document.createElement('p');
        item.classList.add(day.toLowerCase(), 'day');
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday") {
            item.textContent = `${day}: 6AM - 6PM`;
        } else if (day === "Thursday" || day === "Friday" || day === "Saturday") {
            item.textContent = `${day}: 6AM - 10PM`;
        } else {
            item.textContent = `${day}: 8AM - 8PM`;  
        }
        hoursContainer.appendChild(item);
    }

    makeDay("Sunday");
    makeDay("Monday");
    makeDay("Tuesday");
    makeDay("Wednesday");
    makeDay("Thursday" );
    makeDay("Friday");
    makeDay("Saturday");

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = "4321 Mountain Loop, Denver, Colorado";
    locationContainer.appendChild(location);

    mainContainer.appendChild(headingContainer);
    mainContainer.appendChild(reviewContainer);
    mainContainer.appendChild(hoursContainer);
    mainContainer.appendChild(locationContainer);
}