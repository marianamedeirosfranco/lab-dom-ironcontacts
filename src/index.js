// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
//Append the new row to the table body
tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...

const tableContacts = threeContacts.forEach((contact) => {
  const row = document.createElement("tr");

  row.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  //Append the new row to the table body
  tableBody.appendChild(row);
});

// ITERATION 2 - Delete Buttons

const buttonDelete = row.querySelector(".btn-delete");
buttonDelete.addEventListener("click", function () {
  // Remove the row from the table body
  row.remove();
});

// ITERATION 3 - Like Buttons

const buttonLike = row.querySelector(".btn-like");

buttonLike.addEventListener("click", function () {
  // Toggle the class 'selected' on the button
  buttonLike.classList.toggle("selected");
});

// Bonus: ITERATION 4 - Add Random Contacts

// Add a click event listener to the button 'Add Random Contact'
buttonAddRandom.addEventListener("click", function () {
  // Get a random contact from the contacts array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];

  // Create a new row with the contact data
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  // Add a click event listener to the button 'Delete'
  const buttonDelete = row.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", function () {
    // Remove the row from the table body. The 'remove()' is used to remove the element from the DOM
    row.remove();
  });

  // Add a click event listener to the button 'Like'
  const buttonLike = row.querySelector(".btn-like");
  buttonLike.addEventListener("click", function () {
    // Toggle the class 'selected' on the button
    buttonLike.classList.toggle("selected");
  });

  // Append the new row to the table body
  tableBody.appendChild(row);
});
