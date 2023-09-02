import React, { useState, useEffect, useRef } from "react";

import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { ChatTimeFormat } from "../../../utils/dateFormat";
function ChatRoom({ closeActiveChat, id, name, sendMessage, room, socketId }) {
    const [input, setInput] = useState("");
    const [chats, setChats] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const roomId = Object.keys(room[0])[0];
        setChats(room[0][roomId]);
    }, [room, chats]);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        scrollToBottom();
    }, [room, input, chats]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) {
            return;
        }
        sendMessage(input);
        setInput("");
    };

    return (
        <div className="white-box conversational-box">
            {/* msg header start */}
            <Stack
                className="msg-header"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Stack
                    className="header-details"
                    direction="row"
                    alignItems="center"
                    spacing={1}
                >
                    <div className="user-img">
                        <Avatar
                            className="img-full"
                            alt={name}
                            sx={{ width: 32, height: 32 }}
                            src="/static/images/avatar/1.jpg"
                        />
                        <div className="indicator is-online"></div>
                    </div>
                    <div className="head-title">{name}</div>
                </Stack>
                <Stack
                    className="header-controls"
                    direction="row"
                    alignItems="center"
                >
                    <IconButton className="icon-wrapper">
                        <MoreHorizIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => closeActiveChat(id)}
                        className="icon-wrapper"
                    >
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </Stack>
            {/* msg header End */}

            {/* Chat Area Start */}
            <Stack className="chat-area">
                {chats.map((chat, idx) => {
                    return (
                        <Stack className="chat-item" direction="row" key={idx}>
                            <Stack className="user-img">
                                <Avatar
                                    alt={chat.sender === socketId ? "Me" : name}
                                    sx={{ width: 40, height: 40 }}
                                    src="/static/images/avatar/1.jpg"
                                />
                            </Stack>
                            <Stack className="chat-content">
                                <Stack
                                    className="userName"
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Link className="eclips-line1" href="#">
                                        {chat.sender === socketId ? "Me" : name}
                                    </Link>
                                    <span className="time">
                                        {ChatTimeFormat(chat.time)}
                                    </span>
                                </Stack>
                                <Stack className="chat-msg">
                                    <p>{chat.msg}</p>
                                </Stack>
                            </Stack>
                        </Stack>
                    );
                })}
                <Stack
                    className="chat-item"
                    direction="row"
                    ref={messagesEndRef}
                ></Stack>
                {/* <div  /> */}
            </Stack>
            {/* Chat Area End */}

            {/* msg-box Start */}
            <Stack className="msg-box">
                <form
                    className="msg-box-form"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >
                    <TextField
                        fullWidth
                        name="message"
                        placeholder="Write a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        size="small"
                    />
                    <IconButton
                        aria-label="delete"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        <SendIcon />
                    </IconButton>
                </form>
            </Stack>
            {/* msg-box End */}
        </div>
    );
}

export default ChatRoom;
