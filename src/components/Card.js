function Card(props) {
  return (
    <div className="bg-white rounded-md p-5 max-w-2xl mx-auto">
      {props.children}
    </div>
  );
}

export default Card;