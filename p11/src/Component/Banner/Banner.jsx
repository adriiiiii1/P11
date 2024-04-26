import PropTypes from 'prop-types';
import './Banner.css';

function Banner({ imageSrc, children }) {
  return (
    <div className='parentbanner'>
      <div className="Banner_container" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageSrc})` }}>
      {children}
      </div>
    </div>
  );
}

Banner.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Banner;