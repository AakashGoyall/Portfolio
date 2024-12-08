const ProjectCards = ({items, onMouseEnter, onMouseLeave, hoveredId}) => {
  const { id, name, img, description, url } = items;

  return (
    <>
      <li
        key={id}
        className="relative"
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={onMouseLeave}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={name} className={`shadow-sm w-[100%] h-52 object-fill`} />
          <div
            className={`${
              hoveredId === id ? "block" : "hidden"
            } bg-[#0c1827] p-3 bottom-0 absolute w-[100%] opacity-85`}
          >
            <h1 className={`font-bold text-xl`}>{name}</h1>
            <p>{description}</p>
          </div>
        </a>
      </li>
    </>
  );
};

export default ProjectCards;
