import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';

const UploadImageDialog = ({open, handleClose , contentType} ) => {
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            {/* not done the actual image uploading and storing in db and retreiving the url */}
            <DialogTitle id="form-dialog-title">Upload {contentType} </DialogTitle>
            <DialogContent>
            <DialogContentText>
                Set up your new {contentType  ==="story" ? "Story": "Profile Picture" }
            </DialogContentText>
            <Input 
                type="file" 
                // accept="image/png, image/jpeg" 
                accept={ contentType === "story" ? "image/png, image/jpeg, video/*" : "image/png, image/jpeg" } 
                // onChange={(e)=>{setDp(e.target.files[0].name)}} 
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Go
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default UploadImageDialog
