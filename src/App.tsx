import "./App.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { ScrollSpy } from "bootstrap";
import tomoyoSugaiImg from "./image/artist/tomoyoSugai.jpg";
import komatsuDaiImg from "./image/artist/fuppy.jpeg";
import yasukoTeramachiImg from "./image/artist/logo192.png";
import hiroshiJoImg from "./image/artist/logo192.png";
import yukiKojimaBandImg from "./image/artist/yukiKojimaBand.jpg";
import sCeltsImg from "./image/artist/logo192.png";
import allyCaravanImg from "./image/artist/allyCaravan.jpg";
import deDonhnaighImg from "./image/artist/deDomhnaigh.jpg";
import shimaOhashiImg from "./image/artist/shimaOhashi.jpg";
import rikoMatsuokaImg from "./image/artist/rikoMatsuoka.jpg";
import embassyImg from "./image/artist/logo192.png";
import odeIncImg from "./image/artist/logo192.png";
import celtNoFueImg from "./image/artist/logo192.png";
import tradOnImg from "./image/sponsor/tradOn.png";

const App = () => {
  useEffect(() => {
    var scrollSpy = new ScrollSpy(document.body, {
      target: "#navigation",
    });
  });
  return (
    <div className="App">
      <Row>
        <Col md="2" className="d-none d-md-block">
          <Navigation />
        </Col>
        <Col
          md="8"
          xs="12"
          className="gap-5 d-grid text-center position-relative py-5"
          data-bs-spy="scroll"
          data-bs-target="#navigation"
          data-bs-offset={0}
          tabIndex={0}
        >
          <Container id="top"></Container>
          <Container id="about">
            <h1>About</h1>
          </Container>
          <Container id="schedule">
            <h1>Schedule</h1>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  href="https://www.totoprayogo.com/#"
                  rel="noreferrer"
                >
                  New Web Design
                </a>
                <a href="#" className="float-right">
                  21 March, 2014
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....
                </p>
              </li>
              <li>
                <a href="#">21 000 Job Seekers</a>
                <a href="#" className="float-right">
                  4 March, 2014
                </a>
                <p>
                  Curabitur purus sem, malesuada eu luctus eget, suscipit sed
                  turpis. Nam pellentesque felis vitae justo accumsan, sed
                  semper nisi sollicitudin...
                </p>
              </li>
              <li>
                <a href="#">Awesome Employers</a>
                <a href="#" className="float-right">
                  1 April, 2014
                </a>
                <p>
                  Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed
                  nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit.
                  Sed nec tempor nibh...
                </p>
              </li>
            </ul>
          </Container>
          <Container id="ticket">
            <h1>Ticket</h1>
          </Container>
          <Container id="artist" className="d-grid gap-3" fluid>
            <h1>Artist</h1>
            <Row>
              <h3>音楽ワークショップ</h3>
              <Col xs="6" className="text-center">
                <Image
                  src={tomoyoSugaiImg}
                  className="w-50"
                  roundedCircle
                  thumbnail
                />
                <p>須貝知世</p>
              </Col>
              <Col xs="6" className="text-center">
                <Image
                  src={komatsuDaiImg}
                  className="w-50"
                  roundedCircle
                  thumbnail
                />
                <p>小松大</p>
              </Col>
            </Row>
            <Row>
              <h3>ダンスワークショップ</h3>
              <Col xs="6" className="text-center">
                <Image
                  src={yasukoTeramachiImg}
                  className="w-50"
                  roundedCircle
                  thumbnail
                />
                <p>寺町靖子</p>
              </Col>
              <Col xs="6" className="text-center">
                <Image
                  src={hiroshiJoImg}
                  className="w-50"
                  roundedCircle
                  thumbnail
                />
                <p>城拓</p>
              </Col>
            </Row>
            <Row>
              <h3>コンサート</h3>
              <Col xs="4" className="text-center">
                <Image
                  src={yukiKojimaBandImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <p>Yuki Kojima Band</p>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={sCeltsImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <p>S-Celts</p>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={allyCaravanImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <p>Ally Caravan</p>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={deDonhnaighImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <p>De Domhnaigh</p>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={shimaOhashiImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <p>大橋志麻</p>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={rikoMatsuokaImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <p>松岡莉子</p>
              </Col>
            </Row>
            <p className="text-secondary">and guests</p>
          </Container>
          <Container id="sponsor">
            <h1>Sponsor</h1>
            <Row>
              <Col xs="3" className="text-center">
                <Image src={embassyImg} className="w-50" rounded thumbnail />
                <p>アイルランド大使館</p>
              </Col>
              <Col xs="3" className="text-center">
                <Image src={odeIncImg} className="w-50" rounded thumbnail />
                <p>Ode.inc</p>
              </Col>
              <Col xs="3" className="text-center">
                <Image src={celtNoFueImg} className="w-50" rounded thumbnail />
                <p>ケルトの笛屋さん</p>
              </Col>
              <Col xs="3" className="text-center">
                <Image src={tradOnImg} className="w-50" rounded thumbnail />
                <p>Trad On</p>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

export default App;
