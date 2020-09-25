import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import UserAuthentication from '../UserAuthentication/UserAuthentication';

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

function MyModal(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}>
            <div style={modalStyle} className={classes.paper}>
                {props.children}
            </div>
        </Modal>
            
    
    )
}

export default MyModal
