import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import io from 'socket.io-client';

import ChatRoom from './components/ChatRoom';
import UserChat from './components/UserChat';
import ChatHeader from './components/ChatHeader';
import SearchComponent from './components/SearchComponent';
import { BASE_URL } from '../../constants';

import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import './Chat.css';

import Stack from '@mui/material/Stack';

export default function Chat(props) {
	const fullName = useSelector((state) => state.auth.fullName);
	const email = useSelector((state) => state.auth.email);

	const [isActive, setActive] = useState(true);
	const [activeChats, setActiveChats] = useState([]);
	const [socket, setSocket] = useState(null);
	const [userList, setUserList] = useState([]);
	const [room, setRoom] = useState([]);
	useEffect(() => {
		const newSocket = io(BASE_URL);
		setSocket(newSocket);
		newSocket.emit('login', {
			id: uuidv4(),
			userName: fullName,
			email,
		});

		newSocket.on('active_users', (activeUsers) => {
			let keys = Object.keys(activeUsers);

			if (keys.length !== 0) {
				setUserList((prv) => [
					...prv,
					...keys.map((key, idx) => ({
						...activeUsers[keys[idx]],
						lastMessage: '',
						count: 0,
					})),
				]);
			}
		});

		newSocket.on('deactive_users', (deactiveUser) => {
			setUserList([]);
		});

		newSocket.on('invite', function (data) {
			setRoom((prv) => [
				...prv,
				{
					[data.room.room]: [],
					to: data.room.userId,
					from: newSocket.id,
				},
			]);

			newSocket.emit('joinRoom', data);
		});

		newSocket.on('message', function (msg) {
			setRoom((prv) =>
				prv.map((currentRoom) => {
					let targetRoomId = Object.keys(currentRoom)[0];
					if (msg.room === targetRoomId) {
						currentRoom[targetRoomId] = [
							...currentRoom[targetRoomId],
							{
								msg: msg.message,
								sender: msg.from,
								time: msg.time,
							},
						];
						return currentRoom;
					} else {
						return currentRoom;
					}
				})
			);
		});

		newSocket.on('update-last-message', function (data) {
			setUserList((prv) =>
				prv.map((user) => {
					if (user.socketId === data.from) {
						return {
							...user,
							lastMessage: data.message,
							count: ++user.count,
						};
					} else {
						return user;
					}
				})
			);

			let unshiftUser;
			setUserList((prv) =>
				prv.filter((user) => {
					if (user.socketId !== data.from) {
						return user;
					} else {
						unshiftUser = user;
						return false;
					}
				})
			);
			setUserList((prv) => [unshiftUser, ...prv]);
		});

		return () => newSocket.disconnect();
	}, [fullName, email]);

	useEffect(() => {
		socket &&
			socket.on('update-last-message', function (data) {
				const id = localStorage.getItem('currentId');
				if (id) {
					setUserList((prv) =>
						prv.map((user) => {
							if (user.socketId === id) {
								return {
									...user,
									lastMessage: data.message,
									count: 0,
								};
							} else {
								return user;
							}
						})
					);
				}
			});
	}, [activeChats, socket]);

	const slideToggle = () => {
		setActive(!isActive);
	};

	const openChatRoom = (name, otherUser) => {
		setUserList((prv) =>
			prv.map((user) => (user.socketId === otherUser ? { ...user, count: 0 } : user))
		);

		const AlreadyConnected = room.filter(
			(room) => room.from === socket.id && room.to === otherUser
		);

		if (AlreadyConnected.length > 0) {
			localStorage.setItem('currentId', otherUser);
			setActiveChats((prevState) => [
				{
					name,
					id: Object.keys(AlreadyConnected[0])[0],
					withUserId: AlreadyConnected[0].to,
					room: Object.keys(AlreadyConnected[0])[0],
				},
			]);
			return;
		}

		const findExistingRoom = room.filter((room) => room.to === otherUser);
		if (findExistingRoom.length > 0) {
			localStorage.setItem('currentId', otherUser);

			setActiveChats((prevState) => [
				{
					name,
					id: Object.keys(findExistingRoom[0])[0],
					withUserId: Object.keys(findExistingRoom[0]).to,
					room: Object.keys(findExistingRoom[0])[0],
				},
			]);
		} else {
			const roomId = uuidv4();
			localStorage.setItem('currentId', otherUser);

			setActiveChats((prevState) => [
				{ name, id: roomId, withUserId: otherUser, room: roomId },
			]);
			setRoom((prv) => [...prv, { [roomId]: [], to: otherUser, from: socket.id }]);

			socket.emit('create', {
				room: roomId,
				userId: socket.id,
				withUserId: otherUser,
			});
		}
	};

	const sendMessage = (messageText) => {
		setRoom((prv) =>
			prv.map((currentRoom) => {
				let targetRoomId = Object.keys(currentRoom)[0];
				if (activeChats[0].room === targetRoomId) {
					currentRoom[targetRoomId] = [
						...currentRoom[targetRoomId],
						{
							msg: messageText,
							sender: socket.id,
							time: new Date().toTimeString(),
						},
					];
					return currentRoom;
				} else {
					return currentRoom;
				}
			})
		);

		setUserList((prv) =>
			prv.map((user) =>
				user.socketId === activeChats[0].withUserId
					? { ...user, lastMessage: messageText }
					: user
			)
		);
		let unshiftUser;
		setUserList((prv) =>
			prv.filter((user) => {
				if (user.socketId !== activeChats[0].withUserId) {
					return user;
				} else {
					unshiftUser = user;
					return false;
				}
			})
		);
		setUserList((prv) => [unshiftUser, ...prv]);
		socket.emit('message', {
			room: activeChats[0].room,
			message: messageText,
			from: socket.id,
			time: new Date().toTimeString(),
		});

		socket.emit('update-last-message', {
			room: activeChats[0].room,
			message: messageText,
			from: socket.id,
		});
	};

	const closeActiveChat = (id) => {
		setActiveChats(activeChats.filter((chats) => chats.id !== id));
		localStorage.removeItem('currentId');
	};

	const handleRoom = () => {
		return room.filter((currentRoom) => Object.keys(currentRoom)[0] === activeChats[0].room);
	};
	return (
		<div className="msg-overlay-container">
			<div className={`white-box msg-list-section ${isActive ? 'isMinimised' : ''}`}>
				<ChatHeader slideToggle={slideToggle} />
				<SearchComponent />
				{/* conversation-list Start */}
				<Stack className="conversation-list">
					{userList.map((user, idx) => {
						return (
							<UserChat
								key={idx}
								openChatRoom={() => openChatRoom(user.userName, user.socketId)}
								count={user.count}
								fullName={user.userName}
								lastMessage={user?.lastMessage}
							/>
						);
					})}
				</Stack>
			</div>
			{activeChats.map((chats, idx) => {
				return (
					<ChatRoom
						key={idx}
						closeActiveChat={closeActiveChat}
						id={chats.id}
						name={chats.name}
						socket={socket}
						sendMessage={sendMessage}
						room={handleRoom()}
						socketId={socket.id}
					/>
				);
			})}
		</div>
	);
}
