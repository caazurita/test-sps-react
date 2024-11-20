import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const InputPasswordMui = ({
    placeholder = "Contraseña",
    setValue,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <FormControl onChange={(e) => setValue(e.target.value)} sx={{ width: 300 }} size="small" variant="outlined">
            <InputLabel htmlFor="show-password">{placeholder}</InputLabel>
            <OutlinedInput
                id="show-password"
                type={showPassword ? 'text' : 'password'}
                label={placeholder}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }

            />
        </FormControl>
    );
};

export default InputPasswordMui;