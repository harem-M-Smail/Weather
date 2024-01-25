import { useRouteError } from "react-router-dom"

const Error=()=>{ 
    const error=useRouteError()
    return(
      <div className="error-page">
        <div className="error-container">
        <p><span className="error-message">"</span> An Error Ocurred</p>
        <p className="error-message">{error.message}"</p>
        </div>
      </div>
    )
}
export default Error