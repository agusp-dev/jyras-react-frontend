import { makeStyles } from '@material-ui/core'
import * as colors from '../../utils/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    marginTop: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  routesNav: {
    textAlign: 'center'
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: colors.MAIN_BLUE
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '8px'
  },
  logo: {
    height: 20,
    width: 100,
  },
  navButton: {
    color: colors.MAIN_BLUE_300,
    marginTop: '2px',
    marginLeft: '6px',
    marginRight: '6px',    
    '&:hover': {
      backgroundColor: colors.MAIN_BLUE_800,
      boxShadow: 'none',
    }
  },
  menuNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
}))
