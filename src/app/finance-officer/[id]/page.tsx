'use client'
import { useEffect, useState } from "react"

const FinanceOfficer = () => {
    const [manuals, setManuals] = useState<any>([])
    const manual_type = "FO"

    useEffect(() => {
        getManuals()
    }, [])

    async function getManuals(){
        const response = await fetch(`/api/manuals?type=${manual_type}`)
        const data = await response.json()
        setManuals(data)
    }
    return (
        
        <>
        <div className="page-title">
            <div className="heading">
                <div className="container">
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-8">
                        <h1>Electronic Billing and Collection System (eCBS) Manual - Finance Officer</h1>
                        <div className="mb-0">
                            <p>GSIS Electronic Billing and Collection System is a web-based application that facilitates the dissemination of billing files to remitting agencies and supports submission and payment of remittances.  The application is publicly accessible to remitting agency users.  Username and password pair is provided to system users to access the system.</p>
                            
                            <p>The application interfaces with several bank system accredited by GSIS to facilitate the payment of remittances.  It also interfaces with existing GSIS systems to synchronize remitting agency and remittance payment data.</p>
                            
                            <p>This user manual serves as a guide for eBCS users to the different functionalities of the system.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <nav className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li className="current">Electronic Billing and Collection System (eCBS) Manual - Finance Officer</li>
                    </ol>
                </div>
            </nav>
        </div>
        <div className="container">
            <div className="row">
                {
                    manuals.map((row: any) => {
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-4" key={row.manual_id}>
                                <section id="blog-posts" className="blog-posts section">
                                    <div className="container">
                                        <div className="row gy-4">
                                            <div className="col-12">
                                            <article>
                                                <div className="post-img">
                                                <img src={`images/${row.manual_image}`} alt="" className="img-fluid" />
                                                </div>

                                                <h2 className="title">
                                                <a href="images/">{row.manual_name}</a>
                                                </h2>

                                                <div className="content">
                                                <p>
                                                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                                                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                                </p>

                                                <div className="read-more">
                                                    <a href="blog-details.html">Read More</a>
                                                </div>
                                                </div>

                                            </article>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default FinanceOfficer