const EducationBox = ({mainHeading, subHeading, date}) => {
    return(
        <div className="border-l-2 border-[#00ffff] pl-3">
                  <h3 className="font-bold selectable">{mainHeading}</h3>
                  <p className="selectable">{subHeading}</p>
                  <div className="text-[#00ffff] font-semibold mt-1"><i className="fa-solid fa-calendar-days"></i> {date}</div>
                </div>
    )
}

export default EducationBox;