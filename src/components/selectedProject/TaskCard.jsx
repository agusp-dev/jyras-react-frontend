import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core'
import { useStyles } from './styles'

const TaskCard = ({task, onSelectedTask}) => {

  const classes = useStyles()

  return (
    <Card className={classes.taskCardRoot}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h3'>
          {task.name || 'No name'}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {task.description || 'No description'}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardViewButton}> 
        <Button size='small' color='primary' onClick={() => console.log('on task clicked')}>
          View
        </Button>
      </CardActions>  
    </Card>
  )
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  onSelectedTask: PropTypes.func.isRequired
}

export { TaskCard }