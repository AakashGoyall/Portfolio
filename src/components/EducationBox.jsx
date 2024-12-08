const EducationBox = ({mainHeading, subHeading, date, uniqueColor, textChange}) => {
    return(
        <div className="pl-3" style={{ borderLeft: `2px solid ${uniqueColor}` }}>
                  <h3 className={`font-bold selectable ${textChange}`}>{mainHeading}</h3>
                  <p className={`selectable ${textChange}`}>{subHeading}</p>
                  <div className="font-semibold mt-1"  style={{color: uniqueColor}}><i  style={{color: uniqueColor}} className="fa-solid fa-calendar-days"></i> {date}</div>
                </div>
    )
}

export default EducationBox;