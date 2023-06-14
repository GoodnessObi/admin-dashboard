import { Navigate, Route, Routes } from 'react-router-dom';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import User from './pages/users/userdetails/user';
import Users from './pages/users/userlist/users';
import { DashboardLayout } from './layouts/userlayout/DashboardLayout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/users' replace />} />
			<Route path='/users' element={<DashboardLayout />}>
				<Route index element={<Users />} />
				<Route path=':id' element={<User />} />
			</Route>
		</Routes>
	);
}

export default App;
