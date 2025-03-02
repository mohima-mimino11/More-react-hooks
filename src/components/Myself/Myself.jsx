import Special from "../Special/Special";


const Myself = ({asset}) => {
  return (
    <div>
      <h3>Myself</h3>
      <section className="flex">
        <Special asset={asset}></Special>
      </section>
    </div>
  );
};

export default Myself;