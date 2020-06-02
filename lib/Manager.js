// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOffice() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;

// class Manager {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.officeNumber = officeNumber;
//   }
//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getOfficenumber() {
//     return this.officenumber;
//   }
//   getRole() {
//     return "Manager";
//   }
// }
// module.exports = Manager;
