import { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus, Minus, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data with questions, answers, and tags
const faqData = [
  {
    id: 1,
    title: "What is Panoramic Power Optimize?",
    answer:
      "Sem eget viverra amet hendrerit id quisque consectetur. Mi at lacinia elit ut. Nec sed posuere nisi ac. Tristique tortor elit volutpat blandit sit sociis. Varius auctor in iaculis sit. Pulvinar vitae amet vitae et a. Nec morbi massa fermentum elementum dictum nulla justo urna. Condimentum consectetur lectus tincidunt aliquam. Mauris interdum rhoncus sed sapien consectetur donec commodo tincidunt. Enim tempus urna purus ultricies quam lacus mauris proin.",
    tag: "Popular Questions",
  },
  {
    id: 2,
    title: "Is this smarter energy intelligence?",
    answer:
      "Innovative AI-driven analytics provide deeper insights into your energy consumption patterns, identifying optimization opportunities that traditional systems miss. Our platform continuously learns from your usage data to deliver increasingly intelligent recommendations over time.",
    tag: "Features & Benefits",
  },
  {
    id: 3,
    title: "Do you offer end-to-end personalization?",
    answer:
      "Yes, we provide complete end-to-end personalization. Our system adapts to your specific energy usage patterns, facility type, and business objectives. The dashboards, alerts, and recommendations are all tailored to your unique needs and preferences.",
    tag: "Features & Benefits",
  },
  {
    id: 4,
    title: "Is this a smarter energy intelligence?",
    answer:
      "Yes, our platform leverages cutting-edge AI and machine learning technologies to provide truly intelligent energy insights that go beyond traditional analytics solutions.",
    tag: "Popular Questions",
  },
  {
    id: 5,
    title: "Do you offer end-to-end personalization?",
    answer:
      "We offer complete end-to-end personalization tailored to your specific business needs and energy usage patterns. Our solution adapts to your unique requirements.",
    tag: "Popular Questions",
  },
  {
    id: 6,
    title: "How do I get started with the platform?",
    answer:
      "Getting started is simple. After signing up, our team will guide you through a quick onboarding process, including connecting your energy data sources. The platform is designed to be intuitive with minimal setup time, allowing you to start seeing insights almost immediately.",
    tag: "Getting Started",
  },
  {
    id: 7,
    title: "What subscription plans do you offer?",
    answer:
      "We offer flexible subscription plans designed to meet different business needs and scales. Options range from basic monitoring to comprehensive energy management solutions with advanced features. Contact our sales team for detailed pricing information tailored to your requirements.",
    tag: "Billing & Subscriptions",
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
        <div
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#EBEBEB] bg-white`}
        >
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

export const Section9 = () => {
  const [selectedTag, setSelectedTag] = useState("Popular Questions");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openItemId, setOpenItemId] = useState<number>(1); // Default open item is the first one

  // Toggle accordion item
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? -1 : id);
  };

  // Filter questions based on selected tag and search query
  const filteredQuestions = faqData.filter((question) => {
    const matchesTag = question.tag === selectedTag;
    const matchesSearch =
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && (searchQuery === "" || matchesSearch);
  });

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-16">
        {/* Left column - Title and Tag selector */}
        <div className="mb-8 w-full md:mb-0 md:w-1/3">
          <span className="mb-2 block font-medium text-orange-500">FAQ</span>
          <div className="mb-6 text-h2 leading-tight md:mb-10">
            All your questions answered
          </div>

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
              <p className="text-sm font-medium">Still have some questions?</p>
              <p className="text-xs text-gray-600">
                Your support provider is ready to help
              </p>
            </div>
          </div>
        </div>

        {/* Right column - Search and Accordion */}
        <div className="w-full md:w-2/3">
          {/* Search bar */}
          <div className="mb-8 flex justify-end">
            <div className="relative w-[300px]">
              <Input
                type="text"
                placeholder="Search your question"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-full pl-10 pr-4"
              />
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Custom FAQ accordion */}
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

          {filteredQuestions.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <p>
                No questions found. Try adjusting your search or selecting a
                different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Section9;
