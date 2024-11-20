import { Button, Menu, MenuItem } from "@mui/material";
import storage from "../storage/storage";
import { useState } from "react";

const Layaout = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div
            className="container mx-auto px-4 md:container md:mx-auto mt-4"
        >
            <div
                className="flex justify-end items-center"
            >
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {storage.get("user").name}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    <MenuItem onClick={() => {
                        storage.remove("access_token");
                        storage.remove("user");
                        window.location.href = "/signIn";
                    }}>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default Layaout