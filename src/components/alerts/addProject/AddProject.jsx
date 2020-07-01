import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types'

const AddProject = ({open, handleClose, handleSaveNewProject}) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id='form-dialog-title'>New Project</DialogTitle>
        <form onSubmit={handleSaveNewProject}>
          <DialogContent>
            {/* <DialogContentText>
              Please complete all fields.
            </DialogContentText> */}
            <TextField 
              autoFocus
              margin='dense'
              id='name'
              label='Name'
              required
              fullWidth
            />
            <TextField 
              margin='dense'
              id='description'
              label='Description'
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
    </div>
  )
}

AddProject.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSaveNewProject: PropTypes.func.isRequired
}

export { AddProject }