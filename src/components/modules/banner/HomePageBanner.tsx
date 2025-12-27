import Image from "next/image";
import styles from "./Banner.module.css";
const HomePageBanner = ({
  text,
  percentOff,
}: {
  text: string;
  percentOff: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 my-8 w-full aspect-[16/9] md:h-[410px] lg:h-[360px] xl:h-[530px]">
      {/* LEFT BIG BANNER */}
      <div
        className={`${styles.homeBanner} rounded-3xl w-full lg:w-[75%] h-full`}
      />

      {/* RIGHT SMALL BANNERS */}
      <div className="hidden lg:flex w-[25%] h-full flex-col gap-4">
        <div className={`${styles.homeBanner2} rounded-3xl flex-1`} />
        <div className={`${styles.homeBanner3} rounded-3xl flex-1`} />
      </div>
    </div>
  );
};

export default HomePageBanner;
