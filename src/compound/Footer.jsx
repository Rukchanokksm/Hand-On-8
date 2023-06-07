/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
const menufoot = [
  {
    Name: "About Us",
  },
  {
    Name: "Blog",
  },
  {
    Name: "career",
  },
];

const Footer = () => {
  return (
    <div className="flex justify-evenly p-4">
      {menufoot.map((footer) => {
        return <p>{footer.Name}</p>;
      })}
    </div>
  );
};

export default Footer;
