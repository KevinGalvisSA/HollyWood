import { LitElement, html, css } from 'lit';
import { myNavbar } from './navbar.js';
import { myMain } from './my-main.js';


export class landingPage extends LitElement {
    constructor() {
        super();
    }

    static get properties() {return css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');

    * {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        --grey: #F1F0F6;
        --dark-grey: #8D8D8D;
        --light: #fff;
        --dark: #000;
        --green: #81D43A;
        --light-green: #E3FFCB;
        --blue: #1775F1;
        --light-blue: #D0E4FF;
        --dark-blue: #0C5FCD;
        --red: #FC3B56;
    }
    
    html {
        overflow-x: hidden;
    }
    
    body {
        background: var(--grey);
        overflow-x: hidden;
    }
    
    .body{
        background: var(--grey);
        overflow-x: hidden;
    }
    
    a {
        text-decoration: none;
    }
    
    li {
        list-style: none;
    }
    
    `;}

    render() {return html`
    <div>
        <my-navbar></my-navbar>
        <my-main></my-main>
    </div>
    `;}
}

customElements.define("landing-page", landingPage)