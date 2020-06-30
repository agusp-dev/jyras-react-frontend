import { makeStyles } from '@material-ui/styles'
import * as colors from '../../utils/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  cardViewButton: {
    justifyContent: 'flex-end'
  },
  AddButton: {
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