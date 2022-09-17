const Footer = () => {
      return (
            <footer className="footer center-item col-items">
                  <p>Saulo Román Santillán Nava &copy;</p>
                  <div className="footer__icons">
                        <a href="https://www.linkedin.com/in/saulo-roman-santillan-nava/">
                              <i className='bx bxl-linkedin-square footer__icon'></i>
                        </a>
                        <a href="https://github.com/sauloroman">
                              <i className='bx bxl-github footer__icon'></i>   
                        </a>
                        <a href="https://www.instagram.com/sauloromandev/">
                              <i className='bx bxl-instagram-alt footer__icon'></i>
                        </a>
                  </div>
                  <small>This project was developed thanks to Academlo</small>
                  <a href="https://sauloromansantillannava.netlify.app/" className="footer__portfolio">
                        👉 Check out my Portfolio here 
                  </a>
            </footer>
      )
}

export default Footer