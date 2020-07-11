import { makeStyles } from '@material-ui/core/styles'
import * as colors from '../../../utils/colors'

export const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  },
  photoRow: {
    width: '10%'
  },
  nameSurnameRow: {
    width: '20%'
  },
  emailRow: {
    width: '30%'
  },
  actionsRow: {
    width: '20%'
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
  autocompleteContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  autocomplete: {
    width: 400,
    marginBottom: theme.spacing(3),
  },
  selectedUserTable: {
    marginBottom: theme.spacing(5)
  }
}))