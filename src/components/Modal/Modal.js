import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import useOnClickOutside from '../../hooks/useOutsideClick';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  ModalHeader,
  Header,
} from './StyleModal';

const Modal = ({ showModal, setShowModal, header, content }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 280,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
  });

  useOnClickOutside(modalRef, () => {
    setShowModal(false);
  });

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  useLockBodyScroll();

  return (
    <Background>
      <animated.div style={animation}>
        <ModalWrapper ref={modalRef}>
          <CloseModalButton
            icon={faXmark}
            aria-label="close modal"
            onClick={() => setShowModal(prev => !prev)}
          />
          <ModalHeader>
            <Header>{header}</Header>
          </ModalHeader>
          <ModalContent>{content}</ModalContent>
        </ModalWrapper>
      </animated.div>
    </Background>
  );
};

export default Modal;
