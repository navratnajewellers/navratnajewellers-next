/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Affix,
  Breadcrumb,
  Button,
  ButtonToolbar,
  Form,
  Modal,
  Schema,
} from 'rsuite';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useWebStatus } from '../context/status.context';
import { useDisplayMessage } from '../context/message.context';
import { useServerLink } from '../context/server.context';
import axios from 'axios';

const { StringType, NumberType } = Schema.Types;

const forgotPasswordModel = Schema.Model({
  email: StringType()
    .isEmail('Enter a valid email')
    .isRequired('Email is required'),
  mobile: NumberType()
    .min(1000000000, 'Enter a Valid Mobile Number')
    .max(9999999999, 'Enter a Valid Mobile Number')
    .isRequired('Mobile number is required'),
});

const passwordModel = Schema.Model({
  password: StringType()
    .minLength(6, 'Password should be six character long')
    .isRequired('Password is required'),
  rePassword: StringType()
    .minLength(6, 'Password should be six character long')
    .isRequired('Password is required'),
});

export default function ForgetPasswordPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // check the website update status
  const { isWebsiteOnUpdate } = useWebStatus();

  if (isWebsiteOnUpdate) {
    window.location.replace('/');
  }

  const { displayMessage } = useDisplayMessage();

  const { serverLink } = useServerLink();

  const forgotPasswordRef = useRef();

  const passwordRef = useRef();

  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const [forgotPasswordFormValue, setForgotPasswordFormValue] = useState({
    email: '',
    mobile: '',
  });

  const [passwordFormValue, setPasswordFormValue] = useState({
    password: '',
    rePassword: '',
  });

  const handleSubmit = e => {
    // console.log(e);

    // check the email and password with the database
    const getResetDetails = async () => {
      try {
        const response = await axios.post(
          `${serverLink}/testing/resetPassword/reset_password.php`,
          {
            email: e.email,
            phone_no: e.mobile,
            protectionId: 'Nav##$56',
          }
        );

        // console.log(response.data);
        if (response.data.status == 'success') {
          setIsPasswordOpen(true);
          displayMessage('info', 'You can change password now', 4000);
        } else if (response.data.status == 'error') {
          displayMessage('error', response.data.message, 4000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getResetDetails();
  };

  // reset the forgot password form value
  const handleReset = () => {
    setForgotPasswordFormValue(val => ({
      ...val,
      email: '',
      mobile: '',
    }));
  };

  // password logic here start
  const handlePasswordModelClose = () => {
    //reset the password form value
    setPasswordFormValue(val => ({
      ...val,
      password: '',
      rePassword: '',
    }));

    // reseting the forgot password form
    setForgotPasswordFormValue(val => ({
      ...val,
      email: '',
      mobile: '',
    }));

    // close the password model
    setIsPasswordOpen(false);
  };

  // change password
  const handlePassword = () => {
    if (passwordRef.current.check()) {
      // console.log(passwordFormValue);

      if (passwordFormValue.password === passwordFormValue.rePassword) {
        // console.log('you can change password');

        const changePassword = async () => {
          try {
            const response = await axios.post(
              `${serverLink}/testing/resetPassword/change_password.php`,
              {
                email: forgotPasswordFormValue.email,
                password: passwordFormValue.password,
                protectionId: 'Nav##$56',
              }
            );

            // console.log(response.data);
            if (response.data.status == true) {
              displayMessage(
                'success',
                'Password has been changed successfully',
                2000
              );

              handlePasswordModelClose();

              setTimeout(() => {
                window.location.replace('/');
              }, 4000);
            }
          } catch (error) {
            console.log(error);
          }
        };

        changePassword();
      } else {
        // console.log('Password and Rewrite password must be same');
        displayMessage('warning', 'Password and Rewrite password must be same');
      }
    } else {
      displayMessage('warning', 'Fill all the required fields');
    }
  };

  if (!mounted) return null; // Prevent rendering on the server

  return (
    <div>
      <Affix className="fixed-header">
        <div className="header-container margin-t10">
          <Header />
        </div>
      </Affix>
      <div className="breadcrumb-container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="/">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Reset Password</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="margin-t50 margin-b100" style={{ marginLeft: '7%' }}>
        <Form
          onChange={setForgotPasswordFormValue}
          formValue={forgotPasswordFormValue}
          model={forgotPasswordModel}
          ref={forgotPasswordRef}
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="email-9">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="mobile-9">
            <Form.ControlLabel>Mobile Number</Form.ControlLabel>
            <Form.Control name="mobile" type="number" />
            <Form.HelpText tooltip>Required</Form.HelpText>
          </Form.Group>
          <Form.Group>
            <ButtonToolbar>
              <Button appearance="primary" type="submit">
                Submit
              </Button>
              <Button appearance="default" onClick={handleReset}>
                Reset
              </Button>
            </ButtonToolbar>
          </Form.Group>
        </Form>
      </div>
      <div>
        <Modal
          open={isPasswordOpen}
          onClose={handlePasswordModelClose}
          size="xs"
        >
          <Modal.Header className="modal-custom-header">
            <Modal.Title>Set New Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              fluid
              onChange={setPasswordFormValue}
              formValue={passwordFormValue}
              model={passwordModel}
              ref={passwordRef}
            >
              <Form.Group controlId="password-9">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control
                  name="password"
                  type="password"
                  autoComplete="off"
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="rePassword-9">
                <Form.ControlLabel>Rewrite Password</Form.ControlLabel>
                <Form.Control
                  name="rePassword"
                  type="password"
                  autoComplete="off"
                />
                <Form.HelpText>Required</Form.HelpText>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handlePassword} appearance="primary">
              Confirm
            </Button>
            <Button onClick={handlePasswordModelClose} appearance="subtle">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="margin-t50">
        <Footer />
      </div>
    </div>
  );
}
