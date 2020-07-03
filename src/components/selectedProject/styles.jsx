import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../utils'
import { Autorenew } from '@material-ui/icons'

export const useStyles = makeStyles(theme => ({
  projectContainer: {
    flexGrow: 1
  },
  todoTaskTitle: {
    padding: 12,
    textAlign: 'center',
    color: colors.TODO_TASK_COLOR,
  },
  todoTaskDivider: {
    background: colors.TODO_TASK_COLOR
  },
  inProgressTaskTitle: {
    padding: 12,
    textAlign: 'center',
    color: colors.IN_PROGRESS_TASK_COLOR,
  },
  inProgressTaskDivider: {
    background: colors.IN_PROGRESS_TASK_COLOR
  },
  doneTaskTitle: {
    padding: 12,
    textAlign: 'center',
    color: colors.DONE_TASK_COLOR,
  },
  doneTaskDivider: {
    background: colors.DONE_TASK_COLOR
  },
  taskContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    padding: 20
  },
  taskCardRoot: {
    maxWidth: 345
  },
  cardViewButton: {
    justifyContent: 'flex-end'
  }
}))