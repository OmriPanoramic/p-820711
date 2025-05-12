import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus, Minus, Info, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data with questions, answers, and tags
const faqData = [
  // Popular Questions
  {
    id: 1,
    title: "What's happening to \"PowerRadar\"?",
    answer:
      "The software that you know as PowerRadar is now simply Panoramic Power, which consists of 2 packages; Panoramic Visualize (freemium) and Panoramic Optimize (Premium). This transformation allows us to deliver smarter tools, better performance, and enhanced usability. Panoramic Optimize is designed to help you achieve your energy management and decarbonization goals more effectively, enabling you to make informed decisions with ease.",
    tag: "Popular Questions",
  },
  {
    id: 2,
    title: "What will happen to my current account?",
    answer:
      "All the sites within your account will automatically migrate to a free trial of Panoramic Optimize on 4th May which means that all your users will have access to Panoramic Optimize without any cost until 31st December 2025. During this trial period, you can choose to subscribe to Optimize. Should you decide not to subscribe, your site(s) will be automatically moved to Visualize.",
    tag: "Popular Questions",
  },
  {
    id: 3,
    title: "What's the difference between Visualize and Optimize?",
    answer:
      "Visualize provides basic visibility and access to your electrical energy data provided by Panoramic Power sensors. Optimize incorporates Visualize features and includes all the new and soon to be developed features that enhance your ability to unlock deeper intelligence, improve operational efficiency, and proactively manage energy costs and sustainability goals.",
    tag: "Popular Questions",
  },
  {
    id: 4,
    title: "What is the cost of Optimize after the trial period?",
    answer:
      "Panoramic Optimize costs $5 per device per month. A device is defined as per a 'device' in the deployment tool or any other meter data input into the Panoramic Power platform. For sites that are on the platform for at least 1 year, you can choose to pay based on 1% of the cost of your measured electrical energy consumption.",
    tag: "Popular Questions",
  },
  {
    id: 5,
    title: "How do I access the new platform?",
    answer:
      "Your current login credentials will remain valid. Simply log in to the platform as you usually do to access the new system. This seamless transition ensures no disruption to your workflow while introducing a more intuitive and powerful interface.",
    tag: "Popular Questions",
  },
  {
    id: 6,
    title: "Can I revert to the old system?",
    answer:
      "No, the old system is being discontinued as part of this migration. This upgrade ensures you benefit from the latest features and improvements.",
    tag: "Popular Questions",
  },
  {
    id: 7,
    title: "Will I lose any historical data or prior set configurations during this transition?",
    answer:
      "No, all your historical data will remain intact and accessible. The migration process has been designed to preserve your data without any data loss or pre-existing configurations.",
    tag: "Popular Questions",
  },
  
  // Getting Started
  {
    id: 8,
    title: "What is Optimize?",
    answer:
      "Optimize is the next generation of energy management software, offering smarter and intelligent tools, real-time insights, and a customizable interface. All new and upcoming product roadmap developments will be available in Optimize.",
    tag: "Getting Started",
  },
  {
    id: 9,
    title: "How do I know how many devices I have?",
    answer:
      "You can view the number of deployed devices on your site summary within the dashboard or at the account level on the sites table.",
    tag: "Getting Started",
  },
  {
    id: 10,
    title: "Will I have continued access to all my current features?",
    answer:
      "Yes, Optimize retains all the features you currently use, along with additional tools to enhance your experience. This ensures continuity while unlocking new possibilities for smarter energy management.",
    tag: "Getting Started",
  },
  {
    id: 11,
    title: "Is there training available for the new platform?",
    answer:
      "Yes, our knowledge center (https://panoramic.helpjuice.com/en_US) contains onboarding materials and step-by-step guides, including comprehensive video tutorials and step-by-step guides. These resources are designed to help you, and your team quickly familiarize yourselves with the platform's features and capabilities. Please also feel free to reach out to your company's Panoramic Support Provider if you require more personal assistance.",
    tag: "Getting Started",
  },
  {
    id: 12,
    title: "Do I need to reconfigure anything to continue using the pre-existing features?",
    answer:
      "No. The migration process has been designed to ensure a seamless transition, so you won't need to make any adjustments.",
    tag: "Getting Started",
  },
  {
    id: 13,
    title: "Will there be downtime during migration?",
    answer:
      "We are carrying out the migration of all existing sites and accounts on the 4th May, which is a Sunday, which is when there is minimal user activity in the platform. By Sunday evening (European time) you should be able to start working in the new system.",
    tag: "Getting Started",
  },
  
  // Features & Benefits
  {
    id: 14,
    title: "What new features are available in Optimize?",
    answer:
      "Optimize offers a range of enhanced as well as new features. Please see the 'New in Optimize' section above for a list of new features.",
    tag: "Features & Benefits",
  },
  {
    id: 15,
    title: "Can I track energy costs and carbon emissions?",
    answer:
      "Yes, Optimize provides detailed insights into energy consumption, costs, and estimated carbon footprints. This enables you to align energy management with your sustainability targets and reduce your environmental impact.",
    tag: "Features & Benefits",
  },
  {
    id: 16,
    title: "What is The New Timeview?",
    answer:
      "The new Timeview is an upgrade of the current Timeview that introduces a faster, more intuitive interface for analyzing energy and device data. It includes improved performance and responsiveness, a flexible layout for better data comparison, enhanced device tree with search and metrics, new visualization options such as carbon impact, layering tools like schedules and baselines and AI & Forecasting (not in the first stage).",
    tag: "Features & Benefits",
  },
  {
    id: 17,
    title: "Can I create custom dashboards?",
    answer:
      "Yes! Optimize allows you to create your own personalized dashboards. This flexibility lets you focus on the metrics that matter most to you, ensuring you always have the right data at your fingertips.",
    tag: "Features & Benefits",
  },
  {
    id: 18,
    title: "What's new in scheduling?",
    answer:
      "The platform includes advanced scheduling tools for managing operational hours, shifts, and energy consumption patterns. This helps you plan and Optimize energy use, reducing waste and improving efficiency.",
    tag: "Features & Benefits",
  },
  {
    id: 19,
    title: "Can I personalize the platform for each user in my organization?",
    answer:
      "Yes, every user can create their own dashboards, set up custom alerts and preset views, and adjust preferences to match their role and workflow. This level of personalization ensures that each team member can focus on the data and insights most relevant to their responsibilities.",
    tag: "Features & Benefits",
  },
  {
    id: 20,
    title: "Is the cloud infrastructure of Optimize better than before?",
    answer:
      "Yes, Optimize's cloud infrastructure has been completely upgraded to deliver enhanced performance, scalability and reliability. By leveraging cutting-edge cloud technology enables us to execute on an exciting roadmap of features that provides unparalleled intelligence into your energy management. The improved infrastructure ensures faster data processing, seamless integrations, and robust security, allowing you to make data-driven decisions with confidence.",
    tag: "Features & Benefits",
  },
  {
    id: 21,
    title: "Will there be new features added in the future?",
    answer:
      "Yes, we are committed to continuous development. Over the coming months you will see new capabilities for ingesting data from 3rd party meters into Panoramic and the incorporation of AI tools. All new features that we are developing will be released to Optimize.",
    tag: "Features & Benefits",
  },
  
  // Billing & Subscriptions
  {
    id: 22,
    title: "What is the cost of Optimize after the free trial?",
    answer:
      "After December 31, 2025, you can choose to continue with the Optimize package at $5 per device per month or elect to pay based on 1% of the cost of your site's measured electrical energy consumption. The latter is calculated by looking at your average monthly energy consumption over the preceding 12 months and applying an electricity cost of $0.15/kWh.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 23,
    title: "Is there a discount for early upgrades?",
    answer:
      "Yes. Subscribing to Optimize before the trial period expires on 31st December 2025 will entitle you to preferential commercial terms. The earlier you subscribe the better the commercial terms. Please reach out to your Panoramic support provider to give you the options available.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 24,
    title: "What if I only need one of the features in Optimize?",
    answer:
      "If you require automatic data export, automated reports, or access to third-party meters, each of these features is available as an add-on to Visualize. See the pricing of these add-ons in the \"Compare your options\" section above.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 25,
    title: "Do I have to pay for the full year in advance?",
    answer:
      "Yes. Your Optimize or Visualize add-ons subscriptions are billed annually upfront. If cancel any time during a contract period, you will retain access to your paid subscription package until the end of the subscription period, after which your site will be moved to Visualize.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 26,
    title: "What happens if I add more devices in the middle of a subscription year?",
    answer:
      "When adding devices during the subscription period, you will be charged for any additional devices pro-rated up to the end of your site's subscription period.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 27,
    title: "Is there a limit to the number of users?",
    answer:
      "No. Whether your sites are on Optimize or Visualize, you can add as many users at the account or site level as you wish without any additional costs.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 28,
    title:
      "Who should I speak to if I wish to upgrade from the Optimize free trial to the paid subscription?",
    answer:
      "We provide both our technology and software to customers through our accredited partners. Your company is likely already working with one of our partners, who may have initially helped you get set up and/ or providing you ongoing support. Please let us know you need us to direct you to the most suitable accredited partner.",
    tag: "Getting Started",
  },
];

