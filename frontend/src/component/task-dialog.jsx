import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/CloseRounded';import Typography from '@mui/material/Typography';
import './custom-button.css'
import EditIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteIcon from '@mui/icons-material/DeleteRounded';
const MUIDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const styles={
    description:{
        textAlign:'right',
        fontFamily: 'vazir',
        fontSize: '16px',
        fontWeight: 700,
        dir:'rtl',
        color:'#463F3F',
        marginRight:'25px',
        marginLeft:'20px',
        lineHeight:'22.55px',
        marginBottom:'-15px',
        marginTop: '25px'
    },
    body:{'& .MuiPaper-root':{
        width: '345px',
        height: '359px',
        }},
    title:{
        fontFamily:'vazir',
        textAlign:'center',
        fontSize:'24px',
        fontWeight:700,
        marginTop:'60px',
        color:'#463F3F',

    },
    closeIcon:{
        width:'50px',
        height:'50px',
        color:'#463F3F',
        marginTop:'-2%'
    },
    DeleteIcon:{
        itemAlign: 'left',
        color:'#F15F2B',
        width:'50px',
        height:'50px',
        display: 'flex',
        position:'absolute',
        marginTop:'4%',
        fontSize:'24px',
    },
    EditIcon:{
        color:'#F15F2B',
        width:'50px',
        height:'50px',
        display: 'flex',
        position:'absolute',
        marginTop:'10px',
        marginLeft:'15%'
    },
    fullView:{
        backgroundColor:'#F15F2B',
        color:'#FFFFFF',
        width:'315px',
        height:'64px',
        marginRight:'auto',
        marginLeft: 'auto',
        borderRadius:'12px',
        fontFamily:'vazir',
        fontSize:'24px',
        fontWeight:700,
        bottom:-45
    },
}
export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                مشاهده پروژه
            </Button>
            <MUIDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={styles.body}
            >
                <DialogTitle sx={styles.title} id="customized-dialog-title">
                    عنوان پروژه
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon sx={styles.closeIcon}/>
                </IconButton>
                <IconButton sx={styles.DeleteIcon} onClick={handleClose}>
                    <DeleteIcon sx={styles.DeleteIcon}/>
                </IconButton>
                <IconButton sx={styles.EditIcon} onClick={handleClose}>
                    <EditIcon sx={styles.EditIcon}/>
                </IconButton>
                {/*<div sx={styles.coupleIcons}>*/}
                {/*    <IconButton sx={styles.DeleteIcon}>*/}
                {/*        <DeleteIcon />*/}
                {/*    </IconButton>*/}
                {/*    <IconButton sx={styles.EditIcon}>*/}
                {/*        <EditIcon />*/}
                {/*    </IconButton>*/}
                {/*</div>*/}
                <Typography sx={styles.description}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و ...

                </Typography>
                {/*<DialogContent dividers>*/}
                {/*    <Typography gutterBottom sx={styles.description}>*/}
                {/*    </Typography>*/}
                {/*</DialogContent>*/}
                <DialogActions>
                    <Button autoFocus onClick={handleClose} sx={styles.fullView}>
                        مشاهده کامل کار
                    </Button>
                </DialogActions>
            </MUIDialog>
        </React.Fragment>
    );
}