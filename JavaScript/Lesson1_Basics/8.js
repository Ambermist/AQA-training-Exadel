let person = Object.create(Object.prototype, {
    firstName: {
    writable: true,
    configurable: true,
    value: 'polina'
  }, 
  lastName: {
    writable: true,
    configurable: true,
    value: 'voronina'
  }
});
Object.defineProperty(person, 'fullName', {
  enumerable: true,
  configurable: true,
  get() { return `${this.lastName} ${this.firstName}`; },
  set(newValue) {[this.lastName, this.firstName] = newValue.split(' ') },
})
person.fullName = 'Ivanov Ivan';
console.log(person.fullName);