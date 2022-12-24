import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const contact = [
  {
    name: "Call us",
    detail: "(323) 238-0682",
    linkTitle: "Give us a call",
    link: "tel:(323)238-0682",
    icon: PhoneIcon,
    border: true,
  },
  {
    name: "Email us",
    detail: "info@constructor.com",
    linkTitle: "Send us a email",
    link: "mailto:info@constructor.com",
    icon: EnvelopeIcon,
    border: true,
  },
  {
    name: "Send us mail",
    detail: "941 McLean Ave, Suite 328 Yonkers, NY 10704",
    linkTitle: "View on Google Maps",
    link: "https://goo.gl/maps/6FU1YEJEjmVKSaTr8",
    icon: MapPinIcon,
    border: false,
  },
];

const Border = () => {
  return <div className=" min-h-[1px] lg:min-w-[1px] bg-slate-300"></div>;
};

const Footer = () => {
  return (
    <footer className="bg-theme-200">
      {" "}
      <div className="relative z-10 max-w-screen-2xl flex flex-col lg:flex-row mx-auto px-4 lg:px-6 lg:h-52">
        {contact.map((e, i) => {
          return (
            <>
              <div
                key={i + "contact-info"}
                className=" gap-10 lg:gap-0  flex-1 flex flex-col py-9 px-12 lg:py-10 lg:px-14 "
              >
                <div className="flex gap-4 flex-1">
                  <e.icon className=" h-16 w-16 p-3 bg-theme-100 text-theme-200 " />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-white">{e.name}</h3>
                    <div className=" text-gray-400 max-w-[200px] sm:text-sm xl:text-base">
                      {e.detail}
                    </div>
                  </div>
                </div>
                <a href={e.link} className="text-center underline text-lg text-white">
                  {e.linkTitle}
                </a>
              </div>
              {e.border ? <Border /> : null}
            </>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
