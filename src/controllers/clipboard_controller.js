import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["source"]
  static classes = ["supported", "scoobert"]

  connect() {
    this.element.classList.add(this.scoobertClass)

    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass)
    }
  }

  copy(e) {
    e.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
