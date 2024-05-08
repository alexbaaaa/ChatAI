import { GenerativeAI } from "./modules/generativeAI.js";
import { Comunicacion } from "./modules/comunicacion.js";
let comunicacion = new Comunicacion(8080);
let AI = new GenerativeAI(comunicacion.sendPrompt);


