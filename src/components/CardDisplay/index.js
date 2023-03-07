/**
 * Card Display Component 
 * 
 * @author: John Dave Lagdameo
 * @since: 03/07/2023
 * 
 * @internal revisions:
 * + 
 * +
 * +
 */
import PropTypes from 'prop-types'

const CardDisplay = ({ description, image }) => {
  return (
    <div className="card card-custom mb-5">
        <img 
            src={image}
            alt={image} 
            className="m-3 img-responsive"/>
        
        <div className="card-body card-custom__body">
            <p className="card-text text-center">
                {description}
            </p>
        </div>
        
        <div className='card-footer card-custom__footer'>
            <button 
                href="#" 
                className="btn btn-outline-dark btn-sm rounded-pill card-custom__footer--button">
                READ MORE
            </button>
        </div>
    </div>
  )
}

CardDisplay.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default CardDisplay;