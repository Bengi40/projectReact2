
const PresentationBox = ({FFcharacters}) => {
    return (
        <>
{FFcharacters.map((character,index)=> (
    <div key={index}>
    <h1>{character.name}</h1>
    <img src={character.Img} alt={character.name} />
    <p>{character.description}</p>
    </div>
))}
</>
    )
}

export default PresentationBox;