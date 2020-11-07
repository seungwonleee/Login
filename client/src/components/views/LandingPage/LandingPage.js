import React, { useEffect } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/loginSuccess')
            .then(res => console.log(res.data))
    }, [])

    const onClickHandler = () => {
        axios.get(`/api/users/logout`)
            .then(res => {
                if (res.data.success) {
                    console.log('logout !!!')
                    props.history.push('/login');
                } else {
                    alert('로그아웃 하는데 실패했습니다.')
                }
            });
    }

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh',
        }}>
            <h2>시작페이지</h2>
            <button onClick={onClickHandler}>로그아웃</button>
        </div>
    )
}

export default withRouter(LandingPage);
