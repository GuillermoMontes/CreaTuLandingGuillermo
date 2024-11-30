import '../Styles/ItemListContainer.css'

function ItemListContainer({ texto }) {
  return (
    <div className="containerList">
      <h2>{texto}</h2>
    </div>
  );
}

export default ItemListContainer;
