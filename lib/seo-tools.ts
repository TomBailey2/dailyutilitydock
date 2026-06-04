export type ToolCategory =
  | "Finance"
  | "Productivity"
  | "Internet Utilities"
  | "UK Workplace"
  | "UK Utilities"
  | "USA Tools"
  | "Canada Tools"
  | "Australia Tools";

export type ToolType =
  | "compound-interest"
  | "loan-repayment"
  | "mortgage-overpayment"
  | "savings-goal"
  | "budget-planner"
  | "salary-hourly"
  | "break-even"
  | "pomodoro"
  | "priority-matrix"
  | "meeting-cost"
  | "reading-time"
  | "time-card"
  | "deadline-countdown"
  | "url-codec"
  | "base64-codec"
  | "json-formatter"
  | "utm-builder"
  | "email-link"
  | "meta-preview"
  | "uk-holiday"
  | "uk-take-home"
  | "uk-ssp"
  | "uk-redundancy"
  | "uk-notice"
  | "uk-working-days"
  | "uk-electricity-cost"
  | "uk-gas-bill"
  | "uk-energy-direct-debit"
  | "uk-water-bill"
  | "country-sales-tax"
  | "country-mortgage"
  | "country-loan"
  | "country-salary"
  | "country-savings";

export interface SeoTool {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: ToolCategory;
  toolType: ToolType;
  icon: string;
  keywords: string[];
  intro: string;
  howTo: string[];
  notes: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
}

