import React from 'react';
import { AppProvider } from './context/AppContext';
import FormComponent from './components/FormComponent';
import DisplayScreen from './components/DisplayScreen';

const App = () => {
  return (
    <AppProvider>
      <div>
        <FormComponent />
        <DisplayScreen />
      </div>
    </AppProvider>
  );
};

export default App;
