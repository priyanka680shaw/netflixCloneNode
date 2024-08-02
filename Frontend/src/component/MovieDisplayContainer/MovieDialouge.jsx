import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector , useDispatch } from 'react-redux';
import { setDilougeBox } from '../../redux/Slice/Movie.slice';
import VideoBackground from './VideoBackground';
export default function MovieDialog() {
 // const [open, setOpen] = React.useState(false);
 const dilougebox = useSelector((state)=>state.movieSlice.dilougeBox)
 console.log(dilougebox)
const dispatch = useDispatch()

function handleClose(){
  dispatch(setDilougeBox(false))
}

  return (
    <React.Fragment>
      
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <VideoBackground/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancle</Button>
        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}