export const seoTools: SeoTool[] = [
  {
    slug: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    shortTitle: "Compound Interest",
    description: "Estimate future savings growth with deposits, interest, and compounding.",
    category: "Finance",
    toolType: "compound-interest",
    icon: "PiggyBank",
    keywords: ["compound interest calculator", "savings growth calculator", "investment calculator"],
    intro:
      "Model how an initial balance and regular monthly deposits can grow over time with compound interest. The result separates contributions from interest so you can see what is doing the work.",
    howTo: [
      "Enter your starting balance and any monthly contribution you plan to add.",
      "Add the expected annual interest rate and the number of years.",
      "Choose how often interest compounds, then review the projected final balance and interest earned.",
    ],
    notes: [
      "This calculator is for planning only and does not include tax, product fees, inflation, or investment risk.",
      "Small changes to the rate or contribution can have a large effect over long periods, so test several scenarios.",
    ],
    faqs: [
      {
        question: "What is compound interest?",
        answer:
          "Compound interest is interest earned on both your original money and interest already added. Over time, this can increase growth compared with simple interest.",
      },
      {
        question: "Does this guarantee my savings return?",
        answer:
          "No. It is an estimate based on the numbers you enter. Actual savings and investment returns can vary because of product terms, fees, tax, and market movement.",
      },
      {
        question: "Can I use this for monthly investing?",
        answer:
          "Yes, it can model regular monthly deposits, but it does not account for investment volatility or platform charges.",
      },
    ],
    relatedSlugs: ["savings-goal-calculator", "budget-planner", "loan-repayment-calculator"],
  },
  {
    slug: "loan-repayment-calculator",
    title: "Loan Repayment Calculator",
    shortTitle: "Loan Repayments",
    description: "Calculate estimated monthly loan payments, total interest, and total repayable.",
    category: "Finance",
    toolType: "loan-repayment",
    icon: "Landmark",
    keywords: ["loan repayment calculator", "monthly loan payment", "APR calculator"],
    intro:
      "Estimate the monthly payment on a fixed-rate loan using the amount borrowed, APR, and term. It is useful for comparing different loan sizes and repayment periods before you apply.",
    howTo: [
      "Enter the loan amount, APR, term, and any upfront fee you want included.",
      "Calculate the estimated monthly payment and total amount repayable.",
      "Try a shorter or longer term to compare the monthly cost against total interest.",
    ],
    notes: [
      "The calculation assumes a fixed rate and equal monthly payments for the full term.",
      "Lenders may calculate interest, fees, and settlement figures differently, so use this as a planning guide.",
    ],
    faqs: [
      {
        question: "What does APR mean?",
        answer:
          "APR stands for annual percentage rate. It is intended to show the yearly cost of borrowing, including interest and certain compulsory charges.",
      },
      {
        question: "Why does a longer loan term cost more overall?",
        answer:
          "A longer term usually lowers each monthly payment, but interest is charged for more months, increasing the total paid.",
      },
      {
        question: "Can this calculator handle interest-free loans?",
        answer:
          "Yes. Enter 0 as the APR and it will divide the amount by the number of monthly payments.",
      },
    ],
    relatedSlugs: ["budget-planner", "break-even-calculator", "compound-interest-calculator"],
  },
  {
    slug: "mortgage-overpayment-calculator",
    title: "Mortgage Overpayment Calculator",
    shortTitle: "Mortgage Overpayment",
    description: "Estimate interest saved and time reduced by regular mortgage overpayments.",
    category: "Finance",
    toolType: "mortgage-overpayment",
    icon: "Home",
    keywords: ["mortgage overpayment calculator", "overpay mortgage", "mortgage interest saved"],
    intro:
      "See how an extra monthly or one-off mortgage overpayment could reduce the interest you pay and shorten the remaining term on a repayment mortgage.",
    howTo: [
      "Enter your current mortgage balance, interest rate, and remaining term.",
      "Add a monthly overpayment and optional one-off overpayment.",
      "Compare the estimated payoff time and interest with and without overpayments.",
    ],
    notes: [
      "The result assumes a constant rate, repayment mortgage, and no changes to fees or payment rules.",
      "Check your lender's overpayment allowance and early repayment charges before making extra payments.",
    ],
    faqs: [
      {
        question: "Will mortgage overpayments always save interest?",
        answer:
          "On a repayment mortgage, reducing the balance earlier usually reduces interest, but fees or early repayment charges can change the benefit.",
      },
      {
        question: "Does this include remortgaging or rate changes?",
        answer:
          "No. It uses one interest rate for the full calculation so that scenarios are easy to compare.",
      },
      {
        question: "What is a one-off overpayment?",
        answer:
          "A one-off overpayment is an extra lump sum paid against the mortgage balance in addition to normal monthly payments.",
      },
    ],
    relatedSlugs: ["loan-repayment-calculator", "savings-goal-calculator", "budget-planner"],
  },
  {
    slug: "savings-goal-calculator",
    title: "Savings Goal Calculator",
    shortTitle: "Savings Goal",
    description: "Work out how long it may take to reach a savings target.",
    category: "Finance",
    toolType: "savings-goal",
    icon: "Target",
    keywords: ["savings goal calculator", "save money target", "monthly savings calculator"],
    intro:
      "Plan a savings target by combining what you already have, your monthly saving amount, and an optional annual interest rate.",
    howTo: [
      "Enter your target amount and current savings.",
      "Add how much you can save each month and an expected interest rate if relevant.",
      "Review the estimated months to target and the required average pace.",
    ],
    notes: [
      "The estimate assumes you save the same amount every month.",
      "If your monthly amount is zero, the tool can only project growth when an interest rate is entered.",
    ],
    faqs: [
      {
        question: "Can this calculate an emergency fund target?",
        answer:
          "Yes. Enter your emergency fund target, current savings, and regular monthly saving amount to estimate when you may reach it.",
      },
      {
        question: "Does interest make a big difference?",
        answer:
          "Interest can help, especially for longer goals, but regular deposits are often the main driver for short-term targets.",
      },
      {
        question: "What if I need the target sooner?",
        answer:
          "Increase the monthly saving amount or reduce the target to see how the timeline changes.",
      },
    ],
    relatedSlugs: ["compound-interest-calculator", "budget-planner", "salary-to-hourly-calculator"],
  },
  {
    slug: "budget-planner",
    title: "Monthly Budget Planner",
    shortTitle: "Budget Planner",
    description: "Create a quick monthly budget and see income, spending, and leftover cash.",
    category: "Finance",
    toolType: "budget-planner",
    icon: "Wallet",
    keywords: ["budget planner", "monthly budget calculator", "household budget"],
    intro:
      "Build a simple monthly budget by entering take-home income and common spending categories. The summary highlights surplus, deficit, and savings rate.",
    howTo: [
      "Enter your monthly take-home income.",
      "Fill in regular costs such as rent, bills, groceries, transport, debt, savings, and other spending.",
      "Use the result to spot pressure points and adjust categories.",
    ],
    notes: [
      "A budget works best when it uses real bank statement figures rather than guesses.",
      "Treat the output as a practical snapshot, not financial advice.",
    ],
    faqs: [
      {
        question: "Should savings count as spending?",
        answer:
          "In this planner, savings are treated as a planned allocation so you can see how much unassigned money remains after paying yourself first.",
      },
      {
        question: "What is a healthy savings rate?",
        answer:
          "It depends on income, debt, and goals. Many people use 10% to 20% as a starting benchmark, then adjust for their situation.",
      },
      {
        question: "Can I use weekly numbers?",
        answer:
          "The planner is monthly. Convert weekly amounts by multiplying by 52 and dividing by 12 for a monthly equivalent.",
      },
    ],
    relatedSlugs: ["savings-goal-calculator", "loan-repayment-calculator", "uk-take-home-pay-estimator"],
  },
  {
    slug: "salary-to-hourly-calculator",
    title: "Salary to Hourly Rate Calculator",
    shortTitle: "Salary to Hourly",
    description: "Convert annual salary into weekly, daily, and hourly pay estimates.",
    category: "Finance",
    toolType: "salary-hourly",
    icon: "Clock",
    keywords: ["salary to hourly calculator", "hourly rate calculator", "annual salary converter"],
    intro:
      "Convert an annual salary into approximate monthly, weekly, daily, and hourly equivalents using your working hours and days.",
    howTo: [
      "Enter your annual salary before deductions.",
      "Add your usual weekly hours and working days per week.",
      "Optionally include paid holiday days to compare calendar and worked-day rates.",
    ],
    notes: [
      "This is a gross pay conversion and does not deduct tax, National Insurance, pension, or benefits.",
      "For UK net pay, use the related take-home pay estimator.",
    ],
    faqs: [
      {
        question: "Is the hourly rate before or after tax?",
        answer:
          "The hourly rate is gross before tax and deductions. Use a take-home pay calculator for estimated net pay.",
      },
      {
        question: "Why enter working days per week?",
        answer:
          "Working days help estimate daily pay and worked-day hourly equivalents more accurately for part-time patterns.",
      },
      {
        question: "Does this include overtime?",
        answer:
          "No. It uses normal contracted hours. Add overtime separately if it is paid at a different rate.",
      },
    ],
    relatedSlugs: ["uk-take-home-pay-estimator", "uk-holiday-entitlement-calculator", "budget-planner"],
  },
  {
    slug: "break-even-calculator",
    title: "Break-Even Calculator",
    shortTitle: "Break-Even",
    description: "Calculate how many units or sales you need to cover fixed costs.",
    category: "Finance",
    toolType: "break-even",
    icon: "TrendingUp",
    keywords: ["break even calculator", "business break even", "unit margin calculator"],
    intro:
      "Estimate the number of units you need to sell to cover fixed costs based on selling price and variable cost per unit.",
    howTo: [
      "Enter fixed costs for the period you want to analyse.",
      "Add your selling price per unit and variable cost per unit.",
      "Review contribution margin, break-even units, and break-even revenue.",
    ],
    notes: [
      "The calculation assumes each unit has the same price and variable cost.",
      "Use realistic cost categories so the break-even point is not understated.",
    ],
    faqs: [
      {
        question: "What is contribution margin?",
        answer:
          "Contribution margin is selling price minus variable cost per unit. It is the amount each sale contributes towards fixed costs and profit.",
      },
      {
        question: "What if variable cost is higher than price?",
        answer:
          "The tool will show that break-even is not possible because each sale loses money before fixed costs.",
      },
      {
        question: "Can this be used for services?",
        answer:
          "Yes. Treat one billable hour, project, or package as a unit and enter the matching price and variable cost.",
      },
    ],
    relatedSlugs: ["budget-planner", "loan-repayment-calculator", "meeting-cost-calculator"],
  },
  {
    slug: "pomodoro-timer",
    title: "Pomodoro Timer",
    shortTitle: "Pomodoro Timer",
    description: "Run focused work and break sessions with a simple browser timer.",
    category: "Productivity",
    toolType: "pomodoro",
    icon: "Timer",
    keywords: ["pomodoro timer", "focus timer", "productivity timer"],
    intro:
      "Use a focused work timer with short breaks to protect attention and build momentum. The timer runs in your browser with adjustable work and break lengths.",
    howTo: [
      "Set your work session and break duration.",
      "Start the timer and focus on one task until the session ends.",
      "Reset or switch between work and break mode as needed.",
    ],
    notes: [
      "Keep the tab open while the timer runs.",
      "Browser power-saving settings may affect timers if the device sleeps.",
    ],
    faqs: [
      {
        question: "How long is a standard Pomodoro?",
        answer:
          "A common pattern is 25 minutes of focused work followed by a 5 minute break, but you can adjust the durations.",
      },
      {
        question: "Should I pause the timer for interruptions?",
        answer:
          "For best results, record the interruption and return to the task. If the interruption takes over, reset and start a fresh session later.",
      },
      {
        question: "Does the timer store my tasks?",
        answer:
          "No. It is a lightweight timer and does not store task history.",
      },
    ],
    relatedSlugs: ["task-priority-matrix", "reading-time-calculator", "deadline-countdown-calculator"],
  },
  {
    slug: "task-priority-matrix",
    title: "Task Priority Matrix",
    shortTitle: "Priority Matrix",
    description: "Score tasks by urgency and impact to choose what to do next.",
    category: "Productivity",
    toolType: "priority-matrix",
    icon: "ListChecks",
    keywords: ["task priority matrix", "urgent important matrix", "prioritisation tool"],
    intro:
      "Prioritise a task using urgency, impact, effort, and due date pressure. The result suggests whether to do it now, schedule it, delegate it, or reduce scope.",
    howTo: [
      "Describe the task and rate urgency, impact, and effort.",
      "Add the due date pressure in hours if there is a deadline.",
      "Use the recommendation to decide the next action.",
    ],
    notes: [
      "Priority scores work best when compared across several tasks.",
      "A high-effort task with high impact may need scheduling rather than immediate execution.",
    ],
    faqs: [
      {
        question: "What is an urgent important matrix?",
        answer:
          "It is a prioritisation method that separates tasks by deadline pressure and value, helping you focus on important work instead of only urgent work.",
      },
      {
        question: "Can this replace a task manager?",
        answer:
          "No. It helps decide priority for a task, then you can record the task in your normal system.",
      },
      {
        question: "How should I rate impact?",
        answer:
          "Rate impact by the value created, risk reduced, or blocker removed if the task is completed.",
      },
    ],
    relatedSlugs: ["pomodoro-timer", "deadline-countdown-calculator", "meeting-cost-calculator"],
  },
  {
    slug: "meeting-cost-calculator",
    title: "Meeting Cost Calculator",
    shortTitle: "Meeting Cost",
    description: "Estimate the staff cost of a meeting based on attendees and duration.",
    category: "Productivity",
    toolType: "meeting-cost",
    icon: "Users",
    keywords: ["meeting cost calculator", "staff meeting cost", "productivity calculator"],
    intro:
      "Put a practical cost beside a meeting by estimating the time value of attendees, meeting duration, and preparation time.",
    howTo: [
      "Enter the number of attendees and an average hourly cost.",
      "Add the meeting length and any preparation or follow-up time per person.",
      "Use the total to decide whether the meeting needs a clearer agenda or smaller invite list.",
    ],
    notes: [
      "Use loaded hourly cost if you want to include employer overheads, not just salary.",
      "The tool estimates time cost only and does not measure meeting value.",
    ],
    faqs: [
      {
        question: "Why calculate meeting cost?",
        answer:
          "It makes hidden time costs visible, which can improve agenda quality, attendee selection, and meeting length.",
      },
      {
        question: "Should I include preparation time?",
        answer:
          "Yes if preparation or follow-up is expected. It is often a meaningful part of the true meeting cost.",
      },
      {
        question: "Does a high cost mean the meeting is bad?",
        answer:
          "Not necessarily. A high-cost meeting can be worthwhile if it resolves valuable decisions or prevents rework.",
      },
    ],
    relatedSlugs: ["break-even-calculator", "time-card-calculator", "task-priority-matrix"],
  },
  {
    slug: "reading-time-calculator",
    title: "Reading Time Calculator",
    shortTitle: "Reading Time",
    description: "Count words and estimate reading or speaking time for text.",
    category: "Productivity",
    toolType: "reading-time",
    icon: "BookOpen",
    keywords: ["reading time calculator", "word count tool", "speaking time calculator"],
    intro:
      "Paste text to count words, characters, sentences, and estimated reading time. Adjust words per minute for faster or slower audiences.",
    howTo: [
      "Paste your article, email, script, or notes into the text box.",
      "Choose a reading speed in words per minute.",
      "Review word count, character count, sentence count, and estimated time.",
    ],
    notes: [
      "Average silent reading is often around 200 to 250 words per minute.",
      "Speaking pace is usually slower, often around 120 to 160 words per minute.",
    ],
    faqs: [
      {
        question: "How is reading time calculated?",
        answer:
          "The tool divides the word count by the words-per-minute speed you choose, then converts the result into minutes and seconds.",
      },
      {
        question: "Can I use it for presentation scripts?",
        answer:
          "Yes. Set a lower words-per-minute rate to approximate spoken delivery.",
      },
      {
        question: "Does it upload my text?",
        answer:
          "No. The calculation runs in your browser.",
      },
    ],
    relatedSlugs: ["pomodoro-timer", "meta-tag-preview-checker", "task-priority-matrix"],
  },
  {
    slug: "time-card-calculator",
    title: "Time Card Calculator",
    shortTitle: "Time Card",
    description: "Calculate weekly work hours from daily start, finish, and break times.",
    category: "Productivity",
    toolType: "time-card",
    icon: "Calendar",
    keywords: ["time card calculator", "weekly hours calculator", "timesheet calculator"],
    intro:
      "Add start time, finish time, and unpaid break minutes for each weekday to total your weekly hours quickly.",
    howTo: [
      "Enter start and finish times for each day you worked.",
      "Add unpaid break minutes for each day.",
      "Review daily totals and the weekly total in hours and minutes.",
    ],
    notes: [
      "The calculator supports overnight shifts where the finish time is after midnight.",
      "Always check employer rounding rules before submitting official timesheets.",
    ],
    faqs: [
      {
        question: "Can it calculate an overnight shift?",
        answer:
          "Yes. If the finish time is earlier than the start time, the tool treats the finish as the next day.",
      },
      {
        question: "Are breaks paid or unpaid?",
        answer:
          "Break minutes are subtracted as unpaid break time.",
      },
      {
        question: "Can I use it for part-time work?",
        answer:
          "Yes. Leave non-working days blank and only complete the days you worked.",
      },
    ],
    relatedSlugs: ["uk-working-days-calculator", "salary-to-hourly-calculator", "meeting-cost-calculator"],
  },
  {
    slug: "deadline-countdown-calculator",
    title: "Deadline Countdown Calculator",
    shortTitle: "Deadline Countdown",
    description: "Count down days, hours, and minutes to a deadline.",
    category: "Productivity",
    toolType: "deadline-countdown",
    icon: "AlarmClock",
    keywords: ["deadline countdown", "days until deadline", "countdown calculator"],
    intro:
      "Create a live countdown to a deadline so you can see exactly how much time remains for a project, submission, or event.",
    howTo: [
      "Choose the deadline date and time.",
      "Add an optional label for the deadline.",
      "Keep the page open to see the countdown update.",
    ],
    notes: [
      "The countdown uses your device's local time zone.",
      "If the deadline has passed, the tool shows how long ago it passed.",
    ],
    faqs: [
      {
        question: "Which time zone does the countdown use?",
        answer:
          "It uses the local time zone set on your device or browser.",
      },
      {
        question: "Can I share the countdown?",
        answer:
          "This version does not save countdowns to a shareable link. You can copy the deadline details manually.",
      },
      {
        question: "Does it keep running if I close the tab?",
        answer:
          "No. Reopen the page and enter the deadline again.",
      },
    ],
    relatedSlugs: ["pomodoro-timer", "task-priority-matrix", "uk-working-days-calculator"],
  },
  {
    slug: "url-encoder-decoder",
    title: "URL Encoder and Decoder",
    shortTitle: "URL Encoder",
    description: "Encode or decode URL text safely in your browser.",
    category: "Internet Utilities",
    toolType: "url-codec",
    icon: "Link",
    keywords: ["url encoder", "url decoder", "percent encoding tool"],
    intro:
      "Convert text into URL-safe percent encoding or decode encoded URL strings back into readable text.",
    howTo: [
      "Paste the text or URL component you want to convert.",
      "Choose encode or decode.",
      "Copy the converted output for use in links, query strings, or debugging.",
    ],
    notes: [
      "Use this for URL components such as query parameters, not for validating whether a full URL is safe.",
      "Malformed encoded text may not decode until invalid percent sequences are fixed.",
    ],
    faqs: [
      {
        question: "What does URL encoding do?",
        answer:
          "URL encoding converts characters such as spaces and symbols into percent-encoded sequences that can be safely used in URLs.",
      },
      {
        question: "Should I encode a whole URL or only parts?",
        answer:
          "Usually encode individual components, such as query parameter values, so reserved URL characters keep their meaning.",
      },
      {
        question: "Is the conversion private?",
        answer:
          "Yes. The conversion happens in your browser.",
      },
    ],
    relatedSlugs: ["utm-builder", "base64-encoder-decoder", "email-link-generator"],
  },
  {
    slug: "base64-encoder-decoder",
    title: "Base64 Encoder and Decoder",
    shortTitle: "Base64 Tool",
    description: "Encode text to Base64 or decode Base64 back to plain text.",
    category: "Internet Utilities",
    toolType: "base64-codec",
    icon: "Binary",
    keywords: ["base64 encoder", "base64 decoder", "text encoding tool"],
    intro:
      "Convert plain text to Base64 or decode Base64 strings back to readable text. It is useful for development, testing, and data formatting tasks.",
    howTo: [
      "Paste the text or Base64 value.",
      "Choose encode or decode.",
      "Copy the output after checking the result.",
    ],
    notes: [
      "Base64 is encoding, not encryption. Do not treat encoded text as secret.",
      "The tool is intended for text values, not large binary files.",
    ],
    faqs: [
      {
        question: "Is Base64 secure?",
        answer:
          "No. Base64 only changes representation. Anyone can decode it if they have the text.",
      },
      {
        question: "Why is Base64 used?",
        answer:
          "It represents data using characters that travel safely through text-based systems such as JSON, email, and URLs.",
      },
      {
        question: "Does this support Unicode text?",
        answer:
          "Yes. The browser conversion handles common Unicode text before encoding and after decoding.",
      },
    ],
    relatedSlugs: ["url-encoder-decoder", "json-formatter-validator", "email-link-generator"],
  },
  {
    slug: "json-formatter-validator",
    title: "JSON Formatter and Validator",
    shortTitle: "JSON Formatter",
    description: "Format, minify, and validate JSON in the browser.",
    category: "Internet Utilities",
    toolType: "json-formatter",
    icon: "Braces",
    keywords: ["json formatter", "json validator", "minify json"],
    intro:
      "Paste JSON to validate it, pretty-print it with indentation, or minify it for compact storage and transfer.",
    howTo: [
      "Paste JSON into the editor.",
      "Choose format or minify.",
      "Use any error message to find invalid JSON syntax.",
    ],
    notes: [
      "The tool parses JSON in your browser and does not upload the content.",
      "JSON requires double-quoted property names and does not allow trailing commas.",
    ],
    faqs: [
      {
        question: "What makes JSON invalid?",
        answer:
          "Common issues include trailing commas, single quotes around keys, comments, missing brackets, and unescaped line breaks in strings.",
      },
      {
        question: "Can this format large JSON files?",
        answer:
          "It can handle typical pasted snippets. Very large files may be limited by browser memory and text area performance.",
      },
      {
        question: "Does formatting change the data?",
        answer:
          "No. Formatting changes whitespace only after the JSON is successfully parsed.",
      },
    ],
    relatedSlugs: ["base64-encoder-decoder", "url-encoder-decoder", "meta-tag-preview-checker"],
  },
  {
    slug: "utm-builder",
    title: "UTM Link Builder",
    shortTitle: "UTM Builder",
    description: "Build campaign tracking URLs with UTM source, medium, and campaign fields.",
    category: "Internet Utilities",
    toolType: "utm-builder",
    icon: "Megaphone",
    keywords: ["utm builder", "campaign url builder", "utm link generator"],
    intro:
      "Create a campaign tracking URL with standard UTM parameters for analytics tools. Existing URL parameters are preserved.",
    howTo: [
      "Enter the destination URL.",
      "Fill in source, medium, campaign, and optional term or content values.",
      "Copy the generated campaign URL for use in email, ads, or social posts.",
    ],
    notes: [
      "Use consistent lowercase naming conventions so campaign reports stay clean.",
      "Avoid putting personal data in UTM parameters because they can be visible in analytics and logs.",
    ],
    faqs: [
      {
        question: "Which UTM fields are required?",
        answer:
          "Most teams use source, medium, and campaign as the core fields. Term and content are optional for more detail.",
      },
      {
        question: "Can I add UTMs to a URL that already has parameters?",
        answer:
          "Yes. The builder preserves existing parameters and appends or updates UTM values.",
      },
      {
        question: "Should UTM values contain spaces?",
        answer:
          "It is better to use hyphens or underscores for consistency, although the builder will encode spaces if entered.",
      },
    ],
    relatedSlugs: ["url-encoder-decoder", "meta-tag-preview-checker", "email-link-generator"],
  },
  {
    slug: "email-link-generator",
    title: "Email Link Generator",
    shortTitle: "Email Link",
    description: "Create a mailto link with subject, body, cc, and bcc fields.",
    category: "Internet Utilities",
    toolType: "email-link",
    icon: "Mail",
    keywords: ["mailto link generator", "email link generator", "html email link"],
    intro:
      "Build a mailto link for websites, documents, and calls to action. The tool encodes subject, body, cc, and bcc values correctly.",
    howTo: [
      "Enter the recipient email address and optional cc or bcc.",
      "Add a subject line and pre-filled message body.",
      "Copy the generated mailto link or HTML anchor.",
    ],
    notes: [
      "Mailto links open the visitor's default email app, which may vary by device.",
      "Do not prefill sensitive personal data in public mailto links.",
    ],
    faqs: [
      {
        question: "What is a mailto link?",
        answer:
          "A mailto link is a link that opens a new email draft in the user's email application.",
      },
      {
        question: "Can I include line breaks in the body?",
        answer:
          "Yes. The generator encodes line breaks so they are preserved in most email clients.",
      },
      {
        question: "Will every email app support cc and bcc?",
        answer:
          "Most modern email clients support them, but behaviour can vary by app and platform.",
      },
    ],
    relatedSlugs: ["url-encoder-decoder", "utm-builder", "meta-tag-preview-checker"],
  },
  {
    slug: "meta-tag-preview-checker",
    title: "Meta Tag Preview Checker",
    shortTitle: "Meta Preview",
    description: "Preview title and meta description length for search result snippets.",
    category: "Internet Utilities",
    toolType: "meta-preview",
    icon: "Search",
    keywords: ["meta tag preview", "title length checker", "meta description checker"],
    intro:
      "Draft a page title and meta description, preview how a search snippet may look, and check character lengths before publishing.",
    howTo: [
      "Enter the page URL, title, and meta description.",
      "Review the preview card and length feedback.",
      "Adjust wording until it is clear, useful, and within a sensible range.",
    ],
    notes: [
      "Search engines may rewrite snippets based on query and page content.",
      "Write for users first; length guidance is a helpful constraint, not a guarantee.",
    ],
    faqs: [
      {
        question: "What is a good title length?",
        answer:
          "Many pages use titles around 50 to 60 characters, but clarity and relevance matter more than an exact number.",
      },
      {
        question: "What is a good meta description length?",
        answer:
          "Descriptions around 140 to 160 characters often work well, but search engines may show more, less, or a rewritten snippet.",
      },
      {
        question: "Does this update my website metadata?",
        answer:
          "No. It is a drafting and preview tool only.",
      },
    ],
    relatedSlugs: ["utm-builder", "reading-time-calculator", "json-formatter-validator"],
  },
  {
    slug: "uk-holiday-entitlement-calculator",
    title: "UK Holiday Entitlement Calculator",
    shortTitle: "UK Holiday",
    description: "Estimate statutory annual leave entitlement for UK work patterns.",
    category: "UK Workplace",
    toolType: "uk-holiday",
    icon: "Umbrella",
    keywords: ["UK holiday entitlement calculator", "annual leave calculator", "statutory holiday UK"],
    intro:
      "Estimate statutory paid holiday entitlement for full-time, part-time, or partial-year work using the common 5.6 weeks rule.",
    howTo: [
      "Enter how many days you work each week.",
      "Add months worked in the holiday year if you need a pro-rated figure.",
      "Review the estimated statutory entitlement in days.",
    ],
    notes: [
      "UK statutory leave is generally 5.6 weeks, capped at 28 days for a five-day week.",
      "Contracts can offer more than the statutory minimum, and bank holidays may be included in the total.",
    ],
    faqs: [
      {
        question: "What is the statutory holiday entitlement in the UK?",
        answer:
          "Most workers are entitled to 5.6 weeks of paid holiday each year, which is 28 days for someone working five days per week.",
      },
      {
        question: "Are bank holidays included?",
        answer:
          "They can be included in the statutory total if your contract says so. Employers can also offer bank holidays on top.",
      },
      {
        question: "Can part-time workers use this?",
        answer:
          "Yes. Enter the number of days worked each week and the calculator applies the same 5.6 weeks principle.",
      },
    ],
    relatedSlugs: ["uk-working-days-calculator", "salary-to-hourly-calculator", "uk-notice-period-calculator"],
  },
  {
    slug: "uk-take-home-pay-estimator",
    title: "UK Take-Home Pay Estimator",
    shortTitle: "UK Take-Home Pay",
    description: "Estimate monthly take-home pay after income tax, National Insurance, and pension.",
    category: "UK Workplace",
    toolType: "uk-take-home",
    icon: "Receipt",
    keywords: ["UK take home pay calculator", "net pay estimator", "PAYE tax calculator"],
    intro:
      "Estimate UK PAYE take-home pay from annual salary, pension percentage, and tax code allowance assumptions for England, Wales, or Northern Ireland.",
    howTo: [
      "Enter your gross annual salary.",
      "Add employee pension contribution percentage if applicable.",
      "Review estimated income tax, National Insurance, pension, and net pay.",
    ],
    notes: [
      "This simplified estimator uses common UK PAYE thresholds and does not cover Scotland, benefits in kind, salary sacrifice, bonuses, or complex tax codes.",
      "Use payslips, HMRC, or payroll software for official calculations.",
    ],
    faqs: [
      {
        question: "Does this include Scottish income tax?",
        answer:
          "No. It uses England, Wales, and Northern Ireland style income tax bands for a simplified estimate.",
      },
      {
        question: "Does pension reduce tax in this estimate?",
        answer:
          "The estimator deducts employee pension from taxable pay for a broad planning estimate, but actual payroll treatment depends on the scheme.",
      },
      {
        question: "Can this replace payroll software?",
        answer:
          "No. It is a quick planning tool, not an official payroll calculation.",
      },
    ],
    relatedSlugs: ["salary-to-hourly-calculator", "budget-planner", "uk-holiday-entitlement-calculator"],
  },
  {
    slug: "uk-statutory-sick-pay-calculator",
    title: "UK Statutory Sick Pay Calculator",
    shortTitle: "UK SSP",
    description: "Estimate Statutory Sick Pay from qualifying days and sickness length.",
    category: "UK Workplace",
    toolType: "uk-ssp",
    icon: "HeartPulse",
    keywords: ["SSP calculator", "statutory sick pay calculator UK", "sick pay calculator"],
    intro:
      "Estimate Statutory Sick Pay by entering sickness days, qualifying days per week, and the weekly SSP rate you want to use.",
    howTo: [
      "Enter the total qualifying sickness days.",
      "Set qualifying days per week and the weekly SSP rate.",
      "Review waiting days, payable days, and estimated SSP.",
    ],
    notes: [
      "SSP usually starts after three waiting days and is paid for qualifying days.",
      "Eligibility rules and rates can change, so verify with GOV.UK or payroll guidance.",
    ],
    faqs: [
      {
        question: "What are waiting days for SSP?",
        answer:
          "Waiting days are the first qualifying days in a period of sickness for which SSP is usually not paid.",
      },
      {
        question: "Why can I edit the SSP weekly rate?",
        answer:
          "Rates can change by tax year, so the tool lets you enter the current rate relevant to your calculation.",
      },
      {
        question: "Does this check SSP eligibility?",
        answer:
          "No. It estimates pay days and amount, but eligibility depends on earnings, employment status, linked sickness periods, and other rules.",
      },
    ],
    relatedSlugs: ["uk-notice-period-calculator", "uk-holiday-entitlement-calculator", "uk-take-home-pay-estimator"],
  },
  {
    slug: "uk-redundancy-pay-calculator",
    title: "UK Statutory Redundancy Pay Calculator",
    shortTitle: "UK Redundancy",
    description: "Estimate UK statutory redundancy pay from age, service, and weekly pay.",
    category: "UK Workplace",
    toolType: "uk-redundancy",
    icon: "Scale",
    keywords: ["UK redundancy pay calculator", "statutory redundancy calculator", "redundancy pay UK"],
    intro:
      "Estimate statutory redundancy pay using age, complete years of service, weekly pay, and the statutory weekly pay cap.",
    howTo: [
      "Enter current age and complete years of continuous service.",
      "Add gross weekly pay and the statutory weekly pay cap you want to apply.",
      "Review estimated entitlement weeks and capped redundancy pay.",
    ],
    notes: [
      "The calculation uses complete years of service up to 20 years and applies age-based multipliers.",
      "Employment status, length of service, contract terms, and statutory caps affect actual entitlement.",
    ],
    faqs: [
      {
        question: "How is statutory redundancy pay calculated?",
        answer:
          "It is based on age during each complete year of service, weekly pay capped at the statutory limit, and up to 20 years of service.",
      },
      {
        question: "Why enter a weekly pay cap?",
        answer:
          "The statutory cap changes over time, so entering it keeps the calculator useful for the relevant period.",
      },
      {
        question: "Does this include enhanced redundancy pay?",
        answer:
          "No. It estimates statutory pay only. Your employer may offer enhanced terms.",
      },
    ],
    relatedSlugs: ["uk-notice-period-calculator", "uk-take-home-pay-estimator", "uk-working-days-calculator"],
  },
  {
    slug: "uk-notice-period-calculator",
    title: "UK Notice Period Calculator",
    shortTitle: "UK Notice",
    description: "Estimate statutory notice period from continuous service.",
    category: "UK Workplace",
    toolType: "uk-notice",
    icon: "FileClock",
    keywords: ["UK notice period calculator", "statutory notice period", "employment notice UK"],
    intro:
      "Estimate the minimum statutory notice period based on length of continuous employment and compare it with a contractual notice period.",
    howTo: [
      "Enter years and months of continuous service.",
      "Add any contractual notice period in weeks.",
      "Compare statutory notice with contract notice and use the larger figure as a planning guide.",
    ],
    notes: [
      "Contract terms can be more generous than statutory notice and specific situations can alter rights.",
      "This tool is a general guide, not legal advice.",
    ],
    faqs: [
      {
        question: "What is the UK statutory notice period?",
        answer:
          "After one month of employment, statutory notice is usually at least one week. After two years, it is one week per complete year of service up to 12 weeks.",
      },
      {
        question: "What if my contract gives more notice?",
        answer:
          "Contractual notice can be longer than statutory notice. The longer period is typically the practical minimum.",
      },
      {
        question: "Does this cover gross misconduct?",
        answer:
          "No. Summary dismissal and special circumstances are outside this simple calculator.",
      },
    ],
    relatedSlugs: ["uk-redundancy-pay-calculator", "uk-holiday-entitlement-calculator", "uk-statutory-sick-pay-calculator"],
  },
  {
    slug: "uk-working-days-calculator",
    title: "UK Working Days Calculator",
    shortTitle: "UK Working Days",
    description: "Count weekdays between two dates and subtract bank holidays or closure days.",
    category: "UK Workplace",
    toolType: "uk-working-days",
    icon: "Briefcase",
    keywords: ["UK working days calculator", "business days calculator", "weekdays between dates"],
    intro:
      "Count Monday-to-Friday working days between two dates, with an option to subtract bank holidays, annual leave, or company closure days.",
    howTo: [
      "Choose the start date and end date.",
      "Decide whether to include the end date in the count.",
      "Enter any bank holidays or closure days to subtract from the weekday total.",
    ],
    notes: [
      "The calculator counts standard Monday-to-Friday weekdays and does not automatically fetch bank holidays.",
      "For shift patterns, use the result as a starting point and adjust for your rota.",
    ],
    faqs: [
      {
        question: "Does this automatically include UK bank holidays?",
        answer:
          "No. Bank holidays differ by nation and year, so enter the number of non-working bank holidays or closure days to subtract.",
      },
      {
        question: "Is the end date included?",
        answer:
          "You can choose whether to include the end date in the working-day count.",
      },
      {
        question: "Can I use this for project planning?",
        answer:
          "Yes. It is useful for quick planning where weekends and known non-working days need to be excluded.",
      },
    ],
    relatedSlugs: ["deadline-countdown-calculator", "uk-holiday-entitlement-calculator", "time-card-calculator"],
  },
  {
    slug: "uk-electricity-cost-calculator",
    title: "UK Electricity Cost Calculator",
    shortTitle: "UK Electricity Cost",
    description: "Estimate appliance running costs from watts, usage time, and UK pence-per-kWh rates.",
    category: "UK Utilities",
    toolType: "uk-electricity-cost",
    icon: "Zap",
    keywords: [
      "UK electricity cost calculator",
      "kWh cost calculator UK",
      "appliance running cost calculator",
      "electricity bill calculator UK",
    ],
    intro:
      "Work out how much an appliance costs to run using its wattage, usage pattern, standby draw, and the electricity unit rate from your tariff. It is useful for checking heaters, tumble dryers, EV chargers, kitchen appliances, and home office kit before they quietly shape your bill.",
    howTo: [
      "Enter the appliance wattage or kilowatt rating from the label, manual, or smart plug.",
      "Add the hours used per active day, active days per week, standby wattage if relevant, and your electricity unit rate in pence per kWh.",
      "Review per-use, weekly, monthly, and annual estimates, then compare with the standing charge shown separately.",
    ],
    notes: [
      "Electricity unit rates and standing charges vary by region, payment method, meter type, and tariff, so replace the defaults with your bill figures.",
      "The appliance calculation focuses on usage charges. The standing charge is shown separately because you pay it even if the appliance is off.",
    ],
    faqs: [
      {
        question: "How do I calculate electricity cost from watts?",
        answer:
          "Convert watts to kilowatts by dividing by 1,000, multiply by hours used to get kWh, then multiply by your unit rate in pence per kWh.",
      },
      {
        question: "Should I include the standing charge for one appliance?",
        answer:
          "Usually no. The standing charge is a fixed daily cost for the electricity supply, not a cost caused by a single appliance. This tool shows it separately for bill context.",
      },
      {
        question: "Where do I find my electricity unit rate?",
        answer:
          "Look on your latest electricity bill, supplier app, or tariff information. Use the p/kWh rate for your meter, and use the day rate if you are checking a single-rate style cost.",
      },
    ],
    relatedSlugs: ["uk-energy-direct-debit-calculator", "uk-gas-bill-calculator", "budget-planner"],
  },
  {
    slug: "uk-gas-bill-calculator",
    title: "UK Gas Bill Calculator",
    shortTitle: "UK Gas Bill",
    description: "Convert gas meter units to kWh and estimate a UK gas bill with standing charge and VAT.",
    category: "UK Utilities",
    toolType: "uk-gas-bill",
    icon: "Flame",
    keywords: [
      "UK gas bill calculator",
      "gas kWh calculator UK",
      "gas meter reading calculator",
      "gas unit cost calculator UK",
    ],
    intro:
      "Estimate a gas bill from meter readings by converting units into kWh, applying your gas unit rate, adding standing charges, and showing VAT. It helps you check whether a supplier estimate or recent bill looks sensible.",
    howTo: [
      "Enter the previous and current gas meter readings, or enter the number of units used.",
      "Choose metric or imperial meter units and adjust the calorific value if your bill shows a different figure.",
      "Add the gas unit rate, daily standing charge, billing days, and VAT rate to estimate the bill total.",
    ],
    notes: [
      "Metric gas meters are billed using units x correction factor x calorific value / 3.6. Imperial meters also convert hundreds of cubic feet to cubic metres.",
      "Use your supplier's bill for the exact calorific value, tariff rates, VAT treatment, and any additional charges.",
    ],
    faqs: [
      {
        question: "Why does a gas meter not show kWh directly?",
        answer:
          "Gas meters measure volume, while bills charge for energy in kWh. Suppliers convert volume to kWh using a correction factor and calorific value.",
      },
      {
        question: "What calorific value should I use?",
        answer:
          "A common planning value is around 39.5, but your gas bill should show the calorific value used for the billing period. Use that for a closer estimate.",
      },
      {
        question: "Does this include domestic VAT?",
        answer:
          "Yes, you can enter a VAT percentage. Domestic energy bills commonly use 5% VAT, while some business situations may use a different rate.",
      },
    ],
    relatedSlugs: ["uk-energy-direct-debit-calculator", "uk-electricity-cost-calculator", "uk-water-bill-calculator"],
  },
  {
    slug: "uk-energy-direct-debit-calculator",
    title: "UK Energy Direct Debit Calculator",
    shortTitle: "Energy Direct Debit",
    description: "Estimate monthly gas and electricity direct debit from annual usage, rates, and account balance.",
    category: "UK Utilities",
    toolType: "uk-energy-direct-debit",
    icon: "Receipt",
    keywords: [
      "energy direct debit calculator UK",
      "UK energy bill calculator",
      "gas and electricity bill calculator",
      "monthly energy payment calculator",
    ],
    intro:
      "Check whether a monthly energy direct debit looks broadly aligned with your expected annual gas and electricity cost. The estimator combines annual kWh usage, unit rates, standing charges, current account balance, and any buffer you want to keep.",
    howTo: [
      "Enter your annual electricity and gas usage from a bill, annual statement, or supplier app.",
      "Add the unit rates and standing charges for each fuel, using the figures from your current tariff.",
      "Include your current monthly direct debit, account balance, and target buffer to compare the suggested payment.",
    ],
    notes: [
      "Energy direct debits smooth seasonal use, so suppliers may review them differently depending on winter usage, credit balance, and rate changes.",
      "Use rates including VAT if that is how they appear on your bill; do not add VAT again to those figures.",
    ],
    faqs: [
      {
        question: "Why can my direct debit be higher than this estimate?",
        answer:
          "Suppliers may factor in seasonal usage, debt recovery, expected price changes, meter-read history, and a target credit balance. This tool is a transparent planning estimate.",
      },
      {
        question: "Where do I find annual kWh usage?",
        answer:
          "Most energy bills and supplier apps show estimated annual consumption for electricity and gas. Smart meter apps may also show recent usage that you can annualise.",
      },
      {
        question: "How does account balance affect the monthly amount?",
        answer:
          "A credit balance can reduce the amount needed over the next 12 months, while a debit balance or target buffer increases the monthly amount required.",
      },
    ],
    relatedSlugs: ["uk-electricity-cost-calculator", "uk-gas-bill-calculator", "budget-planner"],
  },
  {
    slug: "uk-water-bill-calculator",
    title: "UK Water Bill Calculator",
    shortTitle: "UK Water Bill",
    description: "Estimate a metered UK water bill from usage, water rates, wastewater rates, and standing charges.",
    category: "UK Utilities",
    toolType: "uk-water-bill",
    icon: "Droplets",
    keywords: [
      "UK water bill calculator",
      "water meter calculator UK",
      "metered water bill calculator",
      "water usage cost calculator UK",
    ],
    intro:
      "Estimate a metered household water bill using annual usage in cubic metres, clean water and wastewater unit rates, standing charges, and optional surface water drainage charges. It is useful for checking a bill or modelling whether lower usage could reduce costs.",
    howTo: [
      "Enter your annual metered water usage in cubic metres, or convert litres by dividing by 1,000.",
      "Add the clean water and wastewater rates from your water company's charges scheme or bill.",
      "Include annual standing charges and any surface water drainage charge to see monthly and annual estimates.",
    ],
    notes: [
      "Water and wastewater rates vary by region and supplier, and some homes use assessed or rateable-value charges instead of metered usage.",
      "Wastewater is often charged on an assumed return-to-sewer percentage, so adjust that percentage if your bill states a different basis.",
    ],
    faqs: [
      {
        question: "What is one cubic metre of water?",
        answer:
          "One cubic metre is 1,000 litres. Metered water bills usually charge usage in cubic metres.",
      },
      {
        question: "Does this decide whether I should get a water meter?",
        answer:
          "It helps estimate a metered bill, but you should compare it with your current unmetered or assessed bill and check your water company's meter rules.",
      },
      {
        question: "Why is wastewater charged separately?",
        answer:
          "Many water bills charge clean water supply and wastewater services separately. Wastewater often assumes a percentage of supplied water returns to the sewer.",
      },
    ],
    relatedSlugs: ["uk-energy-direct-debit-calculator", "uk-gas-bill-calculator", "budget-planner"],
  },
  {
    slug: "us-sales-tax-calculator",
    title: "US Sales Tax Calculator",
    shortTitle: "US Sales Tax",
    description: "Add or remove estimated US sales tax using an editable combined local rate.",
    category: "USA Tools",
    toolType: "country-sales-tax",
    icon: "Receipt",
    keywords: ["US sales tax calculator", "sales tax estimate", "add sales tax", "remove sales tax"],
    intro:
      "Estimate sales tax for a US purchase by entering the pre-tax or tax-included amount and the combined state, county, and city rate that applies.",
    howTo: [
      "Choose an example rate or enter the combined local sales tax rate you want to use.",
      "Enter the amount and choose whether to add sales tax or remove sales tax.",
      "Review the estimated pre-tax amount, sales tax amount, and total.",
    ],
    notes: [
      "Estimates only. US sales tax can vary by location, product type, exemption, marketplace, and filing period.",
      "Check state and local tax authority sources, receipts, or a tax professional before relying on a final figure.",
    ],
    faqs: [
      {
        question: "Does this know my exact US sales tax rate?",
        answer:
          "No. Enter the combined local rate from an official state or local source, point-of-sale system, or receipt. The presets are editable examples only.",
      },
      {
        question: "Can sales tax be different inside the same state?",
        answer:
          "Yes. Counties, cities, districts, exemptions, and product rules can change the final rate, so the calculator is a planning estimate.",
      },
      {
        question: "Is this tax advice?",
        answer:
          "No. It is a sales tax arithmetic tool for estimates only, not legal, accounting, or tax advice.",
      },
    ],
    relatedSlugs: ["us-mortgage-calculator", "budget-planner", "unit-converter"],
  },
  {
    slug: "us-mortgage-calculator",
    title: "US Mortgage Calculator",
    shortTitle: "US Mortgage",
    description: "Estimate a US mortgage payment with principal, interest, property tax, and insurance.",
    category: "USA Tools",
    toolType: "country-mortgage",
    icon: "Home",
    keywords: ["US mortgage calculator", "mortgage payment calculator", "principal and interest"],
    intro:
      "Estimate a monthly mortgage payment for a US home loan using price, down payment, interest rate, term, property tax, and homeowners insurance.",
    howTo: [
      "Enter home price, down payment, mortgage rate, and term.",
      "Add annual property tax and homeowners insurance estimates if you want a fuller monthly payment.",
      "Compare the estimated principal and interest payment with the total monthly housing estimate.",
    ],
    notes: [
      "Estimates only. This does not include PMI, HOA dues, escrow rules, lender fees, points, closing costs, or changing interest rates.",
      "Check lender disclosures, local tax records, insurance quotes, and professional advice before making decisions.",
    ],
    faqs: [
      {
        question: "What does the US mortgage payment include?",
        answer:
          "The calculator estimates principal and interest, then adds optional property tax and homeowners insurance. PMI, HOA dues, fees, and escrow details are not included.",
      },
      {
        question: "Is this the same as a lender quote?",
        answer:
          "No. Lenders use detailed underwriting, fees, points, escrow, taxes, insurance, and eligibility checks. Treat this as a planning estimate.",
      },
      {
        question: "Can I compare 15-year and 30-year terms?",
        answer:
          "Yes. Change the term to compare the monthly payment and total interest trade-off.",
      },
    ],
    relatedSlugs: ["us-loan-repayment-calculator", "budget-planner", "compound-interest-calculator"],
  },
  {
    slug: "us-loan-repayment-calculator",
    title: "US Loan Repayment Calculator",
    shortTitle: "US Loan Repayment",
    description: "Estimate fixed-rate US loan payments, total interest, and total repayment.",
    category: "USA Tools",
    toolType: "country-loan",
    icon: "Landmark",
    keywords: ["US loan repayment calculator", "loan payment calculator", "APR payment estimate"],
    intro:
      "Estimate a monthly payment for a fixed-rate US loan using loan amount, APR, term, and optional upfront fee.",
    howTo: [
      "Enter the amount borrowed, APR, term, and any fee you want included.",
      "Review the estimated monthly payment, total repayment, and interest cost.",
      "Try different rates or terms to compare affordability and total cost.",
    ],
    notes: [
      "Estimates only. Lenders may calculate APR, fees, interest accrual, and payoff amounts differently.",
      "Check lender disclosures and professional advice before borrowing.",
    ],
    faqs: [
      {
        question: "What type of loan does this estimate?",
        answer:
          "It estimates a fixed-rate amortizing loan with equal monthly payments, which can be useful for personal loan or auto loan comparisons.",
      },
      {
        question: "Does it include late fees or early payoff rules?",
        answer:
          "No. It excludes late fees, prepayment rules, variable rates, insurance products, and lender-specific charges.",
      },
      {
        question: "Why test different terms?",
        answer:
          "A longer term may reduce the monthly payment but can increase total interest. Comparing scenarios makes that trade-off visible.",
      },
    ],
    relatedSlugs: ["us-mortgage-calculator", "us-salary-calculator", "budget-planner"],
  },
  {
    slug: "us-salary-calculator",
    title: "US Salary Calculator",
    shortTitle: "US Salary",
    description: "Estimate US take-home pay with simplified federal, FICA, and state/local assumptions.",
    category: "USA Tools",
    toolType: "country-salary",
    icon: "Wallet",
    keywords: ["US salary calculator", "US take home pay", "federal income tax estimate"],
    intro:
      "Estimate US take-home pay from annual salary using simplified federal tax brackets, FICA-style payroll deductions, retirement contribution, and an editable state/local tax rate.",
    howTo: [
      "Enter annual gross salary and any pre-tax 401k or retirement contribution percentage.",
      "Adjust the state/local tax estimate if you have a better local assumption.",
      "Review estimated annual and monthly take-home pay with the main deductions separated.",
    ],
    notes: [
      "Estimates only. Credits, deductions, filing status differences, local payroll rules, benefits, additional Medicare tax, and state-specific brackets are not fully modelled.",
      "Check IRS and state guidance, payroll records, or a qualified professional before making final decisions.",
    ],
    faqs: [
      {
        question: "Does this calculate my exact US paycheck?",
        answer:
          "No. It is a simplified annual estimate. Payroll withholding, benefits, deductions, credits, filing status, and state rules can materially change results.",
      },
      {
        question: "Why is there a state/local tax field?",
        answer:
          "US state and local income taxes vary widely. The editable field lets you use an estimate that better matches your location.",
      },
      {
        question: "Does it include 401k contributions?",
        answer:
          "It includes a simplified pre-tax retirement contribution percentage so you can see how it affects estimated taxable pay and take-home pay.",
      },
    ],
    relatedSlugs: ["401k-calculator", "budget-planner", "salary-to-hourly-calculator"],
  },
  {
    slug: "401k-calculator",
    title: "401k Calculator",
    shortTitle: "401k",
    description: "Project estimated 401k growth from balance, contributions, employer match, and return assumptions.",
    category: "USA Tools",
    toolType: "country-savings",
    icon: "PiggyBank",
    keywords: ["401k calculator", "401k contribution calculator", "retirement savings estimate"],
    intro:
      "Estimate how a 401k balance could grow using current balance, employee contributions, employer match, assumed return, and years invested.",
    howTo: [
      "Enter current balance, salary, annual employee contribution, employer match percentage, expected return, and years.",
      "Review projected balance, total contributions, estimated employer match, and growth.",
      "Change one assumption at a time to compare savings scenarios.",
    ],
    notes: [
      "Estimates only. This does not model tax law changes, plan fees, vesting, catch-up rules, loans, withdrawals, investment volatility, or exact IRS limits.",
      "Check IRS guidance, employer plan documents, fund fees, and professional advice before making retirement decisions.",
    ],
    faqs: [
      {
        question: "Does this guarantee my 401k balance?",
        answer:
          "No. The projection uses the return you enter and assumes steady annual contributions. Real investment returns can rise or fall.",
      },
      {
        question: "Does it enforce every IRS contribution rule?",
        answer:
          "No. It shows an editable annual limit for planning, but catch-up contributions, employer limits, plan rules, and tax rules should be checked separately.",
      },
      {
        question: "What is employer match?",
        answer:
          "Employer match is money your employer may contribute based on your salary or employee contribution. The calculator uses a simplified percentage of salary.",
      },
    ],
    relatedSlugs: ["us-salary-calculator", "compound-interest-calculator", "savings-goal-calculator"],
  },
  {
    slug: "canada-gst-hst-calculator",
    title: "GST/HST Calculator Canada",
    shortTitle: "GST/HST Canada",
    description: "Add or remove estimated Canadian GST/HST using editable province/territory-style presets.",
    category: "Canada Tools",
    toolType: "country-sales-tax",
    icon: "Receipt",
    keywords: ["GST HST calculator Canada", "Canadian sales tax calculator", "add HST", "remove GST"],
    intro:
      "Estimate GST/HST on Canadian prices by choosing an editable preset or entering the rate that applies to your province/territory and situation.",
    howTo: [
      "Choose a GST/HST preset or enter a custom rate.",
      "Enter an amount and choose whether to add tax or remove tax from an included total.",
      "Review the estimated pre-tax amount, GST/HST amount, and total.",
    ],
    notes: [
      "Estimates only. Separate PST, QST, or RST may apply in some provinces and is not included unless it is part of an HST-style preset.",
      "Check CRA and province/territory guidance or professional advice before using figures for filing or invoicing decisions.",
    ],
    faqs: [
      {
        question: "Does this include every Canadian sales tax?",
        answer:
          "No. It focuses on GST/HST. In some provinces, separate PST, QST, or RST can apply and should be handled with official province/territory guidance.",
      },
      {
        question: "Can I enter a custom GST/HST rate?",
        answer:
          "Yes. The presets are editable planning constants, and you can enter the percentage you want to use.",
      },
      {
        question: "Is this suitable for tax filing?",
        answer:
          "No. It is an arithmetic estimate only and does not decide taxability, exemptions, input tax credits, or registration obligations.",
      },
    ],
    relatedSlugs: ["canadian-mortgage-calculator", "budget-planner", "unit-converter"],
  },
  {
    slug: "canadian-mortgage-calculator",
    title: "Canadian Mortgage Calculator",
    shortTitle: "Canadian Mortgage",
    description: "Estimate Canadian mortgage payments with semi-annual compounding assumptions.",
    category: "Canada Tools",
    toolType: "country-mortgage",
    icon: "Home",
    keywords: ["Canadian mortgage calculator", "Canada mortgage payment", "mortgage payment estimate"],
    intro:
      "Estimate a Canadian mortgage payment using home price, down payment, interest rate, amortization term, and optional property tax and insurance.",
    howTo: [
      "Enter purchase price, down payment, rate, and amortization term.",
      "Add annual property tax and insurance if you want a broader monthly estimate.",
      "Review principal and interest separately from optional monthly housing costs.",
    ],
    notes: [
      "Estimates only. Uses a common semi-annual compounding convention for planning and excludes lender fees, CMHC insurance, taxes, and qualification rules.",
      "Check lender documents, broker advice, insurer rules, and provincial requirements before acting.",
    ],
    faqs: [
      {
        question: "Why mention semi-annual compounding?",
        answer:
          "Canadian mortgage calculations commonly quote rates compounded semi-annually, so this calculator converts that into a monthly payment estimate.",
      },
      {
        question: "Does it include CMHC mortgage insurance?",
        answer:
          "No. Mortgage default insurance, lender fees, land transfer tax, and closing costs are not included.",
      },
      {
        question: "Can I use it for renewal comparisons?",
        answer:
          "You can use it for broad payment comparisons, but lender renewal offers and amortization details should be checked directly.",
      },
    ],
    relatedSlugs: ["canadian-loan-repayment-calculator", "budget-planner", "savings-goal-calculator"],
  },
  {
    slug: "canadian-loan-repayment-calculator",
    title: "Canadian Loan Repayment Calculator",
    shortTitle: "Canadian Loan Repayment",
    description: "Estimate Canadian fixed-rate loan payments, total interest, and total repayment.",
    category: "Canada Tools",
    toolType: "country-loan",
    icon: "Landmark",
    keywords: ["Canadian loan calculator", "Canada loan repayment", "loan payment estimate"],
    intro:
      "Estimate a Canadian fixed-rate loan payment using amount borrowed, annual rate, term, and optional upfront fee.",
    howTo: [
      "Enter loan amount, annual rate, term, and optional fee.",
      "Review estimated monthly payment, total repayment, and interest cost.",
      "Compare several terms or rates before reviewing lender quotes.",
    ],
    notes: [
      "Estimates only. Lenders may treat fees, compounding, insurance, variable rates, and early payoff differently.",
      "Check lender disclosures and professional advice before borrowing.",
    ],
    faqs: [
      {
        question: "What loan types can this estimate?",
        answer:
          "It is best for simple fixed-rate instalment loan comparisons, not revolving credit, variable-rate debt, or lender-specific payoff calculations.",
      },
      {
        question: "Does it include loan insurance?",
        answer:
          "No. Optional insurance, service fees, late fees, and other charges should be added separately if they apply.",
      },
      {
        question: "Why compare total interest?",
        answer:
          "The total interest figure shows the cost of stretching or shortening the term beyond the monthly payment.",
      },
    ],
    relatedSlugs: ["canadian-mortgage-calculator", "canadian-salary-calculator", "budget-planner"],
  },
  {
    slug: "canadian-salary-calculator",
    title: "Canadian Salary Calculator",
    shortTitle: "Canadian Salary",
    description: "Estimate Canadian take-home pay with federal, province/territory, CPP, and EI-style assumptions.",
    category: "Canada Tools",
    toolType: "country-salary",
    icon: "Wallet",
    keywords: ["Canadian salary calculator", "Canada take home pay", "province territory tax estimate"],
    intro:
      "Estimate Canadian take-home pay using simplified federal brackets, an editable province/territory rate, payroll deduction assumptions, and optional pre-tax savings.",
    howTo: [
      "Enter annual gross salary and an optional pre-tax savings or pension percentage.",
      "Adjust the province/territory tax estimate to fit your location or planning scenario.",
      "Review estimated annual and monthly take-home pay with deductions separated.",
    ],
    notes: [
      "Estimates only. Detailed province/territory brackets, credits, Quebec rules, CPP/EI maximums, benefits, and deductions are not fully modelled.",
      "Check CRA, provincial or territorial sources, payroll records, or professional advice before making decisions.",
    ],
    faqs: [
      {
        question: "Does this calculate exact Canadian payroll withholding?",
        answer:
          "No. It provides a simplified annual estimate. Actual payroll depends on province/territory rules, forms, credits, CPP/EI, benefits, and employer setup.",
      },
      {
        question: "Why is province/territory tax editable?",
        answer:
          "Provincial and territorial tax systems differ. An editable field avoids pretending one national estimate fits every user.",
      },
      {
        question: "Does it handle Quebec separately?",
        answer:
          "No. Quebec has distinct payroll and tax rules, so use official Quebec and CRA sources for final planning.",
      },
    ],
    relatedSlugs: ["tfsa-savings-calculator", "budget-planner", "salary-to-hourly-calculator"],
  },
  {
    slug: "tfsa-savings-calculator",
    title: "TFSA Savings Calculator",
    shortTitle: "TFSA Savings",
    description: "Project estimated TFSA savings growth from balance, contributions, return, and years.",
    category: "Canada Tools",
    toolType: "country-savings",
    icon: "PiggyBank",
    keywords: ["TFSA calculator", "TFSA savings calculator", "Canada savings projection"],
    intro:
      "Estimate how a TFSA balance could grow using current savings, annual contributions, assumed return, and years invested.",
    howTo: [
      "Enter current TFSA balance, annual contribution, assumed return, and time horizon.",
      "Review projected balance, total contributions, and estimated growth.",
      "Compare contribution scenarios while checking your own TFSA room separately.",
    ],
    notes: [
      "Estimates only. The calculator does not know your personal TFSA room, withdrawals, penalties, eligible investments, or fees.",
      "Check CRA guidance, financial institution records, and professional advice before contributing or investing.",
    ],
    faqs: [
      {
        question: "Does this know my TFSA contribution room?",
        answer:
          "No. Enter contributions only after checking your own CRA account, records, and eligibility.",
      },
      {
        question: "Does it include investment risk?",
        answer:
          "No. The projection uses the return you enter. Real cash, GIC, fund, or market returns can differ and may include fees.",
      },
      {
        question: "Is TFSA growth tax-free?",
        answer:
          "TFSAs can shelter eligible investment income under Canadian rules, but contribution room, residency, overcontribution penalties, and product details matter.",
      },
    ],
    relatedSlugs: ["canadian-salary-calculator", "compound-interest-calculator", "savings-goal-calculator"],
  },
  {
    slug: "australia-gst-calculator",
    title: "GST Calculator Australia",
    shortTitle: "Australia GST",
    description: "Add or remove estimated Australian GST with a 10% editable default rate.",
    category: "Australia Tools",
    toolType: "country-sales-tax",
    icon: "Receipt",
    keywords: ["GST calculator Australia", "Australian GST calculator", "add GST", "remove GST"],
    intro:
      "Estimate Australian GST by adding GST to a GST-exclusive amount or removing GST from a GST-inclusive total.",
    howTo: [
      "Use the 10% GST preset or choose the GST-free editable option.",
      "Enter the amount and choose whether GST should be added or removed.",
      "Review the estimated GST-exclusive amount, GST amount, and GST-inclusive total.",
    ],
    notes: [
      "Estimates only. The calculator does not decide whether a supply is taxable, GST-free, input-taxed, or affected by business rules.",
      "Check ATO guidance, invoices, accounting records, or professional advice before using figures for official decisions.",
    ],
    faqs: [
      {
        question: "What GST rate does Australia use?",
        answer:
          "The default editable preset is 10%, which is the common Australian GST rate, but some supplies can be GST-free or treated differently.",
      },
      {
        question: "Can it remove GST from a total?",
        answer:
          "Yes. Choose the remove option and it divides by one plus the GST rate to estimate the GST-exclusive amount.",
      },
      {
        question: "Is this accounting advice?",
        answer:
          "No. It is an arithmetic estimator only and does not replace ATO guidance or professional accounting advice.",
      },
    ],
    relatedSlugs: ["australian-mortgage-calculator", "budget-planner", "unit-converter"],
  },
  {
    slug: "australian-mortgage-calculator",
    title: "Australian Mortgage Calculator",
    shortTitle: "Australian Mortgage",
    description: "Estimate Australian home loan repayments with optional insurance and extra cost inputs.",
    category: "Australia Tools",
    toolType: "country-mortgage",
    icon: "Home",
    keywords: ["Australian mortgage calculator", "home loan repayment calculator", "Australia mortgage payment"],
    intro:
      "Estimate Australian home loan repayments using property price, deposit, interest rate, loan term, and optional monthly ownership costs.",
    howTo: [
      "Enter property price, deposit, rate, and loan term.",
      "Add annual insurance or other monthly ownership cost estimates if useful.",
      "Review principal and interest repayment separately from optional extra costs.",
    ],
    notes: [
      "Estimates only. Stamp duty, lender fees, LMI, offset accounts, redraw, package fees, rate changes, and eligibility rules are not included.",
      "Check lender documents, state/territory duties, broker advice, and professional guidance before acting.",
    ],
    faqs: [
      {
        question: "Does this include stamp duty or LMI?",
        answer:
          "No. It focuses on repayment estimates and optional annual costs. Stamp duty, lenders mortgage insurance, fees, and concessions should be checked separately.",
      },
      {
        question: "Can I compare interest rates?",
        answer:
          "Yes. Change the interest rate to see how repayments and total interest may move.",
      },
      {
        question: "Is this a loan approval calculator?",
        answer:
          "No. It does not assess serviceability, credit history, expenses, or lender policy.",
      },
    ],
    relatedSlugs: ["australian-loan-repayment-calculator", "budget-planner", "savings-goal-calculator"],
  },
  {
    slug: "australian-loan-repayment-calculator",
    title: "Australian Loan Repayment Calculator",
    shortTitle: "Australian Loan Repayment",
    description: "Estimate Australian fixed-rate loan repayments, total interest, and total repayable.",
    category: "Australia Tools",
    toolType: "country-loan",
    icon: "Landmark",
    keywords: ["Australian loan repayment calculator", "Australia loan calculator", "loan repayment estimate"],
    intro:
      "Estimate a monthly repayment for an Australian fixed-rate loan using loan amount, annual rate, term, and optional fee.",
    howTo: [
      "Enter loan amount, annual rate, term, and optional upfront fee.",
      "Review estimated monthly repayment, total repayable, and interest cost.",
      "Compare scenarios before checking lender quotes and product terms.",
    ],
    notes: [
      "Estimates only. Product fees, comparison rates, variable rates, redraw, early repayment, and lender rules are not fully modelled.",
      "Check lender disclosures and professional advice before borrowing.",
    ],
    faqs: [
      {
        question: "Does this use the comparison rate?",
        answer:
          "No. It uses the annual rate you enter and an optional fee. A formal comparison rate may include other costs and assumptions.",
      },
      {
        question: "Can it model a zero-interest loan?",
        answer:
          "Yes. Enter 0 as the rate and it will divide the amount across the repayment term.",
      },
      {
        question: "Does it handle variable-rate loans?",
        answer:
          "No. It assumes the rate stays the same for the estimate period.",
      },
    ],
    relatedSlugs: ["australian-mortgage-calculator", "australian-salary-calculator", "budget-planner"],
  },
  {
    slug: "australian-salary-calculator",
    title: "Australian Salary Calculator",
    shortTitle: "Australian Salary",
    description: "Estimate Australian take-home pay with simplified income tax and Medicare levy assumptions.",
    category: "Australia Tools",
    toolType: "country-salary",
    icon: "Wallet",
    keywords: ["Australian salary calculator", "Australia take home pay", "income tax estimate Australia"],
    intro:
      "Estimate Australian annual and monthly take-home pay using simplified resident tax bands and an editable Medicare levy-style percentage.",
    howTo: [
      "Enter annual gross salary and optional salary sacrifice or pre-tax contribution percentage.",
      "Adjust the Medicare levy-style percentage if your planning assumption differs.",
      "Review estimated annual and monthly take-home pay with deductions separated.",
    ],
    notes: [
      "Estimates only. Offsets, HELP/HECS, deductions, salary packaging, residency rules, benefits, and exact payroll treatment are not included.",
      "Check ATO guidance, payroll records, or professional advice before making final decisions.",
    ],
    faqs: [
      {
        question: "Does this calculate exact Australian tax?",
        answer:
          "No. It is a simplified resident income tax estimate. Your final tax can change because of deductions, offsets, Medicare levy rules, HELP/HECS, and personal circumstances.",
      },
      {
        question: "Does it include superannuation?",
        answer:
          "The salary calculator focuses on take-home income. Use the Superannuation Calculator to estimate super balance growth.",
      },
      {
        question: "Why is Medicare levy editable?",
        answer:
          "Medicare levy outcomes can depend on income, family status, exemptions, and surcharges. An editable input keeps the assumption visible.",
      },
    ],
    relatedSlugs: ["superannuation-calculator", "budget-planner", "salary-to-hourly-calculator"],
  },
  {
    slug: "superannuation-calculator",
    title: "Superannuation Calculator",
    shortTitle: "Superannuation",
    description: "Project estimated Australian superannuation growth from balance, contributions, employer super, and returns.",
    category: "Australia Tools",
    toolType: "country-savings",
    icon: "PiggyBank",
    keywords: ["superannuation calculator", "super calculator Australia", "retirement savings estimate"],
    intro:
      "Estimate how an Australian superannuation balance could grow using current balance, employer super guarantee percentage, extra contributions, assumed return, and years.",
    howTo: [
      "Enter current super balance, salary, employer super percentage, extra annual contribution, expected return, and years.",
      "Review projected balance, estimated employer contributions, extra contributions, and growth.",
      "Compare scenarios while checking caps, fees, tax treatment, and fund rules separately.",
    ],
    notes: [
      "Estimates only. It does not model all contribution caps, contribution tax, insurance premiums, fund fees, preservation age, investment risk, or legislative changes.",
      "Check ATO guidance, fund statements, licensed advice, and professional sources before making retirement decisions.",
    ],
    faqs: [
      {
        question: "Does this guarantee my super balance?",
        answer:
          "No. It projects from the return and contributions you enter. Real investment returns, fees, insurance, and tax can change outcomes.",
      },
      {
        question: "Does it include employer super guarantee?",
        answer:
          "Yes, it includes a simplified employer super percentage of salary, with an editable default assumption.",
      },
      {
        question: "Does it enforce concessional contribution caps?",
        answer:
          "It displays an editable annual limit assumption for planning, but personal caps, carry-forward rules, and tax treatment must be checked separately.",
      },
    ],
    relatedSlugs: ["australian-salary-calculator", "compound-interest-calculator", "savings-goal-calculator"],
  },
];

