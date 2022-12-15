let users = [
  {
    name: 'Petro',
    phone: '+904 843 8083 43',
    email: 'testemail@mail.com',
    id: '0' },
  
  {
    name: 'Margo',
    phone: '+345 542 3234 34',
    email: 'candor@mail.net',
    id: '1' },
  
  {
    name: 'Kane',
    phone: '+355 232 3234 56',
    email: 'canabis@mail.ru',
    id: '2' },
  
  {
    name: 'Nuke',
    phone: '+235 345 6524 00',
    email: 'express@gmail.com',
    id: '3' },
  
  {
    name: 'Kristy',
    phone: '+356 325 3467 32',
    email: 'support@mail.ua',
    id: '4' }];
  
  
  
  class PhoneBook {
    constructor(usersArray) {
      this.users = usersArray;
      this.filterValue = '';
      this.userName = document.querySelector('#name');
      this.userPhone = document.querySelector('#tel');
      this.userEmail = document.querySelector('#mail');
      this.usersList = document.querySelector('.users-list');
      this.filterInput = document.querySelector('.search-input');
      this.submitBtn = document.querySelector('.submit-form-btn');
    }
  
    init() {
      this.updateTable(this.users);
  
      this.usersList.addEventListener('click', ({ target: { dataset } }) => {
        if (dataset.userid) {
          this.users = this.users.filter(({ id }) => id !== dataset.userid);
          this.refreshTable();
        }
      });
  
      this.filterInput.addEventListener('input', ({ target: { value } }) => {
        this.filterValue = value.trim().toLowerCase();
        this.refreshTable();
      });
  
      this.submitBtn.addEventListener('click', () => {
        if (this.validateForm()) {
          this.addNewUser();
          this.clearInputs();
          this.refreshTable();
        }
      });
    }
  
    clearInputs() {
      this.userName.value = '';
      this.userPhone.value = '';
      this.userEmail.value = '';
    }
  
    clearTable() {
      this.usersList.innerHTML = '';
    }
  
    checkMatches(value, filter) {
      return value.trim().toLowerCase().includes(filter.toLowerCase()) ? true : false;
    }
  
    validateForm() {
      if (this.userName.value.trim() !== '' &&
      this.userPhone.value.trim() !== '' &&
      this.userEmail.value.trim() !== '') {
        return true;
      }
  
      return false;
    }
  
    addNewUser() {
      this.users.push({
        name: this.userName.value,
        phone: this.userPhone.value,
        email: this.userEmail.value,
        id: new Date().getTime().toString() });
  
    }
  
    createElement(tag, content = '', className = '') {
      const element = document.createElement(tag);
  
      if (content) {
        element.innerHTML = content;
      }
  
      if (className) {
        element.classList.add(className);
      }
  
      return element;
    }
  
    updateTable() {
      const outputArray = this.users.filter(({ name, phone, email }) => {
        if (this.checkMatches(name, this.filterValue) ||
        this.checkMatches(phone, this.filterValue) ||
        this.checkMatches(email, this.filterValue)) {
          return true;
        }
      });
  
      outputArray.forEach(({ name, phone, email, id }) => {
        const userName = this.createElement('td', name, '');
        const userPhone = this.createElement('td', phone, '');
        const userEmail = this.createElement('td', email, '');
        const controls = this.createElement(
        'td', `<i class="fa fa-trash delete" data-userid=${id}></i>`, 'user-info-controls');
  
  
        const row = this.createElement('tr', '', 'user-info');
        row.append(userName, userPhone, userEmail, controls);
        this.usersList.append(row);
      });
    }
  
    refreshTable() {
      this.clearTable();
      this.updateTable();
    }}
  
  
  window.addEventListener('DOMContentLoaded', event => {
    const app = new PhoneBook(users);
    app.init();
  });                                        
                                                      