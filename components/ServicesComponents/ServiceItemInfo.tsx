type WhatsIncludedType = Array<{ name: string; desc: string }>;
type WhyUsType = Array<{ name: string; desc: string }>;

const ServiceItemInfo = ({
  whatsIncluded,
  whyUs,
  aboutTheService,
}: {
  whatsIncluded: WhatsIncludedType;
  whyUs: WhyUsType;
  aboutTheService: string;
}) => {
  return (
    <div className="my-20 z-10 relative gap-20 flex flex-col md:flex-row  max-w-screen-xl mx-auto  px-4 lg:px-6 ">
      <div className="flex flex-col gap-20 relative ">
        <div className="max-w-prose">
          <h2 className="text-black text-3xl lg:text-4xl font-bold">
            About the service
          </h2>
          <p className="text-lg text-gray-600 mt-5">{aboutTheService}</p>
        </div>
        <div className="max-w-prose">
          <h3 className="text-black text-2xl lg:text-3xl font-bold">
            What&apos;s included
          </h3>
          <ul className="flex flex-col gap-7 mt-5">
            {whatsIncluded.map((e, i) => (
              <li key={e.name}>
                <h4 className="text-xl text-gray-900">{e.name}</h4>
                <p className="text-lg text-gray-600">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-prose">
          <h3 className="text-black text-2xl lg:text-3xl font-bold">Why us</h3>
          <ul className="flex flex-col gap-7 mt-5">
            {whyUs.map((e, i) => (
              <li key={e.name}>
                <h4 className="text-xl text-gray-900">{e.name}</h4>
                <p className="text-lg text-gray-600">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t-theme-100 border sticky top-0 border-slate-200   px-4 py-10 border-t-[5px] self-start">
        <h4 className="text-black text-xl lg:text-2xl font-bold">
          Fill out the form to hear from us
        </h4>
        <p className="text-lg text-gray-600">
          Experience premiere interior contracting services today!
        </p>
        <form
          id="form-items"
          action="#"
          method="POST"
          className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full  border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                required
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full  border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
            </div>
            <div className="mt-1">
              <input
                required
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                aria-describedby="phone-description"
                className="block w-full border-gray-300 shadow-sm focus:border-theme-100 focus:ring-theme-200 sm:text-sm"
              />
            </div>
          </div>

          <div className="text-right sm:col-span-2">
            <button
              type="submit"
              className="inline-flex justify-center  border border-transparent bg-theme-100 py-2 px-4 text-sm font-medium text-theme-200 shadow-sm hover:bg-theme-200 hover:text-theme-100 focus:outline-none focus:ring-2 focus:ring-theme-100 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceItemInfo;