export function getSeoTool(slug: string) {
  return seoTools.find((tool) => tool.slug === slug);
}

export function getRelatedTools(tool: SeoTool) {
  const explicitTools = tool.relatedSlugs
    .map((slug) => getSeoTool(slug))
    .filter((related): related is SeoTool => Boolean(related));

  const seen = new Set(explicitTools.map((related) => related.slug));
  seen.add(tool.slug);

  const categoryFallbacks = seoTools.filter(
    (related) => related.category === tool.category && !seen.has(related.slug)
  );

  return [...explicitTools, ...categoryFallbacks].slice(0, 6);
}

export function getSeoToolFaqs(tool: SeoTool) {
  const extraFaqs = [
    {
      question: `When should I use the ${tool.title}?`,
      answer: `Use the ${tool.title} when you need a quick, browser-based way to handle ${tool.shortTitle.toLowerCase()} tasks without setting up a spreadsheet or installing a dedicated app. It is best for estimates, checks, and everyday planning.`,
    },
    {
      question: `Does the ${tool.title} store my results?`,
      answer: `The ${tool.title} is designed for immediate use in the browser. Treat the result as something to copy into your own notes, documents, accounting system, project plan, or password manager where appropriate.`,
    },
  ];

  return [...tool.faqs, ...extraFaqs].slice(0, 6);
}
