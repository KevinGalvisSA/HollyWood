import { LitElement, html, css } from 'lit';

export class myNavbar extends LitElement {
    constructor(){
        super();
    }

    static get properties() {return css`
    nav {
        background: var(--light);
        height: 64px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        grid-gap: 28px;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 100;
    }
    nav .toggle-sidebar {
        font-size: 18px;
        cursor: pointer;
    }
    nav form {
        max-width: 400px;
        width: 100%;
        margin-right: auto;
    }
    nav .form-group {
        position: relative;
    }
    nav .form-group input {
        width: 100%;
        background: var(--grey);
        border-radius: 5px;
        border: none;
        outline: none;
        padding: 10px 36px 10px 16px;
        transition: all .3s ease;
    }
    nav .form-group input:focus {
        box-shadow: 0 0 0 1px var(--blue), 0 0 0 4px var(--light-blue);
    }
    nav .form-group .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        color: var(--dark-grey);
    }
    nav .nav-link {
        position: relative;
    }
    nav .nav-link .icon {
        font-size: 18px;
        color: var(--dark);
    }
    nav .nav-link .badge {
        position: absolute;
        top: -12px;
        right: -12px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--light);
        background: var(--red);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--light);
        font-size: 10px;
        font-weight: 700;
    }
    nav .divider {
        width: 1px;
        background: var(--grey);
        height: 12px;
        display: block;
    }
    nav .profile {
        position: relative;
    }
    nav .profile img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }
    nav .profile .profile-link {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        background: var(--light);
        padding: 10px 0;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
        border-radius: 10px;
        width: 160px;
        opacity: 0;
        pointer-events: none;
        transition: all .3s ease;
    }
    nav .profile .profile-link.show {
        opacity: 1;
        pointer-events: visible;
        top: 100%;
    }
    nav .profile .profile-link a {
        padding: 10px 16px;
        display: flex;
        grid-gap: 10px;
        font-size: 14px;
        color: var(--dark);
        align-items: center;
        transition: all .3s ease;
    }
    nav .profile .profile-link a:hover {
        background: var(--grey);
    }
    `;}

    render () { return html`
    <nav>
		<i class='bx bx-menu toggle-sidebar' ></i>
		<form action="#">
			
		</form>
		<span class="divider"></span>
		<div class="profile">
			<img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
			<ul class="profile-link">
				<li><a href="#"><i class='bx bxs-user-circle icon' ></i> Profile</a></li>
				<li><a href="#"><i class='bx bxs-cog' ></i> Settings</a></li>
				<li><a href="#"><i class='bx bxs-log-out-circle' ></i> Logout</a></li>
			</ul>
		</div>
	</nav>
    `;}
}

customElements.define('my-navbar', myNavbar);
