import { useRef, useEffect } from "react";
import gsap from "gsap";
import yellowBackdrop from "../../public/images/home/about-us/backdrop.png";
import blueBackdrop from "../../public/images/home/why-us/backdrop.png";
import Image from "next/image";

const valueList = [
  {
    name: "Quality",
    first: true,
    desc: "At the heart of everything we do is a commitment to delivering the highest level of quality in all of our products and services.",
    icon: (props: any) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
      >
        <rect width="86" height="86" fill="#00406a" />
        <path
          d="M29.5071 18.5337C33.0858 14.9551 37.9395 12.9446 43.0006 12.9446C48.0616 12.9446 52.9153 14.9551 56.494 18.5337C60.0727 22.1124 62.0831 26.9661 62.0831 32.0272C62.0831 37.0882 60.0727 41.9419 56.494 45.5206C52.9153 49.0993 48.0616 51.1098 43.0006 51.1098C37.9395 51.1098 33.0858 49.0993 29.5071 45.5206C25.9284 41.9419 23.918 37.0882 23.918 32.0272C23.918 26.9661 25.9284 22.1124 29.5071 18.5337Z"
          stroke="white"
          strokeWidth="2.53078"
        />
        <path
          d="M55.8807 45.8628C52.5413 49.2022 47.7706 51.1105 43 51.1105C38.2294 51.1105 33.4587 49.2022 30.1193 45.8628L17.7156 65.4224H28.211L32.9816 73.0555L43 55.4041L53.0184 73.0555L57.789 65.4224H68.2844L55.8807 45.8628Z"
          stroke="white"
          strokeWidth="2.53078"
        />
      </svg>
    ),
  },
  {
    name: "Commitment",
    desc: "We are dedicated to providing a consistently high level of service to all of our clients, and are committed to building long-lasting relationships.",
    icon: (props: any) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
      >
        <rect width="86" height="86" fill="#00406a" />
        <path
          d="M43.5 19C37.1348 19 31.0303 21.5286 26.5294 26.0294C22.0286 30.5303 19.5 36.6348 19.5 43C19.5 49.3652 22.0286 55.4697 26.5294 59.9706C31.0303 64.4714 37.1348 67 43.5 67C49.8652 67 55.9697 64.4714 60.4706 59.9706C64.9714 55.4697 67.5 49.3652 67.5 43C67.5 36.6348 64.9714 30.5303 60.4706 26.0294C55.9697 21.5286 49.8652 19 43.5 19V19Z"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M55.2324 35.9485L41.1294 50.0516L33.1294 42.0516"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
  {
    name: "Safety",
    desc: "We are an OSHA and NYCDOB certified, licensed and insured contractor. Daily safety talks with clean and safe job sites.",
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="86"
        viewBox="0 0 214.27 214.27"
        fill="none"
      >
        <rect width="214.27" height="214.27" fill="#00406a" />
        <g transform="translate(15, 15) scale(0.85)">
          <path
            d="M196.926,55.171c-0.11-5.785-0.215-11.25-0.215-16.537c0-4.142-3.357-7.5-7.5-7.5c-32.075,0-56.496-9.218-76.852-29.01   c-2.912-2.832-7.546-2.831-10.457,0c-20.354,19.792-44.771,29.01-76.844,29.01c-4.142,0-7.5,3.358-7.5,7.5   c0,5.288-0.104,10.755-0.215,16.541c-1.028,53.836-2.436,127.567,87.331,158.682c0.796,0.276,1.626,0.414,2.456,0.414   c0.83,0,1.661-0.138,2.456-0.414C199.36,182.741,197.954,109.008,196.926,55.171z M107.131,198.812   c-76.987-27.967-75.823-89.232-74.79-143.351c0.062-3.248,0.122-6.396,0.164-9.482c30.04-1.268,54.062-10.371,74.626-28.285   c20.566,17.914,44.592,27.018,74.634,28.285c0.042,3.085,0.102,6.231,0.164,9.477C182.961,109.577,184.124,170.844,107.131,198.812   z"
            stroke="white"
            strokeWidth="3"
            fill="white"
            strokeMiterlimit="10"
          />
          <path
            d="M132.958,81.082l-36.199,36.197l-15.447-15.447c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607   l20.75,20.75c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.732,5.303-2.196l41.501-41.5   c2.93-2.929,2.93-7.678,0.001-10.606C140.636,78.154,135.887,78.153,132.958,81.082z"
            stroke="white"
            fill="white"
            strokeWidth="3"
            strokeMiterlimit="10"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Innovation",
    desc: "We are constantly looking for ways to improve and evolve, and encourage our team to think creatively and bring new ideas to the table.",
    icon: (props: any) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
      >
        <rect width="86" height="86" fill="#00406a" />
        <path
          d="M48.9357 57.7868V61.7438C48.9357 63.928 47.163 65.7007 44.9788 65.7007H41.0219C38.8377 65.7007 37.065 63.928 37.065 61.7438V57.7868H48.9357ZM56.8496 36.0238C56.8496 28.3751 50.6491 22.1746 43.0003 22.1746C35.3516 22.1746 29.1511 28.3751 29.1511 36.0238C29.1511 45.9161 37.065 45.9161 37.065 57.7868H48.9357C48.9357 45.9161 56.8496 45.9161 56.8496 36.0238Z"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M64.7631 38.0024H68.72M20.8571 56.1884L23.6546 53.3909L20.8571 56.1884ZM62.3454 22.6139L65.1429 19.8164L62.3454 22.6139ZM20.8571 19.8164L23.6546 22.6139L20.8571 19.8164ZM62.3454 53.3909L65.1429 56.1884L62.3454 53.3909ZM17.28 38.0024H21.237H17.28Z"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    name: "Leadership",
    last: true,
    desc: "We strive to be leaders in our industry, setting the bar high for ourselves and others through our commitment to excellence and innovation.",
    icon: (props: any) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
      >
        <rect width="86" height="86" fill="#00406a" />
        <path d="M23.8286 53.0542V69.3922" stroke="white" strokeWidth="3" />
        <path
          d="M23.8286 53.0548L28.8426 51.385C31.2121 50.5151 33.7501 50.2023 36.2599 50.4706C38.7697 50.739 41.1842 51.5813 43.3163 52.9324C45.3701 54.3416 47.7225 55.2558 50.189 55.6031C52.6554 55.9505 55.1688 55.7217 57.532 54.9345L61.6761 53.5532C62.1111 53.4083 62.4896 53.1302 62.7579 52.7584C63.0262 52.3865 63.1707 51.9397 63.1711 51.4811V25.4889C63.1715 25.1424 63.0896 24.8007 62.932 24.4921C62.7744 24.1835 62.5457 23.9168 62.2647 23.714C61.9837 23.5112 61.6586 23.3781 61.3161 23.3256C60.9736 23.2732 60.6235 23.303 60.2947 23.4125L58.1571 24.1294C55.7871 24.9976 53.2491 25.3092 50.7394 25.0401C48.2298 24.771 45.8156 23.9284 43.6834 22.5775C41.6296 21.1683 39.2772 20.2542 36.8107 19.9068C34.3443 19.5594 31.8309 19.7883 29.4677 20.5754L23.8286 22.4551V53.0548Z"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    ),
  },
];

