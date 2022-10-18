import { Grid, Tooltip } from "@mui/material";
import CustomButton from "../components/CustomButton";
import { useSelector} from "react-redux";
import SocketLogic from "../logic/SocketLogic";
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';




const ButtonContainer = ({}) => {

    const {connectSocket, disconnectSocket} = SocketLogic();
    const {connectionSuccess} = useSelector(state => state.mainPageData)



    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display:"flex", justifyContent:"center", marginBottom:"10vh"}}>
            <Grid item>
                <CustomButton
                    variant="outlined"
                    color={connectionSuccess ? "error" : "success"}
                    clickHandler={connectionSuccess ? disconnectSocket : connectSocket}
                    
                >

                        {!connectionSuccess ? 
                            <Tooltip title="Connect" arrow>
                                <WifiIcon />
                            </Tooltip>
                            :
                            <Tooltip title="Disonnect" arrow>
                                <WifiOffIcon />
                            </Tooltip>
                        }

                </CustomButton>
            </Grid>
        </Grid>
    )
}



export default ButtonContainer;