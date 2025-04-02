'use client';

import axios from 'axios';
import { useRef } from 'react';
import { Button, Form, InputPicker, Modal, Schema } from 'rsuite';
import { useServerLink } from '../context/server.context';

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  mobile: StringType()
    .minLength(10, 'Enter a valid number')
    .maxLength(10, 'Enter a valid number')
    .isRequired('Mobile number is required'),
  address1: StringType().isRequired('Address is required'),
  city: StringType().isRequired('City is required'),
  pincode: NumberType()
    .min(100000, 'Enter a valid Pincode')
    .max(999999, 'Enter a valid Pincode')
    .isRequired('Pincode is required'),
});

const data = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttarakhand',
  'Uttar Pradesh',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Daman & Diu',
  'Delhi',
  'Jammu & Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
].map(item => ({ label: item, value: item }));

const AddressModal = ({
  isAddressModalOpen,
  setIsAddressModal,
  address,
  setAddress,
  userData,
  displayMessage,
}) => {
  const formRef = useRef();

  const { serverLink } = useServerLink();

  const handleSignUpClose = () => {
    setIsAddressModal(false);
  };

  const handleSignUp = () => {
    //check for correct data is filled or not
    if (formRef.current.check() && address.state !== '') {
      // insert address in userId address field
      const handleInsertAddress = async () => {
        try {
          const response = await axios.post(
            `${serverLink}/testing/addresses/update_address.php`,
            {
              userId: userData.id,
              protectionId: 'Nav##$56',
              ...address,
            }
          );

          // console.log(response);
          // console.log(response.data);

          if (response.status === 200 && response.data.status === 'success') {
            // console.log(response.data.message);

            // update address status to found to procedd with payment
            setAddress(val => ({
              ...val,
              status: 'found',
            }));

            // close modal
            setIsAddressModal(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      handleInsertAddress();
    } else {
      console.log('Please Fill all the required data');
      displayMessage('info', 'Please Fill all the required data');
    }
  };

  const handleStateChange = value => {
    //console.log(value);

    setAddress(val => ({
      ...val,
      state: value,
    }));
  };

  // const handleModal = () => {
  //   setIsAddressModal(true);
  // };

  // console.log(address);

  return (
    <div>
      <Modal open={isAddressModalOpen} onClose={handleSignUpClose} size="xs">
        <Modal.Header className="modal-custom-header">
          <Modal.Title>User Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onChange={setAddress}
            formValue={address}
            model={model}
            ref={formRef}
          >
            <Form.Group controlId="mobile-9">
              <Form.ControlLabel>Mobile Number</Form.ControlLabel>
              <Form.Control name="mobile" type="number" />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="address1-9">
              <Form.ControlLabel>Addrees Line 1</Form.ControlLabel>
              <Form.Control name="address1" />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="address2-9">
              <Form.ControlLabel>Addrees Line 2</Form.ControlLabel>
              <Form.Control name="address2" />
            </Form.Group>
            <Form.Group controlId="country-9">
              <Form.ControlLabel>Country</Form.ControlLabel>
              <Form.Control name="country" disabled />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="city-9">
              <Form.ControlLabel>City</Form.ControlLabel>
              <Form.Control name="city" />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="state-9">
              <Form.ControlLabel>State</Form.ControlLabel>
              <InputPicker
                data={data}
                style={{ width: 224 }}
                onChange={handleStateChange}
              />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="pincode-9">
              <Form.ControlLabel>Postal Code</Form.ControlLabel>
              <Form.Control name="pincode" type="number" />
              <Form.HelpText tooltip>Required</Form.HelpText>
            </Form.Group>
            <Form.Group controlId="landmark-9">
              <Form.ControlLabel>Landmark</Form.ControlLabel>
              <Form.Control name="landmark" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSignUp} appearance="primary">
            Submit
          </Button>
          <Button onClick={handleSignUpClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddressModal;
