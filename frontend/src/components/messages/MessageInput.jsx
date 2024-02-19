import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='relative px-4 my-3'>
			<div className='w-full'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white pe-10'
					placeholder='Send a message'
				/>
				<button type='submit' className='absolute inset-y-0 end-5  flex items-center text-white  pe-3'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;