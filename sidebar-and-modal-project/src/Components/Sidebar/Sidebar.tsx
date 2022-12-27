import styles from './Sidebar.module.css';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../../data';
import { motion, AnimatePresence } from 'framer-motion';
import useDisableScroll from '../useDisableScroll';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  useDisableScroll(isSidebarOpen);

  return (
    <AnimatePresence>
      <motion.aside
        initial={{
          x: '-100%',
        }}
        animate={{
          x: isSidebarOpen ? '-10%' : '-100%',
        }}
        exit={{
          x: '-10%',
        }}
        className={styles.sidebar}
      >
        <button
          className={styles.cancelBtn}
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>

        <ul className={styles.linksUL}>
          {links.map((singleLink) => {
            const { text, url, icon } = singleLink;
            return (
              <li key={text} className={styles.link}>
                <a href={url}>
                  <span>{icon}</span>
                  <span>{text}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <ul className={styles.socialLinksUL}>
          {social.map((singleSocialLink) => {
            const { id, url, icon } = singleSocialLink;
            return (
              <li key={id} className={styles.socialLink}>
                <a href={url}>
                  <span>{icon}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
