import "./AboutStyle.css";
import {
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselCaption,
  CarouselControl,
  Col,
  Row,
  Button,
} from "reactstrap";
import { YMaps, Map,Placemark } from "react-yandex-maps";
import { useState } from "react";

function About() {
  return (
    <>
      <div className="aboutViever">
        <h1>О нас</h1>
        <p>
          Наш магазин занимается продажей мяса с доставкой на дом. Мы занимаемся
          как розничными так и опровыми продажами. У нас на сайте вы можете
          выбрать и заказать множество различных видов мяса, которое доставят
          вам прямо домой! Больше не нужно выходить из своего дома, рисковать
          своим здоровьем, часами скитаться по лабиринту прилавков в поисках
          желаемого и нести тяжёлые сумки домой. Мы сделаем всё это за вас!
        </p>
        <CarouselAbout />
        <h1>Оплата и доставка</h1>

        <p>
          Доставка осуществляется нашей курьерской службой. После оформления
          заказа производится контрольный звонок, после чего ваш заказ будет
          собран и отправлен. Оплата заказа осуществляется при получении.
        </p>
        <div className="iconAboutBlock">
          <Row className="aboutIconRow" xs="3">
            <Col>
              <i class="fas fa-box"></i>
            </Col>
            <Col>
              <i class="fas fa-money-bill-wave"></i>
            </Col>
            <Col>
              <i class="fas fa-thumbs-up"></i>
            </Col>
          </Row>
          <Row className="aboutIconRow" xs="3">
            <Col>Доставка до двери</Col>
            <Col>Оплата при получении</Col>
            <Col>Гарантия качества</Col>
          </Row>
          <Row className="aboutIconRow" xs="3">
            <Col>
              <i class="fas fa-truck-moving"></i>
            </Col>
            <Col>
              <i class="fas fa-shopping-cart"></i>
            </Col>
            <Col>
              <i class="fas fa-drumstick-bite"></i>
            </Col>
          </Row>
          <Row className="aboutIconRow" xs="3">
            <Col>Лучшие поставщики</Col>
            <Col>Богатый ассортимент</Col>
            <Col>Свежие продукты</Col>
          </Row>
        </div>
        <h1>Мы на карте</h1>
        <MapFrame />
        {/* <iframe
          width="600"
          height="450"
          style="border:0"
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
        ></iframe> */}
        <h1>Контакты</h1>
        <div className="contactBlock">
          <Row>
            <Col>
              <a href="tel:+7 (961) 164-44-45">
                <Button color="danger" size="lg">
                  <i class="fas fa-phone-alt"></i>
                  +7 (961) 164-44-45
                </Button>
              </a>
            </Col>
            <Col>
              <Button color="danger" size="lg">
                <a href="mailto:freshmeat311@gmail.com">
                  <i class="fas fa-envelope"></i>freshmeat311@gmail.com
                </a>
              </Button>
            </Col>
            <Col>
              <Button color="danger" size="lg">
                <i class="fas fa-home"></i> Белгород, Попутная 15
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

function CarouselAbout() {
  const [activeIndex, setActiveIndex] = useState(0);
  function next() {
    if (activeIndex == 2) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(activeIndex + 1);
  }
  function prev() {
    if (activeIndex == 0) {
      setActiveIndex(2);
      return;
    }
    setActiveIndex(activeIndex - 1);
  }
  return (
    <>
      <style>
        {`.custom-tag {
                  max-width: 100%;
                  height: 500px;
                  background: black;
                }`}
      </style>

      <Carousel activeIndex={activeIndex} dark next={next} previous={prev}>
        <CarouselIndicators
          activeIndex={activeIndex}
          items={[
            {
              key: 1,
              src: "https://sun9-53.userapi.com/impg/6LNEbErnmUKqe5n97ASBSrhg3UKoKdLM7xj8vg/Zu4-YvA2zKw.jpg?size=1280x1280&quality=95&sign=a672d924b608e308a5dbe2ad1745c9ba&type=album",
            },
            {
              key: 2,
              src: "https://sun9-15.userapi.com/impg/US-wIt5EU-Hm0QQ8t-VFUIIvJ4SJ_UipEz4TYg/9OT-D1Bv76s.jpg?size=1280x1280&quality=95&sign=431772aa6a2ab140ea19952f188d4e4c&type=album",
            },
            {
              key: 3,
              src: "https://sun9-88.userapi.com/impg/FM18cZqLVlnUdaLkA83iturGfPs1yBNt_OV7-Q/i1lEeUDZRfw.jpg?size=1280x1280&quality=95&sign=f24aff8282e7d39780d20a94bb466be4&type=album",
            },
          ]}
          onClickHandler={setActiveIndex}
        />
        {[
          <CarouselItem
            onExited={function noRefCheck() {}}
            onExiting={function noRefCheck() {}}
          >
            <img className="sliderImg" alt="Slide 1" src="https://sun9-53.userapi.com/impg/6LNEbErnmUKqe5n97ASBSrhg3UKoKdLM7xj8vg/Zu4-YvA2zKw.jpg?size=1280x1280&quality=95&sign=a672d924b608e308a5dbe2ad1745c9ba&type=album" />
            <CarouselCaption />
          </CarouselItem>,
          <CarouselItem
            onExited={function noRefCheck() {}}
            onExiting={function noRefCheck() {}}
          >
            <img className="sliderImg" alt="Slide 2" src="https://sun9-15.userapi.com/impg/US-wIt5EU-Hm0QQ8t-VFUIIvJ4SJ_UipEz4TYg/9OT-D1Bv76s.jpg?size=1280x1280&quality=95&sign=431772aa6a2ab140ea19952f188d4e4c&type=album" />
            <CarouselCaption />
          </CarouselItem>,
          <CarouselItem
            onExited={function noRefCheck() {}}
            onExiting={function noRefCheck() {}}
          >
            <img className="sliderImg" alt="Slide 3" src="https://sun9-88.userapi.com/impg/FM18cZqLVlnUdaLkA83iturGfPs1yBNt_OV7-Q/i1lEeUDZRfw.jpg?size=1280x1280&quality=95&sign=f24aff8282e7d39780d20a94bb466be4&type=album" />
            <CarouselCaption />
          </CarouselItem>,
        ]}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={prev}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

function MapFrame() {
  return (
    <div className="mapWrapper" style={{marginLeft:'auto', marginRigth:'auto'}}>
      <YMaps>
        <Map
          width={700}
          height={500}
          defaultState={{ center: [50.532876, 36.529443], zoom: 18, geoObjects:[50.532876, 36.529443] }}
        >
            <Placemark defaultGeometry={[50.532876, 36.529443]} />
        </Map>
      </YMaps>
    </div>
  );
}
export default About;
