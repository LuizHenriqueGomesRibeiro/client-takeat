import { Controller } from "react-hook-form";
import { SimpleInputProps } from "./types";
import { TextField } from "@mui/material";

import themes from "../../../themes";

const Index = (props: SimpleInputProps) => <Controller
    defaultValue=""
    name={props.name}
    control={props.control}
    render={({ field }) => <TextField 
        {...field}
        placeholder={props.placeholder}
        label={props.label}
        variant="outlined" 
        fullWidth
        InputLabelProps={{
            sx: {
                color: themes.brown,
                '&.Mui-focused': {
                    color: themes.red,
                },
                '&.Mui-error': {
                    color: themes.red,
                },
            },
        }}
        InputProps={{
            sx: {
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                backgroundColor: 'white',
                borderRadius: 4, 
                paddingLeft: 1,
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.15)',
                '& .MuiInputBase-input': {
                    fontFamily: 'Roboto',
                    fontSize: '18px',
                    fontWeight: 500,
                },
            },
        }}
    />}
/>

export default Index;