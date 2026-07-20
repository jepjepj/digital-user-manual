import db from '../lib/db'

export default class ContentRepository {
    static async getById(id: number) {
        const [rows]: any = db.query("SELECT * FROM tbl_content WHERE manual_id=?", [id])
        return rows[0]
    }
}