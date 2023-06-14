import { Outlet } from 'react-router-dom';
import './DashboardLayout.scss';
import SideNav from './components/sidenav/Sidenav';
import Navbar from './components/topnav/Navbar';

export function DashboardLayout() {
	return (
		<div className='dashboard'>
			<Navbar />
			<div className='dashboard__main'>
				<SideNav />
				<div className='dashboard__body'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}
