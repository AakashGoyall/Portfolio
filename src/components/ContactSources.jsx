import { useTheme } from "../context/Theme";

const ContactSources = ({link, icon, title, detail }) => {
  const {uniqueColor, textChange} = useTheme()
  return (
    <>
      <div className="flex gap-2">
        <a href={link} target="_blank">
          <i style={{color: uniqueColor, borderColor: uniqueColor}}
            className={`fa-solid ${icon} border p-3 rounded-[50%] hover:scale-[105%] h-[45px] cursor-pointer`}
          ></i>
        </a>
        <span>
          <h5 className="font-bold" style={{color: uniqueColor}}>{title}</h5>
          <p className={textChange}>{detail}</p>
        </span>
      </div>
    </>
  );
};

export default ContactSources;
