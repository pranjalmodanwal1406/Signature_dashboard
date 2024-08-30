import React from 'react';

const Template4 = ({ data, onSubmit }) => {
  return (
    <div style={{ fontFamily: data.font, color: data.color }}>
      <h4>{data.name}</h4>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Company:</strong> {data.company}</p>
      <p><strong>Address:</strong> {data.address}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Website:</strong> {data.website}</p>
      <div style={{ padding: data.spacing, transform: `scale(${data.scale})` }}>
        <p><strong>Position:</strong> {data.position}</p>
        <p><strong>Shape:</strong> {data.shape}</p>
      </div>
      <button onClick={() => onSubmit(data)}>Submit</button>
    </div>
  );
};

export default Template4;