interface StateContextInterface {
  isSidebarOpen?: boolean;
  isModalOpen?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  openSidebar?: () => void;
  closeSidebar?: () => void;
}

export type { StateContextInterface };
