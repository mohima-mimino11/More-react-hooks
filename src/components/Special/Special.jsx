import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
  const gift = useContext(AssetContext)
  const money = useContext(MoneyContext)
  return (
    <div>
      <h3>Special</h3>
      <p>has: {asset}</p>
      <p>also has: {gift}</p>
      <p>Got Money: {money} </p>
    </div>
  );
};

export default Special;