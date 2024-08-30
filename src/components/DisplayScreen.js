import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
// import Template4 from './templates/Template4';
// import Template5 from './templates/Template5';

const DisplayScreen = () => {
  const { data } = useAppContext();
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');

  const handleSubmit = (data) => {
    console.log("Submitted Data:", data);
    // Add further submission logic here (e.g., API call)
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Template1':
        return <Template1 data={data} onSubmit={handleSubmit} />;
      case 'Template2':
        return <Template2 data={data} onSubmit={handleSubmit} />;
      case 'Template3':
        return <Template3 data={data} onSubmit={handleSubmit} />;
      // case 'Template4':
        // return <Template4 data={data} onSubmit={handleSubmit} />;
      // case 'Template5':
        // return <Template5 data={data} onSubmit={handleSubmit} />;
      default:
        return <Template1 data={data} onSubmit={handleSubmit} />;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setSelectedTemplate('Template1')}>Template 1</button>
        <button onClick={() => setSelectedTemplate('Template2')}>Template 2</button>
        <button onClick={() => setSelectedTemplate('Template3')}>Template 3</button>
        {/* <button onClick={() => setSelectedTemplate('Template4')}>Template 4</button>
        <button onClick={() => setSelectedTemplate('Template5')}>Template 5</button> */}
      </div>
      <div>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default DisplayScreen;
