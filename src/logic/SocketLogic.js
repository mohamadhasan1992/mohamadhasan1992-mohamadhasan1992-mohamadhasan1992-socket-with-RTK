import io from "socket.io-client";
import { useDispatch } from "react-redux";
import {setData, setError, setSuccess} from "../redux/reducer/mainPageReducer";
import {setIsLoading}  from "../redux/reducer/uiReducer";


const serverAddress = "wss://fcsapi.com";
const api_key = "tZzyHyyeI0tkqOQMhQzKw0X"; // Enter Your API KEY 
const currency_ids = '1,2,3,4,5,6,1984,80,81,7774,7778';





const SocketLogic = () => {

    const dispatch = useDispatch();

    
    
    let socket;
    const connectSocket = () => {
        dispatch(setIsLoading())
        if(socket !== undefined){
            socket.disconnect();
            socket.destroy();
          }
        socket = io.connect(serverAddress,{
            transports: ['websocket'],
            withCredentials: true, // no cookies :////
        }); 

        socket.on("connect", () => {
            dispatch(setSuccess());
            dispatch(setIsLoading())

        })

        socket.on('connect_error', function(){
            // On error, socket will auto retry to connect, so we will wait 10 seconds before manully connect with backup
            
            dispatch(setError())
            console.log('Connection error. If you see this message for more then 15 minutes then contact us. ');
        });
       
 
        // Verify Your API key on server 
        socket.emit('heartbeat', api_key); 
        
        // Connect Ids on server 
        socket.emit('real_time_join', currency_ids); 
        
        socket.on('data_received',function(prices_data){
            var temp = {};
            temp['Id']  			= prices_data.id;
            temp['Currency']  = prices_data.s; // Name, EUR/USD
            temp['Decimal']  	= prices_data.dp; // No of decimal in currency
            temp['Ask']  			= prices_data.a; // Ask price
            temp['Bid']  			= prices_data.b;
            temp['Open']  		= prices_data.lc; //Open price
            temp['High']  		= prices_data.h;
            temp['Low']  			= prices_data.l;
            temp['Close']  		= prices_data.c; // current or close price
            temp['Spread']  	= prices_data.sp;
            temp['Change']  	= prices_data.ch;
            temp['Chg_per']  	= prices_data.cp; // change percentage
            
            if(typeof prices_data.v === 'undefined')
              temp['Volume']  = 0;
            else
              temp['Volume']  = prices_data.v;
          
            temp['Time']  = prices_data.t;
            console.log(temp)
            dispatch(setData(temp))
          })

       
    }

  

    const disconnectSocket = () => {
        dispatch(setError())
        socket.disconnect();
    }



    return{
        connectSocket,
        disconnectSocket
    }

}



export default SocketLogic;