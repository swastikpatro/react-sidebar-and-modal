import { FaBars } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import styles from './Home.module.css';
import logo from '../../assets/logo.svg';
import { useStateContext } from '../../App';
import { StateContextInterface } from '../../types';
// import { useStateContext } from '../../DataContext';

const Home = () => {
  const {
    openSidebar,
    openModal,
    isSidebarOpen,
    isModalOpen,
  }: StateContextInterface = useStateContext();
  const isSidebarOrModalOpen = isSidebarOpen || isModalOpen;
  return (
    <section className={styles.home}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <button className={styles.sidebarToggle} onClick={openSidebar}>
            <FaBars />
          </button>
          <img src={logo} className={styles.logo} alt='logo' />

          <button onClick={openModal} className={styles.modalBtn}>
            <IoInformationCircleOutline />
          </button>
        </div>
      </nav>
      <div>
        <div className='mySection mySection1'>section 1</div>
        <div className='mySection mySection2'>section 2</div>
        <div className='mySection mySection3'>section 3</div>
        <div className='mySection mySection4'>section 4</div>
      </div>
      <div
        className={
          isSidebarOrModalOpen
            ? `${styles.overlay} ${styles.showOverlay}`
            : `${styles.overlay}`
        }
      ></div>
      {/* <div className={`${styles.overlay}`}></div> */}
    </section>
  );
};

export default Home;
