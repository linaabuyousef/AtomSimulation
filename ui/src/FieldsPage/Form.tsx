import React, { useState } from 'react';
import { Dropdown, Form, Checkbox, Button, Container } from 'semantic-ui-react';
import { ElectronTypes } from '../types/Electron';
import 'semantic-ui-css/semantic.min.css';
import './AtomForm.css';
import { fetchElectron } from '../actions/electron';
import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../types/common';
import { AppDispatch } from '../store/configureStore';
import { useNavigate } from 'react-router-dom';

const M = [
  { key: 'm', text: '1', value: '1' },
  { key: 'f', text: '2', value: '2' },
  { key: 'o', text: '3', value: '3' },
  { key: 'h', text: '4', value: '4' },
];

const N = [
  { key: 'K', text: '0', value: '0' },
  { key: 'm', text: '1', value: '1' },
  { key: 'f', text: '2', value: '2' },
  { key: 'o', text: '3', value: '3' },
  { key: 'h', text: '4', value: '4' },
];

interface DropdownProps {
  value: any;
  setValue: (value: any) => void;
  options: { key: string; text: string; value: string }[];
  title: string;
}

const MyDropdown: React.FC<DropdownProps> = ({ value, setValue, options, title }) => {
  const handleChange = (event: React.SyntheticEvent<HTMLElement>, data: any) => {
    setValue(data.value);
  };

  return (
    <Form.Field>
      <label>{title}</label>
      <Dropdown
        placeholder={title}
        fluid
        selection
        options={options}
        value={value}
        onChange={handleChange}
      />
    </Form.Field>
  );
};

const AtomForm: React.FC = () => {

  const [valueM, setValueM] = useState<number>(0);
  const [valueK, setValueK] = useState<number>(0);
  const [valueN, setValueN] = useState<number>(0);
  const [dimension, setDimension] = useState<boolean>(false);
  const [type, setType] = useState('');
  const electron = useSelector((state: InitialState) => state.electron);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isDisabled = valueN !== 0 && valueK !== 0 && type !== '';

  const handleCheck = () => {
    setDimension(!dimension);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(fetchElectron(type, dimension ? '2D' : '3D', valueK, valueN, valueM));
    navigate('/simulation', { state: { electron } });
  };

  return (
    <>
      <Form>
        <>
          <Form.Field>
            <label>Select Dimension:</label>
            <label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px' }}>3D</span>
                <Checkbox slider checked={dimension} onChange={handleCheck} />
                <span style={{ marginLeft: '10px' }}>2D</span>
              </div>
            </label>
          </Form.Field>
          <MyDropdown value={type} setValue={setType} options={ElectronTypes} title={'Select Type:'} />
          <MyDropdown value={valueN} setValue={setValueN} options={M} title={'Select N:'} />
          <MyDropdown value={valueK} setValue={setValueK} options={M} title={'Select K:'} />
          {!dimension && <MyDropdown value={valueM} setValue={setValueM} options={N} title={'Select M:'} />}
        </>
        <Container>
          <Button disabled={!isDisabled} onClick={handleClick}>
            Start Simulation
          </Button>
        </Container>
      </Form>
    </>
  );
};

export default AtomForm;
