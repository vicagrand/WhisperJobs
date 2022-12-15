var contactName = document.getElementById("contactName");
var contactPhone = document.getElementById("contactPhone");
var contactMail = document.getElementById("contactMail");
var contactForm = document.getElementById("contactForm");
var contactTable = document.getElementById("result");
var contacts;
var nameAlert = document.getElementById("nameAlert");
var phoneAlert = document.getElementById("phoneAlert");
var mailAlert = document.getElementById("mailAlert");
var search = document.getElementById("search");
contactForm.addEventListener("submit", addContact);
search.addEventListener("keyup", searchContact);
displayContacts();
function addContact(e) {
  e.preventDefault();
  var contact = {
    name: contactName.value,
    phone: contactPhone.value,
    mail: contactMail.value
  };
  if (
    !validateContact(contactName.value, contactPhone.value, contactMail.value)
  ) {
    return false;
  }
  if (localStorage.getItem("contacts") === null) {
    contacts = [];
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  } else {
    contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
  displayContacts();
  contactForm.reset();
}
function displayContacts() {
  if (localStorage.getItem("contacts") !== null) {
    var temp = "";
    contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    for (var i = 0; i < contacts.length; i++) {
      temp += `<tr id="contact"><td>${contacts[i].name}</td><td>${
        contacts[i].phone
      }</td><td>${
        contacts[i].mail
      }</td><td><button class="btn btn-outline-danger btn-sm" onclick="deleteContact('${
        contacts[i].name
      }')">Remove</button></td></tr>`;
    }
    contactTable.innerHTML = temp;
  }
}
function deleteContact(name) {
  contacts = JSON.parse(localStorage.getItem("contacts"));
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].name == name) {
      contacts.splice(i, 1);
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
  }
}
function validateContact(name, phone, email) {
  if (name == "") {
    nameAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    contact name is required
  </div>`;
    return false;
  } else {
    nameAlert.innerHTML = "";
  }
  if (phone == "") {
    phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    contact phone is required
  </div>`;
    return false;
  } else {
    phoneAlert.innerHTML = "";
  }
  if (email == "") {
    mailAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    contact email is required
  </div>`;
    return false;
  } else {
    mailAlert.innerHTML = "";
  }
  if (localStorage.getItem("contacts") !== null) {
    contacts = JSON.parse(localStorage.getItem("contacts"));
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].name == name) {
        nameAlert.innerHTML = `<div class="alert alert-danger" role="alert">
      this contact name already exist
    </div>`;
        return false;
      } else {
        nameAlert.innerHTML = "";
      }
      if (contacts[i].phone == phone) {
        phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
      this contact phone already exist
    </div>`;
        return false;
      } else {
        phoneAlert.innerHTML = "";
      }
      if (contacts[i].mail == email) {
        mailAlert.innerHTML = `<div class="alert alert-danger" role="alert">
      this contact email already exist
    </div>`;
        return false;
      } else {
        mailAlert.innerHTML = "";
      }
    }
  }
  var rephone = /(201)[0-9]{9}/;
  if (!rephone.test(phone)) {
    phoneAlert.innerHTML = `<div class="alert alert-danger" role="alert">
    please enter a valid phone number ex: 00201019585800
  </div>`;
    return false;
  }
  var reMail = /\S+@\S+\.\S+/;
  if (!reMail.test(email)) {
    `<div class="alert alert-danger" role="alert">
    please enter a valid email
  </div>`;
    return false;
  }
  return true;
}
function searchContact() {
  var filter = search.value.toUpperCase();
  var tr;
  if (localStorage.getItem("contact") != false) {
    for (var i = 0; i < contacts.length; i++) {
      tr = contactTable.getElementsByTagName("tr")[i];
      td = tr.getElementsByTagName("td")[0];
      if (td.textContent.toUpperCase().indexOf(filter) > -1) {
        tr.style.display = "";
      } else {
        tr.style.display = "none";
      }
    }
  }
}
                                               
                                                      