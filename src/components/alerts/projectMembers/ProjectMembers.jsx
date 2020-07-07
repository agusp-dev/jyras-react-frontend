import React, { useState } from 'react'
import { AddMemberButton } from './AddMemberButton'
import { Dialog, DialogActions, 
  DialogContent, DialogTitle, Button, 
  Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Paper, Avatar } from '@material-ui/core'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { AddMember } from '../addMember/AddMember'

const ProjectMembers = ({members, open, handleClose}) => {

  const classes = useStyles()

  const [showNewUserAlert, openNewUserAlert] = useState(false)

  const onHandleNewMemberClick = () => {
    openNewUserAlert(true)
  }

  const onHandleNewMemberSave = e => {
    e.preventDefault()
    const email = e.target.email.value
    const name = e.target.name.value
    const surname = e.target.surname.value
    addNewUser(email, name, surname)
    openNewUserAlert(false)
  }

  const addNewUser = (e, n, s) => {
    console.log(e, n, s)
  }

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth='xl'
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title">
        <DialogTitle id='form-dialog-title'>Project Users</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Photo</TableCell>
                  <TableCell align='center'>Id</TableCell>
                  <TableCell align='center'>Name</TableCell>
                  <TableCell align='center'>Surname</TableCell>
                  <TableCell align='center'>Email</TableCell>
                  <TableCell align='center'>Actions</TableCell>
                </TableRow>
              </TableHead>
              {members.length > 0 ? (
                <TableBody>
                  {members.map(m => {
                    return (
                      <TableRow key={m.id}>
                        <TableCell>
                          <Avatar alt={`${m.name} ${m.surname}`} src='n'/>
                        </TableCell>
                        <TableCell align='center'>{m.id}</TableCell>
                        <TableCell align='center'>{m.name}</TableCell>
                        <TableCell align='center'>{m.surname}</TableCell>
                        <TableCell align='center'>{m.email}</TableCell>
                        <TableCell align='center'>No actions</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              ) : 'No Users'}
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions className={classes.memberButtonContent}>
            <AddMemberButton handleClickCallback={onHandleNewMemberClick}/>
            <Button onClick={handleClose} color='primary'>
              CLOSE
            </Button>
        </DialogActions>

        {showNewUserAlert && (
          <AddMember
            open={showNewUserAlert}
            handleClose={() => openNewUserAlert(false)}
            handleSave={onHandleNewMemberSave} />
        )}
          
      </Dialog>
    </div>
  )
}

ProjectMembers.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired
}

export { ProjectMembers }

