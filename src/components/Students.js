
import Comp from "./Comp"
import PropTypes from 'prop-types'


const Student = (props) => {
  return (
     <div>
      
       <div>{props.name}</div>
       <div>{props.age}</div>
  
     </div>
  )
}

Student.propTypes={
  name: PropTypes.string,
  age : PropTypes.number
}

Student.defaultProps={
  name: "name",
  age :  0
}

export default Student