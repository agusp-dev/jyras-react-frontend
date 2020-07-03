import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}))