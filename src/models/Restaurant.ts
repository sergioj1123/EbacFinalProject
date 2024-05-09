class Restaurant {
  name: string;
  image: string;
  type: string[];
  stars: string;
  about: string;
  id: number;

  constructor(
    name: string,
    stars: string,
    about: string,
    image: string,
    type: string[],
    id: number,
  ) {
    this.name = name;
    this.stars = stars;
    this.about = about;
    this.image = image;
    this.type = type;
    this.id = id;
  }
}

export default Restaurant;
