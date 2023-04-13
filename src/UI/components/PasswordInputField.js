import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function PasswordInputField({handleValidation, handlePasswordChange, passwordValue, passwordError}){
    return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '32ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
            error
            id="outlined-error"
            label="Password"
            defaultValue=""
            type="password" value={passwordValue}  onChange={handlePasswordChange} onKeyUp={handleValidation} name="password" placeholder="Password" className="form-control"
            />
            <p className="text-danger">{passwordError}</p>
    </Box>
   </div> 
    )
}

export default PasswordInputField;