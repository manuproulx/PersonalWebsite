import React from 'react';
import { Header, Icon, Divider, Form, Input, TextArea, Button } from 'semantic-ui-react';
import './Email.scss';

const Email = () => (
    <div className="Email">
        <Divider hidden horizontal />
        <Header as="h1"><Icon name="mail"/> Contact me</Header>
        <Form netlify className="Email__Form" name="contact" method="POST" data-netlify="true">
            <Form.Field>
                <label>Your name</label>
                <Input type="text" name="name" placeholder="Name"/>
            </Form.Field>
            <Form.Field>
                <label>Your email</label>
                <Input iconPosition="left" placeholder="Email" type="email" name="email"><Icon name="at" /><input /></Input>
            </Form.Field>
            <Form.Field>
                <label>Your message</label>
                <TextArea name="message" placeholder="Message"/>
            </Form.Field>
            <Button basic type="submit"><Icon name="mail outline" />Send</Button>
        </Form>
    </div>
);

export default Email;