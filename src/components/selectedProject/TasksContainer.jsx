import React from 'react'
import { TaskCard } from './TaskCard'
import PropTypes from 'prop-types'
import { useStyles } from './styles'
import { Grid, Typography } from '@material-ui/core'

const TasksContainer = ({type, tasks}) => {
  const classes = useStyles()

  return (
    <Grid item className={classes.taskContainer}>
      {tasks && tasks.length > 0 
        ? (
          tasks.map(t => {
            return <TaskCard
                      key={t.id} 
                      task={t}
                      onTaskSelected/>
          })
        ) : (
          <Typography 
            variant='body2' 
            color='textSecondary' 
            component='p'>
              No tasks.
          </Typography>
        )}
    </Grid>
  )
}

TasksContainer.propTypes = {
  type: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired
}

export { TasksContainer }