import './SectionHeader.css'

type SectionHeaderProps = {
    first_title :  string,
    second_title :  string,
    text:    string,

}

const SectionHeader = ({first_title , second_title , text} : SectionHeaderProps) => {
    return (
        <>
            <section className="section-header">
                    <span className="first" >{first_title}</span><span className="second" >{second_title}</span>
                    <p className="heading-text" >{text}</p>
            </section>

        </>
    )
}
export default SectionHeader
