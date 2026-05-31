import { seoTools } from "@/lib/seo-tools";

export type SiteCategorySlug =
  | "financial-tools"
  | "time-date-tools"
  | "internet-tools"
  | "converters"
  | "productivity-tools"
  | "health-lifestyle-tools";

export interface SiteTool {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: string;
  keywords: string[];
  categorySlugs: SiteCategorySlug[];
}

export interface CoreTool extends SiteTool {
  intro: string;
  howItWorks: string[];
  whenToUse: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
}

export interface SiteCategory {
  slug: SiteCategorySlug;
  path: `/${SiteCategorySlug}`;
  title: string;
  shortTitle: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  icon: string;
  keywords: string[];
  content: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedCategorySlugs: SiteCategorySlug[];
  toolSlugs: string[];
}

export const coreTools: CoreTool[] = [
  {
    slug: "speed-test",
    title: "Internet Speed Test",
    shortTitle: "Speed Test",
    description: "Check download, upload, and connection performance in seconds.",
    href: "/tools/speed-test",
    icon: "Gauge",
    keywords: ["internet speed test", "wifi speed", "download speed", "upload speed", "latency"],
    categorySlugs: ["internet-tools"],
    intro:
      "Use the Internet Speed Test to get a quick snapshot of your connection before a call, stream, upload, or troubleshooting session. The page keeps the controls simple so you can focus on the practical numbers that matter most: download speed, upload speed, latency, jitter, and whether the connection appears stable.",
    howItWorks: [
      "Start the test from the main button and keep the tab open while the simulated download and upload checks complete.",
      "Review the Mbps results beside latency and jitter indicators to understand both throughput and responsiveness.",
      "Run the test again after changing WiFi location, switching devices, or connecting by Ethernet to compare conditions.",
    ],
    whenToUse: [
      "Before video meetings, online gaming, large file uploads, or streaming in HD or 4K.",
      "When your broadband feels slower than expected and you want a simple reference point.",
      "After moving your router, changing provider, or testing whether WiFi interference is affecting performance.",
    ],
    faqs: [
      {
        question: "How does the internet speed test work?",
        answer:
          "The test estimates connection performance by timing download and upload activity and presenting the result in Mbps. It is designed as a practical browser-based check rather than a provider-grade diagnostic report.",
      },
      {
        question: "What is a good internet speed?",
        answer:
          "Basic browsing can work at 10 to 25 Mbps, HD streaming often needs 25 Mbps or more, and busy homes or 4K streaming benefit from higher speeds. Upload speed matters for cloud backups, video calls, and sending large files.",
      },
      {
        question: "Why is my speed test result different from my plan?",
        answer:
          "Plan speeds are usually maximum or average figures. WiFi signal, device limits, congestion, router placement, and other users on the same connection can all reduce the result you see.",
      },
      {
        question: "Should I test on WiFi or Ethernet?",
        answer:
          "Use Ethernet for the cleanest baseline, then compare WiFi from the places where you normally work or stream. The difference can show whether the issue is the broadband line or the wireless network.",
      },
    ],
    relatedSlugs: [
      "ip-checker",
      "password-generator",
      "json-formatter-validator",
      "meta-tag-preview-checker",
    ],
  },
  {
    slug: "world-clock",
    title: "World Clock",
    shortTitle: "World Clock",
    description: "View current time in multiple cities and time zones worldwide.",
    href: "/tools/world-clock",
    icon: "Globe",
    keywords: ["world clock", "current time", "time zones", "city time"],
    categorySlugs: ["time-date-tools"],
    intro:
      "The World Clock helps you compare the current time across important cities without opening multiple tabs or searching each place separately. Add the locations you work with most often and use the live cards to check local dates, daylight saving changes, and approximate differences from your own time.",
    howItWorks: [
      "Choose a city from the dropdown to add it to your clock list.",
      "Each card uses the browser's international time zone support to show a live local time and date.",
      "Remove cities you no longer need so the view stays focused on your current trip, team, or schedule.",
    ],
    whenToUse: [
      "Planning calls with colleagues, clients, friends, or family in several countries.",
      "Checking whether a location is inside normal working hours before sending a message.",
      "Monitoring markets, travel plans, support coverage, or event start times across regions.",
    ],
    faqs: [
      {
        question: "How accurate is the world clock?",
        answer:
          "The clock uses your device time and the browser's time zone database. If your device clock is correct, the displayed city times should be suitable for everyday planning.",
      },
      {
        question: "Does it account for daylight saving time?",
        answer:
          "Yes. The browser applies daylight saving rules for supported IANA time zones, so city clocks adjust automatically when local rules change.",
      },
      {
        question: "Can I add multiple cities?",
        answer:
          "Yes. Add several cities to compare them side by side, then remove any location that is no longer relevant.",
      },
      {
        question: "Why do cities in similar regions show different offsets?",
        answer:
          "Time zones and daylight saving rules are set locally. Nearby regions can use different offsets or change clocks on different dates.",
      },
    ],
    relatedSlugs: [
      "timezone-converter",
      "deadline-countdown-calculator",
      "time-card-calculator",
      "uk-working-days-calculator",
    ],
  },
  {
    slug: "timezone-converter",
    title: "Time Zone Converter",
    shortTitle: "Time Zone Converter",
    description: "Convert meeting times between cities and time zones.",
    href: "/tools/timezone-converter",
    icon: "Clock",
    keywords: ["time zone converter", "timezone calculator", "meeting time", "UTC", "GMT"],
    categorySlugs: ["time-date-tools", "converters"],
    intro:
      "The Time Zone Converter turns a date and time in one location into the matching time in another. It is useful when a meeting, webinar, flight, release window, or deadline crosses borders and you need a clear answer before sending an invite.",
    howItWorks: [
      "Select the source time zone, then enter the local date and time you want to convert.",
      "Choose the destination time zone and run the conversion.",
      "Use the formatted result to confirm both the local time and date, especially when the conversion crosses midnight.",
    ],
    whenToUse: [
      "Scheduling international calls, webinars, support shifts, or online events.",
      "Checking launch windows, booking times, or travel arrangements in another region.",
      "Converting between UTC, GMT, UK time, US time zones, European time zones, and Asia-Pacific cities.",
    ],
    faqs: [
      {
        question: "Does the converter handle daylight saving time?",
        answer:
          "Yes. The conversion uses the selected date so daylight saving rules can be applied for the time zones supported by the browser.",
      },
      {
        question: "Can the date change during conversion?",
        answer:
          "Yes. If the destination zone is ahead or behind enough to cross midnight, the converted result includes the correct destination date.",
      },
      {
        question: "What is the difference between UTC and GMT?",
        answer:
          "UTC is the modern time standard used globally. GMT is commonly used for UK winter time and everyday references, but UTC is generally better for technical scheduling.",
      },
      {
        question: "Why should I include the date?",
        answer:
          "A date matters because daylight saving rules change during the year. The same clock time can convert differently in summer and winter.",
      },
    ],
    relatedSlugs: ["world-clock", "deadline-countdown-calculator", "meeting-cost-calculator", "unit-converter"],
  },
  {
    slug: "vat-calculator",
    title: "UK VAT Calculator",
    shortTitle: "VAT Calculator",
    description: "Calculate UK VAT at 20%, 5%, or 0% rates.",
    href: "/tools/vat-calculator",
    icon: "Calculator",
    keywords: ["VAT calculator", "UK VAT", "add VAT", "remove VAT", "tax calculator"],
    categorySlugs: ["financial-tools"],
    intro:
      "The UK VAT Calculator helps you add VAT to a net price or remove VAT from a gross price using common UK rates. It is designed for quick invoice checks, product pricing, expenses, and everyday comparisons where you need to separate net, VAT, and gross amounts clearly.",
    howItWorks: [
      "Choose the VAT rate that applies to the goods or service.",
      "Enter the amount and select whether you want to add VAT or remove VAT.",
      "Review the net amount, VAT amount, and gross amount in the result panel.",
    ],
    whenToUse: [
      "Checking supplier quotes, invoices, receipts, or product prices.",
      "Preparing estimates where you need to show VAT separately.",
      "Comparing VAT-inclusive and VAT-exclusive amounts before making a purchase decision.",
    ],
    faqs: [
      {
        question: "What is VAT in the UK?",
        answer:
          "VAT is Value Added Tax, a consumption tax applied to many goods and services. The standard UK rate is 20%, while some goods and services use reduced or zero rates.",
      },
      {
        question: "How do I add VAT to a net price?",
        answer:
          "Multiply the net amount by the VAT rate to find the VAT, then add that VAT to the net amount. At 20%, a GBP100 net price becomes GBP120 gross.",
      },
      {
        question: "How do I remove VAT from a gross price?",
        answer:
          "Divide the gross price by 1 plus the VAT rate. For example, divide by 1.20 for a 20% VAT rate, then subtract the net result from the gross price to find VAT.",
      },
      {
        question: "Is this a substitute for accounting advice?",
        answer:
          "No. It is a quick calculator for common scenarios. VAT rules, exemptions, and registration duties can be complex, so check HMRC or an accountant for official guidance.",
      },
    ],
    relatedSlugs: [
      "uk-take-home-pay-estimator",
      "budget-planner",
      "uk-energy-direct-debit-calculator",
      "loan-repayment-calculator",
    ],
  },
  {
    slug: "fuel-calculator",
    title: "Fuel Cost Calculator",
    shortTitle: "Fuel Calculator",
    description: "Estimate journey fuel costs, consumption, and efficiency.",
    href: "/tools/fuel-calculator",
    icon: "Fuel",
    keywords: ["fuel cost calculator", "journey cost", "MPG calculator", "petrol cost", "diesel cost"],
    categorySlugs: ["financial-tools", "health-lifestyle-tools"],
    intro:
      "The Fuel Cost Calculator estimates how much a car journey may cost using distance, fuel efficiency, and price per litre. It is helpful for trip budgeting, commute planning, shared travel costs, and comparing the effect of different vehicles or driving conditions.",
    howItWorks: [
      "Enter the trip distance in miles or kilometres.",
      "Add your vehicle efficiency in UK MPG, US MPG, or litres per 100 km.",
      "Enter the current fuel price per litre to estimate total litres, total cost, and cost per mile.",
    ],
    whenToUse: [
      "Planning a road trip, commute, delivery route, or shared car journey.",
      "Comparing fuel costs before choosing between vehicles or travel options.",
      "Checking how price changes or efficiency improvements affect regular driving costs.",
    ],
    faqs: [
      {
        question: "How is fuel cost calculated?",
        answer:
          "The calculator converts the trip distance and efficiency into litres needed, then multiplies by the fuel price per litre to estimate the journey cost.",
      },
      {
        question: "What is the difference between UK MPG and US MPG?",
        answer:
          "A UK gallon is larger than a US gallon, so the same vehicle can show different MPG values depending on which gallon is used. Choose the unit shown in your vehicle data.",
      },
      {
        question: "Can I use kilometres and litres per 100 km?",
        answer:
          "Yes. Select kilometres for distance and L/100km for efficiency if those are the units you normally use.",
      },
      {
        question: "Does the result include tolls, parking, or wear and tear?",
        answer:
          "No. It estimates fuel only. For full journey cost planning, add other trip expenses separately.",
      },
    ],
    relatedSlugs: ["budget-planner", "uk-electricity-cost-calculator", "uk-gas-bill-calculator", "savings-goal-calculator"],
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    shortTitle: "Password Generator",
    description: "Create strong, secure passwords instantly in your browser.",
    href: "/tools/password-generator",
    icon: "Key",
    keywords: ["password generator", "strong password", "random password", "security"],
    categorySlugs: ["internet-tools"],
    intro:
      "The Password Generator creates random passwords in your browser using the length and character options you choose. It is designed for account setup, password manager entries, admin credentials, and any situation where a unique password is safer than reusing an old one.",
    howItWorks: [
      "Choose a password length and the character groups you want to include.",
      "Generate a random password and review the strength indicator.",
      "Copy the result into your password manager or account setup form.",
    ],
    whenToUse: [
      "Creating a new account or rotating credentials after a security concern.",
      "Generating unique passwords for a password manager.",
      "Avoiding predictable personal words, dates, or reused passwords.",
    ],
    faqs: [
      {
        question: "Is this password generator safe to use?",
        answer:
          "Generation happens in your browser. The tool does not need to send generated passwords to a server, but you should still store passwords only in a trusted password manager.",
      },
      {
        question: "What makes a strong password?",
        answer:
          "Length and randomness matter most. A long password with a mix of character types is usually harder to guess or crack than a short memorable pattern.",
      },
      {
        question: "Should I use a different password for every account?",
        answer:
          "Yes. Unique passwords limit damage if one service is breached. A password manager makes this practical.",
      },
      {
        question: "Should I enable two-factor authentication too?",
        answer:
          "Yes, where available. A strong password plus two-factor authentication provides better protection than either control alone.",
      },
    ],
    relatedSlugs: ["ip-checker", "qr-generator", "base64-encoder-decoder", "url-encoder-decoder"],
  },
  {
    slug: "qr-generator",
    title: "QR Code Generator",
    shortTitle: "QR Generator",
    description: "Generate QR codes for URLs, text, contact details, and more.",
    href: "/tools/qr-generator",
    icon: "QrCode",
    keywords: ["QR code generator", "QR maker", "URL QR code", "download QR"],
    categorySlugs: ["internet-tools"],
    intro:
      "The QR Code Generator creates a scannable visual code for URLs, plain text, email addresses, phone numbers, SMS links, or WiFi details. It is useful for signs, printed material, internal documents, presentations, and quick mobile handoffs.",
    howItWorks: [
      "Choose the content type and enter the matching details.",
      "Preview the QR code, adjust foreground or background colour if needed, and keep enough contrast for scanning.",
      "Download or copy the generated image for use in your document, campaign, or sign.",
    ],
    whenToUse: [
      "Sharing a URL from printed material or a presentation slide.",
      "Creating quick access to contact, WiFi, SMS, or email details.",
      "Preparing event signage, flyers, packaging inserts, or support documentation.",
    ],
    faqs: [
      {
        question: "What types of content can I create QR codes for?",
        answer:
          "You can create QR codes for URLs, plain text, email, phone, SMS, and WiFi details using the available content types.",
      },
      {
        question: "Do static QR codes expire?",
        answer:
          "Static QR codes encode the content directly and do not expire by themselves. A URL QR code will still depend on the destination page staying live.",
      },
      {
        question: "Can I print the QR code?",
        answer:
          "Yes. Download the image and print it at a size that is easy to scan. Always test it on a phone before publishing.",
      },
      {
        question: "What makes a QR code hard to scan?",
        answer:
          "Low contrast, very small print size, damage, glare, or too much data can reduce scan reliability.",
      },
    ],
    relatedSlugs: ["url-encoder-decoder", "utm-builder", "email-link-generator", "password-generator"],
  },
  {
    slug: "ip-checker",
    title: "IP Address Checker",
    shortTitle: "IP Checker",
    description: "Find your public IP address and basic location details.",
    href: "/tools/ip-checker",
    icon: "MapPin",
    keywords: ["IP address checker", "public IP", "IP lookup", "network location"],
    categorySlugs: ["internet-tools"],
    intro:
      "The IP Address Checker shows the public IP address your connection presents to websites, along with approximate network location details when available. It helps with troubleshooting, VPN checks, remote access setup, and confirming which network an online service sees.",
    howItWorks: [
      "Open the page and allow the lookup request to complete.",
      "Review the detected public IP address, approximate city, country, time zone, and ISP details.",
      "Refresh after changing networks, turning a VPN on or off, or switching from WiFi to mobile data.",
    ],
    whenToUse: [
      "Checking whether a VPN, proxy, office network, or home broadband connection is active.",
      "Sharing your public IP with an IT administrator for temporary allowlisting.",
      "Troubleshooting location-sensitive services or network access rules.",
    ],
    faqs: [
      {
        question: "What is a public IP address?",
        answer:
          "A public IP address is the internet-facing address assigned to your connection. Websites and online services use it to route traffic back to you.",
      },
      {
        question: "Can an IP address reveal my exact address?",
        answer:
          "No. IP location is approximate and often reflects an ISP or network region rather than a precise home or office address.",
      },
      {
        question: "Why does my IP change?",
        answer:
          "Many providers assign dynamic IP addresses that can change over time or when you reconnect. VPNs and mobile networks can also show different addresses.",
      },
      {
        question: "How can I hide or change my public IP?",
        answer:
          "A reputable VPN, proxy, or privacy network can route traffic through another server. Choose services carefully because they can see your traffic metadata.",
      },
    ],
    relatedSlugs: ["speed-test", "password-generator", "json-formatter-validator", "base64-encoder-decoder"],
  },
  {
    slug: "age-calculator",
    title: "Age Calculator",
    shortTitle: "Age Calculator",
    description: "Calculate exact age from a date of birth or important date.",
    href: "/tools/age-calculator",
    icon: "Calendar",
    keywords: ["age calculator", "date of birth calculator", "birthday calculator", "days old"],
    categorySlugs: ["time-date-tools", "health-lifestyle-tools"],
    intro:
      "The Age Calculator converts a date of birth into an exact age in years, months, and days. It also shows useful totals such as days, weeks, and months lived, plus the date and countdown for the next birthday.",
    howItWorks: [
      "Enter a valid date of birth that is not in the future.",
      "The calculator compares it with today's date and adjusts for month length and day boundaries.",
      "Review exact age, total days, total weeks, total months, and next birthday details.",
    ],
    whenToUse: [
      "Checking exact age for forms, eligibility windows, anniversaries, milestones, or personal curiosity.",
      "Counting days lived or weeks since birth for a birthday card, event, or record.",
      "Planning around upcoming birthdays or age-based dates.",
    ],
    faqs: [
      {
        question: "How is exact age calculated?",
        answer:
          "The calculator compares the birth date with today and adjusts years, months, and days so incomplete months and leap years are handled sensibly.",
      },
      {
        question: "Does it account for leap years?",
        answer:
          "Yes. Total days are based on actual date differences, so leap years are included in the day count.",
      },
      {
        question: "Can I calculate age for a future birth date?",
        answer:
          "No. The page is designed for dates that have already occurred, so future dates are ignored.",
      },
      {
        question: "Why are total months and exact months different?",
        answer:
          "Total months counts complete months across all years, while the exact age display separates years, remaining months, and days.",
      },
    ],
    relatedSlugs: ["world-clock", "timezone-converter", "uk-holiday-entitlement-calculator", "deadline-countdown-calculator"],
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    shortTitle: "Unit Converter",
    description: "Convert length, weight, temperature, volume, area, and more.",
    href: "/tools/unit-converter",
    icon: "ArrowLeftRight",
    keywords: ["unit converter", "measurement converter", "metric imperial", "temperature converter"],
    categorySlugs: ["converters"],
    intro:
      "The Unit Converter changes values between common metric, imperial, and temperature units. It is built for quick everyday conversions across length, weight, temperature, volume, and area without needing to remember formulas or search separate tables.",
    howItWorks: [
      "Choose the measurement category, such as length, weight, temperature, volume, or area.",
      "Enter the value, source unit, and target unit.",
      "Convert the value and use the swap button when you need to reverse the direction.",
    ],
    whenToUse: [
      "Converting recipe, DIY, travel, shipping, study, or product measurements.",
      "Switching between metric and imperial values for international references.",
      "Checking temperature, distance, weight, volume, or area values before making a decision.",
    ],
    faqs: [
      {
        question: "What units can I convert?",
        answer:
          "The converter supports common length, weight, temperature, volume, and area units including metres, miles, kilograms, pounds, Celsius, Fahrenheit, litres, gallons, square metres, and acres.",
      },
      {
        question: "How accurate are the conversions?",
        answer:
          "The tool uses standard conversion factors and rounds results for readability. For regulated engineering or scientific work, verify against the required standard.",
      },
      {
        question: "What is the difference between US and UK gallons?",
        answer:
          "A US gallon is about 3.785 litres, while a UK imperial gallon is about 4.546 litres. Choose the unit that matches your source.",
      },
      {
        question: "Can I convert temperatures?",
        answer:
          "Yes. Temperature uses formulas rather than simple multiplication, so Celsius, Fahrenheit, and Kelvin conversions are handled separately.",
      },
    ],
    relatedSlugs: ["timezone-converter", "salary-to-hourly-calculator", "url-encoder-decoder", "base64-encoder-decoder"],
  },
];

