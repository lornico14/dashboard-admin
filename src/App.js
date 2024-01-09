import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import RightSide from './components/RightSide/RightSide';
import { useState } from 'react';
import MidSide from './components/MidSide/MidSide';


function App() {

  const [selectedComponentName, setSelectedComponentName] = useState('Main');

  const handleSidebarItemClick = (selectedItem) => {
    console.log('Selected Item:', selectedItem);
    setSelectedComponentName(selectedItem);
  };

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar onSidebarItemClick={handleSidebarItemClick} />
        <MidSide selectedComponentName={selectedComponentName} />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
