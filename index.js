//Implementing Array Using Javascript

class Array {
  constructor() {
    this.data = {}
    this.length = 0
  }

  get(index) {
    return this.data[index]
  }

  push(value) {
    this.data[this.length] = value;
    this.length++
    return this.data;
  }

  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--
    return this.data
  }

  insert(index, value) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = value;
    this.length++
    return this.data;
  }

  remove(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1];
    this.length--
    return this.data
  }
}

const newArray = new Array();
newArray.push(20)
newArray.push(30)
newArray.insert(1, 60)
newArray.remove(1)

console.log(newArray)