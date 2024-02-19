import React from 'react'
import arrow from '@mui/icons-material/KeyboardArrowDownRounded';
const Selector = function (){
    return <div className='w-72 font-medium h-80'>
        <div className='bg-white w-full p-2 flex items-center justify-center rounded'>
            <img src={arrow} alt=""/>
            انتخاب طبقه

        </div>
    </div>
}






export default Selector

//-------------------------------------------------
/*import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import arrow from '@mui/icons-material/KeyboardArrowDownRounded'; // اصلاح شده
import './custom-button.css'
const styles = {
    label: {
        direction: "rtl",
        textAlign: 'right',
        alignItems:'right',
        marginLeft: 46,
        color:'#9E9E9E',
        fontSize:20,
        fontWeight:500,

    },
    icon: {
        position: 'absolute',
        left: 4, // تنظیم موقعیت افقی آیکون
        top: 4, // تنظیم موقعیت عمودی آیکون
    },
    bg: {
        fontFamily:'vazir',
        width: 438,
        height: 64,
        backgroundColor: '#F3F3F3',
        borderRadius: 45,
        direction: 'rtl',
        color:'#9E9E9E',
        textAlign: 'right',
    }
};

export default function SelectLabels() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl  sx={{ m: 1, minWidth: 120 }}>
                <InputLabel  id="demo-simple-select-label" sx={styles.label}>
                    پروژه
                </InputLabel>
                <Select
                    sx={{...styles.bg,}}
                    IconComponent={arrow}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem  sx={styles.bg}>بعثت تا ظهور</MenuItem>
                    <MenuItem  sx={styles.bg}>اسرا</MenuItem>
                    <MenuItem  sx={styles.bg}>ساختمان</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
*/
//-------------------------------------------------------------------------
/*import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded'; // اصلاح شده
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    direction: 'rtl', // راست به چپ
    // سایر تنظیمات تم
});
const styles = {
    label: {
        direction: "rtl",
        textAlign: 'right',
        alignItems:'right'
    },
    icon: {
        // تنظیمات مربوط به آیکون، اگر نیاز باشد
    },
    bg: {
        width: 438,
        height: 64,
        backgroundColor: '#F3F3F3',
        borderRadius: 45,
        direction: 'rtl',
        // display: 'flex', // اصلاح شده برای عملکرد بهتر در RTL
        // justifyContent: 'flex-end', // اصلاح شده
        // alignItems: 'right', // اصلاح شده
        // padding: '0 20px', // افزوده شده برای فاصله داخلی
        textAlign: 'right'
    }
};

export default function SelectInput() {
    const [project, setProject] = React.useState('');

    const handleChange = (event) => {
        setProject(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" sx={styles.label}>
                    پروژه
                </InputLabel>
                <Select
                    sx={styles.bg}
                    IconComponent={KeyboardArrowDownRounded} // اصلاح شده
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={project}
                    onChange={handleChange}
                    label="Project"
                >
                    <MenuItem value={10} sx={styles.bg}>به سوی ظهور</MenuItem>
                    <MenuItem value={20} sx={styles.bg}>اسمه احمد</MenuItem>
                    <MenuItem value={30} sx={styles.bg}>ساختمان</MenuItem>
                </Select>
            </FormControl>
            <br/>
            فونت ایران یکان
            <br/>
            ویت ۵۰۰
            <br/>
            سایز ۲۰ پیکسل
            <br/>
            رنگ متن
            #9E9E9E
            <br/>
            رنگ پس‌زمینه:
            #F3F3F3
            <br/>
            عرض:۴۳۸
            <br/>
            ارتفاع:۶۴
            <br/>
            آیکون:
            طول و عرض:۲۴
            فاصله از چپ و بالا: ۴
        </Box>
        </ThemeProvider>
    );
}

 */
