import React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types'

const AddProject = ({project, open, handleClose, handleSave}) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id='form-dialog-title'>{project ? 'Edit Project' : 'New Project'}</DialogTitle>
        <form onSubmit={handleSave}>
          <DialogContent>
            <TextField 
              autoFocus
              margin='dense'
              id='name'
              label='Name'
              defaultValue={project ? project.name : ''}
              required
              fullWidth
            />
            <TextField 
              margin='dense'
              id='description'
              label='Description'
              defaultValue={project ? project.description : ''}
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
  handleSave: PropTypes.func.isRequired
}

export { AddProject }