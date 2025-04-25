const Header = (props) => {
  const { children } = props;
  return (
    <>
      <h1 className="text-5xl font-bold p-3 text-center">{children}</h1>
      <div className="divider m-0"></div>
    </>
  );
};

export default Header;
