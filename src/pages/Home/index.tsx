import Card from '../../components/Card/Card';
import Data from '../../data/data';
import "./index.css"

export default function Home() {
  const cards = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return <main>{cards}</main>;
}
