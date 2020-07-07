import React from 'react'
import { Button, TextField, Dialog, DialogActions, 
  DialogContent, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types'

const AddMember = ({open, handleClose, handleSave}) => {

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id='form-dialog-title'>{'New Member'}</DialogTitle>
      <form onSubmit={handleSave}>
        <DialogContent>
          <TextField 
            autoFocus
            margin='dense'
            id='email'
            label='Email'
            fullWidth
            required
          />
          <TextField 
            margin='dense'
            id='name'
            label='Name'
            required
            fullWidth
          />
          <TextField 
            margin='dense'
            id='surname'
            label='Surname'
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            CANCEL
          </Button>
          <Button type='submit' color='primary'>
            SAVE
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

AddMember.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}

export { AddMember }
