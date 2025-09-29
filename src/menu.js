export default function () {
    const mainContainer = document.getElementById('content');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    const heading = document.createElement('p');
    heading.classList.add('heading');
    heading.textContent = "Our Menu";
    headingContainer.appendChild(heading);

    const beveragesContainer = document.createElement('div');
    beveragesContainer.classList.add('beverages-container');
    const bevTitle = document.createElement('h2');
    bevTitle.classList.add('beverages-heading');
    bevTitle.textContent = "Beverages!";
    const bev1 = document.createElement('p');
    bev1.classList.add('bev');
    bev1.textContent = "Whole Milk $2";
    const bev2 = document.createElement('p');
    bev2.classList.add('bev');
    bev2.textContent = "Apple Juice $2";
    const bev3 = document.createElement('p');
    bev3.classList.add('bev');
    bev3.textContent = "Orange Juice $2";
    beveragesContainer.append(bevTitle, bev1, bev2, bev3);

    const mainPlatesContainer = document.createElement('div');
    mainPlatesContainer.classList.add('main-plates-container');
    const mainPlatesTitle = document.createElement('h2');
    mainPlatesTitle.classList.add('main-plates-heading');
    mainPlatesTitle.textContent = "Famous Pancakes!";
    mainPlatesContainer.appendChild(mainPlatesTitle);
    
    function makePlate(plateTitle, plateDescription) {
        const plate = document.createElement('div');
        plate.classList.add('plate-container');
        const innerPlateTitle = document.createElement('p')
        innerPlateTitle.classList.add('plate-title');
        innerPlateTitle.textContent = plateTitle;
        const innerPlateDescription = document.createElement('p')
        innerPlateDescription.classList.add('plate-description');
        innerPlateDescription.textContent = plateDescription;
        plate.append(innerPlateTitle, innerPlateDescription);
        mainPlatesContainer.appendChild(plate);
    }

    makePlate("Summit Pancakes $10", `These are the ultimate pancake experience!
                    Stacked high with 4 incredibly fluffy pancakes and topped with real 
                    peanut butter, hot fudge, and whipped cream, you won't want for any
                    decadence when enjoying this plate!`);
    makePlate("Ol' Reliable $7", `This is the plate that most people will order
                    for most occasions! A plate of 4 incredibly fluffy pancakes each served
                    with copious amounts of butter and syrup on the side so that you can 
                    customize the decadence of your plate!`);
    makePlate("Mountaineer Pancakes $12", `These pancakes are meant for the intrepid
                    explorer! Fuel your advenure with a plate of 4 incredibly fluffy pancakes
                    topped with a mix of fresh apples, cranberries, and walnuts mixed with a 
                    cinnamon sugar butter!`);

    
    
    mainContainer.append(headingContainer, beveragesContainer, mainPlatesContainer);
}