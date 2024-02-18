import React from 'react';
import './custom-button.css'
const containerStyle = {
    width: '268px',
    height: '116px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '10px',
    boxSizing: 'border-box',
};

const circleStyle = {
    width: '76px',
    height: '76px',
    backgroundColor: '#F15F2B',
    borderRadius: '50%',
    textAlign:'center',
};

const textStyle = {
    color: '#463F3F',
    fontSize: '24',
    fontFamily:'vazir',
    fontWeight:700,
};
const tabaghe ={
    color:'white',
    fontFamily: 'vazir',
    fontWeight: 400,
    fontSize: '16px',
    textAlign:'center',
    marginTop:'5px',
}
const Number ={
    color:'white',
    fontFamily:'vazir',
    fontWeight:700,
    fontSize:'40px',
    marginTop: '-2px'
}

function MiddleFloor() {


    return (
        <div style={containerStyle}>
            <div style={textStyle}>متن مورد نظر در طبقه</div>
            <div style={circleStyle}><div style={tabaghe}>طبقه</div><div style={Number}>n</div></div>
        </div>
    );
}
function TopFloor(){
    return(<div style={{...containerStyle,borderRadius:'0px 8px 0px 0px'}}>
        <div style={textStyle}>متن مورد نظر در طبقه</div>
        <div style={circleStyle}><div style={tabaghe}>طبقه</div><div style={Number}>n</div></div>
    </div>)
}
function BottomFloor(){
    return(
        <div style={{...containerStyle,borderRadius:'0 0 8px 0'}}>
            <div style={textStyle}>متن مورد نظر در طبقه</div>
            <div style={circleStyle}><div style={tabaghe}>طبقه</div><div style={Number}>n</div></div>
        </div>
    )
}
const Floor = {TopFloor,MiddleFloor,BottomFloor}
export default Floor;
