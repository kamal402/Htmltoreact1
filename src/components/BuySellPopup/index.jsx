import React from 'react'
import './index.css';
import Modal from 'react-bootstrap/Modal';
import { Button, Image } from 'react-bootstrap';
const Buysellpopup = (props) => {
  return (
    <>
    <Modal {...props} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className='sel-buy-popup'
    >
      <div className='modal-head' closeButton>
        <Modal.Header closeButton></Modal.Header>
        <div className='sel-buy-top-img' style={{backgroundImage: `url('/images/bulls-bg.svg')`, backgroundPosition:"top center",backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
            <Image src='images/bulls.svg' alt='bulls'/>
        </div>
        <div className='sel-buy-main-text bg-azul text-center text-white'>
            <h2 className='text-white'>SURGE TRADING</h2>
            <div className='discription'>
                <p>70% of your visitors do exactly what you just did and never come back!</p>
            </div>
            <div className='divider'></div>
            <h3>Keep Them on Your site longer with</h3>
            <div className='bg-img-main' style={{backgroundImage: `url('/images/text-bg-popup.svg')`, backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat" }}> Surgetrader</div>
            <div className='button-group justify-content-center'>
                <Button className='custom-btn outline-color-white'>Claim Now</Button>
            </div>
        </div>
      </div>
    </Modal>
    </>
  )
}

export default Buysellpopup;