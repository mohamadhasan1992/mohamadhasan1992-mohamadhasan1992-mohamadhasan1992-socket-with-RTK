import { CircularProgress, Modal } from "@mui/material";
import { Box } from "@mui/system";
import {useSelector} from "react-redux";




const UiCompnents = () => {

    const {isLoading} = useSelector((state) => state.ui)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    return(
        <>
            <Modal
                open={isLoading}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CircularProgress color="inherit" />
                </Box> 
            </Modal>
        </>
        
    )
}


export default UiCompnents;