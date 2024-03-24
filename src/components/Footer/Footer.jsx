import PropTypes from 'prop-types'
import './Footer.css'

function Footer({ year }) {

  return (
    <footer>
      Copyright &copy; &nbsp;<b>InvestIQ {year}</b>. All rights reserved. Developed by &nbsp;<a href='https://github.com/devopslayer'>Devopslayer</a>
    </footer>
  )
}

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};
  
export default Footer