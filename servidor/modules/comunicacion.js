import { WebSocketServer } from 'ws';
class Comunicacion{
    constructor (port){
        this.wss = new WebSocketServer({ port: port });
        this.prompt = null;
        this.wss.on('connection', function connection(ws) {
            
        });
    }
    sendPrompt(){
        return this.prompt;
    } 
}
export {Comunicacion};