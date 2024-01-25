import { Link } from "react-router-dom"

const NotFound=()=>{
    return(
        <div className="not-found">
            <div className="not-found-container">
            <p>Page Not Found </p>
            <Link className="back-to-home-link" to="/"> Go back to Home Page</Link>
            </div>
        </div>
    )
}
export default NotFound