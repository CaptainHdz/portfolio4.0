import React from 'react';
import ReactModal from 'react-modal';
import './style.css'

const modalStyle = {
	overlay: {
		overflow: 'auto',
		backgroundColor: 'RGBA(0,0,0,0.7)'
	},
	content: {
		marginBottom: '5%',
		padding: 0,
		top: '20%',
		bottom: 'auto',
		right: '5%',
		left: '5%'
	}
};


const Modal = (props) => {

	ReactModal.setAppElement('body');

    return (		  
		  <ReactModal
		  	style={modalStyle}
			isOpen={props.open}
			onRequestClose={props.closeModal}
		  >
			  <div className="row modal-content">
				  <div className="col m12 l6 padding-0 video-col">
					  <video className="video" autoPlay loop muted playsInline>
						  <source src={props.video} type="video/mp4" />
					  </video>
				  </div>
				  <div className="col m12 l6">
					  <h2 className="center-txt modal-header">{props.title}</h2>
					  <p className="center-txt">
						  {props.projectDescription}
					  </p>
					  <h5 className="center-txt tech-stack">{props.projectStack}</h5>
					  <div className="col s12 m6">
						  <a href={props.project} target="_blank" rel="noopener noreferrer" id="visit-btn" className="btn-large">Visit Page</a>
					  </div>
					  <div className="col s12 m6">
						  <a href={props.codeLink} target="_blank" rel="noopener noreferrer" id="code-btn" className="btn-large">View Code</a>
					  </div>
					  <div className="close-container">
						  <div className="close-btn" onClick={props.closeModal}>close</div>
					  </div>
				  </div>
			  </div>
		  </ReactModal>
    )
}

export default Modal;