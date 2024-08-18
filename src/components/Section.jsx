const Section = ({ className, id, children, bg }) => {
  return (
    <div
      id={id}
      className={`
      relative w-full 
      
      ${className || ""}
      `}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Section;
