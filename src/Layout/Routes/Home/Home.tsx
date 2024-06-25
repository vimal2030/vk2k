
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Testimony } from "../Testimony/Testimony";
import About from "../About/About";
import { Address } from "../Address/Address";
import Menu from "../Menu/Menu";
import EmblaCarousel from "../components/EmblaCarousel";
import { Footer } from "../Footer/Footer";

const Home = () => {
  const slides = [
    {
      imageUrl: "https://picsum.photos/600/350?v=1",
      text: "Slide 1 Text",
    },
    {
      imageUrl: "https://picsum.photos/600/350?v=2",
      text: "Slide 2 Text",
    },
    {
      imageUrl: "https://picsum.photos/600/350?v=3",
      text: "Slide 3 Text",
    },
  ];

  const about = [
    {
      title: "Our Story",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim recusandae consequatur assumenda, ut officia dolorem fugiat sunt doloremque sint facere! Ratione recusandae reiciendis, aut in vitae ut quod ullam facilis libero non qui ipsam. Consequatur incidunt voluptates enim quasi porro ad autem fugit nemo. Distinctio, nihil ad? Aperiam officia expedita tenetur officiis commodi laboriosam vel molestias doloremque, eligendi enim reprehenderit soluta explicabo assumenda! Rem eveniet, quos at quam qui alias doloribus accusamus laudantium minima magnam odit quod aliquid repudiandae cupiditate dolore error, quis voluptatum consequatur delectus quas, quaerat impedit autem. Molestias nostrum consectetur nam amet quae dolores voluptatum eius!",
    },
  ];

  const address = [
    {
      desc: "A small river named Duden flows by their place and supplies",
      phone: 9384641042,
    },
    {
      title: "Take away",
      address:
        "Cloud Kitchen Opp to Koyambedu bus stand, Jai Nagar, 2nd main road, Arumbakkam",
    },
    {
      days: "Monday - Friday",
      time: "9 am - 8 pm",
    },
  ];

  return (
    <>
      <EmblaCarousel slides={slides} />
      <Address address={address} />
      <About about={about} />
      <Menu />
      <Testimony />
      <Footer />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        Enjoy your coffee! <FontAwesomeIcon icon={faCoffee} />
      </div>
    </>
  );
};

export default Home;
