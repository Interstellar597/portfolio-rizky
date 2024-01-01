import meter1 from "../assets/img/HTML5.png";
import meter2 from "../assets/img/CSS3.png";
import meter3 from "../assets/img/JS1.png";
import meter4 from "../assets/img/React.png";
import meter5 from "../assets/img/CI.png";
import meter6 from "../assets/img/Laravel.png";
import meter7 from "../assets/img/VS.png";
import meter8 from "../assets/img/MO.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Saya memiliki beberapa skill dalam dunia pemrograman web antara lain Programming Languange HTML, Python, Javascript. Framework Codeigniter, Laravel. Library Frontend seperti CSS, Bootstrap dan Reactjs. Text editor Visual Studio Code dan juga beberapa skill lainnya seperti Microsoft Office dan Google Workspace.<br></br> Saya juga memiliki skill Test Automation, Ethical Hacking, Penetration Testing Web dan Aplikasi.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Reactjs</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>CodeIgniter</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>Visual Studio Code</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>Microsoft Office</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
