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
import bgImg from "./image/bg.png";
import beginnerOkImg from "./image/beginnerOk.jpg";
import priceImg from "./image/price.jpg";
import tomoyoSugaiImg from "./image/artists/tomoyoSugai.jpg";
import yukiKojima from "./image/artists/yukiKojima.png";
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
import chooseWhichYouLikeImg from "./image/chooseWhichYouLike.jpg";
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
                  ケルティックシードプロジェクト2022 in 山梨
                </h2>
                <h5>11月19日(土)</h5>
                <h5>会場：甲州市民文化会館</h5>
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
              2022年11月19日（土）に記念すべき2回目が開催されます。
              ケルト音楽に興味がある方、お気軽にお越しいただけたら嬉しいです。
              お越しをお待ちしております。
            </p>
            <p>小嶋佑樹</p>
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
                    2022年11月19日 14:00-16:00 昼の部：ワークショップ
                  </p>
                </h6>
                <Row>
                  <Col xs={12} md={10}>
                    <small>
                      1.
                      音楽ワークショップ：ティンホイッスル/アコーディオン奏者の小嶋祐樹を講師に迎えた、
                      初心者向けワークショップがあります。（ティンホイッスルは会場で楽器も販売していますので、
                      当日ご購入いただいてそのままご参加も可能です）
                      <br />
                      2.
                      ダンスワークショップ：アイリッシュダンス初心者向けのワークショップを行います。ソロダンスではなく、複数の人数で踊るグループダンスを取り上げる予定です。
                      <br />
                      そして、最後には音楽チームとダンスチーム、合同でアンサンブルを楽しみます。
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
                          <small>
                            <p>
                              アイルランドの伝統的なダンスチューンを数曲、ゆっくり繰り返し練習します。
                              楽器の種類は問いません。（アコースティック楽器）
                              最後は、ダンスワークショップと合わせて演奏することを目標にします。
                            </p>
                            <p>
                              ＜課題曲＞ <br />
                              ■Jim Morrison's（Jig）
                              <br />
                              ■Green Mountain（Reel）
                              <br />
                              ■Haste to the Wedding（Jig）
                              <br />
                            </p>
                            <p>
                              ＊楽器は各自お持ちください <br />
                              ＊会場ではティンホイッスルの販売も行っています
                              （貸し出しは行っておりません。ご了承ください）
                              <br />
                            </p>
                            <p>
                              講師：小嶋佑樹（Koji Koji Moheji）
                              <br />
                              スペインのバグパイプ（ガイタ）奏者、手回しオルガン奏者としてのパフォーマンスを中心に、ティンホイッスル、アコーディオン、果ては
                              ジャグリングまで自在にこなし、各種イベントやワークショップ、YouTubeなどで幅広く活動中。
                              山梨県を拠点に、ケルト音楽の普及を目指しています。
                            </p>
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
                          <small>
                            <p>
                              アイリッシュダンスにはたくさんの種類があります。
                              今回は、ソロダンスではなく複数の人数で踊るグループダンス（ケーリーダンス・セットダンス）を取り上げる予定。
                              全く踊ったことがない方でも大丈夫です。
                            </p>
                            <p>
                              ＊マスク・手袋着用にてお願いします <br />
                              ＊状況によっては、手をつながないダンスに変更する可能性があります{" "}
                              <br />
                              ＊動きやすい服装でお越しください <br />
                              ＊動くと汗をかきます。飲み物、タオル、替えのマスクもご持参ください
                            </p>
                            <p>
                              講師：寺町靖子 <br />
                              アイリッシュダンス愛好家、CCEジャパン副会長。
                              2000年より趣味としてアイリッシュダンスを習い、様々な種類のダンスを
                              習得するとともに、その楽しさを伝えるためにイベント等でアイリッシュ
                              ダンスの裾野を広げる活動をしている。
                              <br />
                            </p>
                            <p>演奏：福島開（フィドル）</p>
                            <p>
                              最後に楽器チームとダンスチーム、合同でアンサンブルを楽しみます。
                            </p>
                          </small>
                        </Card>
                      </div>
                    </div>
                  </Col>
                  <Col md={2}>
                    <Image
                      src={chooseWhichYouLikeImg}
                      className="w-100 d-none d-md-inline"
                    />
                  </Col>
                </Row>
              </li>
              <li>
                <h6>
                  <p className="text-secondary">
                    2022年11月19日 17:00-19:00 コンサート（開場: 16:00）※自由席
                  </p>
                </h6>
                <small>
                  <p>
                    2019年にスペインで開催された「Festival de
                    Ortigueira」にて優勝を勝ち取ったYuki Kojima BANDメンバーと、
                    安定感抜群の優しい音色を奏でるアイリッシュフルートの須貝知世、アイルランドのシンボルでもあるアイリッシュハープで幻想的な世界を届ける大橋志麻の豪華６名で、たっぷりケルト音楽の魅力をお届けします！
                  </p>
                  <p>
                    小嶋佑樹（Yuki Kojima
                    BAND）バグパイプ/ティンホイッスル/アコーディオン <br />
                    中村大史（Yuki Kojima BAND）ギター <br />
                    上沼健二（Yuki Kojima BAND）バウロン/ドラム <br />
                    奥貫史子（Yuki Kojima BAND）フィドル/タップ <br />
                    須貝知世　アイリッシュフルート <br />
                    大橋志麻　アイリッシュハープ <br />
                  </p>
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
            <h5>
              前売り（Peatix）/当日料金 一律3,000円 <br />
              ＊Peatix前売りチケット販売期間：2022/10/1(土)〜11/18(金)
            </h5>

            <div>
              <Button
                className="shadow-sm"
                href="https://peatix.com/event/3357235/view?k=557d62c9b26b57bf2cf8121ed6ca73bf64243d84"
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
                      ・料金はワークショップ・コンサートの通し料金です。
                      <br />
                      ・ワークショップに参加されない方は、コンサートの60分前(16:00)よりご入場いただけます。
                      <br />
                      ・三密を避けるため、お時間に余裕をもってお越しくださいますようご協力をお願いします。
                      <br />
                      ・小学生以下は無料です。
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
              <h3>ワークショップ</h3>
              <Artist
                imgSrc={yukiKojima}
                homepage="https://www.youtube.com/channel/UC1azPTdA4tDuET5yfsWwbzw"
                name="小嶋佑樹"
                size={4}
              />
              <Artist
                imgSrc={yasukoTeramachiImg}
                homepage="#"
                name="寺町靖子"
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
              <h3>コンサート</h3>
              <Artist
                imgSrc={yukiKojimaBandImg}
                homepage="https://kojikojimoheji.com/wp01/2019/09/18/%E3%83%95%E3%83%AB%E6%BC%94%E5%A5%8F%E5%8B%95%E7%94%BB%EF%BC%81%E3%80%8Cfestival-de-ortigueira-2019-yuki-kojima-band%E3%80%8D%EF%BC%81%EF%BC%81/"
                name="Yuki Kojima Band"
                size={4}
              />
              <Artist
                imgSrc={tomoyoSugaiImg}
                homepage="http://www.tomoyosugai.com/thousands-of-flowers/"
                name="須貝知世"
                size={4}
              />
              <Artist
                imgSrc={shimaOhashiImg}
                homepage="https://shimaohashi.com/"
                name="大橋志麻"
                size={4}
              />
            </Row>
          </Container>
          <Container id="supports" fluid className="px-nav py-5 bg-white">
            <h1>Supports</h1>
            <Row>
              <Col xs={4}></Col>
              <Support
                imgSrc={tradOnImg}
                homepage="https://www.trad-on.com"
                name="Trad On"
                size={4}
              />
              <Col xs={4}></Col>
            </Row>
            <Row className="shadow-sm rounded p-3 bg-white border">
              <div>
                【山梨ケルト音楽交流会】
                <br />
                Yuki Kojima
                BANDの代表の小嶋佑樹が主体となり、甲州市を中心に月に一回不定期でケルト音楽の練習会を開催しています。
                <br />
                楽器を始めたばかりの方でも参加しやすい、アットホームな集まりにしていますのでお気軽にどうぞ！
                <br />
                開催日や、次回取り組む予定の曲などはツイッターにてお知らせしていますので、是非チェックしてみてください。
              </div>
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