const FirstBackdrop = () => (
  <div className="absolute h-full w-full -translate-x-4 -translate-y-4 -z-10 rotate-180">
    <Image src={yellowBackdrop} fill alt="triangle backdrop" />
  </div>
);

const LastBackdrop = () => (
  <div className="absolute h-full w-full translate-x-4 translate-y-4 -z-10 rotate-180">
    <Image src={blueBackdrop} fill alt="triangle backdrop" />
  </div>
);

const Values = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#inner > *", {
        y: -10,
        opacity: 0,
      });

      gsap.to("#inner > *", {
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom", // when the top of the trigger hits the top of the viewport
        },
        stagger: 0.2,
        y: 0,
        opacity: 1,
        ease: "power4.easeOut",
      });
    }, container); // <- IMPORTANT! Scopes selector text

    return () => {
      ctx.revert();
    }; // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div ref={container} className="relative my-40 lg:my-60 overflow-visible">
      <div className="z-10 relative flex flex-col max-w-screen-xl mx-auto overflow-visible h-full">
        <div
          id="inner"
          className="relative z-10 px-4 lg:px-6 h-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            id="text-section"
            className=" max-w-prose lg:px-10 lg:py-10 mb-20 lg:mb-0"
          >
            <div className="text-lg font-semibold text-theme-200">
              Our values
            </div>
            <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
              The values that drive our work
            </h2>
          </div>
          {valueList.map((e, i) => {
            return (
              <div className="relative overflow-visible" key={e.name}>
                {e.last ? <LastBackdrop /> : null}
                {e.first ? <FirstBackdrop /> : null}
                <div className="flex flex-col justify-center items-center p-8 lg:p-16 bg-white">
                  <e.icon />
                  <h3 className="text-black text-xl lg:text-2xl font-bold leading-tight mt-5">
                    {e.name}
                  </h3>
                  <p className="text-center mt-2 text-gray-700">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;
