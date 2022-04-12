// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// Import auro-button
import "@alaskaairux/auro-button";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-counter element provides users a way to easily manipulate a quantity count for e-commerce purposes.
 *
 * @element auro-counter
 * 
 * @prop {Number} count - Use to keep quantity of counter value
 * @prop 0
 */

// build the component class
class AuroCounter extends LitElement {
  constructor() {
    super();
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      count: { type: Number }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <auro-button @click=${this.minusOne}>-</auro-button>
      <span>${this.count}</span>
      <auro-button @click=${this.plusOne}>+</auro-button>
    `;
  }

  plusOne() {
    this.count += 1;
  }

  minusOne() {
    this.count -= 1;
  }
}

// define the name of the custom component
if (!customElements.get("auro-counter")) {
  customElements.define("auro-counter", AuroCounter);
}