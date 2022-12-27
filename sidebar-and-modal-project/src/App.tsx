import Home from './Components/Home/Home';
import Modal from './Components/Modal/Modal';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Home
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}

export default App;
