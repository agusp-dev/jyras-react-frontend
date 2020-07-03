import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../../utils'

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 16,
    right: 24,
    background: colors.MAIN_GREEN,
    '&:hover': {
      background: colors.SECOND_GREEN
    },
    color: colors.WHITE
  }
}))