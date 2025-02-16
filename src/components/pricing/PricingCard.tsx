import { ReactNode } from "react";
import { PricingFeature } from "./PricingFeature";
import { BetaTag } from "../ui/beta-tag";
import { CountdownTimer } from "./CountdownTimer";

interface PricingCardProps {
  title: string;
  description: string;
  icon: string;
  price?: string;
  priceSubtext?: string;
  minPrice?: string;
  features: Array<{
    text: string;
    variant?: "active" | "inactive" | "highlight" | "section-title";
    icon: string | ReactNode;
    subFeatures?: { text: string; showBullet: boolean }[];
    beta?: boolean;
    className?: string;
  }>;
  variant?: "primary" | "secondary";
  className?: string;
}

const VisualizeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_57_7289)">
      <rect width="56" height="56" rx="10" fill="white"/>
      <circle cx="7.87262" cy="41.0919" r="41.5381" transform="rotate(-0.403168 7.87262 41.0919)" fill="url(#paint0_linear_57_7289)" stroke="url(#paint1_linear_57_7289)" strokeWidth="0.085853"/>
      <circle opacity="0.4" cx="39.0904" cy="20.775" r="41.5381" transform="rotate(-0.403168 39.0904 20.775)" fill="url(#paint2_linear_57_7289)" stroke="url(#paint3_radial_57_7289)" strokeWidth="0.085853"/>
      <path d="M37.981 27.7066L24.916 41.7049C24.7775 41.8526 24.5948 41.9514 24.3953 41.9861C24.1958 42.0209 23.9904 41.9899 23.8101 41.8977C23.6299 41.8055 23.4844 41.6572 23.3958 41.4751C23.3072 41.293 23.2803 41.0871 23.319 40.8883L25.0291 32.3342L18.3065 29.8099C18.1621 29.7559 18.0333 29.6669 17.9317 29.551C17.8301 29.4351 17.7588 29.2958 17.7241 29.1456C17.6894 28.9954 17.6925 28.839 17.7331 28.6903C17.7736 28.5415 17.8504 28.4052 17.9565 28.2934L31.0215 14.2951C31.16 14.1474 31.3428 14.0486 31.5422 14.0139C31.7417 13.9791 31.9471 14.0101 32.1274 14.1023C32.3077 14.1945 32.4531 14.3428 32.5417 14.5249C32.6303 14.707 32.6572 14.9129 32.6185 15.1117L30.9037 23.6751L37.6264 26.196C37.7697 26.2503 37.8974 26.3392 37.9983 26.4546C38.0991 26.5701 38.1699 26.7086 38.2045 26.8579C38.2391 27.0072 38.2364 27.1628 38.1966 27.3108C38.1568 27.4588 38.0812 27.5948 37.9763 27.7066H37.981Z" fill="#9157FB"/>
    </g>
    <rect x="0.5" y="0.5" width="55" height="55" rx="9.5" stroke="#DED5FF"/>
    <defs>
      <linearGradient id="paint0_linear_57_7289" x1="7.87262" y1="-0.489174" x2="7.87262" y2="82.673" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DED5FF" stopOpacity="0.56"/>
        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
      </linearGradient>
      <linearGradient id="paint1_linear_57_7289" x1="51.4246" y1="36.9578" x2="-44.9089" y2="58.3012" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DED5FF"/>
        <stop offset="1" stopColor="#DED5FF" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint2_linear_57_7289" x1="39.0904" y1="-20.8061" x2="39.0904" y2="62.3561" gradientUnits="userSpaceOnUse">
        <stop stopColor="#DED5FF" stopOpacity="0.5"/>
        <stop offset="0.9999" stopColor="#EEE8FF" stopOpacity="0.08"/>
        <stop offset="1" stopColor="#8535F2" stopOpacity="0.08"/>
      </linearGradient>
      <radialGradient id="paint3_radial_57_7289" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.0904 20.775) rotate(89.968) scale(86.1425)">
        <stop offset="0.046875" stopColor="#DED5FF" stopOpacity="0"/>
        <stop offset="1" stopColor="#DED5FF"/>
      </radialGradient>
      <clipPath id="clip0_57_7289">
        <rect width="56" height="56" rx="10" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const OptimizeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dd_57_7170)">
      <g clipPath="url(#clip0_57_7170)">
        <rect x="19" y="15" width="56" height="56" rx="10" fill="#FF7110"/>
        <g opacity="0.4">
          <circle opacity="0.8" cx="24.8726" cy="38.8727" r="41.4811" transform="rotate(-0.403168 24.8726 38.8727)" fill="url(#paint0_linear_57_7170)" stroke="url(#paint1_linear_57_7170)" strokeWidth="0.2"/>
          <circle opacity="0.8" cx="48.0909" cy="66.6534" r="41.4811" transform="rotate(-0.403168 48.0909 66.6534)" fill="url(#paint2_linear_57_7170)" stroke="url(#paint3_linear_57_7170)" strokeWidth="0.2"/>
        </g>
        <path d="M61.0935 39.8588L56.725 53.1204C56.681 53.2541 56.6073 53.3762 56.5092 53.4778C56.4111 53.5793 56.2913 53.6577 56.1584 53.707C56.0256 53.7564 55.8833 53.7755 55.742 53.7628C55.6008 53.7502 55.4642 53.7062 55.3424 53.6341C55.3152 53.6177 52.2963 51.894 46.9974 51.894C41.6985 51.894 38.6795 53.6177 38.65 53.6353C38.5283 53.7067 38.3919 53.7501 38.251 53.7623C38.1101 53.7745 37.9682 53.7552 37.8359 53.7057C37.7035 53.6563 37.584 53.5781 37.4862 53.4767C37.3885 53.3754 37.3149 53.2536 37.271 53.1204L32.9048 39.8553C32.8169 39.5898 32.8101 39.3044 32.8854 39.035C32.9606 38.7657 33.1146 38.5244 33.3279 38.3415C33.5411 38.1587 33.8042 38.0424 34.084 38.0073C34.3637 37.9723 34.6477 38.02 34.9002 38.1445L40.826 41.0699L45.7754 32.9185C45.9026 32.7094 46.0822 32.5365 46.2967 32.4164C46.5112 32.2964 46.7534 32.2333 46.9998 32.2333C47.2461 32.2333 47.4883 32.2964 47.7028 32.4164C47.9173 32.5365 48.0969 32.7094 48.2241 32.9185L53.1735 41.0699L59.1017 38.1445C59.3544 38.0198 59.6388 37.9722 59.9189 38.0076C60.199 38.0429 60.4622 38.1598 60.6753 38.3433C60.8884 38.5269 61.0419 38.7689 61.1163 39.0388C61.1907 39.3088 61.1828 39.5945 61.0935 39.86V39.8588Z" fill="white"/>
      </g>
    </g>
    <defs>
      <filter id="filter0_dd_57_7170" x="0" y="0" width="94" height="94" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_57_7170"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="10"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.564706 0 0 0 0 0.215686 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_57_7170"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_57_7170"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.564706 0 0 0 0 0.215686 0 0 0 0.02 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_57_7170" result="effect2_dropShadow_57_7170"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_57_7170" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_57_7170" x1="24.8726" y1="-2.70841" x2="24.5877" y2="37.7787" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.56"/>
        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
      </linearGradient>
      <linearGradient id="paint1_linear_57_7170" x1="68.4246" y1="34.7386" x2="-27.9089" y2="56.0819" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint2_linear_57_7170" x1="48.0909" y1="25.0724" x2="47.806" y2="65.5595" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.56"/>
        <stop offset="1" stopColor="white" stopOpacity="0.2"/>
      </linearGradient>
      <linearGradient id="paint3_linear_57_7170" x1="91.6428" y1="62.5193" x2="-4.69063" y2="83.8627" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <clipPath id="clip0_57_7170">
        <rect x="19" y="15" width="56" height="56" rx="10" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export const PricingCard = ({
  title,
  description,
  icon,
  price,
  priceSubtext,
  minPrice,
  features,
  variant = "primary",
  className = ""
}: PricingCardProps) => {
  const cardClasses = variant === "primary" ? `border-[#FFEDD4] bg-white shadow-[0px_-2px_8px_-1px_rgba(23,23,23,0.04),0px_14px_40px_-4px_rgba(23,23,23,0.06)] 
         [background:linear-gradient(135deg,#FFF7ED_0%,#FFF_100%)]
         [background-image:url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23FFF7ED' fill-opacity='0.4'/%3E%3C/svg%3E")]` : "border-[#EBEBEB] bg-white";

  return (
    <article className={`border w-full p-8 rounded-xl ${cardClasses} ${className}`}>
      <div className="w-full flex flex-col">
        <header className="flex w-full items-center gap-[16px] text-2xl text-[rgba(34,34,34,1)] font-medium whitespace-nowrap leading-[1.3]">
          <div className="w-[56px] h-[56px] flex-shrink-0 flex items-center justify-center">
            {title.toLowerCase().includes('visualize') ? <VisualizeIcon /> : <OptimizeIcon />}
          </div>
          <h2 className="self-stretch flex-1 shrink basis-[0%] my-auto">{title}</h2>
        </header>

        <div className={variant === 'secondary' ? 'flex flex-col h-[100px]' : ''}>
          <p className="text-[rgba(109,109,109,1)] text-base font-normal leading-7 mt-4">
            {description}
          </p>
        </div>

        {price && (
          <div className="w-full mt-5">
            <div className="flex w-full items-end">
              <div className="flex gap-1 text-[#222] items-end">
                <span className={`font-medium leading-[1.3] ${variant === 'secondary' ? 'text-2xl' : 'text-5xl'}`}>
                  {price}
                </span>
                <span className="text-sm ml-1 font-normal mb-[6px]">{priceSubtext}</span>
              </div>
              {minPrice && <div className="text-[#6D6D6D] text-sm font-normal mb-[6px] ml-auto">{minPrice}</div>}
            </div>

            {variant === "primary" && (
              <div className="bg-[rgba(37,31,31,0.04)] border flex min-h-12 w-full items-center gap-3 text-base flex-wrap mt-4 pl-3 pr-4 py-3 rounded-lg border-[rgba(37,31,31,0.08)]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/4b8bee12bead4b66b573187d8e419c5d/eefecd56a897a32835976d67c57d09015a18ddd1b5685d7a336048586db07823"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                  alt=""
                />
                <p className="text-[#222] font-semibold self-stretch flex-1 shrink basis-[0%] my-auto">
                  Get 60% off if you purchase by June 30, 2025
                </p>
                <CountdownTimer targetDate={new Date("2025-06-30")} />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-[rgba(34,34,34,0.1)] flex min-h-px w-full mt-8" />

      <div className="w-full mt-8 pb-2">
        {features.map((feature, index) => (
          <div key={index} className={index > 0 ? "mt-5" : ""}>
            <PricingFeature icon={feature.icon} variant={feature.variant}>
              <div className="flex items-center gap-2">
                <span>{feature.text}</span>
                {feature.beta && <BetaTag />}
              </div>
            </PricingFeature>
            {feature.subFeatures && (
              <div className="pl-[42px] text-gray-500 text-sm mt-1">
                {feature.subFeatures.map((subFeature, subIndex) => (
                  <div key={subIndex} className="flex items-center">
                    <div className="w-[16px]">
                      {subFeature.showBullet && <span>•</span>}
                    </div>
                    <span>{subFeature.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
