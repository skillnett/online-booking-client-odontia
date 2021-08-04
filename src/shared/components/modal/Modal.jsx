import React from 'react'
import { Modal, Backdrop, Fade } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '@shared/constants/colors'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: 20,
        border: `1px solid ${Colors.text}`,
        borderRadius: 16,
        width: 300,
    },
}))

export const ModalComponent = ({ children, isModalOpen, toggleModal }) => {
    const classes = useStyles()

    return (
        <Modal
            className={classes.modal}
            open={isModalOpen}
            onClose={toggleModal}
            BackdropComponent={Backdrop}
            closeAfterTransition
            BackdropProps={{
                timeout: 300,
            }}
        >
            <Fade in={isModalOpen}>
                <div className={classes.paper}>{children}</div>
            </Fade>
        </Modal>
    )
}
