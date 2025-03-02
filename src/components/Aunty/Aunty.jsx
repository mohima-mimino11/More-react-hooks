import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin name={'Regina'}></Cousin>
        <Cousin name={'Georgina'}></Cousin>
        <Cousin name={'Max'}></Cousin>

      </section>
      <p>Money: {money}</p>
      <button onClick={()=> setMoney(money+1000)}>Add Money</button>
    </div>
  );
};

export default Aunty;