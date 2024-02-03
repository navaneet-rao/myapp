const PRODUCTS = [
  {
    id: 100,
    name: "Headset",
    price: 350,
    image: require("../assets/products/HeadSet-Image.jpg"),
    description:
      "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
  },
  {
    id: 101,
    name: "Toy Car",
    price: 600,
    image: require("../assets/products/Car-Image.jpg"),
    description:
      "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
  },
  {
    id: 102,
    name: "Cupcake",
    price: 2,
    image: require("../assets/products/Cake-Image.jpg"),
    description:
      "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
