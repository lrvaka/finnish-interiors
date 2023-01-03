import { useRef, useEffect } from "react";
import gsap from "gsap";
import yellowBackdrop from "../../public/images/home/about-us/backdrop.png";
import blueBackdrop from "../../public/images/home/why-us/backdrop.png";
import Image from "next/image";

const valueList = [
  {
    name: "Quality",
    first: true,
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
    name: "Team work",
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
          d="M23.6582 51.704C22.1193 51.704 20.6434 51.0926 19.5552 50.0044C18.467 48.9163 17.8557 47.4404 17.8557 45.9014C17.8557 44.3625 18.467 42.8866 19.5552 41.7984C20.6434 40.7102 22.1193 40.0989 23.6582 40.0989C25.1971 40.0989 26.673 40.7102 27.7612 41.7984C28.8494 42.8866 29.4607 44.3625 29.4607 45.9014C29.4607 47.4404 28.8494 48.9163 27.7612 50.0044C26.673 51.0926 25.1971 51.704 23.6582 51.704ZM23.6582 51.704C18.316 51.704 13.9873 56.0326 13.9873 61.3748M23.6582 51.704C25.0315 51.704 26.339 51.9902 27.5227 52.5047M62.3417 51.704C60.8028 51.704 59.3269 51.0926 58.2387 50.0044C57.1505 48.9163 56.5392 47.4404 56.5392 45.9014C56.5392 44.3625 57.1505 42.8866 58.2387 41.7984C59.3269 40.7102 60.8028 40.0989 62.3417 40.0989C63.8806 40.0989 65.3565 40.7102 66.4447 41.7984C67.5329 42.8866 68.1442 44.3625 68.1442 45.9014C68.1442 47.4404 67.5329 48.9163 66.4447 50.0044C65.3565 51.0926 63.8806 51.704 62.3417 51.704ZM62.3417 51.704C60.775 51.704 59.2973 52.0753 57.9898 52.7368M62.3417 51.704C67.6839 51.704 72.0126 56.0326 72.0126 61.3748M42.9999 24.6255C40.4351 24.6255 37.9752 25.6444 36.1616 27.458C34.348 29.2717 33.3291 31.7315 33.3291 34.2964C33.3291 36.8612 34.348 39.3211 36.1616 41.1347C37.9752 42.9484 40.4351 43.9673 42.9999 43.9673C45.5648 43.9673 48.0247 42.9484 49.8383 41.1347C51.6519 39.3211 52.6708 36.8612 52.6708 34.2964C52.6708 31.7315 51.6519 29.2717 49.8383 27.458C48.0247 25.6444 45.5648 24.6255 42.9999 24.6255Z"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
        <path
          d="M25.5925 61.3749C25.5925 51.762 33.3873 43.9673 43.0001 43.9673C52.613 43.9673 60.4077 51.762 60.4077 61.3749"
          stroke="white"
          strokeWidth="3"
          strokeMiterlimit="10"
        />
      </svg>
    ),
  },
  {
    name: "Innovation",
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
    <div ref={container} className="relative my-40 lg:my-80 overflow-visible">
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
                  <p className="text-center mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                    ut viverra eros euismod. Vestibulum, diam suspendiss.
                  </p>
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
