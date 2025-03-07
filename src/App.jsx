import { useState } from 'react'
import Opens from './components/Opens';
import Sidebar from "./components/Sidebar";
import './App.css';
import Closebut from './components/CLOSEBUT';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = (newState) => {
    setSidebarOpen(newState);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };


  return (
    <div className="App">
      <Opens onToggle={handleToggle} />
      <Sidebar isOpen={sidebarOpen}>
        {/* Добавляем CLOSEBUT внутрь Sidebar */}
        <Closebut onToggle={handleClose} className="sidebar-close" />
      </Sidebar>
    </div>
  )
}

export default App
