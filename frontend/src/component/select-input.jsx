import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";
import Select, { components } from 'react-select';
import './custom-button.css';
import '@fontsource/roboto/700.css';
const SelectInput = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleSelectChange = (newValue) => {
        setSelectedValue(newValue);
    };

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                {props.selectProps.menuIsOpen ?
                    <IoIosArrowUp style={{fontSize: '30px', color: '#9E9E9E'}} />
                    : <IoIosArrowDown style={{fontSize: '30px', color: '#9E9E9E'}} />}
            </components.DropdownIndicator>
        );
    };

    const customComponents = {
        DropdownIndicator,
        IndicatorSeparator: () => null, // برای حذف جداکننده
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            width: '415px',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            marginRight:'10px',
            itemAlign:'left',
            color:'#9E9E9E',
            fontFamily:'vazir'
        }),
        menu: (provided) => ({//این کادر کلی باز شونده رو کنترل می‌کنه
            marginRight:'275px',
            ...provided,
            width:'160px',
            backgroundColor: '#F3F3F3',
            borderRadius: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            color:'#9E9E9E',
            fontFamily:'vazir'

        }),
        option: (provided, state) => ({//این هم دونه دونهٔ آیتم‌ها رو کنترل می‌کنه
            ...provided,
            width: '150px',
            height:'40px',
            backgroundColor: state.isSelected ? 'blue' : '#F3F3F3',
            color: state.isSelected ? 'white' : '#9E9E9E',
            '&:hover': {
                backgroundColor: 'lightgray',
            },
            borderRadius: '45px',
            marginRight: '5px',
            borderBottom: '1px #9E9E9E solid',
            fontFamily:'vazir'
        }),
    };

    return (
        <div dir='rtl' style={{
            userSelect:'none',
            width: "438px",
            height: "64px",
            borderRadius: "45px",
            backgroundColor: "#F3F3F3",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily:'vazir',
            fontSize:'24px',
            color:'#9E9E9E',
            fontWeight:500
        }}>
            <Select
                options={[
                    { value: "1", label: "طبقه اول" },
                    { value: "2", label: "طبقه دوم" },
                    { value: "3", label: "طبقه سوم" },
                    { value: "4", label: "طبقه چهارم" },
                    { value: "5", label: "طبقه پنجم" },
                    { value: "6", label: "طبقه ششم" },
                    { value: "7", label: "طبقه هفتم" },
                ]}
                menuIsOpen={menuIsOpen}

                onMenuOpen={() => setMenuIsOpen(true)}
                onMenuClose={() => setMenuIsOpen(false)}
                components={{ DropdownIndicator, ...customComponents }}
                value={selectedValue}
                onChange={handleSelectChange}
                icon={<IoIosArrowDown/>}
                placeholder='انتخاب طبقه'
                styles={customStyles}
            />
        </div>
    );
};

export default SelectInput;
