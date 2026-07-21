import ManualRepository from "@/repositories/ManualRepository";

export default class ManualService {
    static async getManuals(manual_type = "FO") {
        return await ManualRepository.getAll(manual_type)
    }

    static async getManualById(id: number, language: string = "en") {
        if (language === "en") {
            return await ManualRepository.getById(id);
        }

        return await ManualRepository.getByLanguage(id, language)
        
    }
}