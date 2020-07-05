import { makeStyles } from '@material-ui/core'
import signinImage from '../../assets/signin5.jpg'
import * as color from '../../utils/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${signinImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: color.MAIN_GREEN,
    borderColor: color.MAIN_GREEN,
    '&:hover': {
      backgroundColor: color.SECOND_GREEN,
      borderColor: color.SECOND_GREEN,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: color.SECOND_GREEN,
      borderColor: color.SECOND_GREEN,
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    }
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