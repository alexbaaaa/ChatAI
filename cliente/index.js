import {Comunicacion} from "./modules/comunicacion.js";
import {Grabacion} from "./modules/grabacion.js";

let grabacion = new Grabacion();
let comunicacion = new Comunicacion('localhost',8080,grabacion.sendText);

