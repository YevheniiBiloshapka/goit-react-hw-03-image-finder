import { Overlay, ModalImg } from './Modal.styled';

export const Modal = () => {
  return (
    <Overlay>
      <ModalImg>
        <img
          src="https://plus.unsplash.com/premium_photo-1663126307763-002caf13aaab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </ModalImg>
    </Overlay>
  );
};
