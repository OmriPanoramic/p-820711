import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus, Minus, Info, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data with questions, answers, and tags
const faqData = [
  {
    id: 1,
    title: "What/ why the change?",
    answer:
      "Why is Centrica making changes in the provision of PowerRadar PowerRadar is a mature and intuitive energy management software used by 1,000s of users globally. For it to continue to meet the expectations and cater to the evolving requirements of our userbase as well is ensure we keep up (and ahead) of the market need for smarter intelligence tools, we need to invest in its develop.",
    tag: "Popular Questions",
  },
  {
    id: 2,
    title: "What's in it for me?",
    answer:
      "As someone in your organization that has a role in impacting or managing energy and/or your organization's decarbonization goals, you will start to experience the tool as something more personable, customisable and smarter in order to help you be better at what you do.",
    tag: "Popular Questions",
  },
  {
    id: 3,
    title: "What is changing in PowerRadar?",
    answer:
      "We have been working hard over past year to modernise our platform infrastructure and development of new value-added features. We are going live with all this on May 4, 2025. The new software consists of 2 packages. Visualize is a freemium site licence that provides basic access to and visibility of data from Panoramic sensors. Optimize is our premium paid for product that incorporates Vizualize features and includes all other existing, new and future capabilities.",
    tag: "Popular Questions",
  },
  {
    id: 4,
    title: "What is happening on May 4th?",
    answer:
      "On May 4, we are migrating all sites in PowerRadar over to our new software infrastructure and, as an existing user, your site will automatically migrated to the Optimize license in which you will continue to enjoy all the features you have today plus more.",
    tag: "Popular Questions",
  },
  {
    id: 5,
    title: "What is the 'more' features referenced above?",
    answer:
      "Our new features include enhanced dashboards, advanced analytics, smarter energy intelligence, and improved user experience. These features are designed to provide deeper insights into your energy consumption patterns and help you make more informed decisions.",
    tag: "Features & Benefits",
  },
  {
    id: 6,
    title: "Do I need to pay for my site(s) to be on Optimize?",
    answer:
      "Recognizing that our existing userbase will need time to adapt to the changes and start to see the value of the new and upcoming features, all existing sites will start on a free trial of Optimize until 31st December 2025. The Optimize license will be payable from January 2026.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 7,
    title: "What is the cost of Optimize following the free trial period?",
    answer:
      "The cost of upgrading to Optimize is dependent on the number of Devices deployed at your site. The cost per Device is $5.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 8,
    title: "What is considered a 'Device'?",
    answer:
      "A Device is defined as an electrical circuit (3phase or single phase) measured by Panoramic sensors or a meter or sensor whose data is ingested into our software. You can see the number of devices deployed at your site here [add link to navatic demo]",
    tag: "Getting Started",
  },
  {
    id: 9,
    title:
      "If Visualize is sufficient for our needs but we currently using the automatic data export tool?",
    answer:
      "If the features of Visualize are sufficient for you and you require only the additional capability of the automatic data export tool, then this feature is provided as an add-on to Visualise at a cost of $1/ month per sensor.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 10,
    title:
      "The only thing I use Panoramic for is to export data for generating reports. Will I need to pay for this going forward?",
    answer: "No.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 11,
    title:
      "Is there any incentive to convert from my free trial of Optimize to a paid subscription of Optimize prior to the end of the free trial period?",
    answer:
      "Yes. The earlier you upgrade to a paid subscription of Optimize the higher the discount you will receive and the length of time that the discounted price is guaranteed.",
    tag: "Billing & Subscriptions",
  },
  {
    id: 12,
    title:
      "Who should I speak to if I wish to upgrade from the Optimize free trial to the paid subscription?",
    answer:
      "Centrica provide both our technology and software to customers through our accredited partners. Your company is likely already working with one of our partners, who may have initially helped you get set up and/ or providing you ongoing support. Please let us know you need us to direct you to the most suitable accredited partner.",
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
          <div className="mb-6 text-h2 leading-tight">
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
