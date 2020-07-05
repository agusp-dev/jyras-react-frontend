import { makeStyles } from '@material-ui/core'
import * as color from '../../utils/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  cardViewButton: {
    justifyContent: 'flex-end'
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    margin: 'auto',
    color: color.MAIN_GREEN
  }
}))