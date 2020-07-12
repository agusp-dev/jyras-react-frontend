import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography, Button, 
  CardActions, Avatar, Divider } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab'
import { useStyles } from './styles'

const ProjectCard = ({id, name, description, members, onSelectedProject}) => {

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
        <div className={classes.members}>
          {members && members.length > 0 && (
            <AvatarGroup max={4}>
              {members.map(m => {
                return (
                  <Avatar 
                    key={m.email}
                    alt={`${m.name} ${m.surname}`}
                    src='no'/>
                )
              })}
            </AvatarGroup>
          )}
        </div>
        <Divider />
      </CardContent>
      <CardActions className={classes.cardViewButton}> 
        <Button size='small' color='primary' onClick={() => onSelectedProject(id, name, members, description)}>
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
  members: PropTypes.array.isRequired,
  onSelectedProject: PropTypes.func.isRequired
}

export { ProjectCard }