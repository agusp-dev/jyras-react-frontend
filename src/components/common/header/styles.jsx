import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../../utils'

export const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '40px'
  },
  title: {
    color: colors.MAIN_GREEN,
    font: 'Bold 32px Montserrat'
  }
}))