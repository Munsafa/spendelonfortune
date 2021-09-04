import "./NetWorthSection.css";
import "./Items";
const NetworthSection = (props) => {
  console.log(props.items);
  return (
    <>
      <div className="net-worth">
        <img
          src="https://i.pinimg.com/originals/49/45/51/494551eea0f1f639e15137d93f330ee7.png"
          alt=""
        />
        <h1>Spend Elon Musk's Fortune!</h1>
        <p className="content">
          <br />
          If elon Musk cashed out all his stocks and assets today he would have
          approximately <strong>19100000</strong>(US Dollars) in his
          bank account
          <br />
          What wouldyou spend it on?
        </p>
      </div>

    </>
  );
};
export default NetworthSection;
