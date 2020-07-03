import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, 
  DialogContent, DialogTitle, Select, MenuItem, 
  InputLabel, FormControl } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyles } from './styles'

const AddTask = ({open, handleClose, handleSaveNewTask}) => {

  const classes = useStyles()

  const [storyPoints, setStoryPoints] = useState('')

  const handleStoryPointsChange = event => {
    event.preventDefault()
    setStoryPoints(event.target.value)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id='form-dialog-title'>New Task</DialogTitle>
          <form onSubmit={handleSaveNewTask}>
            <DialogContent>
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
             <FormControl className={classes.formControl}>
              <InputLabel id='story-points'>Story Points</InputLabel>
                <Select
                  name='sPoints'
                  id='sPoints'
                  labelId='story-points'
                  value={storyPoints}
                  required
                  onChange={handleStoryPointsChange}
                >
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
             </FormControl>
             <TextField 
                margin='dense'
                id='pHours'
                label='Planned Hours'
                fullWidth
                required
              />
              <TextField 
                margin='dense'
                id='state'
                label='State'
                defaultValue='0 - TO DO'
                fullWidth
                disabled
              />
              <TextField 
                margin='dense'
                id='wHours'
                label='Worked hours'
                defaultValue='0'
                fullWidth
                disabled
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

AddTask.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSaveNewTask: PropTypes.func.isRequired
}

export { AddTask }