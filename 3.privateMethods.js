class Person {
  birthYear = 1993;

  get age() {
    return new Date().getFullYear - this.birthYear;
  }
}

const person = new Person();
person.age; //?
