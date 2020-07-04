import React, { useState, useEffect } from 'react'
import { TasksContainer } from './TasksContainer'
import { tasksService } from '../../service'
import { useStyles } from './styles'
import { Grid, Typography, Divider } from '@material-ui/core'
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

  const handleSave = async (e, id) => {

    const name = e.target.name.value
    const description = e.target.description.value
    const storyPoints = e.target.sPoints.value
    const plannedHours = e.target.pHours.value
    const state = e.target.tState.value
    const workedHours = e.target.wHours.value

    const newTask = {
      name,
      description,
      storyPoints: Number(storyPoints),
      plannedHours: Number(plannedHours),
      state: Number(state),
      workedHours: Number(workedHours),
      projectId,
      members: []
    }

    try {
      if (!id) {
        //create task
        await tasksService.saveNewTask(newTask, onTaskSavedCallback)
      } else {
        //update task
        await tasksService.updateTask(id, newTask, onTaskSavedCallback)
      }
    } catch(error) {
      alert(error)
    } finally {
      setOpenAddTaskModal(false)
      setSelectedTask(undefined)
    }
  }

  const onTaskSavedCallback = (isNew, result) => {
    const { type, task, msg } = result
    if (type === 0) {
      if (isNew) {
        //Add task to array
        setTasks([
          ...tasks,
          task
        ])
      } else {
        //Update task in array
        const update = tasks.find( t => t.id === task.id )
        if (!update) return
        update.name = task.name
        update.description = task.description
        update.plannedHours = task.plannedHours
        update.state = task.state
        update.storyPoints = task.storyPoints
        update.workedHours = task.workedHours
        setTasks([...tasks])
      }
    } else {
      alert(msg)
    }
  }

  const onHandleViewTask = id => {
    if (tasks && tasks.length > 0) {
      const selectedTask = tasks.find( t => t.id === id )
      if (!selectedTask) return
      setSelectedTask(selectedTask)
      setOpenAddTaskModal(true)
    }
  }

  const handleClose = () => {
    setOpenAddTaskModal(false)
    setSelectedTask(undefined)
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
            tasks={tasks ? tasks.filter( t => t.state === TO_DO ) : []}
            onSelectedTask={onHandleViewTask}/>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.inProgressTaskTitle}>
            In Progress
          </Typography>
          <Divider variant='middle' className={classes.inProgressTaskDivider} />
          <TasksContainer 
            tasks={tasks ? tasks.filter( t => t.state === IN_PROGRESS ) : []}
            onSelectedTask={onHandleViewTask}/>
        </Grid>
        <Grid item xs={4}>
          <Typography gutterBottom component='h6' className={classes.doneTaskTitle}>
            Done
          </Typography>
          <Divider variant='middle' className={classes.doneTaskDivider} />
          <TasksContainer 
            tasks={tasks ? tasks.filter( t => t.state === DONE ) : []}
            onSelectedTask={onHandleViewTask}/>
        </Grid>
        <AddButton handleClickCallback={handleClickAddTask} />
        {openAddTaskModal && (
          <AddTask 
            task={selectedTask}
            open={openAddTaskModal}
            handleClose={handleClose}
            handleSave={handleSave}/>
        )}
      </Grid>
    </div>
  )
}

export { SelectedProjectTasksContainer }