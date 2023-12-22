const Artist = (props) => {
  return (
    <div className="artistSection">
      <p>Name: {props.name}</p>
      <p>Nationality: {props.nationality}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
 
export default Artist;