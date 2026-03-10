import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;