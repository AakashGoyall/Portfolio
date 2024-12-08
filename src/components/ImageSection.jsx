const ImageSection = ({src, isDark}) => {
  return (
    <>
      <img
            src={src}
            alt="image"
            className="2xl:w-[330px] img"
            style={{borderColor: isDark? "white": "grey", filter: isDark? undefined: "drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.3))"}}
          />
    </>
  )
}

export default ImageSection;
