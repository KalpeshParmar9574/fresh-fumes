import React from "react";
import Avatar from "@mui/material/Avatar";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

function ChatHeader({ slideToggle }) {
    const fullName = useSelector((state) => state.auth.fullName);

    return (
        <Stack
            className="msg-header"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            onClick={slideToggle}
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
                        alt={fullName}
                        sx={{ width: 32, height: 32 }}
                        src="/static/images/avatar/1.jpg"
                    />
                    <div className="indicator is-online"></div>
                </div>
                <div className="head-title">{fullName}</div>
            </Stack>
            <Stack
                className="header-controls"
                direction="row"
                alignItems="center"
            >
                <Icon className="icon-wrapper">
                    <ArrowBackIosNewRoundedIcon className="icon-arrow" />
                </Icon>
            </Stack>
        </Stack>
    );
}

export default ChatHeader;
