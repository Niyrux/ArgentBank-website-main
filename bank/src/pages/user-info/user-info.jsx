import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import './user-info.css';
import View from '../../components/view-money/view';
import Edit from '../../components/editUserInfo/edit';

function AutrePage() {
  const userData = useSelector(state => state.userInfo.data);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (userData && userData.email === null) {
      navigate('/');
    }
  }, [userData, navigate]);

  return (
    <div className='main bg-dark'>
      <div className="header">
        <Edit/>
      </div>
      <View Argent={"Argent Bank Checking (x8349)"} money={"$2,082.79"} current={"$184.30"}/>
      <View Argent={"Argent Bank Checking (x8349)"} money={"$2,082.79"} current={"$184.30"}/>
      <View Argent={"Argent Bank Checking (x8349)"} money={"$2,082.79"} current={"$184.30"}/>
    </div>
  );
}

export default AutrePage;
