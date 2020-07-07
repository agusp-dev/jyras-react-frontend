import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../utils'

export const useStyles = makeStyles(theme => ({
  projectContainer: {
    flexGrow: 1
  },
  header: {
    flexGrow: 1,
    marginBottom: '40px'
  },
  headerTitle: {
    color: colors.MAIN_GREEN,
    font: 'Bold 32px Montserrat'
  },
  headerDescription: {
    marginTop: 14,
    marginLeft: 24,
    font: '18px Montserrat'
  },
  editButton: {
    marginLeft: 8,
    
  },
  headerMembers: {
    display: 'flex'
  },
  headerRemoveContent: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
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
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: 20
  },
  taskCardRoot: {
     width: '100%',
     marginBottom: 14
  },
  cardViewButton: {
    justifyContent: 'flex-end'
  }
}))