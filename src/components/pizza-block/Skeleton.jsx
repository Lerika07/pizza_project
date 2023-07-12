import ContentLoader from "react-content-loader";
import "./pizza.scss";

const Skeleton = () => (
  <ContentLoader
    className="pizza skeleton"
    speed={2}
    width={260}
    height={425}
    viewBox="0 0 260 425"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="129" cy="122" r="121" />
    <rect x="0" y="187" rx="0" ry="0" width="170" height="0" />
    <rect x="0" y="200" rx="0" ry="0" width="180" height="0" />
    <rect x="1" y="196" rx="0" ry="0" width="2" height="0" />
    <rect x="34" y="254" rx="10" ry="10" width="199" height="28" />
    <rect x="13" y="295" rx="10" ry="10" width="237" height="60" />
    <rect x="138" y="370" rx="10" ry="10" width="103" height="35" />
    <rect x="29" y="371" rx="25" ry="25" width="90" height="34" />
  </ContentLoader>
);

export default Skeleton;
