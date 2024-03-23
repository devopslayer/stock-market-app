import './Footer.css'

function Footer() {
  const curYear = new Date().getFullYear();

    return (
      <footer>
        Copyright &copy; &nbsp;<b>InvestIQ {curYear}</b>. All rights reserved. Developed by &nbsp;<a href='https://github.com/devopslayer'>Devopslayer</a>
      </footer>
    )
  }
  
  export default Footer