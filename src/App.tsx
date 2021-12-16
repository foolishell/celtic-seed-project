import "./App.scss";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { ScrollSpy } from "bootstrap";
import mainLogoImg from "./image/mainLogo.png";
import affImg from "./image/aff.png";
import twitterImg from "./image/twitter.png";
import facebookImg from "./image/facebook.png";
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
import { Artist, Support } from "./components/ArtistAndSupport";
import britchesPdf from "./image/pdf/britches.pdf";
import downByTheSallyGardenPdf from "./image/pdf/downByTheSallyGarden.pdf";
import hagWithTheMoneyPdf from "./image/pdf/hagWithTheMoney.pdf";
import maggiePickiesPdf from "./image/pdf/maggiePickies.pdf";
import silverSpearPdf from "./image/pdf/silverSpear.pdf";

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
                <br />
                <small>
                  最新情報はこちらから
                  <br />
                  <a href="https://twitter.com/celtic_seed">
                    <Image src={twitterImg} height={18} />
                  </a>{" "}
                  <a href="https://www.facebook.com/Celtic-Seed-Project-100344089118838/">
                    <Image src={facebookImg} height={18} />
                  </a>
                </small>
              </div>
            </div>
            <div className="w-nav p-3 invisible visible-md">
              <Image src={affImg} className="w-100" />
            </div>
          </Container>
          <Container
            fluid
            id="about"
            className="px-nav bg-white py-5 bg-opacity-75"
          >
            <div className="d-block d-md-none w-25 mx-auto">
              <Image src={mainLogoImg} className="rounded-circle w-25" />
            </div>
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
              2021年12月19日（日）に記念すべき１回目が開催されます。
              ケルト音楽に興味がある方、お気軽にお越しいただけたら嬉しいです。
              お越しをお待ちしております。
            </p>
            <p>小嶋祐樹</p>
            <small>
              <a className="text-primary" href="https://wp.me/pckG1b-Zb">
                小嶋のホームページにも主催者としての想いを公開しました。
              </a>
            </small>
          </Container>
          <Container fluid id="events" className="px-nav py-5 bg-white">
            <h1>Events</h1>
            <ul className="timeline text-start">
              <li>
                <h6>
                  <p className="text-secondary">
                    2021年11月7日 15:00-17:00 プレイベント
                  </p>
                </h6>
                <small>
                  ケルト音楽の生演奏とダンスWSをお届けします。
                  <br />
                  ■演奏：小嶋佑樹(Bagpipe&TinWhistle&Accordion), 福島開(Fiddle),
                  大橋志麻(IrishHarp)
                  <br />
                  ■ダンスWS：寺町靖子, 城拓
                  <br />
                  ■料金：1000円＋お店に1オーダー以上のご注文
                  <br />
                  ■場所：Storyhouse Cafe & Bar（長野県松本市大手４丁目３−１９）
                  <br />
                  ご予約は
                  <a href="mailto:celticseedproject@gmail.com">
                    celticseedproject@gmail.com
                  </a>
                  まで
                  <br />※
                  予約は必須ではありませんが、満員の場合は予約の方を優先とさせていただきます。
                </small>
              </li>
              <li>
                <h6>
                  <p className="text-secondary">
                    2021年12月19日 13:00-16:00 ワークショップ
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
                    <div className="mt-1">
                      <small>
                        <a
                          className="text-primary"
                          data-bs-toggle="collapse"
                          href="#musicWorkshop"
                          role="button"
                          aria-expanded="false"
                          aria-controls="musicWorkshop"
                        >
                          音楽ワークショップの詳細
                        </a>
                      </small>
                      <div className="collapse" id="musicWorkshop">
                        <Card className="card-body text-start">
                          <div>
                            <small>
                              <span className="fw-bold">タイムテーブル</span>
                              <br />
                              13:00〜13:15　オープニング挨拶・振り分け・移動
                              <br />
                              13:15〜13:55　初級・中級の座学・歴史・リズムを紹介しつつミニコンサート、楽器紹介
                              <br />
                              13:55〜14:35　ワークショップ１（初級/中級）
                              <br />
                              14:35〜14:50　休憩
                              <br />
                              14:50〜15:30　ワークショップ２（初級/中級）
                              <br />
                              15:30〜15:45　音楽とダンスのセッション
                              <br />
                              15:45〜16:00　締めの挨拶
                              <br />
                            </small>
                          </div>
                          <div>
                            <small>
                              ◉楽器制限 |
                              どんな楽器でもO.K（ただし、下の注意事項をご確認ください）
                              <br />
                              ◉人数 |初級・中級合わせて定員 50名
                              <br />
                              <span className="fw-bold">＜注意事項＞</span>
                              <br />
                              ※１講師はフィドルとティンホイッスルなどアイルランドの伝統楽器で教えます。
                              <br />
                              ※２他の楽器も参加可能ですが、フィドルやティンホイッスルなど、アイリッシュの音階が演奏できる楽器が推奨です。
                              <br />
                              ※３ティンホイッスルとリコーダーの違い
                              <br />
                              - 運指が違う
                              <br />
                              - キーが違う
                              <br />
                              -
                              なので、ワークショップ参加にはティンホイッスルが推奨です。
                              <br />
                            </small>
                          </div>
                        </Card>
                      </div>
                    </div>
                    <div className="mt-1">
                      <small>
                        <a
                          className="text-primary"
                          data-bs-toggle="collapse"
                          href="#musicNote"
                          role="button"
                          aria-expanded="false"
                          aria-controls="musicNote"
                        >
                          音楽ワークショップ楽譜
                        </a>
                      </small>
                      <div className="collapse" id="musicNote">
                        <Card className="card-body text-start">
                          <small>
                            <p className="fw-bold">初級・中級共通</p>
                            <a
                              href={maggiePickiesPdf}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p>Maggie Pickies</p>
                            </a>
                            <p className="fw-bold">初級</p>
                            <a
                              href={britchesPdf}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p>Britches</p>
                            </a>
                            <a
                              href={downByTheSallyGardenPdf}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p>Down By the Sally Garden</p>
                            </a>
                            <p className="fw-bold">中級</p>
                            <a
                              href={hagWithTheMoneyPdf}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p>Hag with the Money</p>
                            </a>
                            <a
                              href={silverSpearPdf}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <p>Silver Spear</p>
                            </a>
                          </small>
                        </Card>
                      </div>
                    </div>
                    <div className="mt-1">
                      <small>
                        <a
                          className="text-primary"
                          data-bs-toggle="collapse"
                          href="#danceWorkshop"
                          role="button"
                          aria-expanded="false"
                          aria-controls="danceWorkshop"
                        >
                          ダンスワークショップの詳細
                        </a>
                      </small>
                      <div className="collapse" id="danceWorkshop">
                        <Card className="card-body text-start">
                          <div>
                            <small>
                              <span className="fw-bold">タイムテーブル</span>
                              <br />
                              13:00〜13:15　オープニング挨拶・振り分け・移動
                              <br />
                              13:15〜14:00　アイルランドの歴史とダンスについて（座学）・ストレッチとウォームアップ
                              <br />
                              14:00〜14:50　Maggie Pickieワークショップ(前半)
                              <br />
                              14:50〜15:00　休憩
                              <br />
                              15:00〜15:30　Maggie Pickieワークショップ(後半)
                              <br />
                              15:30〜15:45　音楽とダンスのセッション
                              <br />
                              15:45〜16:00　締めの挨拶
                              <br />
                            </small>
                          </div>
                          <div>
                            <small>
                              ◉動きやすい服装でお越しください
                              <br />
                              ◉ローファーのような底の平たい革靴でお越しください
                              <br />
                              ◉動くと汗をかきます。飲み物、タオル、替えのマスクもご用意ください
                              <br />
                              ◉マスク（不織布）着用をお願いします
                              <br />
                              ◉人数 |定員 40名
                              <br />
                            </small>
                          </div>
                        </Card>
                      </div>
                    </div>
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
                    2021年12月19日 17:00-20:00 コンサート（開場: 16:00）
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
                  ・他のお客様との感覚を開けていただき（2mほど）、各施設での長時間の滞在は極力お控えくださいます様にお願い致します。
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
            <Image
              src={priceImg}
              className="w-lg-75 w-100 my-3 shadow-sm rounded"
            />

            <div>
              <Button
                className="shadow-sm"
                href="https://celtic-seed-2021-winter.peatix.com/view"
              >
                申し込みページへ
              </Button>
              <div className="mt-3">
                <p>
                  <a
                    className="text-white pt-3"
                    data-bs-toggle="collapse"
                    href="#collapseTicket"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseTicket"
                  >
                    チケットに関して
                  </a>
                </p>
                <div className="collapse" id="collapseTicket">
                  <Card className="card-body text-start text-black">
                    <small>
                      ・Peatix前売りチケット販売期間は2021/10/23/(土)〜12/12/(日)です。
                      <br />
                      ・ワークショップに参加されない方は、コンサートの60分前(16:00)よりご入場いただけます。
                      <br />
                      ・三密を避けるため、お時間に余裕をもってお越しくださいますようご協力をお願いします。
                      <br />
                      ・未就学児は無料です。
                      <br />
                      ・ご不明な点がありましたら
                      <a href="mailto:celticseedproject@gmail.com">
                        celticseedproject@gmail.com
                      </a>
                      までお問い合わせください。
                    </small>
                  </Card>
                </div>
              </div>
            </div>
          </Container>
          <Container
            id="artists"
            className="d-grid gap-5 px-nav py-5 bg-white"
            fluid
          >
            <h1>Artists</h1>
            <Row>
              <h5>音楽ワークショップ</h5>
              <Artist
                imgSrc={tomoyoSugaiImg}
                homepage="http://www.tomoyosugai.com/thousands-of-flowers/"
                name="須貝知世"
                size={6}
              />
              <Artist
                imgSrc={komatsuDaiImg}
                homepage="https://daikomatsu.com/"
                name="小松大"
                size={6}
              />
            </Row>
            <Row>
              <h5>ダンスワークショップ</h5>
              <Artist
                imgSrc={yasukoTeramachiImg}
                homepage="#"
                name="寺町靖子"
                size={4}
              />
              <Artist
                imgSrc={hiroshiJoImg}
                homepage="https://note.com/johiroshi/"
                name="城拓"
                size={4}
              />
              <Artist
                imgSrc={kaiFukushimaImg}
                homepage="#"
                name="福島開（Music）"
                size={4}
              />
            </Row>
            <Row>
              <h5>コンサート</h5>
              <Artist
                imgSrc={yukiKojimaBandImg}
                homepage="https://kojikojimoheji.com/wp01/2019/09/18/%E3%83%95%E3%83%AB%E6%BC%94%E5%A5%8F%E5%8B%95%E7%94%BB%EF%BC%81%E3%80%8Cfestival-de-ortigueira-2019-yuki-kojima-band%E3%80%8D%EF%BC%81%EF%BC%81/"
                name="Yuki Kojima Band"
                size={4}
              />
              <Artist
                imgSrc={sCeltsImg}
                homepage="https://shindai-guide.com/circle/scelts/"
                name="S-Celts"
                size={4}
              />
              <Artist
                imgSrc={allyCaravanImg}
                homepage="https://allys30.wixsite.com/ally"
                name="Ally Caravan"
                size={4}
              />
              <Artist
                imgSrc={deDonhnaighImg}
                homepage="https://twitter.com/ddomhnaigh"
                name="Dé Domhnaigh"
                size={4}
              />
              <Artist
                imgSrc={shimaOhashiImg}
                homepage="https://shimaohashi.com/"
                name="大橋志麻"
                size={4}
              />
              <Artist
                imgSrc={rikoMatsuokaImg}
                homepage="https://www.imliving.com/harp/profile.html"
                name="松岡莉子"
                size={4}
              />
            </Row>
            <p className="text-secondary">
              チャレンジ枠として、演奏したい方も募集しています。（参加費：1000円）
            </p>
          </Container>
          <Container id="supports" fluid className="px-nav py-5 bg-white">
            <h1>Supports</h1>
            <Row>
              <Support
                imgSrc={embassyImg}
                homepage="https://www.dfa.ie/ja/irish-embassy/japan/"
                name="駐日アイルランド大使館"
                size={3}
              />
              <Support
                imgSrc={odeIncImg}
                homepage="https://odeinc.jp/"
                name="Ode.inc"
                size={3}
              />
              <Support
                imgSrc={celtNoFueImg}
                homepage="https://celtnofue.com/"
                name="ケルトの笛屋さん"
                size={3}
              />
              <Support
                imgSrc={tradOnImg}
                homepage="https://www.trad-on.com"
                name="Trad On"
                size={3}
              />
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
