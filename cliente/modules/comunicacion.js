class Comunicacion{
    constructor (url, port, msgClient){
        this.messages = {
            enviar: [],
        }
        this.ws = new WebSocket('ws://'+url+':'+port);
        this.conectado = false;
        this.ws.onopen = (event) => {
            this.conectado = true;
        };
        this.onmessage = (event) => {
            
        };
        this.ws.onerror = (event) => {
            this.conectado = false;
        }
        this.ws.onclose = (event) => {
            this.conectado = false;
        }
        if(msgClient() != null){
            this.messages.enviar  = msgClient();
            this.ws.send(JSON.stringify(this.messages.enviar));
        }
        }

}
export {Comunicacion};