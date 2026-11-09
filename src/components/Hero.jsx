function Hero({titulo, subtitulo, children}){
    return (
        <>
        <section className="hero">
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
            {children}
        </section>
        </>
    )
}

export default Hero