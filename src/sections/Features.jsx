import { Element } from "react-scroll";
import { features } from "./../constants/index";

export const Features = () => {
  return (
    <section>
      <Element>
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <div
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
                key={feature.id}
              >
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
