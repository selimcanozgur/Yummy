const MenuItem = ({ pizza }) => {
  const { imageUrl, ingredients, name, soldOut, unitPrice } = pizza;
  console.log(ingredients);
  return (
    <li className="flex gap-4 py-2 font-montserrat">
      <img className="w-24 rounded-md" src={imageUrl} alt={name} />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{ingredients}</p>
        <p className="text-green-500 font-semibold">${unitPrice}</p>
      </div>
    </li>
  );
};

export default MenuItem;
