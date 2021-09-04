import { useState } from "react";
import "./Items.css";
import products from "./Products";
const Items = (props) => {
  const [worth, setWorth] = useState(191000000000);
  const [items, setItems] = useState(products);
  const [flag, setFlag] = useState(true);

  const handleInc = (id) => {
    const newItems = [...items];
    newItems[id].quantity++;
    setItems(newItems);
    setWorth(worth - newItems[id].price);
    console.log(worth);
    if (worth === 191000000000) return;
    setFlag(false);
  };

  const handleDec = (id) => {
    const newItems = [...items];
    if (newItems[id].quantity === 0) return;
    newItems[id].quantity--;
    setItems(newItems);
    setWorth(worth + newItems[id].price);
  };
  const spentAmount = 191000000000 - worth;
  const remaingAMount = 191000000000 - spentAmount;
  return (
    <>
      <section className="remaining-section">
        <h2>Remaining:${remaingAMount}</h2>
        <p>
          {flag
            ? "You haven't spent a single dollar, start buying!"
            : `You have spent ${spentAmount}`}
        </p>
      </section>
      <div className="cards">
      {items.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <p>
                <span>{item.name}</span>
                <span>{`USD ${item.price}`}</span>
              </p>
              <span>
                <button
                  onClick={() => {
                    handleDec(item.id);
                  }}
                  className="dec-btn"
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => {
                    handleInc(item.id);
                  }}
                  className="inc-btn"
                >
                  +
                </button>
              </span>
            </div>
          </div>
        );
      })}

      </div>

      <div className="table-div">
        <table>
          <tbody>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              );
            })}
            <tr>
              <th>Total={spentAmount}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Items;
