import "./header.css";
import petBg from '../../images/petBg.jpg'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">A community for pet lovers</span>
        <span className="headerTitleLg"> Pet Blog</span>
      </div>
      <Image
        className="headerImg"
        src={petBg}
        alt="Pets enjoying at the park"
      />
    </div>
  );
}