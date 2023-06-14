import React, { useRef } from 'react';
import { Dropdown, Form, Message } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
const languageOptions = [
  { key: 'nonrelativistic-2D', text: 'nonrelativistic-2D', value: 'nonrelativistic-2D' },
  { key: 'relativistic-2D', text: 'relativistic-2D', value: 'relativistic-2D' },
  { key: 'nonrelativistic-3D', text: 'nonrelativistic-3D', value: 'nonrelativistic-3D' },
  { key: 'relativistic-3D', text: 'relativistic-3D', value: 'relativistic-3D' }
];

const ModalDropDown = () => {
  const selectRef = useRef(null);

  const handleSelectChange = () => {
    // Access the selected value using selectRef.current.value
  };

  return (
    <Message size="massive" style={{'marginTop': 80}}>
      {/* Rest of your component code */}
      <Form style={{'fontSize': 20}}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Enter K:' placeholder='k:' />
          <Form.Input fluid label='Enter M:' placeholder='M:' />
          <Form.Input fluid label='Enter N:' placeholder='N:' /> 
          <Dropdown
            fluid
            label='Atom model:'
            options={languageOptions}
            placeholder='choose model'
            onChange={handleSelectChange}
            ref={selectRef}
          />
        </Form.Group>
      </Form>
    </Message>
  );
};

export default ModalDropDown;

