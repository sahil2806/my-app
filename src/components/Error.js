import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Error = () => {
  
    const navigate = useNavigate()
    return (
        <div>
            <div>404 Page Not Found</div>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
  )
}

export default Error