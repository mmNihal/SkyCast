import logo from "../../assets/logo/logo.png";

export default function Logo() {
  return (
    <a href="./index.html">
      <img className="h-23" src={logo} alt="Weather App" />
    </a>
  );
}
