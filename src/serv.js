const io = require("socket.io-client");


var api_key = 'API_KEY'; // Enter Your API KEY 
var currency_ids = '1,2,3'; // Your FX currency multiple IDs 
 
// socket connection function 
function socket_connection(){ 
 // Connection 
 var socket = io.connect("wss://fcsapi.com",{transports: ['websocket']}); 
 
 // Verify Your API key on server 
 socket.emit('heartbeat', api_key); 
 
 // Connect Ids on server 
 socket.emit('real_time_join', currency_ids); 
 
 socket.on('data_received',function(data){ 
   // always receive latest price here in "data" variable 
   // data contain : Price, ASK price, BID price 
   console.log(data); 
 }); 
} // function end 
 
 
// Calling function 
socket_connection(); 