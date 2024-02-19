
const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
          src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708300800&semt=ais"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Assalamualaikum How are you?</div>
      <div className="chat-footer opacity-50 text-sm flex gap-1 items-center">12.42</div>
    </div>
  )
}

export default Message