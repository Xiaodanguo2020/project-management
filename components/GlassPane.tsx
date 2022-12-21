import clsx from "clsx";

const GlassPane = ({ children, className }) => {
  return <div className={clsx("glass rounded-2xl", className)}>{children}</div>;
};

export default GlassPane;

//  border-solid border-2 border-gray-200
