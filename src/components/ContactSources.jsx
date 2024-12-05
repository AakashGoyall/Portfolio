const ContactSources = ({link, icon, title, detail }) => {
  return (
    <>
      <div className="flex gap-2">
        <a href={link} target="_blank">
          <i
            className={`fa-solid ${icon} border border-[#00ffff] p-3 rounded-[50%] hover:bg-[#0c1827] h-[45px] cursor-pointer`}
          ></i>
        </a>
        <span>
          <h5 className="font-bold text-[#00ffff]">{title}</h5>
          <p>{detail}</p>
        </span>
      </div>
    </>
  );
};

export default ContactSources;
