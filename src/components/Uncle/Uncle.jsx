import Cousin from "../Cousin/Cousin";


const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousin name={'Bristy'}></Cousin>
        <Cousin name={'Faisal'}></Cousin>
        <Cousin name={'Guddu'}></Cousin>

      </section>
    </div>
  );
};

export default Uncle;