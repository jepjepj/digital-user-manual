import TranslateServices from '@/services/TranslateServices'
import db from '../lib/db'

export default class ManualRepository {
    static async getAll(manual_type: string) {
        const [rows]: any = await db.query("SELECT * FROM tbl_manuals WHERE manual_type=?", [manual_type])
        // const manuals = {
        //     manual_id: rows[0].manual_id,
        //     manual_name: rows[0].manual_name,
        //     manual_image: rows[0].manual_image,
        //     contents: rows.map((row: any) => ({
        //         content_id: row.content_id,
        //         type: row.content_type,
        //         subtitle: row.title,
        //         text: row.content,
        //         image: row.image
        //     }))
        // }
        return rows
    }

    static async getById(id: number){
        const [rows]: any = await db.query("SELECT * FROM tbl_content c LEFT JOIN tbl_manuals m ON c.manual_id=m.manual_id WHERE c.manual_id=?", [id])

        const manuals = {
            manual_id: rows[0].manual_id,
            manual_name: rows[0].manual_name,
            manual_image: rows[0].manual_image,
            contents: rows.map((row: any) => ({
                content_id: row.content_id,
                content_type: row.content_type,
                title: row.title,
                content: row.content,
                content_img: row.content_img
            }))
        }

        return manuals
    }

    static async insertContent(content_id: number, language: string) {
        const [row]: any = await db.query("SELECT * FROM tbl_content_translations WHERE content_id=? AND language=?", [content_id, language])

        if(row.length === 0){
            const [content_row]: any = await db.query("SELECT * FROM tbl_content WHERE content_id=?", [content_id])
            let translatedTitle = ""

            if (content_row.length > 0){
                translatedTitle = await TranslateServices.translate(content_row.title, language)
            } else {
                translatedTitle = ""
            }

            return translatedTitle

            // const translatedTitle = await TranslateServices.translate(content_row.title, language)
            
            // const translatedContent = await TranslateServices.translate(content_row.content, language)

            // await db.execute("INSERT INTO tbl_content_translations (content_id, manual_id, language, content_type, title, content, content_img) VALUES (?, ?, ?, ?, ?, ?, ?)", [content_row.content_id, content_row.manual_id, language, content_row.content_type, translatedTitle, translatedContent, content_row.content_img]);
        }
    }

    static async getByLanguage(id: number, language: string){
        const [content_rows]: any = await db.query("SELECT * FROM tbl_content c LEFT JOIN tbl_manuals m ON c.manual_id=m.manual_id WHERE c.manual_id=?", [id])
        
        for (const item of content_rows) {
            return await this.insertContent(Number(item.content_id), language)
        }
        
        const [rows]: any = await db.query("SELECT * FROM tbl_content_translations c LEFT JOIN tbl_manuals m ON c.manual_id=m.manual_id WHERE c.manual_id=?", [id])

        const manuals = {
            manual_id: rows[0].manual_id,
            manual_name: rows[0].manual_name,
            manual_image: rows[0].manual_image,
            contents: rows.map((row: any) => ({
                content_id: row.content_id,
                content_type: row.content_type,
                title: row.title,
                content: row.content,
                content_img: row.content_img
            }))
        }

        return manuals
    }
}