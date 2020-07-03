import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core'
import { useStyles } from './styles'

const ProjectCard = ({id, name, description, onSelectedProject}) => {

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h3'>
          {name || 'No name'}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description || 'No description'}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardViewButton}> 
        <Button size='small' color='primary' onClick={() => onSelectedProject(id, name)}>
          View
        </Button>
      </CardActions>  
    </Card>
  )
}

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSelectedProject: PropTypes.func.isRequired
}

export { ProjectCard }