import "./App.scss";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { ScrollSpy } from "bootstrap";
import mainLogoImg from "./image/mainLogo.png";
import affImg from "./image/aff.png";
import concertImg from "./image/concert.jpg";
import beginnerOkImg from "./image/beginnerOk.jpg";
import priceImg from "./image/price.jpg";
import tomoyoSugaiImg from "./image/artists/tomoyoSugai.jpg";
import komatsuDaiImg from "./image/artists/daiKomatsu.jpg";
import yasukoTeramachiImg from "./image/artists/yasukoTeramachi.jpg";
import hiroshiJoImg from "./image/artists/hiroshiJo.jpg";
import kaiFukushimaImg from "./image/artists/kaiFukushima.jpg";
import yukiKojimaBandImg from "./image/artists/yukiKojimaBand.jpg";
import sCeltsImg from "./image/artists/scelts.jpg";
import allyCaravanImg from "./image/artists/allyCaravan.jpg";
import deDonhnaighImg from "./image/artists/deDomhnaigh.jpg";
import shimaOhashiImg from "./image/artists/shimaOhashi.jpg";
import rikoMatsuokaImg from "./image/artists/rikoMatsuoka.jpg";
import embassyImg from "./image/supports/embassy.png";
import odeIncImg from "./image/supports/ode.jpg";
import celtNoFueImg from "./image/supports/celtNoFue.png";
import tradOnImg from "./image/supports/tradOn.png";

