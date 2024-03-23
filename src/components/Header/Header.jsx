import stockLogo from '/stock.svg'
import './Header.css'

function Header() {

    return (
      <header>
        <nav>
            <section className="logo">
                <img src={stockLogo} alt="Stock Market Logo" width="32" height="32" />
                <h1>InvestIQ</h1>
            </section>
            <section className="menu">
                <ul>
                    <li>
                      <a href='#' className='active' title='Home'>Home</a>
                    </li>
                    <li>
                      <a href='#' title='About'>About</a>
                    </li>
                    <li>
                      <a href='#' title='Service'>Service</a>
                    </li>
                    <li>
                      <a href='#' title='Contact Us'>Contact Us</a>
                    </li>
                </ul>
            </section>
        </nav>
      </header>
    )
  }
  
  export default Header