import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../../utils/colors'

export const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  memberButtonContent: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end'
  },
  addMemberButton: {
    position: 'absolute',
    left: '50%',
    bottom: '8px',    
    background: colors.MAIN_GREEN,
    '&:hover': {
      background: colors.SECOND_GREEN
    },
    color: colors.WHITE
  },
}))