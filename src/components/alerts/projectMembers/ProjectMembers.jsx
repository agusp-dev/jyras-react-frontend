import React, { useState, useEffect } from 'react'
import { Dialog, DialogActions, 
  DialogContent, DialogTitle, DialogContentText,
  Button, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, 
  Paper, Avatar, Grid, Typography, 
  IconButton } from '@material-ui/core'
import { Check, Delete, AirlineSeatFlatAngledSharp } from '@material-ui/icons'
import { useStyles } from './styles'
import PropTypes from 'prop-types'
import { userService } from '../../../service'
import { MembersFilter } from './MembersFilter'
import { projectsService } from '../../../service'

const ProjectMembers = ({
	projectId,
	open,  
	handleClose, 
	members, 
	filterUsers,
	selectedUser,
	setSelectedUser, 
	onAddMember}) => {

  const classes = useStyles()

  return (
    <div>
      <Dialog
        fullWidth
        maxWidth='xl'
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title">
        <DialogTitle id='form-dialog-title'>Project Members</DialogTitle>
        <DialogContent>

          <DialogContentText>
            Find users and add them as members to your project. If you do not find a user, they must be registered before on our home page.
          </DialogContentText>

          <Grid container className={classes.autocompleteContainer}>
            <MembersFilter 
							members={filterUsers || []}
							selectedMember={selectedUser}
              onMemberSelected={(e, user) => setSelectedUser(user)}/>
          </Grid>

          <TableContainer className={classes.selectedUserTable} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.photoRow}>Photo</TableCell>
                  <TableCell className={classes.nameSurnameRow} align='center'>Name</TableCell>
                  <TableCell className={classes.nameSurnameRow} align='center'>Surname</TableCell>
                  <TableCell className={classes.emailRow} align='center'>Email</TableCell>
                  <TableCell className={classes.actionsRow} align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedUser && (
                  <TableRow key={selectedUser.id}>
                    <TableCell>
                      <Avatar alt={`${selectedUser.name} ${selectedUser.surname}`} src='n'/>
                    </TableCell>
                    <TableCell align='center'>{selectedUser.name}</TableCell>
                    <TableCell align='center'>{selectedUser.surname}</TableCell>
                    <TableCell align='center'>{selectedUser.email}</TableCell>
                    <TableCell align='right'>
                      <Button
                        variant='contained'
                        color='primary'
												size='small'
												onClick={() => onAddMember(selectedUser)}
                        startIcon={ <Check /> }
                      >
                        Add
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          
          <TableContainer component={Paper}>
            <Typography>
              Your Project Members
            </Typography>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell className={classes.photoRow}>Photo</TableCell>
                  <TableCell className={classes.nameSurnameRow} align='center'>Name</TableCell>
                  <TableCell className={classes.nameSurnameRow} align='center'>Surname</TableCell>
                  <TableCell className={classes.emailRow} align='center'>Email</TableCell>
                  <TableCell className={classes.actionsRow} align='right'>Actions</TableCell>
                </TableRow>
              </TableHead>
              {members.length > 0 ? (
                <TableBody>
                  {members.map(m => {
                    return (
                      <TableRow key={m.email}>
                        <TableCell>
                          <Avatar alt={`${m.name} ${m.surname}`} src='n'/>
                        </TableCell>
                        <TableCell align='center'>{m.name}</TableCell>
                        <TableCell align='center'>{m.surname}</TableCell>
                        <TableCell align='center'>{m.email}</TableCell>
                        <TableCell align='right'>
                          <Button
                            variant='contained'
                            color='secondary'
                            size='small'
                            startIcon={ <Delete /> }
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              ) : 'No Users'}
            </Table>
          </TableContainer>

        </DialogContent>
        <DialogActions className={classes.memberButtonContent}>
            {/* <AddMemberButton handleClickCallback={onHandleNewMemberClick}/> */}
            <Button onClick={handleClose} color='primary'>
              CLOSE
            </Button>
        </DialogActions>

        {/* {showNewUserAlert && (
          <AddMember
            open={showNewUserAlert}
            handleClose={() => openNewUserAlert(false)}
            handleSave={onHandleNewMemberSave} />
        )} */}
          
      </Dialog>
    </div>
  )
}

ProjectMembers.propTypes = {
	projectId: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	members: PropTypes.array.isRequired,
	filterUsers: PropTypes.array.isRequired,
	setSelectedUser: PropTypes.func.isRequired,
	onAddMember: PropTypes.func.isRequired
}

export { ProjectMembers }

