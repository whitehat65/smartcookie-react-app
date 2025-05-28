import React from "react";

const EntityCard = ({ entity }) => {
  // Shared button classes with hover scale and smooth transition
  const buttonClasses =
    "bg-transparent border-0 cursor-pointer flex flex-col items-center text-center focus:outline-none transform transition-transform duration-200 hover:scale-110";

  // Additional styles from entity.style (optional)
  const imgStyles = {
    ...entity.style,
  };

  // Fixed icon size (96x96 px) with object containment
  const fixedImgClasses = "w-24 h-24 object-contain";

  if (entity.type === "link") {
    return (
      <div className="flex justify-center">
        <a href={entity.href} target="_self" rel="noreferrer" className="no-underline">
          <button id="entity" value={entity.value} className={buttonClasses} style={imgStyles}>
            <img src={entity.imgSrc} alt={entity.label} className={fixedImgClasses} />
            <h4 className="mt-2 text-black text-base font-semibold">{entity.label}</h4>
          </button>
        </a>
      </div>
    );
  } else if (entity.type === "form") {
    return (
      <div className="flex justify-center">
        <form action={entity.action} method="post">
          <button
            type="submit"
            name="entity"
            value={entity.value}
            className={buttonClasses}
            style={imgStyles}
          >
            <img src={entity.imgSrc} alt={entity.label} className={fixedImgClasses} />
            <h4 className="mt-2 text-black text-base font-semibold">{entity.label}</h4>
          </button>
        </form>
      </div>
    );
  }
  return null;
};

export default EntityCard;