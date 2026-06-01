import type { CoreTool } from "@/lib/site-tools";
import type { SeoTool } from "@/lib/seo-tools";

export interface ToolPageCopy {
  introduction: string[];
  about: string[];
  howItWorks: string[];
  whenToUse: string[];
}

const coreToolCopy: Record<string, ToolPageCopy> = {
  "speed-test": {
    introduction: [
      "A speed test is most useful when it gives you context, not just a big Mbps number. This page is for quick connection checks before work calls, streaming, gaming, uploads, or support conversations where you need a plain reference point.",
    ],
    about: [
      "Download speed shows how quickly data reaches your device, while upload speed shows how quickly you can send files, video, and backups. Latency and jitter matter when responsiveness is more important than raw throughput, such as video meetings, online games, remote desktops, and voice calls. Running the test more than once helps separate a one-off dip from a persistent issue.",
    ],
    howItWorks: [
      "The test simulates download and upload activity, then presents the result in Mbps alongside simple connection indicators. For a fair comparison, keep other heavy traffic paused, stay near the router if you are on WiFi, and repeat the test after changing one condition at a time, such as moving rooms or switching to Ethernet.",
    ],
    whenToUse: [
      "Use the result as a troubleshooting clue. If Ethernet is fast but WiFi is slow, the router position or wireless interference may be the issue. If every device is slow at different times of day, the broadband line, provider congestion, or plan limits may need investigation.",
    ],
  },
  "world-clock": {
    introduction: [
      "The World Clock keeps several live city times in one place so you can avoid mental time-zone arithmetic. It is built for remote teams, travel planning, international support, family calls, market checks, and event coordination across regions.",
    ],
    about: [
      "Current time is only part of the question when people are spread across the world. The date can change, daylight saving can shift offsets, and a normal working hour in one city can be evening or early morning somewhere else. Keeping selected cities visible makes those trade-offs easier to discuss before you send a message or calendar invite.",
    ],
    howItWorks: [
      "Each city card uses the browser's time zone support to format the current local time and date for that location. Add the cities you care about, remove anything irrelevant, and compare the displayed offset against your own device time. The live view updates automatically while the page stays open.",
    ],
    whenToUse: [
      "Use it when you are checking whether someone is likely to be available now, deciding which region should host a meeting, or monitoring several places during travel. For a specific future appointment, pair it with the Time Zone Converter because daylight saving can make a future offset different from today's offset.",
    ],
  },
  "timezone-converter": {
    introduction: [
      "The Time Zone Converter answers the practical scheduling question: if something happens at this local time, what time is it somewhere else? It is useful for meeting invites, webinars, release windows, flights, online classes, and deadlines that cross borders.",
    ],
    about: [
      "Time conversion is easy to get wrong because dates matter as much as hours. A meeting can move to the previous or next day in another region, and daylight saving rules may change the offset depending on the date selected. This tool keeps the source and destination zones explicit so the converted result is easier to trust and share.",
    ],
    howItWorks: [
      "Choose the source zone, enter the local date and time, then select the destination zone. The browser applies the relevant time zone rules for the chosen date and returns the matching destination time. Always check the destination date as well as the clock time before copying the result into an invitation.",
    ],
    whenToUse: [
      "Use it whenever a future time needs to be communicated across regions. It is especially helpful around daylight saving transitions, for UTC release notes, or when one participant uses a city name and another uses an abbreviation such as GMT, EST, or PST.",
    ],
  },
  "vat-calculator": {
    introduction: [
      "The UK VAT Calculator helps separate net price, VAT amount, and gross price without manual spreadsheet formulas. It is intended for invoice checks, quotes, product pricing, expense reviews, and everyday decisions where VAT-inclusive and VAT-exclusive figures need to be compared clearly.",
    ],
    about: [
      "VAT calculations can be confusing because adding VAT and removing VAT are not mirror-image percentage steps. Adding 20% to a net amount multiplies by 1.20, while removing VAT from a gross amount divides by 1.20. Showing all three amounts together reduces mistakes when checking supplier paperwork, customer prices, or receipts.",
    ],
    howItWorks: [
      "Select the VAT rate, enter the amount, and choose whether the amount is net or gross. The calculator then applies the correct add or remove formula and rounds the result to two decimal places for currency use. If a rate is reduced or zero-rated, choose that rate before calculating.",
    ],
    whenToUse: [
      "Use it for quick arithmetic, not for deciding whether something is taxable. VAT liability, exemptions, registration requirements, and partial-exemption scenarios can be complex. For official filing, unusual goods or services, or cross-border transactions, verify the treatment with HMRC guidance or an accountant.",
    ],
  },
  "fuel-calculator": {
    introduction: [
      "The Fuel Cost Calculator turns trip distance, fuel economy, and pump price into an estimated journey cost. It helps with commute budgeting, road trips, delivery planning, mileage discussions, and shared travel costs before anyone starts driving.",
    ],
    about: [
      "Fuel costs vary with route, vehicle load, traffic, tyre pressure, weather, and driving style. A motorway trip may use fuel very differently from stop-start city travel, even over the same distance. The calculator gives a planning estimate that is easier to compare than guessing from a half-remembered tank average.",
    ],
    howItWorks: [
      "Enter distance in the unit you know, choose the vehicle efficiency format, and add the fuel price per litre. The tool converts the efficiency into expected litres used, multiplies by the price, and shows the total journey cost plus an approximate cost per mile or kilometre.",
    ],
    whenToUse: [
      "Use it before pricing a regular commute, splitting petrol money, comparing a car journey with train or coach fares, or testing whether a more efficient vehicle changes the economics of a route. Add tolls, parking, insurance, depreciation, or maintenance separately if you need a full travel cost.",
    ],
  },
  "password-generator": {
    introduction: [
      "The Password Generator creates unique random passwords for accounts, admin panels, shared systems, and password manager entries. It is for situations where reusing a memorable password would create unnecessary risk.",
    ],
    about: [
      "Strong passwords depend on length, randomness, and uniqueness. A long random password stored in a trusted password manager is usually safer than a short password built from names, dates, keyboard patterns, or small substitutions. This tool lets you adjust length and character groups to match the requirements of the service you are using.",
    ],
    howItWorks: [
      "Choose the length and character options, then generate a new value. Review the result, copy it into the account form or password manager, and generate again if a site rejects a particular character set. The page is designed for browser-side generation rather than memorable passphrase coaching.",
    ],
    whenToUse: [
      "Use it when creating a new account, rotating credentials after a breach concern, setting temporary admin access, or filling a password manager vault. Do not send generated passwords through chat or email unless you have a secure sharing process, and enable two-factor authentication where available.",
    ],
  },
  "qr-generator": {
    introduction: [
      "The QR Code Generator turns links and common contact details into a scannable code for phones. It is useful when a printed sign, slide, handout, menu, label, or support document needs to move someone quickly from offline context to digital action.",
    ],
    about: [
      "A QR code works best when the encoded content is short, the contrast is high, and the final printed size is easy to scan from the expected distance. URL codes are common, but text, phone, email, SMS, and WiFi details can also be useful when you want to reduce typing errors.",
    ],
    howItWorks: [
      "Choose the content type, enter the required fields, and preview the generated code. If you adjust colors, keep strong contrast between foreground and background. Download the image and test it with more than one phone before using it in public material.",
    ],
    whenToUse: [
      "Use it for event check-ins, product inserts, posters, restaurant menus, classroom resources, onboarding documents, or support instructions. For campaigns, consider building a tagged URL first with the UTM Builder so scans can be measured in your analytics platform.",
    ],
  },
  "ip-checker": {
    introduction: [
      "The IP Address Checker shows the public address and approximate network details that websites can see from your current connection. It is a quick reference for VPN checks, allowlisting requests, remote access troubleshooting, and location-sensitive services.",
    ],
    about: [
      "Your public IP address usually belongs to your broadband provider, mobile network, office network, VPN, or proxy. It is not the same as the private address your router gives devices at home. Location data tied to an IP is approximate and may point to an ISP region rather than your exact address.",
    ],
    howItWorks: [
      "Open the page and let the lookup complete. Review the detected IP, provider, time zone, and approximate location details if available. Change one network condition at a time, such as enabling a VPN or switching to mobile data, then refresh to see what changed.",
    ],
    whenToUse: [
      "Use it before asking an IT team to allowlist your connection, when checking whether a VPN endpoint is active, or when a website shows the wrong region. Treat location results as a guide, not proof of a person's physical location.",
    ],
  },
  "age-calculator": {
    introduction: [
      "The Age Calculator converts a birth date or important date into exact age and useful elapsed-time totals. It is designed for birthdays, anniversaries, eligibility windows, forms, records, and milestone planning where an approximate age is not enough.",
    ],
    about: [
      "Exact age calculations involve more than subtracting years because months have different lengths and leap years add extra days. The page separates years, months, and days while also showing totals such as days or weeks lived. That makes it useful for both formal checks and personal curiosity.",
    ],
    howItWorks: [
      "Enter a date that has already occurred. The calculator compares it with today's date, adjusts for incomplete months and days, and then derives total elapsed days, weeks, and months. The next birthday display helps distinguish current age from the next milestone.",
    ],
    whenToUse: [
      "Use it for school or activity eligibility, age-based deadlines, anniversary messages, birthday planning, or simple record keeping. If an official process has its own age rule, such as a cut-off date at midnight or a local jurisdiction rule, verify that rule separately.",
    ],
  },
  "unit-converter": {
    introduction: [
      "The Unit Converter handles everyday measurement changes across metric, imperial, temperature, volume, and area units. It is built for recipes, travel, DIY, study, shipping, product details, and quick checks where remembering a formula would slow you down.",
    ],
    about: [
      "Conversions are straightforward when the unit family is clear, but mistakes happen when US and UK measures differ or when temperature requires a formula rather than a simple multiplier. Keeping category, source unit, and target unit visible helps prevent accidental conversions between unrelated measurements.",
    ],
    howItWorks: [
      "Pick the measurement category, enter the value, and choose the source and target units. The tool applies the appropriate conversion factor or temperature formula and displays a rounded result. Use the swap option when you need to reverse the same comparison.",
    ],
    whenToUse: [
      "Use it when adapting recipes, interpreting product dimensions, comparing travel distances, planning materials, or translating international specifications. For engineering, medical, laboratory, or regulated work, confirm the precision and rounding rules required by the relevant standard.",
    ],
  },
};

