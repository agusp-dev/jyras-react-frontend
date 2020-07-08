import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../utils/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '25vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '280px',
    width: '280px',
    opacity: '0.5'
  },
  text: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    color: colors.MAIN_BLUE_100,
    font: 'Bold 22px Montserrat'
  }
}))