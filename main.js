import './style.css';

const template = document.createElement('template');

template.innerHTML = `
<div class='user-info'>
<form id='form'>
<fieldset>
<img />
<div>
<div class='comment-input'>
<label>Enter name:</label><br>
<input type='text' id='fullName' name='userName' required />
<span class='error'></span>
<div>
<label>Enter email:</label><br>
<input type='text' id='userEmail' name='email' required />
</div>
<div>
<label>Enter comment:</label><br>
<textarea id='userComment' name='userComment' row='3' cols='40' required></textarea><br>
</div>
<div>
<label>Do you agree to share?</label><br>
<input type='checkbox'>
</div>
<div>
<button type='submit' id='submit-btn'>Submit</button>
</div>
</div>
<div class='comment-display'>
<p><span id='outputName'></span></p>
<p></p>
<p></p>
</div>
</fieldset>
</form>
</div>


`;

class UserInfo extends HTMLElement {
  constructor() {
    super();
    this.name = '';
    this.email = '';
  }

  static get observedAtributes() {
    return ['name', 'email'];
  }

  attributeChangedCallBack(property, oldValue, newValue) {
    // This will take the name and set it equal to the attribute of the custom component.
    if (oldValue === newValue) return;
    this[property] = newValue;
    document.querySelector('user-info').setAttribute('name', 'email');
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    this.submitbtn = this.shadowRoot.getElementById('submit-btn');
    this.commentDisplay = this.shadowRoot.querySelector('.comment-display').value;
    this.fullName = this.shadowRoot.getElementById('fullName').value;
    this.userEmail = this.shadowRoot.getElementById('userEmail').value;
    this.userComment = this.shadowRoot.getElementById('userComment').value;
  }

  /* commentSubmit() {
    const commentInput = this.commentInput.querySelector('.comment-Input');

    const commentDisplay = this.commentDisplay.querySelector('.comment-display');

    const h3 = this.commentDisplay.querySelector('<h3>');

    comment.innerHTML = commentInput.value;

    h3.innerHTML = '`fullName: ${sessionStorage.getItem('')}`'
  } */
  // Output element
  // commentdisplay
  // h3 to shadowroot

  disconnectedCallback() {
    this.shadowRoot.querySelector('#submit-btn');
    this.removeEventListener('click', () => this.submitbtn());
  }
}
window.customElements.define('user-info', UserInfo);

document.querySelector('#app').innerHTML = `
<user-info
    avatar="http://randomuser.me/api/portraits/men/1.jpg"
    ></user-info>
    
`;

/* window.addEventListener('load', () => {
  // eslint-disable-next-line no-use-before-define
  initUI();
});

function initUI() {
  set to dot value to the attribute of name in custom component
  const fullNameField = document.querySelector('#fullName');
  const userEmailField = document.querySelector('#userEmail');
  const commentField = document.querySelector('userComment');
  const submitButton = document.querySelector('#submit-btn');

  let people = [];

  submitButton.addEventListener('click', (e) => {
    people = [...people, {
      fullName: fullNameField.value,
      userEmail: userEmailField.value,
      comment: commentField.value,

    }];
    fullNameField.value = '';
    userEmailField.value = '';
    commentField.value = '';
  });
} */
