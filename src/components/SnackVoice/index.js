import React from "react"

import Button from "../../utils/Buttons"

const Voice = ({
  className,
  icon1,
  text1,
  downArrowIcon,
  icon2,
  text2,
  buttonStyling,
  onClick,
  type,
  disabled,
  bg,
  buttonIcon,
  buttonText,
}) => {
  return (
    <div
      className={`max-w-full md:max-w-[527px] w-full pr-10 pb-[76px] pl-[41px] pt-[76px] bg-bgPrimary rounded-[20px] flex flex-col items-center gap-6 ${className}`}
    >
      <div className="rounded-[22px] bg-white py-12 px-[108px] flex flex-col items-center gap-[22px]">
        <span>
          {icon1 ? (
            <img src={icon1} alt="logo"></img>
          ) : (
            <p className="p-medium !font-normal py-3 px-4 rounded-[22px] bg-bgPrimary">
              {text1}
            </p>
          )}
        </span>
        {downArrowIcon && <img src={downArrowIcon} alt="downArrowIcon" />}
        <span>
          {icon2 && <span>{icon2}</span>}
          <p className="p-medium  py-3 px-4 rounded-[22px] bg-bgPrimary">
            {text2}
          </p>
        </span>
      </div>
      <Button
        bg={bg}
        className={buttonStyling}
        onClick={onClick}
        type={type}
        disabled={disabled}
        icon={buttonIcon}
        text={buttonText}
      />
    </div>
  )
}

export default Voice
