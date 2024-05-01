import PropTypes from 'prop-types'
import './Item.css';

function Item ({ icon, title, description }) {
  return (
    <div className='featureItem'>
      <img src={icon} alt={title} className="featureIcon" width={100} height={100}/>
      <h3 className='featureTitle'>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

Item.propTypes = {
icon: PropTypes.string.isRequired,
title: PropTypes.string.isRequired, 
description: PropTypes.string.isRequired
}

export default Item