class Restaurant {
  name: string;
  stars: string;
  about: string;
  id: number;

  constructor(name: string, stars: string, about: string) {
    this.name = name;
    this.stars = stars;
    this.about = about;
    this.id = Math.floor(Math.random() * 1000);
  }
}

export default Restaurant;