const App = () => {
  useEffect(() => {
    var scrollSpy = new ScrollSpy(document.body, {
      target: "#navigation",
    });
  });
  return (
    <div className="App w-100">
      <Navigation />
      <div className="w-100">
        <Image
          src={concertImg}
          fluid
          className="fixed-top opacity-50 p-0 z-index-0 w-100"
        />
        <div
          className="text-center position-relative p-0"
          data-bs-spy="scroll"
          data-bs-target="#navigation"
          data-bs-offset={0}
          tabIndex={0}
        >
          <Container
            fluid
            id="top"
            className="h-top-image p-0 d-flex bg-primary bg-opacity-75"
          >
            <div className="w-nav bg-white h-100 bg-opacity-75 invisible visible-md"></div>
            <div className="w-offset-nav h-100 d-table">
              <div className="d-table-cell align-middle text-center text-bold text-white">
                <h2 className="text-bold">
                  ケルティックシードプロジェクト2021
                </h2>
                <h5>12月19日(日)</h5>
                <h5>会場：茅野市民館</h5>
              </div>
            </div>
            <div className="w-nav p-3">
              <Image src={affImg} className="w-100" />
            </div>
          </Container>
          <Container
            fluid
            id="about"
            className="px-nav bg-white py-5 bg-opacity-75"
          >
            <h1>What's Celtic Seed Project</h1>
            <p>
              Celtic Seed
              Projectは日本国内でのケルト音楽の普及と発展を目的に発足しました。大きく分けて2つの要素から成り立ちます。
            </p>
            <Row className="gap-3 d-grid">
              <Col
                xs={12}
                className="shadow-sm rounded p-3 bg-white text-secondary"
              >
                <p className="text-bold text-dark">🌱　種をまく　　</p>
                <small>
                  まだケルト音楽が根付いていない地域で、コンサートやワークショップなどを実施し、興味を持つ人を増やしたい
                </small>
              </Col>
              <Col
                xs={12}
                className="shadow-sm rounded p-3 bg-white text-secondary"
              >
                <p className="text-bold text-dark">☘️　種を育てる　　</p>
                <small>
                  若手のケルト音楽奏者、ダンサーなど、その分野においてプロを目指す方の活躍の場を作りたい
                </small>
              </Col>
            </Row>
            <p className="mt-3">
              2021年12月17日（土）に記念すべき１回目が開催されます。
              ケルト音楽に興味がある方、お気軽にお越しいただけたら嬉しいです。
              お越しをお待ちしております。
            </p>
            <p>Koji</p>
          </Container>
          <Container fluid id="events" className="px-nav py-5 bg-white">
            <h1>Events</h1>
            <ul className="timeline text-start">
              <li>
                <h6>
                  <p className="text-secondary">
                    2021年11月4日 15:00-18:00 プレイベント
                  </p>
                </h6>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula....
                </small>
              </li>
              <li>
                <h6>
                  <p className="text-secondary">
                    2021年12月19日 14:00-16:00 ワークショップ
                  </p>
                </h6>
                <Row>
                  <Col xs={12} md={10}>
                    <small>
                      1. ティンホイッスル奏者とフィドル奏者を講師に迎えた、
                      初心者向けワークショップがあります。（ティンホイッスルは会場で楽器も販売していますので、
                      当日ご購入いただいてそのままご参加も可能です）
                      <br />
                      2.
                      楽器中級者向けとアイリッシュダンス初心者向けのワークショップがあります。
                      楽器とダンスに分かれワークショップを開催します。
                      そして、最後に楽器チームとダンスチーム、合同でアンサンブルを楽しみます。
                    </small>
                  </Col>
                  <Col md={2}>
                    <Image
                      src={beginnerOkImg}
                      className="w-100 d-none d-md-inline"
                    />
                  </Col>
                </Row>
              </li>
              <li>
                <h6>
                  <p className="text-secondary">
                    2021年12月19日 17:00-19:00 コンサート
                  </p>
                </h6>
                <small>
                  1.
                  日本国内で活躍中のケルト音楽奏者達が出演するコンサートが開催されます。
                  また開催地域にゆかりのあるミュージシャンも出演します。
                  <br />
                  2.
                  チャレンジ枠として、一般募集により集まった出演者の演奏ステージもあります。
                  (普段人前で演奏する機会がないけれど、頑張って練習している方などへの発表の場を作りたい)
                </small>
              </li>
            </ul>
            <p>
              <a
                className="text-primary"
                data-bs-toggle="collapse"
                href="#collapseVirus"
                role="button"
                aria-expanded="false"
                aria-controls="collapseVirus"
              >
                コロナウイルスに関するお願い
              </a>
            </p>
            <div className="collapse" id="collapseVirus">
              <Card className="card-body text-start">
                <small>
                  ・発熱や風邪の様な症状がある場合、体調のすぐれない場合は、入館をご遠慮くださいます様にお願い致します。
                  <br />
                  ・マスクを着用していただき、咳エチケットへのご協力をお願い致します。
                  <br />
                  ・こまめな手洗いや手指の消毒をお願い致します。
                  <br />
                  点他のお客様との感覚を開けていただき（2mほど）、各施設での長時間の滞在は極力お控えくださいます様にお願い致します。
                  <br />
                  ・飛沫予防のため、対面での会話は極力お控えくださいますようお願い致します。
                  <br />
                  ・施設や催事の状況によって、込み合わない様、入場の制限等を行う場合がございます。
                  <br />
                  ご協力をお願い致します。
                </small>
              </Card>
            </div>
          </Container>
          <Container
            fluid
            id="tickets"
            className="px-nav py-5 bg-secondary bg-opacity-75 text-white"
          >
            <h1>Tickets</h1>
            <Image src={priceImg} className="w-md-75 w-100 my-3" />
            <p>申し込みは準備中です。お待ちください♪</p>
          </Container>
          <Container
            id="artists"
            className="d-grid gap-5 px-nav py-5 bg-white"
            fluid
          >
            <h1>Artists</h1>
            <Row>
              <h5>音楽ワークショップ</h5>
              <Col xs="6" className="text-center">
                <Image
                  src={tomoyoSugaiImg}
                  className="w-50"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>須貝知世</small>
              </Col>
              <Col xs="6" className="text-center">
                <Image
                  src={komatsuDaiImg}
                  className="w-50"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>小松大</small>
              </Col>
            </Row>
            <Row>
              <h5>ダンスワークショップ</h5>
              <Col xs="4" className="text-center">
                <Image
                  src={yasukoTeramachiImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>寺町靖子</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={hiroshiJoImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>城拓</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={kaiFukushimaImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>福島開（Music）</small>
              </Col>
            </Row>
            <Row>
              <h5>コンサート</h5>
              <Col xs="4" className="text-center">
                <Image
                  src={yukiKojimaBandImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>Yuki Kojima Band</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={sCeltsImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>S-Celts</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={allyCaravanImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>Ally Caravan</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={deDonhnaighImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>Dé Domhnaigh</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={shimaOhashiImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>大橋志麻</small>
              </Col>
              <Col xs="4" className="text-center">
                <Image
                  src={rikoMatsuokaImg}
                  className="w-75"
                  roundedCircle
                  thumbnail
                />
                <br />
                <small>松岡莉子</small>
              </Col>
            </Row>
            <p className="text-secondary">
              チャレンジ枠として、演奏したい方も募集しています。（参加費：1000円）
            </p>
          </Container>
          <Container id="supports" fluid className="px-nav py-5 bg-white">
            <h1>Supports</h1>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