const seoToolCategorySlugs: Record<string, SiteCategorySlug[]> = {
  "compound-interest-calculator": ["financial-tools"],
  "loan-repayment-calculator": ["financial-tools"],
  "mortgage-overpayment-calculator": ["financial-tools"],
  "savings-goal-calculator": ["financial-tools", "health-lifestyle-tools"],
  "budget-planner": ["financial-tools"],
  "salary-to-hourly-calculator": ["financial-tools", "converters"],
  "break-even-calculator": ["financial-tools", "productivity-tools"],
  "pomodoro-timer": ["productivity-tools", "health-lifestyle-tools"],
  "task-priority-matrix": ["productivity-tools"],
  "meeting-cost-calculator": ["productivity-tools"],
  "reading-time-calculator": ["productivity-tools", "health-lifestyle-tools"],
  "time-card-calculator": ["productivity-tools", "time-date-tools"],
  "deadline-countdown-calculator": ["time-date-tools", "productivity-tools"],
  "url-encoder-decoder": ["internet-tools", "converters"],
  "base64-encoder-decoder": ["internet-tools", "converters"],
  "json-formatter-validator": ["internet-tools"],
  "utm-builder": ["internet-tools"],
  "email-link-generator": ["internet-tools"],
  "meta-tag-preview-checker": ["internet-tools"],
  "uk-holiday-entitlement-calculator": ["time-date-tools", "health-lifestyle-tools"],
  "uk-take-home-pay-estimator": ["financial-tools"],
  "uk-statutory-sick-pay-calculator": ["health-lifestyle-tools"],
  "uk-redundancy-pay-calculator": ["financial-tools"],
  "uk-notice-period-calculator": ["productivity-tools", "time-date-tools"],
  "uk-working-days-calculator": ["time-date-tools", "productivity-tools"],
  "uk-electricity-cost-calculator": ["financial-tools", "converters"],
  "uk-gas-bill-calculator": ["financial-tools", "converters"],
  "uk-energy-direct-debit-calculator": ["financial-tools"],
  "uk-water-bill-calculator": ["financial-tools", "converters"],
};

