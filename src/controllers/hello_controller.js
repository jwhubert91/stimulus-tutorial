import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name"]
  // the built-in connect method fires when the page loads
  // connect() {
  //   console.log("Hello, Stimulus!", this.element)
  // }
  james() {
    alert("Hello there sexy James ;)")
  }
  greet() {
    console.log(`Hello, ${this.name}`)
  }
  connect() {
    alert(`The date is: ${this.date}`)
  }
  get name() {
    return this.nameTarget.value
  }
  get date() {
    const newDate = new Date().getDate()
    return newDate.toLocaleString()
  }
}
