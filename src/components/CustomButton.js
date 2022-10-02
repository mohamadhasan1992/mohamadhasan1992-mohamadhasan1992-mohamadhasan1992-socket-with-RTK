import { Button } from "@mui/material";



const CustomButton = ({color, variant, clickHandler, children}) => {



    return(
        <Button
            color={color}
            variant={variant}
            onClick={clickHandler}
        >
            {children}
        </Button>
    )
}


export default CustomButton;