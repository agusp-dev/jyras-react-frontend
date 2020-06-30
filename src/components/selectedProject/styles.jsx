import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../utils'

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
  inProgresstaskTitle: {
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
  }




  // todoTaskPaper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: colors.WHITE,
  //   background: colors.TODO_TASK_COLOR
  // },
  // inProgressTaskPaper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: colors.WHITE,
  //   background: colors.IN_PROGRESS_TASK_COLOR
  // },
  // doneTaskPaper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: colors.WHITE,
  //   background: colors.DONE_TASK_COLOR
  // }
}))