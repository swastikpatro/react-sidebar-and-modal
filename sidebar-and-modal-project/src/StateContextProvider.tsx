import { createContext, useContext, useState } from 'react';
import { StateContextInterface } from './types';

export const StateContext = createContext<StateContextInterface>(null!);

export const useStateContext = () => {
  return useContext(StateContext);
};

export const StateContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <StateContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
