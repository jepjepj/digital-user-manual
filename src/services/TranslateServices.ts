import { translate } from "google-translate-api-x";

export default class TranslateServices {
    // static async translate (content: string, language: string) {
    //     try {
    //         const openai = new OpenAI({
    //             apiKey: process.env.OPENAI_API_KEY,
    //         });

    //         const response: any = await openai.responses.create({
    //             model: "gpt-5",
    //             input: `Translate the following manual into ${language}. Only return the translated text. ${content}`
    //         });

    //         console.log(JSON.stringify(response, null, 2));

    //         return response.output_text.trim();
            
    //     } catch (error) {
    //         console.error("OpenAI Error:", error);
    //         throw error;
    //     }
        
    // }

    static async translate(text: string, language: string): Promise<string> {

        if (!text) return "";

        const result = await translate(text, {
            to: language
        });

        return result.text;
    }
}