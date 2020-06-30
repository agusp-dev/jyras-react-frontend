import React from 'react'
import { useStyles } from './styles'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'



const SelectedProjectTasksContainer = () => {

  const classes = useStyles()

  return(
    <div className={classes.projectContainer}>
      <Grid container spacing={4}> 
        <Grid item xs={4}>
          {/* <Paper className={classes.todoTaskPaper}>To Do</Paper> */}
          <Typography gutterBottom variant='h8' component='h3' className={classes.todoTaskTitle}>
            To Do
          </Typography>
          <Divider variant='middle' className={classes.todoTaskDivider} />
        </Grid>
        <Grid item xs={4}>
          {/* <Paper className={classes.inProgressTaskPaper}>In Progress</Paper> */}
          <Typography gutterBottom variant='h8' component='h3' className={classes.inProgresstaskTitle}>
            In Progress
          </Typography>
          <Divider variant='middle' className={classes.inProgressTaskDivider} />
        </Grid>
        <Grid item xs={4}>
          {/* <Paper className={classes.doneTaskPaper}>Done</Paper> */}
          <Typography gutterBottom variant='h8' component='h3' className={classes.doneTaskTitle}>
            Done
          </Typography>
          <Divider variant='middle' className={classes.doneTaskDivider} />
        </Grid>
      </Grid>
    </div>
  )
}

export { SelectedProjectTasksContainer }