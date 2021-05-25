import React, { Component } from 'react'

export class Form extends Component {
  
  state = {
    name: '',
    surname: '',
    email: '',
    message: '',
    sent: false,

    errors: {
      name: false,
      surname: false,
      email: false,
      message: false,
    }
  }

  messages = {
    name_incorrect: 'The name must be longer than 1 character and must not contain spaces',
    surname_incorrect: 'The surname must be longer than 2 characters and must not contain spaces',
    email_incorrect: 'E-mail must contain ,,@" sign',
    message_incorrect: `This field can't be empty`
  }

  // handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSurname = (e) => {
    this.setState({
      surname: e.target.value
    })
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handleMessage = (e) => {
    this.setState({
      message: e.target.value
    })
    console.log(this.state.message)
  }

  formValidation() {
    let name = false;
    let surname = false;
    let email = false;
    let message = false;
    let correct = false;

    if (this.state.name.length > 1 && this.state.name.indexOf(' ') === -1) {
      name = true;
    }
    if (this.state.surname.length > 2 && this.state.surname.indexOf(' ') === -1) {
      surname = true;
    }

    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if (this.state.message.length > 0 && this.state.message !== '') {
      message = true;
    }

    if (name && surname && email && message) {
      correct = true
    }

    return ({
      correct,
      name,
      surname,
      email,
      message,
    })
  }

  formSubmit = (e) => {
    e.preventDefault();
    
    const validation = this.formValidation()

    if (validation.correct) {
      this.setState({
        name: '',
        surname: '',
        email: '',
        message: '',
        sent: true,

        errors: {
          name: false,
          surname: false,
          email: false,
          message: false,
        }
      })
    } else {
      this.setState({
        errors: {
          name: !validation.name,
          surname: !validation.surname,
          email: !validation.email,
          message: !validation.message,
        }
      })
    }
  }

  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => this.setState({
        sent: ''
      }), 4000)
    }
  }

  render() {
    return (
      <div className="form__container">
        <form className="form-content" onSubmit={this.formSubmit}>

          <div className="single-item single-item__name">
          <label className="label__name">Name</label>
            <input 
              type="text"
              name="name" 
              className="input__name" 
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleName}
            />
            <div className={this.state.errors.name ? "nameError nameError-show" : "nameError"}>{this.state.errors.name && this.messages.name_incorrect}</div>
          </div>

          <div className="single-item single-item__surname">
          <label className="label__surname">Surname</label>
            <input
              type="text" 
              name="surname" 
              className="input__surname" 
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.handleSurname}
            />
            <div className={this.state.errors.surname ? "surnameError surnameError-show" : "surnameError"}>{this.state.errors.surname && <span>{this.messages.surname_incorrect}</span>}</div>
          </div>

          <div className="single-item single-item__email">
          <label className="label__email">Email</label>
            <input 
              type="text" 
              name="email" 
              className="input__email" 
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleEmail}
            />
            <div className={this.state.errors.email ? "emailError emailError-show" : "emailError"}>{this.state.errors.email && <span>{this.messages.email_incorrect}</span>}</div>
          </div>

          <div className="textArea single-item single-item__message">
          <label className="label__message">Message</label>
            <textarea 
              name="message" 
              id="" 
              cols="30" 
              rows="5" 
              placeholder="Your message" 
              className="message"
              value={this.state.message}
              onChange={this.handleMessage}>
            </textarea>
            <div className={this.state.errors.message ? "messageError messageError-show" : "messageError"}>{this.state.errors.message && <span>{this.messages.message_incorrect}</span>}</div>
          </div>
          <div className="form__btn-container">
            <button type="submit" className="form__btn-submit">Send message</button>
            <div className={this.state.sent ? "msg msg-show" : "msg"}>Message has been sent</div>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;