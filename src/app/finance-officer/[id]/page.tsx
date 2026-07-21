'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const FinanceOfficer = () => {
    const { id } = useParams<{ id: string }>()
    const [manual_contents, setManualContent] = useState<any>([])
    const [language, setLanguage] = useState("en")
    const [full_text, setFulltext] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getContent()
    }, [language])

    async function getContent(){
        try {
            setLoading(true)
            const response = await fetch(`/api/manuals/${id}?language=${language}`)
            const data = await response.json()
            setManualContent(data)
            const text = data?.contents.map((item: any) => item.content).filter(Boolean).join("\n\n");
            setFulltext(text)
            console.log(text)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const [paused, setPaused] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleListen = (text: string) => {
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        switch (language) {
        case "en":
            utterance.lang = "en-US";
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            break;

        case "tl":
            utterance.lang = "fil-PH"; // or "tl-PH" if supported
            utterance.rate = 0.9;      // Slightly slower
            utterance.pitch = 1.0;
            break;

        case "ceb":
            utterance.lang = "fil-PH";
            utterance.rate = 0.9;
            utterance.pitch = 0.95;
            break;

        default:
            utterance.lang = "en-US";
        }

        utterance.onend = () => setIsSpeaking(false);

        setIsSpeaking(true);
        speechSynthesis.speak(utterance);
    };

    const stopListening = () => {
        speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    const pauseSpeech = () => {
        speechSynthesis.pause();
        setPaused(true);
    };

    const resumeSpeech = () => {
        speechSynthesis.resume();
        setPaused(false);
    };
    
    return (
        
        <>
        <div className="page-title">
            <div className="heading" style={{padding: "80px 0 0px 0"}}>
                <div className="justify-content-center text-center">
                    {
                        loading && (
                            <h1 style={{fontStyle: "italic"}}>Translating Content ...</h1>
                        )
                    }
                    {
                        !loading && (
                            <>
                            <h1>{manual_contents?.manual_name}</h1>
                            <div className="btn-group" role="group" aria-label="Language">
                                <button type="button" className={`btn ${language === "en" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLanguage("en")}>English</button>
                                
                                <button type="button" className={`btn ${language === "tl" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLanguage("tl")}>Tagalog</button>
                                
                                <button type="button" className={`btn ${language === "ceb" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setLanguage("ceb")} >Cebuano</button>
                            </div>
                            <br />
                            <br />
                            <div className="btn-group">

                                <button className="btn btn-success" onClick={() => handleListen(full_text)} >
                                    <i className="bi bi-play-fill"></i> Listen
                                </button>

                                <button
                                    className="btn btn-warning"
                                    onClick={pauseSpeech}
                                    disabled={!isSpeaking || paused}
                                >
                                    <i className="bi bi-pause-fill"></i>
                                </button>

                                <button
                                    className="btn btn-info"
                                    onClick={resumeSpeech}
                                    disabled={!paused}
                                >
                                    <i className="bi bi-play-fill"></i>
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={stopListening}
                                    disabled={!isSpeaking}
                                >
                                    <i className="bi bi-stop-fill"></i>
                                </button>

                            </div>
                            </>
                        )
                    }
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