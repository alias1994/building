import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';


// برای یکی در میون خاکستری شدن بک گراند جدوله این 
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: "rgba(158, 158, 158, 0.5)",
  },
}));

// این و ارایه زیریش رو  این شکلی دیتاهارو دادن به جدول، دیتایی از سمت بک بیاد باید این شکلیش کنیم
function createData(key, value, icon ) {
  return {key, value, icon};
}
const datas = [
  createData('طبقه', 4,<MenuOpenIcon/>),
  createData('پروژه','مسیر پروژه'),
  createData('تعریف کننده','دکتر',<PermIdentityRoundedIcon/>),
  createData('توضیحات','یکسری توضیحات شامل فلان و بهمان',<NotesRoundedIcon/>),
  createData('پیش نیاز','یکسری پیشنیاز ها شامل فلان و بیثار'),
  createData('پیوست',' فایل یا سایت یا بیجای پیوست'),
];


export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} 
    sx={{
      width: '904px',
       height:'391px',
       direction :'rtl',
       fontWeight: '30px',
       border: '1px solid #9E9E9E',
       }}>
      <Table aria-label="customized table">
        <TableBody >
          {datas.map((data) => (
            <StyledTableRow  key={data.project}>
              <TableCell  align="right" sx={{width: '32px', height: '32px',borderBottom: '1px solid #9E9E9E', color: '#F15F2B'}}>{data.icon}</TableCell>
              <TableCell  align="right" sx={{fontSize: '24px',borderBottom: '1px solid #9E9E9E', color: '#463F3F', }}>{data.key}</TableCell>
              <TableCell align="right" sx={{fontSize: '24px',borderBottom: '1px solid #9E9E9E', color: '#463F3F'}}>{data.value}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

