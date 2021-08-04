import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.scss';

function Home() {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("login");
        history.replace("/login")
    }
    return (
        <div className="home">
            <h2>Bạn đã đăng nhập thành công</h2>
            <button onClick={logout}>Log out</button>
        </div>
    )
}
export default Home;