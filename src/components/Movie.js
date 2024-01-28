
const Movie = (props) => {
  return (
    <div className="movie ">
        <div>
           <img src={props.poster} alt=""/>
        </div>
         
          {props.title} <br/>
        
         
          {props.year}
        
    </div>
  )
}

export default Movie