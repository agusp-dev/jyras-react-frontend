import { makeStyles } from '@material-ui/core'
import * as color from '../../utils/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: color.MAIN_BLUE
  },
  logo: {
    height: 24,
    width: 105,
    marginTop: '5px'
  }
}))
