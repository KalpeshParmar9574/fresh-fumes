import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

function UserChat({ fullName, lastMessage, openChatRoom, count }) {
    return (
        <Stack onClick={openChatRoom} className="list-item" direction="row">
            <Stack className="user-img">
                <Avatar
                    alt={fullName}
                    sx={{ width: 32, height: 32 }}
                    src="/static/images/avatar/1.jpg"
                />
                <Stack className="indicator is-online"></Stack>
            </Stack>
            <Stack className="list-content">
                <Stack
                    className="userName"
                    direction="row"
                    justifyContent="space-between"
                >
                    <h4 className="eclips-line1">{fullName}</h4>
                    <span className="time">Mar 8</span>
                </Stack>
                <Stack>
                    <p>
                        {lastMessage}
                    </p>
                </Stack>
            </Stack>
            {count !== 0 && <Stack className="count">{count}</Stack>}
        </Stack>
    );
}

export default UserChat;
