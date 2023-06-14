import { Link, Outlet } from 'react-router-dom';

export function DashboardLayout() {
	return (
		<>
			<nav>Side and TopBar</nav>

			<Outlet />
		</>
	);
}
