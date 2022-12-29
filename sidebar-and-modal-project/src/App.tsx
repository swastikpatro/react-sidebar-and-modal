import Home from './Components/Home/Home';
import Modal from './Components/Modal/Modal';
import Sidebar from './Components/Sidebar/Sidebar';
import { createPortal } from 'react-dom';
import { StateContextProvider } from './StateContextProvider';

function Portal({ children, root }: { children: JSX.Element; root: String }) {
  return createPortal(
    children,
    document.querySelector(`#${root}`) as HTMLDivElement
  );
}

function App() {
  return (
    <StateContextProvider>
      <>
        <Home />
        <Portal root='modal-root'>
          <Modal />
        </Portal>
        <Portal root='sidebar-root'>
          <Sidebar />
        </Portal>
      </>
    </StateContextProvider>
  );
}

export default App;
