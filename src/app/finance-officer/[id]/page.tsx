'use client'
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const FinanceOfficer = () => {
    const { id } = useParams<{ id: string }>()
    const [manual_contents, setManualContent] = useState<any>([])

    useEffect(() => {
        getContent()
    }, [])

    async function getContent(){
        try {
            const response = await fetch(`/api/manuals/${id}`)
            const data = await response.json()
            setManualContent(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        
        <>
        <div className="page-title">
            <div className="heading" style={{padding: "80px 0 0px 0"}}>
                <div className="justify-content-center text-center">
                    <h1>{manual_contents?.manual_name}</h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <section id="blog-details" className="blog-details section" style={{paddingBottom: "10px"}}>
                    <div className="container">
                        <article className="article">
                            {

                                manual_contents?.contents?.map((row: any) => {
                                    return (
                                        <div key={row.content_id}>
                                            {row.content_img && (
                                                <div className="post-img" style={{justifySelf: "center", marginTop: "10px", marginBottom: "10px"}}>
                                                    <img src={`/images/${row.content_img}`} alt="" className="img-fluid" />
                                                    <br />
                                                </div>
                                            )}

                                            <h2 className="title">{row.title}</h2>

                                            <div className="content">
                                                {
                                                    row.content_type == "content" && (
                                                        <p>
                                                            {row.content}
                                                        </p>
                                                    )
                                                }

                                                {
                                                    row.content_type == "note" && (
                                                        <blockquote>
                                                            <p>
                                                            {row.content}
                                                            </p>
                                                        </blockquote>
                                                    )
                                                }

                                                {
                                                    row.content_type == "tip" && (
                                                        <>
                                                        <h3>Tip</h3>
                                                        <p>
                                                            {row.content}
                                                        </p>
                                                        </>
                                                    )
                                                }
                                                
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </article>

                    </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default FinanceOfficer