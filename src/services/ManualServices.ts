import ManualRepository from "@/repositories/ManualRepository";

export default class ManualService {
    static async getManuals(manual_type = "FO") {
        return await ManualRepository.getAll(manual_type)
    }

    static async getManualById(id: number) {
        return await ManualRepository.getById(id)
    }
}