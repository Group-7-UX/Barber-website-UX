import {useState} from 'react'
import Modal from 'react-modal';

import '../css/Booking.css';

export default function Booking(){

  let [modalIsOpen, toggleModal] = useState(false);

  function handleModalOpen(){
    toggleModal(true);
  }

  function afterOpenModal(){
    // do things for when it opens
  }

  function handleModalClose(){
    toggleModal(false)
  }

  return(

    // booking modal
    <div className="modal-wrapper">
      <Modal
        className="booking-modal"
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={handleModalClose}
        // style={customStyles}
        contentLabel="Example Modal"
      >
  

        <h2>Square API goes here</h2>

      </Modal>



      <div className="booking">
        <div className="booking-text booking-element">
          <h1>BOOK HERE</h1>
          </div>

          <a 
          style={{textDecoration: 'none'}} 
          href="https://square.site/book/LS83WYD1NE7Q0/one-percent-styles-orlando-fl" 
          target="_blank"
          >

          <div 
          className="booking-button-wrapper booking-element"
          // onClick={handleModalOpen}              
          >
            <h3>BOOK AN APPOINTMENT</h3>
            <hr className="booking-underline" />
          </div>
          </a>
      </div>
    </div>
  );
}