const seoSiteTools: SiteTool[] = seoTools.map((tool) => ({
  slug: tool.slug,
  title: tool.title,
  shortTitle: tool.shortTitle,
  description: tool.description,
  href: `/tools/${tool.slug}`,
  icon: tool.icon,
  keywords: tool.keywords,
  categorySlugs: seoToolCategorySlugs[tool.slug] ?? ["productivity-tools"],
}));

export const allSiteTools: SiteTool[] = [...coreTools, ...seoSiteTools];

export const siteCategories: SiteCategory[] = [
  {
    slug: "financial-tools",
    path: "/financial-tools",
    title: "Financial Tools",
    shortTitle: "Financial",
    description:
      "Plan costs, compare repayments, estimate bills, and make everyday money decisions with practical calculators.",
    seoTitle: "Free Financial Tools and Calculators",
    metaDescription:
      "Use free financial tools for VAT, fuel costs, budgets, savings goals, loans, mortgages, salary conversion, UK pay, and household bills.",
    icon: "Landmark",
    keywords: ["VAT", "budget", "loan", "savings", "mortgage", "energy bills"],
    content: [
      "Financial decisions are easier when the basic arithmetic is visible. Daily Utility Dock brings together free calculators for common money questions, from adding VAT to a price through to estimating fuel costs, monthly loan payments, household energy bills, savings targets, and take-home pay. Each tool is designed for quick planning rather than complex spreadsheets, so you can test a scenario and understand the main inputs before you commit to a purchase, quote, repayment, or monthly budget.",
      "This category is useful for personal budgeting, small business checks, and household cost planning. You can compare the effect of different loan terms, see how overpayments may reduce mortgage interest, estimate whether a direct debit looks realistic, or work out the cost of running an appliance. The calculators show the assumptions clearly and keep results readable on mobile as well as desktop, which makes them practical for checking figures while reviewing a bill, invoice, or supplier quote.",
      "The tools are not financial advice and they do not replace an accountant, lender, payroll provider, or regulated adviser. They are intended to make everyday numbers easier to explore. Where tax rules, employment rules, product fees, tariffs, or statutory rates matter, use the result as a guide and verify the current official position before acting. This is especially important for VAT registration, payroll, mortgages, redundancy pay, and utility tariffs because rules and rates can change.",
      "For a complete workflow, start with the budget planner, then move to loan, savings, VAT, fuel, or utility calculators depending on the decision you are making. Related category links connect financial tools with converters, productivity planners, and health and lifestyle utilities so visitors can continue from a money estimate to the next practical step without searching again.",
    ],
    faqs: [
      {
        question: "Are the financial calculators free?",
        answer:
          "Yes. The tools are free to use and are designed for quick planning without requiring an account.",
      },
      {
        question: "Can these tools replace professional financial advice?",
        answer:
          "No. They provide transparent estimates based on your inputs. For regulated advice, tax decisions, lending, payroll, or legal questions, speak to a qualified professional or official source.",
      },
      {
        question: "Why do some calculators use UK examples?",
        answer:
          "Daily Utility Dock includes several UK-focused tools because VAT, PAYE, statutory pay, and utility billing rules are country-specific. General calculators such as budgets, savings, and loans can still be useful more broadly.",
      },
      {
        question: "How should I use the results?",
        answer:
          "Treat results as planning estimates. Change the inputs, compare scenarios, and verify important figures against bills, contracts, payslips, supplier terms, or official guidance.",
      },
    ],
    relatedCategorySlugs: ["converters", "productivity-tools", "health-lifestyle-tools"],
    toolSlugs: [
      "vat-calculator",
      "fuel-calculator",
      "budget-planner",
      "compound-interest-calculator",
      "loan-repayment-calculator",
      "mortgage-overpayment-calculator",
      "savings-goal-calculator",
      "salary-to-hourly-calculator",
      "break-even-calculator",
      "uk-take-home-pay-estimator",
      "uk-redundancy-pay-calculator",
      "uk-electricity-cost-calculator",
      "uk-gas-bill-calculator",
      "uk-energy-direct-debit-calculator",
      "uk-water-bill-calculator",
    ],
  },
  {
    slug: "time-date-tools",
    path: "/time-date-tools",
    title: "Time & Date Tools",
    shortTitle: "Time & Date",
    description:
      "Coordinate time zones, count dates, calculate age, track deadlines, and plan working days.",
    seoTitle: "Free Time and Date Tools",
    metaDescription:
      "Use free time and date tools including world clock, time zone converter, age calculator, deadline countdown, time card, working days, and holiday entitlement calculators.",
    icon: "Clock",
    keywords: ["world clock", "time zones", "age", "deadline", "working days", "timesheet"],
    content: [
      "Time and date tasks often look simple until a deadline crosses midnight, a meeting involves several countries, or a working-day count needs weekends and closures removed. The Time & Date Tools section groups practical utilities for these everyday problems: world clocks, time zone conversion, age calculation, deadline countdowns, timesheets, UK working-day counts, holiday entitlement estimates, and notice-period planning.",
      "The category is built for people who need fast answers while planning work, travel, events, payroll, study, or personal milestones. A remote team can compare current city times, convert a meeting invite into another time zone, estimate the cost or duration of a meeting, and then count working days until a deadline. A household user can calculate exact age, check an upcoming birthday, or count calendar and business days for an appointment or application window.",
      "Each tool keeps its assumptions visible. Time zone utilities rely on browser time zone data, date calculators use the dates you enter, and UK workplace tools include clear notes about statutory rules and simplified estimates. This makes the pages useful for planning and checking, while still reminding visitors to verify employment, payroll, or legal decisions against official guidance where necessary.",
      "Use the related links on each tool page to move between time planning steps. For example, start with the World Clock, convert a specific meeting time, calculate the deadline countdown, and then use the Working Days Calculator if the schedule depends on weekdays rather than calendar days. This internal linking helps visitors find the next relevant tool and helps search engines understand the site as a genuine utility platform.",
    ],
    faqs: [
      {
        question: "Do time zone tools handle daylight saving time?",
        answer:
          "The time zone tools use browser-supported time zone data and the selected date, so daylight saving adjustments can be applied where the browser has the relevant rules.",
      },
      {
        question: "Can I use these tools for workplace planning?",
        answer:
          "Yes. Time cards, working days, notice periods, and holiday entitlement tools are useful for planning, but employment and payroll decisions should be checked against contracts and official guidance.",
      },
      {
        question: "What is the difference between calendar days and working days?",
        answer:
          "Calendar days include every day in the date range. Working days usually exclude weekends and may also exclude bank holidays, annual leave, or company closures.",
      },
      {
        question: "Are the date calculations stored?",
        answer:
          "Most date and time calculations run in the browser for immediate use. The site is designed for quick utility tasks rather than storing schedules or personal records.",
      },
    ],
    relatedCategorySlugs: ["productivity-tools", "converters", "health-lifestyle-tools"],
    toolSlugs: [
      "world-clock",
      "timezone-converter",
      "age-calculator",
      "deadline-countdown-calculator",
      "time-card-calculator",
      "uk-working-days-calculator",
      "uk-holiday-entitlement-calculator",
      "uk-notice-period-calculator",
      "pomodoro-timer",
    ],
  },
  {
    slug: "internet-tools",
    path: "/internet-tools",
    title: "Internet & IT Tools",
    shortTitle: "Internet & IT",
    description:
      "Use browser-based utilities for networking, security, encoding, structured data, campaign links, and web previews.",
    seoTitle: "Free Internet and IT Tools",
    metaDescription:
      "Use free internet and IT tools for speed testing, IP checking, passwords, QR codes, JSON formatting, URL encoding, Base64, UTM links, email links, and meta previews.",
    icon: "Gauge",
    keywords: ["speed test", "password", "IP checker", "JSON", "Base64", "UTM"],
    content: [
      "Internet and IT tasks often need a small utility rather than a full application. This category collects practical browser tools for connection checks, basic security, developer formatting, campaign links, and web publishing previews. You can test internet speed, check your public IP address, generate a password, create QR codes, format JSON, encode URL text, convert Base64, build UTM links, generate mailto links, and preview title and meta description snippets.",
      "The tools are intentionally lightweight. Many calculations and transformations happen in the browser, which keeps the experience fast and avoids unnecessary account steps. A developer can format a JSON payload, encode a query parameter, and decode a Base64 string. A marketer can build a UTM campaign URL, preview metadata, and create a QR code for printed material. A home user can check whether a VPN is active, test connection speed, or generate a unique password for a new account.",
      "These utilities are best used as helpers for everyday work and troubleshooting. They do not replace professional security audits, production monitoring, analytics governance, or dedicated developer tooling, but they are useful when you need a quick answer or clean output. The pages include plain-language notes so users understand what the tool does, what it does not do, and which assumptions matter.",
      "Internal links connect related IT workflows. For example, after building a UTM link you can encode URL components, generate an email link, preview metadata, or create a QR code. After checking your IP address, you can test speed or generate secure credentials. This connected structure makes Daily Utility Dock more useful than a list of isolated generated pages.",
    ],
    faqs: [
      {
        question: "Are the text conversion tools private?",
        answer:
          "Tools such as URL encoding, Base64 conversion, and JSON formatting run in the browser for typical pasted text. Avoid entering secrets into any online tool unless you are comfortable with the environment.",
      },
      {
        question: "Can the password generator replace a password manager?",
        answer:
          "No. It can create a strong password, but a trusted password manager is still recommended for storing and autofilling unique credentials.",
      },
      {
        question: "What are UTM links used for?",
        answer:
          "UTM links add campaign parameters to a URL so analytics tools can group traffic by source, medium, campaign, term, or content.",
      },
      {
        question: "Why are QR codes included in Internet tools?",
        answer:
          "QR codes often bridge offline and online content, such as linking a poster, menu, event handout, or product label to a web page.",
      },
    ],
    relatedCategorySlugs: ["converters", "productivity-tools", "financial-tools"],
    toolSlugs: [
      "speed-test",
      "password-generator",
      "ip-checker",
      "qr-generator",
      "json-formatter-validator",
      "url-encoder-decoder",
      "base64-encoder-decoder",
      "utm-builder",
      "email-link-generator",
      "meta-tag-preview-checker",
    ],
  },
  {
    slug: "converters",
    path: "/converters",
    title: "Converters",
    shortTitle: "Converters",
    description:
      "Convert measurements, time zones, salary rates, encoded text, and household billing units.",
    seoTitle: "Free Online Converters",
    metaDescription:
      "Use free online converters for units, time zones, salary to hourly pay, URL encoding, Base64, electricity, gas, and water bill units.",
    icon: "ArrowLeftRight",
    keywords: ["unit converter", "timezone", "salary converter", "URL encode", "Base64", "gas kWh"],
    content: [
      "Converters save time when the information you have is not in the format you need. Daily Utility Dock groups everyday conversion tools for measurements, time zones, pay rates, encoded text, and household utility units. Instead of searching for separate formulas, you can convert length, weight, temperature, volume, area, time zones, annual salary, URL-safe text, Base64 text, gas meter readings, water usage, and electricity running costs from one connected section.",
      "The category supports both personal and work tasks. A traveller might convert temperatures and distances, then use the time zone converter before booking a call. A developer can encode a URL parameter or decode Base64 while debugging. A household user can convert gas meter units into kWh, estimate appliance electricity use, or model water usage in cubic metres. A worker or contractor can convert annual salary into weekly, daily, or hourly equivalents.",
      "The tools are clear about what is being converted and where assumptions apply. Measurement conversion uses standard factors, temperature uses formulas, and utility bill converters depend on rates from your bill or supplier. This makes the results useful for quick planning while still encouraging users to verify important figures for official, regulated, or high-value decisions.",
      "Converters also support other categories on the site. Financial tools may need salary, energy, or bill-unit conversions. Time tools may need time zone conversion. Internet tools often require URL encoding or Base64 conversion. By linking these pages together, visitors can move naturally from one task to the next and avoid orphaned utility pages.",
    ],
    faqs: [
      {
        question: "Which converter should I start with?",
        answer:
          "Use the Unit Converter for physical measurements, the Time Zone Converter for meeting times, Salary to Hourly for pay rates, and URL or Base64 tools for text encoding tasks.",
      },
      {
        question: "Are conversions exact?",
        answer:
          "Some conversions use exact definitions while others are rounded for readability. Utility bill estimates also depend on rates, readings, and assumptions from your supplier.",
      },
      {
        question: "Can converters help with bills?",
        answer:
          "Yes. Gas, electricity, and water tools convert usage into cost estimates when you enter the relevant tariff or bill figures.",
      },
      {
        question: "Do the text converters upload data?",
        answer:
          "The URL and Base64 conversion tools are designed to run in the browser for typical text snippets. Avoid pasting sensitive secrets into any web tool.",
      },
    ],
    relatedCategorySlugs: ["internet-tools", "financial-tools", "time-date-tools"],
    toolSlugs: [
      "unit-converter",
      "timezone-converter",
      "salary-to-hourly-calculator",
      "url-encoder-decoder",
      "base64-encoder-decoder",
      "uk-electricity-cost-calculator",
      "uk-gas-bill-calculator",
      "uk-water-bill-calculator",
    ],
  },
  {
    slug: "productivity-tools",
    path: "/productivity-tools",
    title: "Productivity Tools",
    shortTitle: "Productivity",
    description:
      "Prioritise tasks, estimate meeting cost, track focus, calculate reading time, and plan deadlines.",
    seoTitle: "Free Productivity Tools",
    metaDescription:
      "Use free productivity tools including Pomodoro timer, task priority matrix, meeting cost calculator, reading time calculator, time card, deadline countdown, and working-day tools.",
    icon: "ListChecks",
    keywords: ["pomodoro", "priority matrix", "meeting cost", "reading time", "time card", "deadline"],
    content: [
      "Productivity improves when decisions are easier to make and distractions have fewer places to hide. This category brings together simple tools for focus, prioritisation, time tracking, meeting evaluation, reading estimates, deadlines, and workplace planning. The aim is not to replace a full project management system, but to provide quick utilities that help you decide what to do next, how long something may take, and whether a task or meeting is worth the time it consumes.",
      "Start with the task priority matrix when you have competing work and need a clear recommendation. Use the Pomodoro timer to protect a focused session, the reading time calculator to estimate content length, the meeting cost calculator to make hidden time costs visible, and the deadline countdown to keep important dates in view. Time card, working-day, notice-period, and break-even calculators support more structured planning when work hours, business viability, or employment dates matter.",
      "The tools are deliberately small and readable. They use the inputs you provide, show the assumptions, and keep results focused on action. That makes them suitable for everyday planning by freelancers, students, managers, office workers, and small business owners. For official HR, payroll, or legal decisions, use the calculators as guides and verify against contracts, policies, or official rules.",
      "Internal links connect productivity tasks with finance, time, and health and lifestyle tools. For example, a meeting cost estimate may lead to a time card calculation, a deadline countdown, or a priority matrix decision. A focus session may connect to reading time or task prioritisation. The result is a more complete utility platform where each page helps visitors find a useful next step.",
    ],
    faqs: [
      {
        question: "Are these productivity tools task managers?",
        answer:
          "No. They are focused calculators and helpers. Use them to estimate, prioritise, or time a task, then record the outcome in your normal planning system if needed.",
      },
      {
        question: "How can I use the Pomodoro timer effectively?",
        answer:
          "Choose one task, start a focused session, avoid switching context, and use the break to reset before deciding whether to continue.",
      },
      {
        question: "Why calculate meeting cost?",
        answer:
          "A meeting cost estimate makes time investment visible. It can help reduce unnecessary attendees, improve agendas, or replace low-value meetings with written updates.",
      },
      {
        question: "Can these tools help with deadlines?",
        answer:
          "Yes. Use the deadline countdown, working-days calculator, time card, and priority matrix together to understand available time and next actions.",
      },
    ],
    relatedCategorySlugs: ["time-date-tools", "financial-tools", "health-lifestyle-tools"],
    toolSlugs: [
      "pomodoro-timer",
      "task-priority-matrix",
      "meeting-cost-calculator",
      "reading-time-calculator",
      "time-card-calculator",
      "deadline-countdown-calculator",
      "break-even-calculator",
      "uk-notice-period-calculator",
      "uk-working-days-calculator",
    ],
  },
  {
    slug: "health-lifestyle-tools",
    path: "/health-lifestyle-tools",
    title: "Health & Lifestyle Tools",
    shortTitle: "Health & Lifestyle",
    description:
      "Use everyday planning tools for age, focus, travel fuel costs, reading time, savings goals, sick pay, and holiday entitlement.",
    seoTitle: "Free Health and Lifestyle Tools",
    metaDescription:
      "Use free health and lifestyle tools for age calculation, focus sessions, reading time, travel fuel costs, savings goals, UK sick pay, and holiday entitlement planning.",
    icon: "HeartPulse",
    keywords: ["age calculator", "focus timer", "fuel cost", "reading time", "sick pay", "holiday entitlement"],
    content: [
      "Health and lifestyle planning often involves everyday numbers rather than medical diagnostics. This section collects practical tools for personal routines, life admin, wellbeing-adjacent planning, travel costs, age milestones, reading estimates, focus sessions, savings goals, holiday entitlement, and UK statutory sick pay estimates. The goal is to help visitors answer common questions quickly without pretending to provide clinical, legal, or financial advice.",
      "Use the age calculator for birthdays, milestones, eligibility windows, or personal records. Use the Pomodoro timer to structure focus and breaks, the reading time calculator to plan study or presentations, and the fuel cost calculator to budget journeys. Savings and holiday tools help with personal goals and time off planning, while the sick pay estimator gives a transparent planning figure for one UK workplace scenario.",
      "Because this category touches personal, work, and wellbeing contexts, the pages are careful about scope. They are calculators and planners, not substitutes for a doctor, employer, payroll team, legal adviser, or financial adviser. Where a statutory rule or workplace policy matters, verify the current official guidance and your contract. Where health is involved, use qualified medical advice rather than relying on a general utility page.",
      "The category is linked to finance, productivity, and time tools because lifestyle planning rarely sits in one box. A journey cost may affect a budget, a savings goal may affect monthly planning, a focus timer may connect to deadlines, and holiday entitlement may connect to working days. These links make the site easier to navigate and reduce thin, isolated pages.",
    ],
    faqs: [
      {
        question: "Are these medical tools?",
        answer:
          "No. This category contains lifestyle and planning utilities. It does not provide diagnosis, treatment, or medical advice.",
      },
      {
        question: "Can I use the sick pay calculator for official payroll?",
        answer:
          "Use it only as a planning estimate. SSP eligibility, rates, linked absences, and employer policies can be complex, so verify with GOV.UK, payroll, or HR.",
      },
      {
        question: "How do focus and reading tools fit this category?",
        answer:
          "They support everyday routines, study planning, attention management, and personal productivity, which are common lifestyle tasks.",
      },
      {
        question: "Why are finance-related tools included here?",
        answer:
          "Some lifestyle decisions, such as travel, savings goals, or time off, have a money component. Related links connect those calculations to more detailed financial tools.",
      },
    ],
    relatedCategorySlugs: ["productivity-tools", "time-date-tools", "financial-tools"],
    toolSlugs: [
      "age-calculator",
      "pomodoro-timer",
      "reading-time-calculator",
      "fuel-calculator",
      "savings-goal-calculator",
      "uk-statutory-sick-pay-calculator",
      "uk-holiday-entitlement-calculator",
    ],
  },
];

