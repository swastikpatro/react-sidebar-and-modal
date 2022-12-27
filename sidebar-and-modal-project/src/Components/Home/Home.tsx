import { FaBars } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import styles from './Home.module.css';
import logo from '../../assets/logo.svg';

const Home = ({
  isModalOpen,
  setIsModalOpen,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const isSidebarOrModalOpen = isSidebarOpen || isModalOpen;
  return (
    <section className={styles.home}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <button
            className={styles.sidebarToggle}
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>
          <img src={logo} className={styles.logo} alt='logo' />

          <button
            onClick={() => setIsModalOpen(true)}
            className={styles.modalBtn}
          >
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
