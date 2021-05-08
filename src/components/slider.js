import Carousel from "react-bootstrap/Carousel";
export default function Slider() {
  const data = [
    {
      src: "/banner1.png",
      alt: "First slide",
      header: "The Affordable Advanced Additive Platform.",
      description:
        "Select between hundreds of materials. Pick the properties and pricing to outperform your project goals.",
    },
    {
      src: "/banner2.png",
      alt: "Second slide",
      header:
        "Reach your material's maximum potential with full-cycle 3D printing expertise.",
      description:
        "Select between hundreds of materials. Pick the properties and pricing to outperform your project goals.",
    },
    {
      src: "/banner3.jpg",
      alt: "Third slide",
      header: "The Part You Want. The Properties You Need.",
      description:
        "Select between hundreds of materials. Pick the properties and pricing to outperform your project goals.",
    },
  ];
  return (
    <Carousel>
      {data.map((slide, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100 vh-100"
            src={slide.src}
            alt={slide.alt}
          />
          <Carousel.Caption className="ml-0 text-sm-left p-1 text-white">
            <h2>{slide.header}</h2>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
