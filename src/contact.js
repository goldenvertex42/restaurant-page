export default function () {
    const mainContainer = document.getElementById('content');

    const headingContainer = document.createElement('div');
    headingContainer.classList.add('heading-container');
    const heading = document.createElement('p');
    heading.classList.add('heading');
    heading.textContent = "Contact Us";
    headingContainer.appendChild(heading);

    const contactsContainer = document.createElement('div');
    contactsContainer.classList.add('contacts-container');
    const contactBox1 = document.createElement('div');
    contactBox1.classList.add('contact-box');
    const contact1Name = document.createElement('h2');
    contact1Name.classList.add('contact-name');
    contact1Name.textContent = "NAME: Denver Norman Clark, III";
    const contact1Phone = document.createElement('p');
    contact1Phone.classList.add('contact-info');
    contact1Phone.textContent = "PHONE: 555-555-5432";
    const contact1Email = document.createElement('p');
    contact1Email.classList.add('contact-info');
    contact1Email.textContent = "EMAIL: pancakeman@DRMP.com";
    contactBox1.append(contact1Name, contact1Phone, contact1Email);

    const contactBox2 = document.createElement('div');
    contactBox2.classList.add('contact-box');
    const contact2Name = document.createElement('h2');
    contact2Name.classList.add('contact-name');
    contact2Name.textContent = "NAME: Emily Danae Clark";
    const contact2Phone = document.createElement('p');
    contact2Phone.classList.add('contact-info');
    contact2Phone.textContent = "PHONE: 555-555-5678";
    const contact2Email = document.createElement('p');
    contact2Email.classList.add('contact-info');
    contact2Email.textContent = "EMAIL: pancakelady@DRMP.com";
    contactBox2.append(contact2Name, contact2Phone, contact2Email);
    
    contactsContainer.append(contactBox1, contactBox2);
    
    mainContainer.append(headingContainer, contactsContainer);
}