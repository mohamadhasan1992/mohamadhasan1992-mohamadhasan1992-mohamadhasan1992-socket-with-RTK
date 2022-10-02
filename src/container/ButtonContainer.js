import { Grid } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { useDispatch} from "react-redux";
import {closeConnection, initSocket} from "../redux/reducer/mainPageReducer";
import SocketLogic from "../logic/SocketLogic";




const ButtonContainer = ({}) => {
    const dispatch = useDispatch()


    const {connectSocket, disconnectSocket} = SocketLogic();


    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:"flex", justifyContent:"center", marginBottom:"10vh"}}>
            <Grid item>
                <CustomButton
                    variant="contained"
                    color="primary"
                    clickHandler={connectSocket}
                >
                    Connect
                </CustomButton>
            </Grid>
            <Grid item>
                <CustomButton
                    variant={"outlined"}
                    clickHandler={disconnectSocket}
                >
                    Disconnect
                </CustomButton>
            </Grid>
        </Grid>
    )
}



export default ButtonContainer;