import styles from './Modal.module.css';
import { FaTimes } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import useDisableScroll from '../useDisableScroll';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: any;
}

const Modal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  useDisableScroll(isModalOpen);
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: '-50%',
          y: '-220%',
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: isModalOpen ? '-50%' : '-220%',
        }}
        exit={{
          y: '-220%',
          opacity: 0,
        }}
        className={styles.modal}
      >
        <button
          className={styles.cancelBtn}
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>

        <div className={styles.modalContent}>
          <p>
            Follow me on{' '}
            <a href='https://github.com/swastikpatro/'>
              <AiFillGithub />
            </a>
            {/* <a href='https://twitter.com/Swastik2001'>
              <BsTwitter />
            </a> */}
          </p>
          <p>Thanks for visiting 💖🧡</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
