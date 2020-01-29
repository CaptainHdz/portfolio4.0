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
					  <p className="center-txt">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
					  <h4 className="center-txt">{props.projectStack}</h4>
					  <div className="col s12 m6">
						  <a href={props.project} target="_blank" rel="noopener noreferrer" className="btn-large visit-btn">Visit Page</a>
					  </div>
					  <div className="col s12 m6">
						  <a href='https://google.com' target="_blank" rel="noopener noreferrer" className="btn-large code-btn">View Code</a>
					  </div>
				  </div>
			  </div>
		  </ReactModal>
    )
}

export default Modal;