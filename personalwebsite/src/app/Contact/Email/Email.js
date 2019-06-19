import React from 'react';
import { Header, Icon, Divider, Form, Input, TextArea, Button } from 'semantic-ui-react';
import './Email.scss';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Email extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        button: {
            color: null,
            text: "Send",
            icon: "mail outline",
            disabled: true
        }
    }

    handleFormSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => {
                this.setState({
                    name: "",
                    email: "",
                    message: "",
                    button: {
                        text: "Success!",
                        color: "green",
                        icon: "check",
                        disabled: true
                    }
                })
                setTimeout(() => this.setState({
                    button: {
                        color: null,
                        text: "Send",
                        icon: "mail outline",
                        disabled: true
                    }
                }), 3000)
            })
            .catch(error => {
                this.setState({
                    name: "",
                    email: "",
                    message: "",
                    button: {
                        text: "Error",
                        color: "red",
                        icon: "close"
                    }
                });
                setTimeout(() => this.setState({
                    button: {
                        color: null,
                        text: "Send",
                        icon: "mail outline",
                        disabled: true
                    }
                }), 3000)
            });
    
          e.preventDefault();
    };

    contactMessageHasContent = () => {
        const { name, email, message } = this.state;
        return name.length > 0 && email.length > 0 && message.length > 0;
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        if (this.contactMessageHasContent()) {
            this.setState({
                button: {
                    ...this.state.button,
                    disabled: false
                }
            })
        }
    };

    render() {
        const { name, email, message, button } = this.state;
        return (
            <div className="Email">
                <Divider hidden horizontal />
                <Header as="h1"><Icon name="mail" /> Contact me</Header>
                <Form  onSubmit={this.handleFormSubmit} className="Email__Form" name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <Form.Field>
                        <label>Your name</label>
                        <Input onChange={this.handleChange} type="text" name="name" placeholder="Name" value={name} />
                    </Form.Field>
                    <Form.Field>
                        <label>Your email</label>
                        <Input iconPosition="left" onChange={this.handleChange} placeholder="Email" type="email" name="email" value={email} ><Icon name="at" /><input /></Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Your message</label>
                        <TextArea onChange={this.handleChange} name="message" placeholder="Message" value={message} />
                    </Form.Field>
                    <Button disabled={button.disabled} basic color={button.color}  type="submit"><Icon name={button.icon} />{button.text}</Button>
                </Form>
            </div>
        )
    }
}

export default Email;