import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #e57070',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1),
  },
  image:{
    width:"100%",
    height:"auto"
  }
}));



function DpPopover({open,handleClose,dp}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Zoom in={open}>
          <div className={classes.paper}>
            <img src={dp} alt={"userDp"} className={classes.image} />          
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}


export default DpPopover;
