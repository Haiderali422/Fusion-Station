import './MosaicCard.css'
type MosaicCardProps = {
    src: string;
    heading: string;
    text : string;
}


const MosaicCard = ({src , heading , text , }:MosaicCardProps) => {
    return (
        <>
            <section className="mosaic-card">
                <img src={src} alt={heading}  />
                <h4>{heading}</h4>
                <p>{text}</p>
            </section>

        </>
    )
}
export default MosaicCard
