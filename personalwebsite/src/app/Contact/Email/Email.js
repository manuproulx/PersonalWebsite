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
        message: ""
    }

    handleFormSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
          e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="Email">
                <Divider hidden horizontal />
                <Header as="h1"><Icon name="mail" /> Contact me</Header>
                <Form  onSubmit={this.handleFormSubmit} className="Email__Form" name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                    <Form.Field>
                        <label>Your name</label>
                        <Input onChange={this.handleChange} type="text" name="name" placeholder="Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Your email</label>
                        <Input iconPosition="left"  onChange={this.handleChange} placeholder="Email" type="email" name="email"><Icon name="at" /><input /></Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Your message</label>
                        <TextArea onChange={this.handleChange} name="message" placeholder="Message" />
                    </Form.Field>
                    <Button basic type="submit"><Icon name="mail outline" />Send</Button>
                </Form>
            </div>
        )
    }
}

export default Email;