import { InputAdornment, TextField } from "@mui/material"
import Asset from "../asset";

const SearchInput = () => {


    return <TextField 
        variant="outlined" 
        fullWidth
        InputProps={{
            startAdornment: (
                <InputAdornment position="start" sx={{ ml: 2, mr: 2 }}>
                    <Asset name="search" width={24} height={24} />
                </InputAdornment>
            ),
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
                backgroundColor: '#f5f5f5',
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
    />
}

export default SearchInput;