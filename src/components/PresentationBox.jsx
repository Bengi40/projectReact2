import "./PresentationBox.css"

const PresentationBox = ({FFcharacters}) => {
    return (
        <>
{FFcharacters.map((character,index)=> (
    <div className="box" key={index}>
    <h1 style={{color:character.colorh1}}>{character.name}</h1>
    <img src={character.Img} alt={character.name} />
    <p>{character.description}</p>
    </div>
))}
</>
    )
}

export default PresentationBox;