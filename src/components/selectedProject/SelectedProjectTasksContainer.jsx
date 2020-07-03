import React, { useState, useEffect } from 'react'
import { tasksService } from '../../service'
import { useStyles } from './styles'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'

const SelectedProjectTasksContainer = ({projectId}) => {

	const classes = useStyles()

	const [tasks, setTasks] = useState(undefined)
	useEffect(() => {
		getTasks()
	}, [])
	
	const getTasks = async () => {
		await tasksService.getTasksData(projectId, onGetTasks)
	}

	const onGetTasks = result => {
		const { type, tasks, msg } = result
		if (type === 0) {
			setTasks(tasks)
		} else {
			alert(msg)
		}
	}

  return(
    <div className={classes.projectContainer}>
      <Grid container spacing={2}> 
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.todoTaskTitle}>
            To Do
          </Typography>
          <Divider variant='middle' className={classes.todoTaskDivider} />
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.inProgressTaskTitle}>
            In Progress
          </Typography>
          <Divider variant='middle' className={classes.inProgressTaskDivider} />
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.doneTaskTitle}>
            Done
          </Typography>
          <Divider variant='middle' className={classes.doneTaskDivider} />
        </Grid>
      </Grid>
    </div>
  )
}

export { SelectedProjectTasksContainer }