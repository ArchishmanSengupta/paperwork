    const styles = theme => ({
        root: {
        backgroundColor: theme.palette.background.paper,
        height: 'calc(100% - 35px)',
        position: 'absolute',
        left: '0',
        width: '300px',
        boxShadow: '0px 0px 2px black'
        },
        newChatBtn: {
        borderRadius: '0px'
        },
        unreadMessage: {
        color: 'red',
        position: 'absolute',
        top: '0',
        right: '5px'
        },
        newNoteBtn: {
        width: '100%',
        height: '35px',
        borderBottom: '1px solid black',
        borderRadius: '0px',
        backgroundColor: '#000',
        color: 'white',
        '&:hover': {
            backgroundColor: 'green'
        }
        },
        sidebarContainer: {
        marginTop: '0px',
        width: '300px',
        height: '100%',
        boxSizing: 'border-box',
        float: 'left',
        overflowY: 'scroll',
        overflowX: 'hidden',
        cursor: 'pointer'
        },
        newNoteInput: {
        width: '100%',
        margin: '0px',
        height: '70px',
        outline: 'none',
        border: 'none',
        paddingLeft: '5px',
        '&:focus': {
            outline: '2px solid rgba(81, 203, 238, 1)'
        }
        },
        newNoteSubmitBtn: {
        width: '100%',
        backgroundColor: '#00A82D',
        borderRadius: '0px',
        color: 'black',
        '&:hover': {
            backgroundColor: 'lightgreen'
        }
        }
    });
    
    export default styles;