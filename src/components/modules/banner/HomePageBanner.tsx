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
    <div className="flex flex-col lg:flex-row gal-6 my-8 h-[500px] justify-between">
      <div
        className={`${styles.homeBanner} border-2 border-white rounded-3xl  flex justify-center items-center w-full lg:w-[75%] h-full`}
      ></div>
      <div className="flex hidden lg:block w-[24%] h-full justify-between">
        <div className={`${styles.homeBanner2} rounded-3xl h-[48%]`}></div>
        <div className={`${styles.homeBanner3} rounded-3xl h-[48%]`}></div>
      </div>
    </div>
  );
};

export default HomePageBanner;
