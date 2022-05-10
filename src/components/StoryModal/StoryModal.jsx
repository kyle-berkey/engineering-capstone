import React from "react";
import "./styles.css";

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";

const StoryModal = (props) => {
  const { closeModal, show, story } = props;

  return (
    <Modal
      size='lg'
      show={show}
      onClick={closeModal}
      style={{ opacity: 1 }}
      fullscreen='xl-down'
    >
      <div className='modal-alignment-helper'>
        <div className='vertical-align-center'>
          <div className='modal-content'>
            <ModalHeader>
              <ModalTitle>{story.title}</ModalTitle>
            </ModalHeader>
            <ModalBody className='body'>
              <iframe src={story.url} title={story.title} />
            </ModalBody>
            <ModalFooter>
              <Button variant='secondary' onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default StoryModal;
