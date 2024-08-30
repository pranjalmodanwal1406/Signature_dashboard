import React from 'react';
import { useAppContext } from '../context/AppContext';

const FormComponent = () => {
  const { data, setData } = useAppContext();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleRadioChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px'
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px'
  };

  const radioGroupStyle = {
    marginBottom: '10px'
  };

  const radioLabelStyle = {
    marginRight: '10px',
    fontSize: '14px'
  };

  return (
    <form style={formStyle}>
      <input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
        style={inputStyle}
      />
      <input
        name="address"
        value={data.address}
        onChange={handleChange}
        placeholder="Address"
        style={inputStyle}
      />
      <input
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone"
        style={inputStyle}
      />
      <input
        name="title"
        value={data.title}
        onChange={handleChange}
        placeholder="Title"
        style={inputStyle}
      />
      <input
        name="company"
        value={data.company}
        onChange={handleChange}
        placeholder="Company"
        style={inputStyle}
      />
      <input
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
        style={inputStyle}
      />
      <input
        name="website"
        value={data.website}
        onChange={handleChange}
        placeholder="Website"
        style={inputStyle}
      />
      
      <select
        name="font"
        value={data.font}
        onChange={handleChange}
        style={inputStyle}
      >
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Verdana">Verdana</option>
      </select>

      <div style={radioGroupStyle}>
        <label style={labelStyle}>Spacing:</label>
        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="spacing"
            value="normal"
            checked={data.spacing === 'normal'}
            onChange={handleRadioChange}
          />
          Normal
        </label>
        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="spacing"
            value="wide"
            checked={data.spacing === 'wide'}
            onChange={handleRadioChange}
          />
          Wide
        </label>
      </div>

      <div style={radioGroupStyle}>
        <label style={labelStyle}>Size:</label>
        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="size"
            value="small"
            checked={data.size === 'small'}
            onChange={handleRadioChange}
          />
          Small
        </label>
        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="size"
            value="medium"
            checked={data.size === 'medium'}
            onChange={handleRadioChange}
          />
          Medium
        </label>
        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="size"
            value="large"
            checked={data.size === 'large'}
            onChange={handleRadioChange}
          />
          Large
        </label>
      </div>

      {/* <input
        name="color"
        value={data.color}
        onChange={handleChange}
        placeholder="Color"
        style={inputStyle}
      />
      <input
        name="shape"
        value={data.shape}
        onChange={handleChange}
        placeholder="Shape"
        style={inputStyle}
      /> */}
    </form>
  );
};

export default FormComponent;
