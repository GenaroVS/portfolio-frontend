import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css';

const modal = document.getElementById('modal') as HTMLElement;

class Modal extends React.Component {
  cont: HTMLElement;

  constructor(props: object) {
    super(props);
    this.cont = document.createElement('div');
    this.cont.setAttribute('id', 'modal-cont');
  }

  componentDidMount() {
    modal.append(this.cont);
  }

  componentWillUnmount() {
    modal.removeChild(this.cont);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.cont
    );
  }
}

export default Modal;