// Available tag options
const tagOptions = [
  "Popular Questions",
  "Getting Started",
  "Features & Benefits",
  "Billing & Subscriptions",
];

// Custom Accordion Item Component
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  isFirst: boolean;
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  isFirst,
}: AccordionItemProps) => {
  return (
    <div className={`border-b border-gray-200 py-4 ${isFirst ? "pt-0" : ""}`}>
      <button
        className="flex w-full items-center justify-between py-2 text-left font-medium"
        onClick={onClick}
      >
        <span className="pr-8">{title}</span>
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#EBEBEB] bg-white">
          {isOpen ? (
            <Minus className="h-4 w-4 text-orange-500" />
          ) : (
            <Plus className="h-4 w-4 text-orange-500" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-2 text-gray-600">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NoQuestionsFound = ({ searchQuery }: { searchQuery: string }) => (
  <div className="flex flex-col items-center justify-center py-10">
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.1635 45.6357L40.7136 55.2347L23.2636 45.6357L18.8652 50.0344L40.7136 62.0523L62.5592 50.0344L58.1635 45.6357Z"
        fill="#FFEDD4"
      />
      <path
        d="M14.7751 14.2741L13.4116 26.5456L2.50391 2.00293L14.7751 14.2741Z"
        fill="#FFEDD4"
      />
      <path
        d="M32.5 32.0003V27.2145L40.6808 22.4561L48.8619 27.2145V34.0318L40.6808 37.4542V42.9081"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7751 14.2741L13.4116 26.5456L2.50391 2.00293L27.0466 12.9107L14.7751 14.2741Z"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.6806 48.3623L39.3171 49.7258L40.6806 51.0892"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.6804 48.3623L42.0439 49.7258L40.6804 51.0892"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.6808 12.9111L18.8652 25.1826V49.7252L40.6808 61.9964L62.4965 49.7252V25.1826L40.6808 12.9111Z"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <p className="mb-2 mt-4 text-xl font-medium">
      We couldn't find results for "{searchQuery}"
    </p>
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Info className="h-4 w-4" />
      Still have some questions? Your support partner is ready to help
    </div>
  </div>
);

export const Section9 = () => {
  const [selectedTag, setSelectedTag] = useState("Popular Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState<number>(1); // Default open item is the first one
  const [isSearchMode, setIsSearchMode] = useState(false);

  // Update search mode when search query changes
  useEffect(() => {
    setIsSearchMode(searchQuery.trim() !== "");
  }, [searchQuery]);

  // Toggle accordion item
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? -1 : id);
  };

  // Handle search clear
  const clearSearch = () => {
    setSearchQuery("");
    setIsSearchMode(false);
  };

  // Filter questions based on selected tag when not in search mode
  // or filter across all tags when in search mode
  const filteredQuestions = faqData.filter((question) => {
    if (isSearchMode) {
      // Search through all questions regardless of tag
      return (
        question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        question.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // Filter by selected tag when not searching
      return question.tag === selectedTag;
    }
  });

  return (
    <div id="section9" className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 lg:px-16">
      <div className="flex flex-col">
        {/* Header */}
        <div className="mb-8">
          <span className="mb-2 block font-medium text-orange-500">FAQ</span>
          <div className="mb-6 text-h2 leading-tight max-w-[405px]">
            All your questions answered
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
          {/* Left column - Tag selector (hidden in search mode) */}
          {!isSearchMode && (
            <div className="mb-8 w-full md:mb-0 md:w-1/3">
              {/* Mobile tags dropdown */}
              <div className="relative mb-8 md:hidden">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-4"
                >
                  <span className="font-medium">{selectedTag}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                    {tagOptions.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSelectedTag(tag);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full p-3 text-left first:rounded-t-lg last:rounded-b-lg hover:bg-gray-50"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Desktop tags sidebar */}
              <div className="hidden space-y-2 md:flex md:flex-col">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={cn(
                      "w-full rounded-lg px-4 py-3 text-left font-medium transition-colors",
                      selectedTag === tag
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:bg-gray-50",
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Support info */}
              <div className="mt-8 flex items-center gap-3 rounded-lg bg-blue-50 p-4">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">
                    Still have some questions?
                  </p>
                  <p className="text-xs text-gray-600">
                    Your support provider is ready to help
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Right column - Search and Accordion */}
          <div className={`w-full ${isSearchMode ? "" : "md:w-2/3"}`}>
            {/* Search bar */}
            <div className="mb-8 flex justify-end">
              <div className="relative w-[300px]">
                <Input
                  type="text"
                  placeholder="Search your question"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-full pl-10 pr-10"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 transform">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>

                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </div>

            {/* Search results title */}
            {isSearchMode && filteredQuestions.length > 0 && (
              <div className="mb-6 text-lg text-gray-700">
                Search results for "{searchQuery}"
              </div>
            )}

            {/* FAQ accordion */}
            {filteredQuestions.length > 0 ? (
              <div className="space-y-0">
                {filteredQuestions.map((question, index) => (
                  <AccordionItem
                    key={question.id}
                    title={question.title}
                    content={question.answer}
                    isOpen={openItemId === question.id}
                    onClick={() => toggleItem(question.id)}
                    isFirst={index === 0}
                  />
                ))}
              </div>
            ) : isSearchMode ? (
              <NoQuestionsFound searchQuery={searchQuery} />
            ) : (
              <div className="p-8 text-center text-gray-500">
                <p>No questions available for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
