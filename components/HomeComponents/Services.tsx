import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "General carpentry",
    description:
      "Installing trim, molding, and other woodwork; building custom cabinets, shelving, and other storage solutions; and repairing or replacing damaged woodwork.",
    icon: GlobeAltIcon,
  },
  {
    name: "Framing",
    description:
      "Constructing the framework for new interior spaces, such as walls and ceilings, as well as repairing or replacing damaged framing.",
    icon: ScaleIcon,
  },
  {
    name: "Drywall installation and repair",
    description:
      "Installing new drywall, repairing damaged drywall, and finishing drywall surfaces with tape, joint compound, and texture.",
    icon: BoltIcon,
  },
  {
    name: "Project management",
    description:
      "Managing budgets and schedules to ensure that projects are completed on time and within budget, as well as obtaining necessary permits and ensuring that projects are completed in compliance with local building codes and regulations.",
    icon: DevicePhoneMobileIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <div className="text-lg font-semibold text-theme-200">
            Our services
          </div>
          <h2 className="text-black text-3xl lg:text-4xl font-bold leading-tight">
            We cover the interior contracting essentials
          </h2>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-theme-200 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
