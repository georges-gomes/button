// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";

// Extend the LitElement base class
export default class MyElement extends LitElement {
  static get properties() {
    return {
      disabled: { type: Boolean },
      type: { type: String }
    };
  }

  constructor() {
    super();
    this.type = "primary";
    this.disabled = false;
  }

  static get styles() {
    return css`
      .btn {
        padding: 12px 24px;
        font-size: 2em;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
      }

      .btn:disabled {
        opacity: 0.5;
      }

      .btn:hover:not([disabled]) {
        background: rgb(48, 135, 187);
        cursor: pointer;
      }

      .btn.btn-type__primary {
        background: rgb(69, 155, 207);
        color: white;
      }

      .btn.btn-type__secondary {
        background: transparent;
        color: rgb(49, 135, 187);
        padding: 8px 20px;
        border: 2px solid rgb(49, 135, 187);
      }

      .btn.btn-type__secondary:hover:not([disabled]) {
        background: transparent;
      }
    `;
  }

  render() {
    return html`
      <button class="btn btn-type__${this.type}" ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
