import React from 'react';
import { AiOutlineEdit, AiFillEye } from 'react-icons/ai'


const ActionBtn = () => {
    return (
        <td > <button className=' shadow-md p-1 rounded-full '><AiFillEye /></button>   <button className='shadow-md p-1 rounded-full '><AiOutlineEdit /></button> </td>
    );
};

export default ActionBtn;