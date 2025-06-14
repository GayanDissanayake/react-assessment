import Carousel from "./components/carousel/Carousel";

const images = [
  {
    id: 1,
    src: "https://fastly.picsum.photos/id/87/1280/960.jpg?hmac=tyU21LuCEO1qRepY4GnT9gGkfKbvY__ZrZYg_JxZxI8",
    alt: "image 1",
  },
  {
    id: 2,
    src: "https://fastly.picsum.photos/id/76/4912/3264.jpg?hmac=VkFcSa2Rbv0R0ndYnz_FAmw02ON1pPVjuF_iVKbiiV8",
    alt: "image 2",
  },
  {
    id: 3,
    src: "https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8",
    alt: "image 3",
  },
  {
    id: 4,
    src: "https://fastly.picsum.photos/id/71/5000/3333.jpg?hmac=wBjyqoAke0uv6bTtbbIby9s-VTQ52gIkI-QVXWS3W0I",
    alt: "image 4",
  },
  {
    id: 5,
    src: "https://fastly.picsum.photos/id/70/3011/2000.jpg?hmac=-npCfe1kpGYW7HcBlZvrEZ9Qb_EdiGLbDxE26amgotM",
    alt: "image 5",
  },
];

function App() {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default App;
