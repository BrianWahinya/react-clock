import { useState } from "react";
import {
  Button,
  Modal as ReactModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import BtnModal from "../BtnModal/BtnModal";

const Modal = ({ title, body, footer, btn, args }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const btnModal = (btnProps) => <BtnModal {...btnProps} onClick={toggle} />;

  return (
    <>
      {btn && btnModal(btn)}
      <ReactModal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          {footer}
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </ReactModal>
    </>
  );
};

export default Modal;