export function getSiteTool(slug: string) {
  return allSiteTools.find((tool) => tool.slug === slug);
}

export function getCoreTool(slug: string) {
  return coreTools.find((tool) => tool.slug === slug);
}

export function getSiteCategory(slug: SiteCategorySlug | string) {
  return siteCategories.find((category) => category.slug === slug);
}

export function getToolsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getSiteTool(slug))
    .filter((tool): tool is SiteTool => Boolean(tool));
}

export function getToolsForCategory(slug: SiteCategorySlug | string) {
  const category = getSiteCategory(slug);

  if (!category) {
    return [];
  }

  return getToolsBySlugs(category.toolSlugs);
}

export function getRelatedSiteTools(
  relatedSlugs: string[],
  currentSlug: string,
  categorySlugs: SiteCategorySlug[] = [],
  limit = 6
) {
  const explicit = getToolsBySlugs(relatedSlugs).filter((tool) => tool.slug !== currentSlug);
  const seen = new Set(explicit.map((tool) => tool.slug));
  seen.add(currentSlug);

  const categoryMatches = allSiteTools.filter(
    (tool) =>
      !seen.has(tool.slug) &&
      tool.categorySlugs.some((categorySlug) => categorySlugs.includes(categorySlug))
  );

  return [...explicit, ...categoryMatches].slice(0, limit);
}
