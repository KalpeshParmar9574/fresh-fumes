import React from "react";

import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Stack from "@mui/material/Stack";

function SearchComponent() {
    return (
        <Stack className="msg-search">
            <Paper
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "calc(100% - 24px)",
                    height: "40px",
                    background: "#eef3f8",
                    p: "2px 4px",
                    margin: "10px auto",
                    borderRadius: "6px",
                }}
            >
                <SearchIcon />
                <InputBase
                    sx={{ fontSize: "12px", width: "100%" }}
                    placeholder="Search users"
                    inputProps={{ "aria-label": "search users" }}
                />
                <Divider orientation="vertical" />
                <FilterListIcon />
            </Paper>
        </Stack>
    );
}

export default SearchComponent;
