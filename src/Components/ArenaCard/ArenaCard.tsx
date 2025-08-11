import './ArenaCard.css';

type ArenaCardProps = {
    id: number;
    heading: string;
    text: string;
    isSelected: boolean;
    onClick: () => void;
};

const ArenaCard = ({ id, heading, text, isSelected, onClick }: ArenaCardProps) => {
    return (
        <div className={`arena-card ${isSelected ? 'active' : ''}`} onClick={onClick}>
            {isSelected && <div className="arrow" />}
            <div className="card-left">
                <h3>
                    {heading}
                </h3>
                <p>{text}</p>
            </div>
            <div className="card-right">{id}</div>
        </div>
    );
};

export default ArenaCard;



