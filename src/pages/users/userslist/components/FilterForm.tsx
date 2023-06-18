import { useState } from 'react';
import '../styles/inputForm.scss';
import { InputField } from '../../../../common/UIElements/inputField/InputField';

type FilterFormData = Record<
	'orgName' | 'userName' | 'email' | 'createdAt' | 'phoneNumber' | 'status',
	string
>;

interface FilterFormProps {
	onSubmit: (data: FilterFormData) => void;
}

function FilterForm({ onSubmit }: FilterFormProps) {
	const formState = {
		orgName: '',
		userName: '',
		email: '',
		createdAt: '',
		phoneNumber: '',
		status: '',
	};
	const [form, setForm] = useState<FilterFormData>(formState);
	return (
		<form className='filter-form'>
			<InputField
				name='Organization'
				value={form.orgName}
				setter={(value) => {
					setForm({ ...form, orgName: value });
				}}
			/>
			<InputField
				name='Username'
				value={form.userName}
				setter={(value) => {
					setForm({ ...form, userName: value });
				}}
			/>
			<InputField
				name='Email'
				value={form.email}
				setter={(value) => {
					setForm({ ...form, email: value });
				}}
			/>
			<InputField
				name='Date'
				value={form.createdAt}
				setter={(value) => {
					setForm({ ...form, createdAt: value });
				}}
			/>
			<InputField
				name='Phone Number'
				value={form.phoneNumber}
				setter={(value) => {
					setForm({ ...form, phoneNumber: value });
				}}
			/>
			<InputField
				name='Status'
				value={form.status}
				setter={(value) => {
					setForm({ ...form, status: value });
				}}
			/>
			<div className='text-center'>
				<button
					onClick={(e) => {
						e.preventDefault();
					}}
					className='reset-btn'
				>
					Reset
				</button>
				<button
					onClick={() => {
						onSubmit(form);
						setForm(formState);
					}}
					className='filter-btn'
				>
					Filter
				</button>
			</div>
		</form>
	);
}

export default FilterForm;
