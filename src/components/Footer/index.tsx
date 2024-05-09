import { Logo } from '../header/styles';
import { FooterContainer, LinkItem, LinksList, Text } from './styles';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/instagram-round.svg';
import twitter from '../../assets/images/twitter-2.svg';
import facebook from '../../assets/images/facebook-round.svg';

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="Logo do Efood" />

    <LinksList>
      <LinkItem>
        <img src={instagram} alt="Logo do Instagram" />
      </LinkItem>
      <LinkItem>
        <img src={facebook} alt="Logo do Facebook" />
      </LinkItem>
      <LinkItem>
        <img src={twitter} alt="Logo do X" />
      </LinkItem>
    </LinksList>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, asperiores
      minus, laborum quaerat sit magnam praesentium nobis soluta repudiandae
      nemo vero suscipit explicabo ducimus numquam sunt architecto perferendis
      quisquam eveniet.
    </Text>
  </FooterContainer>
);
export default Footer;
