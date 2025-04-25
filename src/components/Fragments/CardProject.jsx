const CardProject = (props) => {
  const { children } = props;
  return <div className="card bg-base-100 w-full max-w-sm shadow-sm">{children}</div>;
};

const HeaderCard = (props) => {
  const { image } = props;
  return (
    <figure>
      <img src={image} alt="Shoes" />
    </figure>
  );
};

const BodyCard = (props) => {
  const { name, children, link } = props;
  return (
    <div className="card-body card-sm">
      <h2 className="card-title font-bold text-2xl">{name}</h2>
      <p>{children}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

CardProject.HeaderCard = HeaderCard;
CardProject.BodyCard = BodyCard;

export default CardProject;
