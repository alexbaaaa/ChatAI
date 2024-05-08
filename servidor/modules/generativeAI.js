import { GoogleGenerativeAI } from "@google/generative-ai";
class GenerativeAI {
    constructor(text) {
    this.genAI = new GoogleGenerativeAI(process.env.API_KEY);
    this.text = text;
    run();
    }
    async run(){
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        const prompt = this.text;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
    }
}

export {GenerativeAI}