const seoToolCopy: Record<string, ToolPageCopy> = {
  "compound-interest-calculator": {
    introduction: [
      "Compound interest is easiest to understand when contributions and earned interest are shown separately. This calculator helps you explore how a starting balance, monthly deposits, interest rate, time horizon, and compounding frequency may combine over years.",
    ],
    about: [
      "The page is useful for savings accounts, regular investing plans, junior savings, retirement projections, or any goal where money may earn returns on previous returns. It does not promise a return; it simply makes the growth mechanics visible so you can compare scenarios with the same assumptions.",
    ],
    howItWorks: [
      "The calculator adds your planned contributions over the selected term and applies the annual rate at the compounding interval you choose. Changing the term or monthly deposit often has a larger effect than small rate changes, so test several combinations before treating one result as a plan.",
    ],
    whenToUse: [
      "Use it at the start of a savings plan, when reviewing whether a monthly contribution is enough, or when explaining why starting earlier can matter. For products with fees, tax, variable rates, or investment volatility, adjust expectations and verify details with the provider.",
    ],
  },
  "loan-repayment-calculator": {
    introduction: [
      "The Loan Repayment Calculator estimates the monthly cost of borrowing before you commit to a term. It helps compare loan amounts, APRs, fees, and repayment periods in a way that shows both monthly affordability and total cost.",
    ],
    about: [
      "A lower monthly payment can feel easier, but it often means paying interest for longer. This page keeps the repayment amount, total repayable, and interest cost together so you can see the trade-off. It is suited to fixed-rate personal loans, car finance style comparisons, and simple borrowing checks.",
    ],
    howItWorks: [
      "The calculator uses the standard amortising-loan formula for equal monthly payments. It adds any upfront fee you choose to include, converts APR to a monthly rate, and spreads repayment over the selected number of months. A zero-rate loan is handled as a straight division.",
    ],
    whenToUse: [
      "Use it before applying for credit, when comparing two quotes, or when testing whether a shorter term is worth the higher payment. Lenders may use different fee treatment, rounding, settlement rules, and affordability checks, so treat the result as planning information.",
    ],
  },
  "mortgage-overpayment-calculator": {
    introduction: [
      "The Mortgage Overpayment Calculator estimates how extra payments could reduce interest and shorten the life of a repayment mortgage. It is for borrowers who want to compare a regular overpayment, a lump sum, or both against the current repayment path.",
    ],
    about: [
      "Overpaying can be powerful because it reduces the balance that future interest is charged on. The benefit depends on interest rate, remaining term, overpayment size, and lender rules. Seeing time saved and interest saved side by side helps you compare overpaying with saving, investing, or keeping cash available.",
    ],
    howItWorks: [
      "The tool estimates the current monthly repayment from balance, rate, and term, then simulates the mortgage month by month with and without your extra payments. The difference between the two paths becomes the estimated interest saved and earlier payoff date.",
    ],
    whenToUse: [
      "Use it before setting a standing overpayment, using a bonus, or reviewing a remortgage plan. Check overpayment limits, early repayment charges, emergency savings, and whether higher-interest debt should be cleared first before acting on the estimate.",
    ],
  },
  "savings-goal-calculator": {
    introduction: [
      "The Savings Goal Calculator estimates how long it may take to reach a target from your current balance, monthly saving amount, and optional interest. It turns a goal into a timeline that can be adjusted immediately.",
    ],
    about: [
      "Whether the target is an emergency fund, holiday, house deposit, course fee, or replacement car, the important question is often the gap between the target date and the affordable monthly contribution. This page makes that gap visible without forcing you to build a spreadsheet.",
    ],
    howItWorks: [
      "The calculator starts from your current savings, adds the same monthly contribution each month, and applies the annual interest rate as a monthly growth rate. It stops when the target is reached or indicates that the goal is not reachable with the entered contribution and interest assumptions.",
    ],
    whenToUse: [
      "Use it when choosing a target date, deciding whether a goal needs a separate account, or checking how a small contribution increase changes the timeline. If rates, bonuses, withdrawals, or irregular deposits are likely, rerun the calculation with updated numbers.",
    ],
  },
  "budget-planner": {
    introduction: [
      "The Monthly Budget Planner gives a quick view of income, regular spending, planned saving, and leftover cash. It is meant for a first pass over household or personal finances before moving details into your bank app, spreadsheet, or budgeting system.",
    ],
    about: [
      "Budgets work best when categories are realistic rather than idealised. Rent, bills, groceries, transport, debt repayments, savings, and other spending are separated so pressure points are visible. Including savings as a planned line makes it easier to see whether the budget pays future you as well as current obligations.",
    ],
    howItWorks: [
      "Enter monthly take-home income and each spending category. The planner totals the allocations, compares them with income, and calculates the savings rate. If spending is above income, the shortfall is shown directly so you can choose which category needs attention.",
    ],
    whenToUse: [
      "Use it after a pay change, before taking on a loan, when reviewing subscriptions, or when deciding how much can safely go toward a savings goal. Use bank statements for a more accurate baseline, then revisit the plan after real spending data comes in.",
    ],
  },
  "salary-to-hourly-calculator": {
    introduction: [
      "The Salary to Hourly Rate Calculator converts annual gross salary into monthly, weekly, daily, and hourly equivalents. It helps employees, contractors, managers, and job seekers compare pay offers against hours worked.",
    ],
    about: [
      "A headline annual salary can hide large differences in working patterns. Weekly hours, days per week, and paid holiday change the effective rate for time actually worked. This page keeps the conversion transparent so a full-time salary, part-time pattern, or role with unusual hours can be compared more fairly.",
    ],
    howItWorks: [
      "The calculator divides annual salary across months and weeks, then uses your weekly hours to estimate a contracted hourly rate. It also uses working days and paid holiday to show a worked-day hourly equivalent, which can be useful when comparing different schedules.",
    ],
    whenToUse: [
      "Use it before accepting an offer, comparing a salaried role with contract work, estimating the value of unpaid overtime, or checking whether a day rate aligns with annual pay expectations. For take-home pay, use a net pay estimator because tax and deductions are separate questions.",
    ],
  },
  "break-even-calculator": {
    introduction: [
      "The Break-Even Calculator estimates how many units, projects, hours, or packages must be sold before fixed costs are covered. It is a simple way to test whether pricing and cost assumptions make commercial sense.",
    ],
    about: [
      "Break-even analysis focuses on contribution margin: the amount left from each sale after direct variable cost. That margin pays fixed costs such as rent, software, insurance, equipment, or salaries. If the margin is too small, sales volume has to be high before any profit appears.",
    ],
    howItWorks: [
      "Enter fixed costs for the period, selling price per unit, and variable cost per unit. The calculator subtracts variable cost from price to find contribution margin, then divides fixed costs by that margin and rounds up to the next whole unit.",
    ],
    whenToUse: [
      "Use it when pricing a new product, planning a service package, reviewing a side business, or deciding whether a discount still leaves enough margin. Revisit the calculation whenever supplier costs, ad spend, staffing, or average selling price changes.",
    ],
  },
  "pomodoro-timer": {
    introduction: [
      "The Pomodoro Timer supports focused work by separating a task into a timed work session and a deliberate break. It is useful when starting is hard, context switching is frequent, or a task needs a clear boundary.",
    ],
    about: [
      "A timer does not make work important, but it can reduce negotiation with yourself. Choosing one task, starting a visible countdown, and protecting a short session can make progress easier. Adjustable work and break lengths let you match the method to writing, studying, admin, coding, or review work.",
    ],
    howItWorks: [
      "Set the work and break durations, start the timer, and keep attention on one task until the session ends. Switch to break mode when you need recovery, then restart or reset. The timer runs in the browser, so the page needs to remain open.",
    ],
    whenToUse: [
      "Use it for tasks that benefit from a defined sprint: drafting, studying, clearing email, reading, planning, or debugging. If interruptions are common, note them rather than silently absorbing them; the pattern may show that the environment needs fixing.",
    ],
  },
  "task-priority-matrix": {
    introduction: [
      "The Task Priority Matrix scores a task by urgency, impact, effort, and deadline pressure so you can decide what deserves attention next. It is a lightweight alternative to debating every task from scratch.",
    ],
    about: [
      "Priority is not just urgency. A task can be loud but low value, or important but not due today. By separating impact from effort and time pressure, the page encourages a more deliberate decision: do it now, schedule it, delegate or batch it, or reduce scope.",
    ],
    howItWorks: [
      "Describe the task, rate urgency, impact, and effort from low to high, then add how soon the deadline arrives. The scoring gives extra weight to impact and time pressure while subtracting effort, producing a recommendation that is most useful when compared across several tasks.",
    ],
    whenToUse: [
      "Use it when a to-do list feels flat, during weekly planning, before accepting another request, or when a team needs a quick shared language for trade-offs. For complex projects, pair the score with dependencies, risk, and stakeholder commitments.",
    ],
  },
  "meeting-cost-calculator": {
    introduction: [
      "The Meeting Cost Calculator attaches a rough staff cost to a meeting by combining attendance, duration, hourly cost, and preparation time. It makes the time investment visible before or after the calendar slot is accepted.",
    ],
    about: [
      "Meetings are not automatically wasteful, but their cost is often hidden because the calendar shows time rather than payroll value. A decision meeting with the right people may be worth it; a vague status meeting with too many attendees may not be. This tool helps start that conversation with numbers.",
    ],
    howItWorks: [
      "Enter the number of attendees, average hourly cost, meeting length, and preparation or follow-up time per person. The calculator converts total person-minutes into person-hours and multiplies by the hourly cost to estimate the time cost of the meeting.",
    ],
    whenToUse: [
      "Use it when deciding whether a meeting needs an agenda, a smaller invite list, a shorter slot, or an asynchronous update instead. It is also helpful after recurring meetings to show the cost of a weekly ritual over time.",
    ],
  },
  "reading-time-calculator": {
    introduction: [
      "The Reading Time Calculator estimates how long text may take to read or speak. It is useful for articles, emails, scripts, lesson notes, speeches, documentation, newsletters, and presentation planning.",
    ],
    about: [
      "Word count alone does not tell you how a reader or audience will experience a piece of content. A 900-word article might be a quick skim for one audience and a slow, technical read for another. Adjustable words per minute makes the estimate more realistic for the context.",
    ],
    howItWorks: [
      "Paste the text and choose a reading speed. The tool counts words, characters, and sentences, then divides words by the selected words-per-minute rate. Lower the speed for spoken delivery, dense technical material, or audiences reading in a second language.",
    ],
    whenToUse: [
      "Use it before publishing a post, trimming a presentation, setting webinar timings, planning study sessions, or deciding whether an email is too long. Combine the estimate with editing judgment; clarity and structure matter as much as total minutes.",
    ],
  },
  "time-card-calculator": {
    introduction: [
      "The Time Card Calculator totals weekly work hours from daily start times, finish times, and unpaid breaks. It is a quick check for timesheets, rota reviews, freelance logs, and weekly hour summaries.",
    ],
    about: [
      "Manual time totals are easy to misread when breaks, overnight shifts, or decimal hours are involved. This page keeps each weekday visible and separates clock time from unpaid break minutes. The weekly total is shown in hours and minutes as well as decimal-style hours for easier reporting.",
    ],
    howItWorks: [
      "Enter the start and finish time for each day and subtract unpaid break minutes. If the finish time is earlier than the start time, the calculator treats it as an overnight shift ending the next day. Daily values roll up into the weekly total.",
    ],
    whenToUse: [
      "Use it before submitting a timesheet, checking part-time hours, estimating billable work, or comparing scheduled hours with actual hours. Always apply employer rounding rules, overtime policies, and local payroll requirements before treating the output as official.",
    ],
  },
  "deadline-countdown-calculator": {
    introduction: [
      "The Deadline Countdown Calculator shows how much time remains until a specific date and time. It is a simple way to keep a project, submission, event, launch, or personal milestone visible.",
    ],
    about: [
      "Deadlines often feel vague until they are translated into days, hours, minutes, and seconds. A live countdown can help separate a date that is comfortably ahead from one that needs immediate prioritisation. The label field makes the timer easier to read when you are tracking a named deliverable.",
    ],
    howItWorks: [
      "Enter the deadline date and time using your device's local time zone. The page compares that timestamp with the current device time and updates the remaining amount while the tab is open. If the deadline has passed, the display switches to elapsed time.",
    ],
    whenToUse: [
      "Use it for assignment submissions, proposal deadlines, product releases, event starts, application windows, or personal goals. If the deadline depends on another region, convert the time first so the local deadline you enter is correct.",
    ],
  },
  "url-encoder-decoder": {
    introduction: [
      "The URL Encoder and Decoder converts ordinary text into URL-safe percent encoding and turns encoded text back into readable form. It is a practical helper for query strings, redirect URLs, API testing, and debugging links.",
    ],
    about: [
      "URLs reserve certain characters for structure, including question marks, ampersands, slashes, equals signs, and spaces. When those characters are part of a value rather than part of the URL syntax, encoding prevents the browser or server from reading the link incorrectly.",
    ],
    howItWorks: [
      "Paste the value you want to encode or decode and choose the direction. Encoding replaces unsafe characters with percent sequences; decoding reverses valid sequences. If an encoded string is malformed, the tool shows an error rather than guessing at the intended text.",
    ],
    whenToUse: [
      "Use it when building links with query parameters, checking webhook payloads, debugging redirects, or preparing values for campaign URLs. Usually encode individual components, not an entire URL, so reserved characters that define the URL structure keep working.",
    ],
  },
  "base64-encoder-decoder": {
    introduction: [
      "The Base64 Encoder and Decoder converts readable text into Base64 and decodes Base64 back to text. It is useful for development, testing, examples, configuration snippets, and understanding encoded values found in web systems.",
    ],
    about: [
      "Base64 is a representation format, not a security feature. It allows data to travel through systems that expect plain text characters, which is why it appears in JSON payloads, email formats, data URLs, and some API workflows. Anyone with the string can decode it.",
    ],
    howItWorks: [
      "Choose encode to convert the input text into a Base64 string, or decode to convert a Base64 string back into text. The browser handles common Unicode text by converting it through bytes before encoding and decoding, and invalid Base64 input is reported as an error.",
    ],
    whenToUse: [
      "Use it for harmless test data, documentation examples, debugging API fields, or checking whether an encoded value contains the text you expect. Do not paste passwords, tokens, private keys, or production secrets into any online conversion tool.",
    ],
  },
  "json-formatter-validator": {
    introduction: [
      "The JSON Formatter and Validator helps you turn compact or messy JSON into readable structure, minify formatted JSON, and catch syntax errors. It is useful for developers, analysts, testers, and anyone copying data between systems.",
    ],
    about: [
      "JSON is strict: property names need double quotes, comments are not allowed, trailing commas break parsing, and brackets must match. A formatter is helpful because it confirms the text can be parsed before it makes indentation changes. That separates valid data from text that only looks like JSON.",
    ],
    howItWorks: [
      "Paste JSON, choose format or minify, and review the output. The browser parses the input first; if parsing fails, the error message points toward the syntax problem. Formatting changes whitespace only, while minifying removes unnecessary whitespace after the data is valid.",
    ],
    whenToUse: [
      "Use it when inspecting API responses, cleaning examples for documentation, comparing payloads, preparing configuration snippets, or checking copied analytics data. For very large files or sensitive production data, use your local development tools instead.",
    ],
  },
  "utm-builder": {
    introduction: [
      "The UTM Link Builder creates campaign URLs with source, medium, campaign, term, and content parameters. It helps marketing, content, and growth teams produce consistent tracking links without manually editing query strings.",
    ],
    about: [
      "UTM parameters make analytics reports easier to group by channel and campaign. Inconsistent naming can fragment results, so a builder is useful even when the link is simple. The page keeps each field visible and preserves existing URL parameters so the final link is easier to review.",
    ],
    howItWorks: [
      "Enter the destination URL, fill in the campaign fields, and copy the generated URL. The tool updates or appends UTM parameters using standard URL handling. Optional term and content fields can distinguish paid keywords, creative variants, buttons, or placements.",
    ],
    whenToUse: [
      "Use it before sending newsletters, social posts, paid ads, partner links, QR campaigns, or launch announcements. Decide on naming conventions before building many links, and avoid putting personal data in parameters because URLs can appear in logs and reports.",
    ],
  },
  "email-link-generator": {
    introduction: [
      "The Email Link Generator builds mailto links with recipient, subject, body, cc, and bcc fields. It is useful for contact buttons, support links, documentation, intranet pages, and simple calls to action.",
    ],
    about: [
      "Mailto links look simple until spaces, line breaks, punctuation, and multiple fields need to be encoded correctly. This page creates both the raw mailto URL and an HTML anchor so you can paste the version that fits your site, CMS, document, or prototype.",
    ],
    howItWorks: [
      "Enter the email fields you want to prefill. The generator uses URL parameters for subject, body, cc, and bcc, encodes them for safe linking, and displays the finished mailto string plus HTML link markup. The visitor's own email app opens the draft.",
    ],
    whenToUse: [
      "Use it for low-friction contact links, feedback prompts, event enquiries, or support templates. Avoid public links that prefill sensitive personal information, and remember that behavior varies by device, browser, and the user's configured email client.",
    ],
  },
  "meta-tag-preview-checker": {
    introduction: [
      "The Meta Tag Preview Checker helps draft a page title and meta description before publishing. It gives a search-result style preview and length feedback so copy can be reviewed in context.",
    ],
    about: [
      "Title tags and meta descriptions influence how a page is presented, but they are not guaranteed display text. Search engines may rewrite snippets based on the query and page content. A preview is still useful because it forces the title, description, and URL to be read together as a searcher would see them.",
    ],
    howItWorks: [
      "Enter the page URL, title tag, and meta description. The tool renders a simple snippet preview and checks whether the title and description fall within common character ranges. Use the ranges as guidance while prioritising clarity, relevance, and a reason to click.",
    ],
    whenToUse: [
      "Use it while writing new pages, refreshing old metadata, checking campaign landing pages, or reviewing client drafts. Pair it with the Reading Time Calculator for content length and the UTM Builder when the page will be promoted through tracked campaigns.",
    ],
  },
  "uk-holiday-entitlement-calculator": {
    introduction: [
      "The UK Holiday Entitlement Calculator estimates statutory annual leave in days from days worked per week and months worked in the leave year. It is for quick planning around full-time, part-time, and partial-year work patterns.",
    ],
    about: [
      "UK statutory leave is commonly expressed as 5.6 weeks, capped at 28 days for someone working five days per week. Part-time workers receive the same principle applied to their working pattern. Contracts can offer more, and bank holidays may be included in or added to the entitlement.",
    ],
    howItWorks: [
      "Enter the number of days worked per week and, if needed, the number of months worked in the leave year. The calculator applies the 5.6-week principle, caps the full-year value where relevant, and then prorates the result for partial-year planning.",
    ],
    whenToUse: [
      "Use it when starting or leaving a job, checking part-time entitlement, planning annual leave, or sense-checking an HR figure. Verify official entitlement against your contract, employer policy, and current GOV.UK guidance before relying on the number for payroll.",
    ],
  },
  "uk-take-home-pay-estimator": {
    introduction: [
      "The UK Take-Home Pay Estimator gives a simplified view of annual and monthly net pay after income tax, National Insurance, and employee pension percentage. It is useful for offer comparisons and personal budgeting.",
    ],
    about: [
      "Gross salary is not the same as money arriving in your bank account. Tax bands, personal allowance tapering, National Insurance, and pension contributions all affect take-home pay. This estimator keeps those major components visible while avoiding the complexity of a full payroll system.",
    ],
    howItWorks: [
      "Enter annual gross salary and pension percentage. The estimator subtracts pension, applies a simplified personal allowance and PAYE-style income tax calculation for England, Wales, and Northern Ireland, estimates National Insurance, and shows annual and monthly take-home pay.",
    ],
    whenToUse: [
      "Use it before accepting a salary offer, changing pension contribution, or updating a monthly budget. It does not cover Scottish tax bands, student loans, benefits in kind, salary sacrifice details, bonuses, tax-code adjustments, or official payroll rounding.",
    ],
  },
  "uk-statutory-sick-pay-calculator": {
    introduction: [
      "The UK Statutory Sick Pay Calculator estimates SSP from qualifying sickness days, qualifying days per week, and the weekly rate you enter. It is a planning aid for understanding how waiting days can affect short absences.",
    ],
    about: [
      "SSP rules depend on eligibility, linked periods of sickness, earnings, employment status, and current statutory rates. This page focuses on the arithmetic after you have a simple set of qualifying days and a weekly rate. It makes waiting days, payable days, and estimated pay visible.",
    ],
    howItWorks: [
      "Enter total qualifying sickness days, the number of qualifying days in the week, and the weekly SSP rate. The calculator applies up to three waiting days, divides the weekly rate by qualifying days, and multiplies by payable days to estimate SSP.",
    ],
    whenToUse: [
      "Use it for a quick sense-check of a short sickness absence or to understand how changing qualifying days affects the estimate. For actual payroll, verify the current GOV.UK rules, employer policy, linked absence treatment, and eligibility requirements.",
    ],
  },
  "uk-redundancy-pay-calculator": {
    introduction: [
      "The UK Statutory Redundancy Pay Calculator estimates statutory redundancy from age, complete years of service, weekly pay, and the statutory weekly pay cap. It is for planning and sense-checking, not legal advice.",
    ],
    about: [
      "Statutory redundancy pay uses age-based multipliers for complete years of continuous service, subject to a maximum number of years and a capped weekly pay figure. The calculation can be hard to follow manually because each year of service may use a different age band.",
    ],
    howItWorks: [
      "Enter current age, complete years of service, gross weekly pay, and the statutory cap you want to use. The calculator walks back through complete service years, applies the appropriate weekly multiplier for age, caps weekly pay, and totals the estimated entitlement.",
    ],
    whenToUse: [
      "Use it when reviewing an employer estimate, planning a consultation conversation, or comparing statutory and enhanced redundancy terms. Employment status, continuity of service, contracts, settlement terms, and changing statutory caps can all affect the actual amount.",
    ],
  },
  "uk-notice-period-calculator": {
    introduction: [
      "The UK Notice Period Calculator estimates statutory notice from continuous employment and compares it with a contractual notice period. It helps turn years and months of service into a practical planning figure.",
    ],
    about: [
      "Notice periods matter for resignations, dismissals, handovers, payroll planning, and recruitment timing. Statutory notice sets a minimum in many ordinary situations, but contracts can provide longer notice and special circumstances can change the position. Showing both statutory and contract values makes the comparison clearer.",
    ],
    howItWorks: [
      "Enter years and additional months of service, then add any contractual notice period in weeks. The calculator derives complete years, applies a simplified statutory notice rule, and shows the larger planning figure between statutory and contractual notice.",
    ],
    whenToUse: [
      "Use it before discussing a leaving date, planning handover cover, or checking whether a contract appears more generous than the statutory minimum. For disputes, dismissals for misconduct, probation clauses, or settlement negotiations, get proper legal or HR advice.",
    ],
  },
  "uk-working-days-calculator": {
    introduction: [
      "The UK Working Days Calculator counts Monday-to-Friday weekdays between two dates and lets you subtract bank holidays or closure days. It is useful for project lead times, HR planning, applications, and service-level estimates.",
    ],
    about: [
      "Calendar days and working days answer different questions. A two-week period may contain ten weekdays, fewer if bank holidays or company closures fall inside it, and a different total for shift workers. This page gives a transparent weekday baseline that you can adjust.",
    ],
    howItWorks: [
      "Choose start and end dates, decide whether to include the end date, and enter the number of non-working holidays or closures to subtract. The calculator counts standard weekdays in the range and then applies your manual adjustment.",
    ],
    whenToUse: [
      "Use it when checking a project deadline, notice window, delivery estimate, leave period, or response target. It does not automatically fetch bank holidays by UK nation, so use an official holiday list when accuracy matters.",
    ],
  },
  "uk-electricity-cost-calculator": {
    introduction: [
      "The UK Electricity Cost Calculator estimates appliance running cost from watts, usage time, standby draw, and pence-per-kWh unit rate. It helps identify which devices may be quietly shaping a household bill.",
    ],
    about: [
      "Appliance cost depends on power rating and time used, not just whether the device feels expensive. A high-watt heater used briefly can cost less than a smaller device left on for many hours. Showing daily, weekly, monthly, and annual values makes those patterns easier to compare.",
    ],
    howItWorks: [
      "Enter the appliance wattage, active hours, active days, standby wattage, and unit rate from your tariff. The calculator converts watts to kW, multiplies by hours to get kWh, applies the unit rate, and shows standing charge separately for bill context.",
    ],
    whenToUse: [
      "Use it before buying or using heaters, tumble dryers, dehumidifiers, EV chargers, aquarium equipment, gaming PCs, or home office kit. Replace default rates with your supplier figures because tariffs vary by region, meter, and payment method.",
    ],
  },
  "uk-gas-bill-calculator": {
    introduction: [
      "The UK Gas Bill Calculator converts gas meter readings into estimated kWh and bill cost using unit rate, standing charge, billing days, and VAT. It helps compare your own reading-based estimate with a supplier bill.",
    ],
    about: [
      "Gas meters measure volume, while bills charge for energy. That means readings need conversion using meter type, correction factor, and calorific value before the unit rate can be applied. The calculator exposes those steps so the final charge is easier to understand.",
    ],
    howItWorks: [
      "Enter previous and current readings, choose metric or imperial meter type, and adjust calorific value or correction factor if your bill shows different values. Add the unit rate, standing charge, billing days, and VAT rate to estimate the total.",
    ],
    whenToUse: [
      "Use it after submitting a meter reading, checking an estimated bill, or comparing winter and summer usage. For exact billing, use the figures printed by your supplier because calorific value, tariff dates, VAT, and adjustments can vary.",
    ],
  },
  "uk-energy-direct-debit-calculator": {
    introduction: [
      "The UK Energy Direct Debit Calculator estimates a monthly gas and electricity payment from annual usage, tariff rates, standing charges, account balance, and desired buffer. It is for checking whether a direct debit feels broadly aligned.",
    ],
    about: [
      "Energy direct debits smooth uneven seasonal usage, which means the monthly payment is not simply last month's usage. Annual consumption, current rates, credit or debit balance, and supplier buffer policies all influence the suggested amount. This page makes your own version of that estimate transparent.",
    ],
    howItWorks: [
      "Enter annual electricity and gas kWh, each unit rate, each standing charge, current monthly direct debit, account balance, buffer, and spread period. The calculator estimates annual cost, adjusts for balance and buffer, then divides the amount across the selected months.",
    ],
    whenToUse: [
      "Use it before challenging a payment change, planning for winter, comparing tariffs, or reviewing whether a credit balance is building. Supplier calculations may include price forecasts, debt recovery, meter history, and policy choices that are not visible here.",
    ],
  },
  "uk-water-bill-calculator": {
    introduction: [
      "The UK Water Bill Calculator estimates a metered water bill from annual usage, clean water rate, wastewater rate, return-to-sewer percentage, standing charges, and drainage charges. It helps make water bills easier to inspect.",
    ],
    about: [
      "Metered water bills can combine several charges: clean water supplied, wastewater assumed to return to sewer, fixed standing charges, and sometimes surface water drainage. Rates vary by water company, so entering the values from your bill gives a better estimate than using national averages.",
    ],
    howItWorks: [
      "Enter annual usage in cubic metres, the clean water and wastewater rates, the return-to-sewer percentage, and annual fixed charges. The calculator estimates clean water cost, wastewater cost, fixed charges, annual total, monthly equivalent, and daily equivalent.",
    ],
    whenToUse: [
      "Use it when checking a new metered bill, modelling lower usage, comparing homes, or deciding whether a meter estimate deserves a closer look. For unmetered, assessed, social tariff, or special drainage arrangements, confirm the charging basis with your water company.",
    ],
  },
};

function fallbackCopy(title: string, intro: string): ToolPageCopy {
  return {
    introduction: [intro],
    about: [
      `${title} is designed for a focused everyday task where a quick browser-based calculation or conversion is more useful than a full spreadsheet. Review the inputs carefully, then use the result as a practical planning aid.`,
    ],
    howItWorks: [
      "Enter the values requested by the page, review the result, and change one input at a time if you want to compare scenarios. Keeping the assumptions visible makes the output easier to interpret and easier to verify elsewhere.",
    ],
    whenToUse: [
      "Use the tool for quick checks, estimates, and everyday planning. For official, regulated, legal, tax, payroll, medical, or high-value decisions, verify the result with the relevant provider, authority, or qualified adviser.",
    ],
  };
}

export function getCoreToolPageCopy(tool: CoreTool) {
  return coreToolCopy[tool.slug] ?? fallbackCopy(tool.title, tool.intro);
}

export function getSeoToolPageCopy(tool: SeoTool) {
  return seoToolCopy[tool.slug] ?? fallbackCopy(tool.title, tool.intro);
}
