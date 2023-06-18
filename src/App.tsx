import { Navigate, Route, Routes } from 'react-router-dom';
import User from './pages/users/userdetails/User';
import Users from './pages/users/userslist/Users';
import { DashboardLayout } from './layouts/userlayout/DashboardLayout';
import Signin from './pages/auth/signin/Sgnin';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/signin' replace />} />
			<Route path='/signin' element={<Signin />} />
			<Route path='/users' element={<DashboardLayout />}>
				<Route index element={<Users />} />
				<Route path=':id' element={<User />} />
			</Route>
		</Routes>
	);
}

export default App;
