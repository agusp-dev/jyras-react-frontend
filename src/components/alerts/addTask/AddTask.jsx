import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, 
  DialogContent, DialogTitle, Select, MenuItem, 
  InputLabel, FormControl } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useStyles } from './styles'

const AddTask = ({task, open, handleClose, handleSave}) => {

  const classes = useStyles()

  const [storyPoints, setStoryPoints] = useState(task ? task.storyPoints : '')
  const handleStoryPointsChange = event => {
    event.preventDefault()
    setStoryPoints(event.target.value)
  }

  const [taskState, setTaskState] = useState(task ? task.state : '')
  const handleTaskStateChange = event => {
    event.preventDefault()
    setTaskState(event.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    handleSave(e, (task ? task.id : undefined))
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id='form-dialog-title'>{task ? 'Task Selected' : 'New Task'}</DialogTitle>
          <form onSubmit={onSubmit}>
            <DialogContent>
              <TextField 
                autoFocus
                margin='dense'
                id='name'
                label='Name'
                defaultValue={task ? task.name : ''}
                required
                fullWidth
              />
              <TextField 
                margin='dense'
                id='description'
                label='Description'
                defaultValue={task ? task.description : ''}
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
                defaultValue={task ? task.plannedHours : ''}
                fullWidth
                required
              />
              <FormControl className={classes.formControl}>
                <InputLabel id='state'>State</InputLabel>
                  <Select
                    name='tState'
                    id='tState'
                    labelId='state'
                    value={!taskState ? 0 : taskState}
                    required
                    disabled={!task}
                    onChange={handleTaskStateChange}
                  >
                    <MenuItem value={0}>0 - TO DO</MenuItem>
                    <MenuItem value={1}>1 - IN PROGRESS</MenuItem>
                    <MenuItem value={2}>2 - DONE</MenuItem>
                  </Select>
              </FormControl>
              <TextField 
                margin='dense'
                id='wHours'
                label='Worked hours'
                defaultValue={task ? task.workedHours : '0'}
                disabled={!task}
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

AddTask.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}

export { AddTask }