import React, { useState, useEffect } from 'react'
import { TasksContainer } from './TasksContainer'
import { tasksService } from '../../service'
import { useStyles } from './styles'
import { Grid, Paper, Typography, Divider } from '@material-ui/core'
import { AddButton } from '../common/addButton/AddButton'
import { AddTask } from '../alerts/addTask/AddTask'

const SelectedProjectTasksContainer = ({projectId}) => {

  const TO_DO = 0
  const IN_PROGRESS = 1
  const DONE = 2

  const classes = useStyles()
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false)
  const [selectedTask, setSelectedTask] = useState(undefined)

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
  
  const handleClickAddTask = () => {
    setOpenAddTaskModal(true)
  }

  const handleSaveNewTask = async e => {
    e.preventDefault()
    const name = e.target.name.value
    const description = e.target.description.value
    const storyPoints = e.target.sPoints.value
    const plannedHours = e.target.pHours.value

    const newTask = {
      name,
      description,
      storyPoints,
      plannedHours,
      
      state: 0,
      workedHours: 0,
      projectId,
      members: []
    }

    try {
      await tasksService.saveNewTask(newTask, onTaskSavedCallback)
    } catch(error) {
      alert(error)
    }
    setOpenAddTaskModal(false)
  }

  const onTaskSavedCallback = result => {
    const { type, task, msg } = result
    if (type === 0) {
      setTasks([
        ...tasks,
        task
      ])
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
          <TasksContainer 
            type={TO_DO}
            tasks={tasks ? tasks.filter( t => t.state === TO_DO ) : []}/>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.inProgressTaskTitle}>
            In Progress
          </Typography>
          <Divider variant='middle' className={classes.inProgressTaskDivider} />
          <TasksContainer 
            type={IN_PROGRESS}
            tasks={tasks ? tasks.filter( t => t.state === IN_PROGRESS ) : []}/>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.doneTaskTitle}>
            Done
          </Typography>
          <Divider variant='middle' className={classes.doneTaskDivider} />
          <TasksContainer 
            type={DONE}
            tasks={tasks ? tasks.filter( t => t.state === DONE ) : []}/>
        </Grid>
        <AddButton handleClickCallback={handleClickAddTask} />
        {openAddTaskModal && (
          <AddTask 
            open={openAddTaskModal}
            handleClose={() => setOpenAddTaskModal(false)}
            handleSaveNewTask={handleSaveNewTask}/>
        )}
      </Grid>
    </div>
  )
}

export { SelectedProjectTasksContainer }