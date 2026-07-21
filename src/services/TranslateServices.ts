import OpenAI from "openai";

export default class TranslateServices {
    static async translate (content: string, language: string) {
        try {
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY,
            });

            const response: any = await openai.responses.create({
                model: "gpt-5",
                input: `Translate the following manual into ${language}. Only return the translated text. ${content}`
            });

            return response;
            
        } catch (error) {
            console.error("OpenAI Error:", error);
            throw error;
        }
        
    }
}