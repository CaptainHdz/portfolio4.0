import React from 'react';
import ReactModal from 'react-modal';
import './style.css'

const modalStyle = {
	overlay: {
		backgroundColor: 'RGBA(0,0,0,0.7)'
	},
	content: {
		padding: 0,
		top: '15%',
		bottom: '15%',
		right: '15%',
		left: '15%'
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
			  <div className="row">
				  <div className="col m12 l6 padding-0">
					  <img src="https://pbs.twimg.com/profile_images/1212398377553412096/HaWAuh90_400x400.jpg" alt="p" />
				  </div>
				  <div className="col m12 l6">
					  <h1 className="center-txt">{props.title}</h1>
					  <p className="center-txt">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
					  <h4 className="center-txt">{props.projectStack}</h4>
					  <div className="col s12 m6">
						  <a href='https://google.com' target="_blank" rel="noopener noreferrer" className="btn-large visit-btn">Visit Page</a>
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