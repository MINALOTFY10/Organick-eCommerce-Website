const Stars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        style={{ fontSize: "0.9rem" }}
        className="fa fa-star m-auto"
      ></i>
    );
  }
  return <div>{stars}</div>;
};

export default Stars;
