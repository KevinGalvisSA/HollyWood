import { LitElement, html, css } from 'lit';

export class myMain extends LitElement {
    constructor(){
        super();
    }

    static get properties() {return css`
    main {
        width: 100%;
        padding: 24px 20px 20px 20px;
    }
    main .title {
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    main .breadcrumbs {
        display: flex;
        grid-gap: 6px;
    }
    main .breadcrumbs li,
    main .breadcrumbs li a {
        font-size: 14px;
    }
    main .breadcrumbs li a {
        color: var(--blue);
    }
    main .breadcrumbs li a.active,
    main .breadcrumbs li.divider {
        color: var(--dark-grey);
        pointer-events: none;
    }
    main .info-data {
        margin-top: 36px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-gap: 20px;
    }
    main .info-data .card {
        padding: 20px;
        border-radius: 10px;
        background: var(--light);
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .05);
    }
    main .card .head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    main .card .head h2 {
        font-size: 24px;
        font-weight: 600;
    }
    main .card .head p {
        font-size: 14px;
    }
    main .card .head .icon {
        font-size: 20px;
        color: var(--green);
    }
    main .card .head .icon.down {
        color: var(--red);
    }
    main .card .progress {
        display: block;
        margin-top: 24px;
        height: 10px;
        width: 100%;
        border-radius: 10px;
        background: var(--grey);
        overflow-y: hidden;
        position: relative;
        margin-bottom: 4px;
    }
    main .card .progress::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--blue);
        width: var(--value);
    }
    main .card .label {
        font-size: 14px;
        font-weight: 700;
    }
    main .data {
        display: flex;
        grid-gap: 20px;
        margin-top: 20px;
        flex-wrap: wrap;
    }
    main .data .content-data {
        flex-grow: 1;
        flex-basis: 400px;
        padding: 20px;
        background: var(--light);
        border-radius: 10px;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
    }
    main .content-data .head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
    }
    main .content-data .head h3 {
        font-size: 20px;
        font-weight: 600;
    }
    main .content-data .head .menu {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main .content-data .head .menu .icon {
        cursor: pointer;
    }
    main .content-data .head .menu-link {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        width: 140px;
        background: var(--light);
        border-radius: 10px;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, .1);
        padding: 10px 0;
        z-index: 100;
        opacity: 0;
        pointer-events: none;
        transition: all .3s ease;
    }
    main .content-data .head .menu-link.show {
        top: 100%;
        opacity: 1;
        pointer-events: visible;
    }
    main .content-data .head .menu-link a {
        display: block;
        padding: 6px 16px;
        font-size: 14px;
        color: var(--dark);
        transition: all .3s ease;
    }
    main .content-data .head .menu-link a:hover {
        background: var(--grey);
    }
    main .content-data .chart {
        width: 100%;
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
    }
    main .content-data .chart::-webkit-scrollbar {
        display: none;
    }
    
    main .chat-box {
        width: 100%;
        max-height: 360px;
        overflow-y: auto;
        scrollbar-width: none;
    }
    main .chat-box::-webkit-scrollbar {
        display: none;
    }
    main .chat-box .day {
        text-align: center;
        margin-bottom: 10px;
    }
    main .chat-box .day span {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 20px;
        background: var(--light-blue);
        color: var(--blue);
        font-size: 12px;
        font-weight: 600;
    }
    main .chat-box .msg img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        object-fit: cover;
    }
    main .chat-box .msg {
        display: flex;
        grid-gap: 6px;
        align-items: flex-start;
    }
    main .chat-box .profile .username {
        font-size: 14px;
        font-weight: 600;
        display: inline-block;
        margin-right: 6px;
    }
    main .chat-box .profile .time {
        font-size: 12px;
        color: var(--dark-grey);
    }
    main .chat-box .chat p {
        font-size: 14px;
        padding: 6px 10px;
        display: inline-block;
        max-width: 400px;
        line-height: 150%;
    }
    main .chat-box .msg:not(.me) .chat p {
        border-radius: 0 5px 5px 5px;
        background: var(--blue);
        color: var(--light);
    }
    main .chat-box .msg.me {
        justify-content: flex-end;
    }
    main .chat-box .msg.me .profile {
        text-align: right;
    }
    main .chat-box .msg.me p {
        background: var(--grey);
        border-radius: 5px 0 5px 5px;
    }
    main form {
        margin-top: 6px;
    }
    main .form-group {
        width: 100%;
        display: flex;
        grid-gap: 10px;
    }
    main .form-group input {
        flex-grow: 1;
        padding: 10px 16px;
        border-radius: 5px;
        outline: none;
        background: var(--grey);
        border: none;
        transition: all .3s ease;
        width: 100%;
    }
    main .form-group input:focus {
        box-shadow: 0 0 0 1px var(--blue), 0 0 0 4px var(--light-blue);
    }
    main .btn-send {
        padding: 0 16px;
        background: var(--blue);
        border-radius: 5px;
        color: var(--light);
        cursor: pointer;
        border: none;
        transition: all .3s ease;
    }
    main .btn-send:hover {
        background: var(--dark-blue);
    }
    `;}

    render() {return html`
        <main>
			<h1 class="title">Dashboard</h1>
			<ul class="breadcrumbs">
				<li><a href="#">Home</a></li>
				<li class="divider">/</li>
				<li><a href="#" class="active">Dashboard</a></li>
			</ul>
			<div class="info-data">
				<div class="card">
					<div class="head">
						<div>
							<h2>1500</h2>
							<p>Traffic</p>
						</div>
						<i class='bx bx-trending-up icon' ></i>
					</div>
					<span class="progress" data-value="40%"></span>
					<span class="label">40%</span>
				</div>
				<div class="card">
					<div class="head">
						<div>
							<h2>234</h2>
							<p>Sales</p>
						</div>
						<i class='bx bx-trending-down icon down' ></i>
					</div>
					<span class="progress" data-value="60%"></span>
					<span class="label">60%</span>
				</div>
				<div class="card">
					<div class="head">
						<div>
							<h2>465</h2>
							<p>Pageviews</p>
						</div>
						<i class='bx bx-trending-up icon' ></i>
					</div>
					<span class="progress" data-value="30%"></span>
					<span class="label">30%</span>
				</div>
				<div class="card">
					<div class="head">
						<div>
							<h2>235</h2>
							<p>Visitors</p>
						</div>
						<i class='bx bx-trending-up icon' ></i>
					</div>
					<span class="progress" data-value="80%"></span>
					<span class="label">80%</span>
				</div>
			</div>
			<div class="data">
				<div class="content-data">
					<div class="head">
						<h3>Sales Report</h3>
					</div>
					<h1>Hola Mundo</h1>
				</div>
			</div>
		</main>
    `;}
}

customElements.define("my-main", myMain)