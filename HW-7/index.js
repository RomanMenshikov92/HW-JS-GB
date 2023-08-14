// Основы ООП (объектно-ориентированного программирования)
// Домашнее задание

// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Вы выбрали книгу с названием "${this.title}", ее написал ${this.author} и в этой книге имеет количество ${this.pages} страниц.`);
  }
}

const Book1 = new Book("Война и мир", "Лев Толстой", 1000);
Book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript
// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade
// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
const student2 = new Student("Jane Doe", 17, "11th grade");
student1.displayInfo();
student2.displayInfo();

// ****** Задача необязательная для выполнения:
// Это расширенная версия задачи с банком, которую мы решали на семинаре:
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.
// Пример работы:
// const bank = new Bank("Мой Банк");
// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);
// bank.addClient(client1);
// bank.addClient(client2);
// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);
// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Bank {
  constructor(name) {
    this.name = name;
    this.clients = [];
    this.accounts = [];
  }
  // new client
  addClient(client) {
    this.clients.push(client);
  }
  // new account
  openAccount(client, initialBalance) {
    const accountNumber = Math.floor(Math.random() * 1000000000) + 1;
    const account = {
      number: accountNumber,
      client: client,
      balance: initialBalance,
    };
    this.accounts.push(account);
    return accountNumber;
  }
  // deposit
  deposit(accountNumber, amount) {
    const account = this.accounts.find((account) => account.number === accountNumber);
    if (account) {
      account.balance += amount;
      console.log(`Счет ${accountNumber} пополнен на ${amount} рублей`);
    } else {
      console.log(`Счет ${accountNumber} не найден`);
    }
  }
  // withdraw
  withdraw(accountNumber, amount) {
    const account = this.accounts.find((account) => account.number === accountNumber);
    if (account) {
      if (account.balance >= amount) {
        account.balance -= amount;
        console.log(`Со счета ${accountNumber} снято ${amount} рублей`);
      } else {
        console.log(`На счете ${accountNumber} недостаточно средств`);
      }
    } else {
      console.log(`Счет ${accountNumber} не найден`);
    }
  }
  // checkBalance
  checkBalance(accountNumber) {
    const account = this.accounts.find((account) => account.number === accountNumber);
    if (account) {
      console.log(`Баланс счета ${accountNumber}: ${account.balance} рублей`);
    } else {
      console.log(`Счет ${accountNumber} не найден`);
    }
  }
}

class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

const accountNumber1 = bank.openAccount(client1, 1000);
const accountNumber2 = bank.openAccount(client2, 500);

bank.deposit(accountNumber1, 200);
bank.withdraw(accountNumber2, 100);
bank.checkBalance(accountNumber1);
bank.checkBalance(accountNumber2);
