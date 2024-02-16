import { memo } from "react";

const Image = () => {
  return (
    <section className="relative w-[70%] hidden lg:block">
      <img src="/assets/images/background_image.png" alt="Fashmo logo Image" className="w-full h-full" />
    </section>
  );
};

export default memo(Image);
