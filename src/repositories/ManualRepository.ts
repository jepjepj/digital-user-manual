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
}