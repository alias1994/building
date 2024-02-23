import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/CloseRounded';
import CheckIcon from '@mui/icons-material/Check';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';import { Typography, Box } from '@mui/material';
import './custom-button.css'
import FilterVintageRoundedIcon from '@mui/icons-material/FilterVintageRounded';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // تابع فرضی برای نمونه
    const handleActionClick = () => {
        console.log('Action clicked!');
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', height: '100vh' }}>
            <Paper sx={{
                width: isOpen ? 361 : 92,
                height: '88vh',
                position: 'fixed',
                right: 52,
                top: 52,
                backgroundColor: 'white',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
                boxSizing: 'border-box',
                justifyContent: 'flex-start', // Ensure items align to the top
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                    paddingLeft: '10px',
                    marginBottom: '10px',
                }}>
                    <IconButton onClick={toggleSidebar} sx={{ marginRight: 'auto', color: '#463F3F', }}>
                        {isOpen ? <CloseIcon sx={{fontSize:'3rem'}} /> : <MenuIcon sx={{fontSize:'2.5rem'}} />}
                    </IconButton>
                    {isOpen && <Typography sx={{marginRight:'30px',fontFamily:'vazir',fontSize:'28px',fontWeight:500 }}>نوار کاربری</Typography>}
                </Box>
                <Box sx={{ alignSelf: 'center', display: 'flex',
                    flexDirection: isOpen ? 'row' : 'column',
                    alignItems: 'center',marginTop:'50px',
                    backgroundColor:'rgba(241, 95, 43, 0.1)',
                    width: isOpen ? '295px' : '50px',
                    height: isOpen ? 'auto' : '50px',
                    borderRadius: isOpen ? '45px' : '50%',
                    justifyContent: isOpen ? 'right' : 'center',
                }}>
                    {isOpen && <Typography sx={{ mr: 1,fontFamily:'vazir',fontSize:'20px',fontWeight:500 }}>کارهای شما</Typography>}
                    <IconButton onClick={handleActionClick}>
                        <PermIdentityRoundedIcon sx={{ color:'#F15F2B',fontSize:'32px',top:'204px' }} />
                    </IconButton>
                </Box>
                <Box sx={{ alignSelf: 'center', display: 'flex',
                    flexDirection: isOpen ? 'row' : 'column',
                    alignItems: 'center',marginTop:'30px',
                    backgroundColor:'rgba(241, 95, 43, 0.1)',
                    width: isOpen ? '295px' : '50px',
                    height: isOpen ? 'auto' : '50px',
                    borderRadius: isOpen ? '45px' : '50%',
                    justifyContent: isOpen ? 'right' : 'center',
                }}>
                    {isOpen && <Typography sx={{ mr: 1 ,fontFamily:'vazir',
                        fontSize:'20px',fontWeight:500,
                    }}>پروژه‌ها</Typography>}
                    <IconButton onClick={handleActionClick}>
                        <CheckIcon sx={{ fontSize:'32px',top:'288px',color:'#F15F2B' }} />
                    </IconButton>
                </Box>
                <Box sx={{ alignSelf: 'center', display: 'flex',
                    flexDirection: isOpen ? 'row' : 'column',
                    alignItems: 'center',marginTop:'430px',
                    backgroundColor:'rgba(241, 95, 43, 0.1)',
                    width: isOpen ? '295px' : '50px',
                    height: isOpen ? 'auto' : '50px',
                    borderRadius: isOpen ? '45px' : '50%',
                    justifyContent: isOpen ? 'right' : 'center',

                }}>
                    {isOpen && <Typography sx={{ mr: 1 ,fontFamily:'vazir',
                        fontSize:'20px',fontWeight:500,
                    }}>پروفایل</Typography>}
                    <IconButton onClick={handleActionClick}>
                        <FilterVintageRoundedIcon sx={{ fontSize:'32px',top:'288px',color:'#F15F2B' }} />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
};

export default Sidebar;
