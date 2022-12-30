import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import useDisableScroll from '../useDisableScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { StateContextInterface } from '../../types';
import { useStateContext } from '../../StateContextProvider';

const Modal = () => {
  const { isModalOpen, closeModal }: StateContextInterface = useStateContext();
  useDisableScroll(isModalOpen!);
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: '-50%',
          y: '-105vh',
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: isModalOpen ? '-50%' : '-105vh',
        }}
        exit={{
          y: '-105vh',
          opacity: 0,
        }}
        className={styles.modal}
      >
        <button className={styles.cancelBtn} onClick={closeModal}>
          <FaTimes />
        </button>

        <div className={styles.modalContent}>
          <p>
            Follow me on{' '}
            <a href='https://github.com/swastikpatro/'>
              <AiFillGithub />
            </a>
          </p>
          <p>
            Reach out to me on{' '}
            <a href='https://twitter.com/Swastik2001'>
              <BsTwitter />
            </a>
          </p>
          <p>Thanks for visiting 💖🧡</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
