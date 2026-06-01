export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
  primaryToolSlug: string;
  relatedToolSlugs: string[];
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-internet-speed-do-you-need",
    title: "What internet speed do you need for video calls, streaming, and work?",
    description:
      "Learn how to read internet speed test results and decide whether your connection is good enough for calls, streaming, gaming, uploads, and home working.",
    excerpt:
      "A practical guide to download speed, upload speed, latency, and when to run a speed test before blaming your provider or buying a new plan.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "5 min read",
    category: "Internet & IT",
    keywords: [
      "what internet speed do I need",
      "good internet speed",
      "speed test results",
      "video call speed",
      "download upload latency",
    ],
    primaryToolSlug: "speed-test",
    relatedToolSlugs: ["speed-test", "ip-checker", "password-generator", "json-formatter-validator"],
    intro: [
      "Most people search for a speed test after something has already gone wrong: a video call freezes, a download crawls, a stream drops to a lower quality, or a game starts lagging. The result is useful only if you know what the numbers mean. Download speed, upload speed, latency, and jitter each describe a different part of the connection.",
      "The short answer is that basic browsing needs far less speed than a busy home or a work setup with calls, cloud storage, and streaming running together. The better answer is to test the connection where you actually use it, then compare the result with the task that is struggling.",
    ],
    sections: [
      {
        heading: "Start with the task, not the advertised package",
        body: [
          "Broadband adverts focus on headline download speed because it is easy to compare. That number matters for streaming, large downloads, software updates, and several people using the same connection at once. It does not tell the whole story. A 150 Mbps plan can still feel poor if the WiFi signal is weak, upload speed is low, or latency jumps during calls.",
          "For one person browsing, sending email, and watching HD video, 25 to 50 Mbps download speed is often comfortable. A household with several streams, remote work, consoles, tablets, and cloud backups may need much more headroom. If 4K streaming, large game downloads, or several simultaneous video calls are normal, the useful question becomes whether the connection stays stable at busy times.",
        ],
      },
      {
        heading: "Download, upload, latency, and jitter in plain English",
        body: [
          "Download speed is how quickly data reaches you. It affects streaming quality, file downloads, app updates, and loading media-heavy pages. Upload speed is how quickly your device sends data out. It matters for video calls, sending files, cloud backup, livestreaming, and sharing large attachments.",
          "Latency is the delay between your device and a server. It is usually shown in milliseconds. Lower latency makes calls, games, and remote desktops feel more responsive. Jitter is variation in that delay. A connection with decent speed but high jitter can still produce broken audio or uneven video because packets arrive inconsistently.",
        ],
      },
      {
        heading: "How to run a useful speed test",
        body: [
          "Run the test from the room and device where you notice the problem. Then run it again near the router, and once more using Ethernet if you can. The comparison helps separate a broadband problem from a WiFi coverage problem. Keep other downloads paused while testing if you want a clean baseline.",
          "Use the free Internet Speed Test on Daily Utility Dock to check download speed, upload speed, and connection responsiveness quickly. If the result is much better by Ethernet than by WiFi, the next fix may be router placement, a mesh node, or reducing interference rather than paying for a faster plan.",
        ],
      },
      {
        heading: "When low speed is not the real issue",
        body: [
          "If video calls freeze only in one room, WiFi signal is a likely suspect. If streaming drops every evening, local congestion or provider capacity may be involved. If only work tools are slow, a VPN, office server, or browser extension could be the bottleneck. A public IP check can also confirm whether a VPN or mobile hotspot is the connection a website is seeing.",
          "Run tests at different times of day and keep notes. One isolated result is a snapshot. A pattern gives you something more useful when speaking to an internet provider, moving equipment, or deciding whether to upgrade.",
        ],
      },
      {
        heading: "A simple checklist before upgrading",
        body: [
          "Restart the router, test near it, compare WiFi with Ethernet, check for background uploads, and test another device. If all devices are slow everywhere, the provider connection may be underperforming. If one device is slow, update it or check its network settings. If only uploads are poor, look at cloud backup and video-call needs specifically.",
          "An upgrade can help when the connection is consistently saturated by normal use. It will not fix a bad router location, an overloaded old laptop, or a VPN route that is far away. Testing first keeps the decision grounded in evidence.",
        ],
      },
      {
        heading: "Turn the result into a practical next step",
        body: [
          "If the download result is strong but calls still break up, focus on upload speed, latency, and the app you are using. If every number looks poor, run one more test after restarting the router and disconnecting busy devices. If the Ethernet result is good but WiFi is weak, repositioning equipment may do more than changing broadband package.",
          "Keep screenshots or notes from two or three tests if you plan to contact support. Include the time, device, room, and whether the test used WiFi or Ethernet. That record is more useful than saying the internet feels slow because it shows where the problem appears.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is 100 Mbps fast enough for working from home?",
        answer:
          "For many homes, 100 Mbps download speed is enough for browsing, email, video meetings, and streaming. Upload speed, latency, WiFi coverage, and how many people share the connection are just as important for work calls.",
      },
      {
        question: "Why is upload speed important for video calls?",
        answer:
          "Your camera and microphone data must be sent from your device to other people. Low upload speed, high latency, or jitter can cause frozen video, delayed audio, and poor screen sharing.",
      },
      {
        question: "Should I run a speed test on WiFi or Ethernet?",
        answer:
          "Run both if possible. Ethernet shows a cleaner baseline for the broadband line, while WiFi testing shows the performance you get in the rooms where you actually work or stream.",
      },
      {
        question: "Why do speed test results change during the day?",
        answer:
          "Network congestion, other users in your home, provider traffic, router load, and WiFi interference can all change results. Repeating tests at different times gives a better picture than one result.",
      },
    ],
  },
  {
    slug: "compare-time-zones-before-sending-a-message",
    title: "How to compare time zones before sending a message or planning a call",
    description:
      "Use a world clock to compare current local times, avoid off-hours messages, and plan calls across teams, clients, family, and travel schedules.",
    excerpt:
      "A practical workflow for checking current city times, daylight saving differences, and working-hour overlap before you message someone in another region.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "5 min read",
    category: "Time & Date",
    keywords: [
      "compare time zones",
      "world clock for meetings",
      "current time in multiple cities",
      "international call planning",
      "working hours time zones",
    ],
    primaryToolSlug: "world-clock",
    relatedToolSlugs: ["world-clock", "timezone-converter", "deadline-countdown-calculator", "meeting-cost-calculator"],
    intro: [
      "Time zone mistakes usually happen in small moments. You send a chat message because it is mid-afternoon for you, but it lands after midnight for a colleague. You suggest a call that looks normal on your calendar but cuts into school pickup somewhere else. A world clock helps with these everyday checks before a message becomes an interruption.",
      "The goal is not to memorise offsets. Offsets change, daylight saving rules differ, and some places use half-hour or quarter-hour differences. A better habit is to compare current local times for the people or cities involved, then convert a specific meeting time only when you need an invitation.",
    ],
    sections: [
      {
        heading: "Use current local time for quick decisions",
        body: [
          "If you only need to know whether someone is likely awake or inside working hours, current local time is enough. Add the important cities to a world clock and glance at them before sending a message. This is useful for remote teams, customer support, international clients, travel planning, and family calls.",
          "A world clock also gives context that a simple offset does not. Seeing that it is Sunday night in one place and Monday morning in another can change how you phrase a message or whether you schedule it for later.",
        ],
      },
      {
        heading: "Watch out for daylight saving transitions",
        body: [
          "The awkward weeks are often around daylight saving changes. North America, Europe, Australia, and other regions do not always change clocks on the same date. For a week or two, a recurring meeting may shift by one hour for part of the group. Some regions do not observe daylight saving at all.",
          "Using the World Clock on Daily Utility Dock keeps the comparison tied to browser time zone data instead of a remembered offset. It is a simple way to check whether the time difference you have in mind still applies today.",
        ],
      },
      {
        heading: "Find a fair overlap window",
        body: [
          "For work calls, list the cities involved and mark ordinary working hours for each person. The fairest meeting time is often not perfect for everyone, but it should avoid repeated burden on the same location. If one team always takes early mornings or late evenings, rotate the slot when possible.",
          "A quick world clock check helps you spot the human side of scheduling. It may reveal that a proposed call is technically possible but sits during lunch, school pickup, a commute, or the end of the day for one group.",
        ],
      },
      {
        heading: "When to use a time zone converter instead",
        body: [
          "A world clock answers what time it is now. A time zone converter answers what time a future event will be in another place. Once you have a likely call slot, use a converter to check the exact date and local time for each location. This matters when the meeting crosses midnight or happens after a clock change.",
          "For example, a webinar planned for 9:00 AM in London may be the previous evening in parts of North America or late evening in Asia-Pacific. Convert the date, not just the hour, before you publish the invite.",
        ],
      },
      {
        heading: "Build a small time-zone habit",
        body: [
          "Keep your most common cities saved in the same order: your location, main team hubs, client locations, and travel destinations. Before sending a non-urgent message, glance at the list. Before suggesting a call, check current local times, then convert the proposed time.",
          "This habit reduces back-and-forth, missed meetings, and accidental late-night pings. It also shows respect for the people on the other side of the calendar entry.",
        ],
      },
      {
        heading: "Write messages with the recipient's day in mind",
        body: [
          "When the clock shows it is outside normal hours for someone else, decide whether the message is urgent or can wait. If it can wait, schedule it for their morning or add a line that says no reply is expected until their workday. That small note prevents people from feeling pulled into work at odd times.",
          "For teams, agree on a default format for time-sensitive messages. A line such as 'Today, 4:00 PM London / 11:00 AM New York' is clearer than assuming everyone will convert mentally. The world clock gives the current context; the converter confirms the exact future slot.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a world clock better than searching each city time?",
        answer:
          "For repeated comparisons, yes. A world clock lets you keep several cities visible together, which is faster and less error-prone than searching each time separately.",
      },
      {
        question: "Do world clocks handle daylight saving time?",
        answer:
          "Browser-based world clocks can apply supported time zone rules automatically. You should still check future meetings with a converter because daylight saving rules depend on the date.",
      },
      {
        question: "What is the best time for international meetings?",
        answer:
          "The best time is usually the least bad overlap across normal working hours. For recurring calls, rotate inconvenient slots so the same team is not always early or late.",
      },
      {
        question: "Should I use UTC for team communication?",
        answer:
          "UTC is useful for technical deadlines and global releases. For human scheduling, also provide local times or a calendar invite so people do not need to calculate manually.",
      },
    ],
  },
  {
    slug: "schedule-meetings-across-time-zones",
    title: "How to schedule meetings across time zones without date mistakes",
    description:
      "A practical guide to converting meeting times between cities, handling daylight saving time, and avoiding invites that land on the wrong date.",
    excerpt:
      "Learn when to convert a meeting time, why the date matters, and how to check cross-midnight calls before sending an invite.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "6 min read",
    category: "Time & Date",
    keywords: [
      "schedule meetings across time zones",
      "time zone converter",
      "convert meeting time",
      "meeting time zone mistake",
      "UTC GMT meeting planning",
    ],
    primaryToolSlug: "timezone-converter",
    relatedToolSlugs: ["timezone-converter", "world-clock", "meeting-cost-calculator", "deadline-countdown-calculator"],
    intro: [
      "A time zone meeting mistake rarely looks dramatic in the calendar. It is a date that silently changes, a daylight saving week that shifts the offset, or an invite written in one local time while half the group reads it in another. These errors are common because people remember time zones as fixed offsets even when they are not.",
      "The safest workflow is simple: choose the source city, include the actual date, convert to the destination city, and check whether the result crosses midnight. Then put the meeting in a calendar tool that stores the time zone rather than relying on a text note.",
    ],
    sections: [
      {
        heading: "Always include the date when converting",
        body: [
          "The same two cities can have different offsets at different times of year. London and New York are often five hours apart, but not during every daylight saving transition week. Sydney, Los Angeles, Berlin, and Singapore can create even more variation because regional clock changes do not follow one global calendar.",
          "A time conversion without a date is only a rough answer. For any meeting, webinar, deadline, interview, release window, or travel arrangement, enter the specific date before trusting the result.",
        ],
      },
      {
        heading: "Check for cross-midnight results",
        body: [
          "Many mistakes happen when a converted time lands on the previous or next day. A meeting at 6:00 PM in California can be the next morning in Europe. A morning call in London may still be the previous night in parts of the Americas. If the date changes, mention it clearly in the invite or event description.",
          "The Time Zone Converter on Daily Utility Dock displays the destination date as well as the time, which helps catch these errors before they become missed calls.",
        ],
      },
      {
        heading: "Use city names when possible",
        body: [
          "Abbreviations such as CST, IST, and BST can mean different things depending on context. CST may refer to Central Standard Time in North America or China Standard Time. IST may mean India Standard Time, Irish Standard Time, or Israel Standard Time. City-based time zones are clearer because they map to a known region and daylight saving rule set.",
          "When you write a meeting note, use both the time and the place, such as 2:00 PM London time, rather than only an abbreviation. For technical teams, UTC can be useful, but customer-facing or team-facing communication still benefits from local examples.",
        ],
      },
      {
        heading: "Build in working-hour and meeting-cost checks",
        body: [
          "Once the time is converted, ask whether it is reasonable. A time can be correct and still be a poor choice. If several people must attend outside normal hours, the meeting should probably be important, short, and well prepared.",
          "For business calls, a meeting cost estimate can also be useful. A 30-minute meeting with eight people is not the same commitment as a quick one-to-one. Converting the time is only the first scheduling decision.",
        ],
      },
      {
        heading: "Confirm recurring meetings after clock changes",
        body: [
          "Recurring meetings can drift when daylight saving changes happen in one region before another. Calendar systems usually handle this if the event has a proper time zone, but the human expectation may still be wrong. It is worth sending a note before transition weeks if attendees are spread across regions.",
          "For important events, re-run the conversion for the actual future date. This takes less than a minute and can prevent a costly absence.",
        ],
      },
      {
        heading: "Send the invite in a way people can verify",
        body: [
          "After converting the time, put the meeting in a calendar invitation with the correct source time zone. Add a short text summary only as a backup, not as the source of truth. Calendar software can adjust for each attendee, while a copied text line can become outdated if the meeting moves.",
          "For public webinars, interviews, or customer calls, include the city and date in confirmation emails. If the audience is broad, add UTC as well. This gives technical users a stable reference and gives everyone else a recognisable local anchor.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does the date matter in a time zone converter?",
        answer:
          "Daylight saving rules depend on the date, and some conversions cross midnight. Entering the date lets the converter show the correct destination time and date.",
      },
      {
        question: "What is the difference between UTC and GMT?",
        answer:
          "UTC is the modern global time standard used for technical coordination. GMT is often used in everyday UK winter-time references. For scheduling, UTC is precise, but local city times are easier for many people.",
      },
      {
        question: "Can I rely on calendar apps for time zones?",
        answer:
          "Calendar apps are generally good if the event is created with the correct time zone. A separate converter is useful before sending the invite, especially for public events or cross-midnight times.",
      },
      {
        question: "How do I avoid time zone abbreviation confusion?",
        answer:
          "Use city or region names and include the date. For example, write 10:00 AM New York time on 12 June rather than only 10:00 AM EST.",
      },
    ],
  },
  {
    slug: "add-or-remove-vat-from-a-price-uk",
    title: "How to add or remove VAT from a price in the UK",
    description:
      "Understand VAT-inclusive and VAT-exclusive prices, calculate net and gross amounts, and avoid common mistakes when checking UK invoices and quotes.",
    excerpt:
      "A plain-English guide to adding VAT, removing VAT, and checking the numbers on invoices, product prices, supplier quotes, and small business estimates.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "6 min read",
    category: "Financial Tools",
    keywords: [
      "add VAT to price",
      "remove VAT from price",
      "VAT inclusive exclusive",
      "UK VAT calculator",
      "net gross VAT amount",
    ],
    primaryToolSlug: "vat-calculator",
    relatedToolSlugs: ["vat-calculator", "budget-planner", "uk-take-home-pay-estimator", "loan-repayment-calculator"],
    intro: [
      "VAT questions often come down to one small but important detail: are you starting with a net price before VAT, or a gross price that already includes VAT? Adding 20% to a net price is not the same operation as removing VAT from a VAT-inclusive price. Mixing those up creates invoice errors, margin mistakes, and confusing quotes.",
      "This guide focuses on everyday UK VAT checks. It is not tax advice, and VAT rules can be more detailed than a quick calculator can cover. For common price checks, though, the basic arithmetic is straightforward once net, VAT, and gross are separated.",
    ],
    sections: [
      {
        heading: "Net, VAT, and gross prices",
        body: [
          "The net price is the amount before VAT. The VAT amount is the tax added to that net price. The gross price is the total including VAT. If an item is GBP100 net and the VAT rate is 20%, the VAT amount is GBP20 and the gross price is GBP120.",
          "Invoices and quotes should make this clear, but product pages and receipts do not always do so. Business-to-business prices may be shown excluding VAT, while consumer-facing prices are often shown including VAT. When comparing suppliers, check that you are comparing the same basis.",
        ],
      },
      {
        heading: "How to add VAT to a net price",
        body: [
          "To add VAT, multiply the net amount by one plus the VAT rate. At 20%, multiply by 1.20. At 5%, multiply by 1.05. The difference between the gross and net amount is the VAT. This is the simple part because you are adding a percentage of the original net value.",
          "If you are preparing a quick quote or checking a supplier estimate, the UK VAT Calculator on Daily Utility Dock can show the net, VAT, and gross figures side by side so you do not have to keep the formulas in your head.",
        ],
      },
      {
        heading: "How to remove VAT from a gross price",
        body: [
          "Removing VAT is where many mistakes happen. You do not subtract 20% from a VAT-inclusive price to remove 20% VAT. A GBP120 gross price includes GBP20 VAT and GBP100 net. Subtracting 20% from GBP120 would give GBP96, which is wrong.",
          "To remove 20% VAT, divide the gross amount by 1.20 to find the net amount. Then subtract the net from the gross to find the VAT amount. For a 5% rate, divide by 1.05.",
        ],
      },
      {
        heading: "Know which VAT rate applies",
        body: [
          "The UK standard VAT rate is 20%, but some goods and services may use a reduced rate, zero rate, or exemptions. A calculator can handle the arithmetic for rates you enter or select, but it cannot decide the correct tax treatment for a particular business scenario.",
          "For official decisions, check HMRC guidance or speak to an accountant. For everyday checking, make sure the rate on your invoice or quote matches what you expected before comparing totals.",
        ],
      },
      {
        heading: "Common VAT comparison mistakes",
        body: [
          "The most common mistake is comparing one supplier's VAT-exclusive price with another supplier's VAT-inclusive price. Another is treating the VAT amount as profit, which it is not. VAT collected from customers may need to be paid to HMRC depending on registration and scheme details.",
          "When checking prices, write down three columns: net, VAT, and gross. If one figure is missing, calculate it before making the decision. Clear columns prevent small percentage errors from becoming expensive misunderstandings.",
        ],
      },
      {
        heading: "Use VAT checks before accepting a quote",
        body: [
          "Before approving a supplier quote, ask whether the figure is inclusive or exclusive of VAT, then calculate the missing values yourself. This is especially useful when several quotes use different wording. A cheaper-looking price can become more expensive once VAT and delivery are included.",
          "For small business estimates, keep the VAT calculation beside the customer-facing total. It helps you explain the price, check that invoice software is configured correctly, and spot cases where a reduced or zero rate needs proper confirmation rather than a quick assumption.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I remove 20% VAT from a price?",
        answer:
          "Divide the VAT-inclusive price by 1.20 to get the net price. The VAT amount is the gross price minus that net price.",
      },
      {
        question: "Is subtracting 20% the same as removing VAT?",
        answer:
          "No. If a price includes 20% VAT, the VAT is 20% of the net price, not 20% of the gross price. Divide by 1.20 instead.",
      },
      {
        question: "What is the standard UK VAT rate?",
        answer:
          "The standard UK VAT rate is 20%, but some goods and services can use reduced, zero, or exempt treatment. Check official guidance for the correct rate.",
      },
      {
        question: "Can a VAT calculator replace an accountant?",
        answer:
          "No. It can help with arithmetic, but VAT registration, schemes, exemptions, and sector-specific rules should be checked with HMRC or a qualified adviser.",
      },
    ],
  },
  {
    slug: "work-out-fuel-cost-for-a-trip",
    title: "How to work out fuel cost for a trip before you leave",
    description:
      "Estimate petrol or diesel costs using distance, MPG or litres per 100 km, and current fuel price so road trips and commutes are easier to budget.",
    excerpt:
      "Learn the inputs behind a journey fuel estimate, how to split costs fairly, and why real-world driving can differ from dashboard efficiency.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "6 min read",
    category: "Financial Tools",
    keywords: [
      "fuel cost for trip",
      "journey fuel calculator",
      "petrol cost calculator",
      "diesel cost estimate",
      "MPG fuel cost",
    ],
    primaryToolSlug: "fuel-calculator",
    relatedToolSlugs: ["fuel-calculator", "budget-planner", "unit-converter", "uk-electricity-cost-calculator"],
    intro: [
      "Fuel cost is one of the easiest travel expenses to underestimate. A trip that looks cheap on a map can become more expensive once fuel price, real-world efficiency, traffic, and detours are included. The good news is that a useful estimate only needs three inputs: distance, vehicle efficiency, and price per litre.",
      "Whether you are planning a holiday drive, a weekly commute, a delivery route, or a shared lift, calculating fuel before you leave makes the cost visible. It also helps compare driving with train tickets, car sharing, or using a different vehicle.",
    ],
    sections: [
      {
        heading: "The three numbers you need",
        body: [
          "Start with the distance for the full journey, including the return leg if needed. Mapping apps are good enough for a planning estimate, but add a little extra if you expect diversions, city driving, or scenic stops. Next, find your vehicle efficiency. In the UK this is often shown as miles per gallon, while many international sources use litres per 100 km.",
          "Finally, use the current fuel price per litre. Prices vary by station and region, so use a realistic local figure rather than an old receipt if the budget matters.",
        ],
      },
      {
        heading: "Why real journeys differ from official MPG",
        body: [
          "Official MPG can be optimistic because test conditions are controlled. Real fuel use changes with motorway speed, traffic, cold starts, hills, tyre pressure, roof boxes, air conditioning, and how heavily the car is loaded. A short urban trip may use noticeably more fuel than a steady longer drive.",
          "If you know your dashboard average for similar trips, use that instead of a brochure figure. The Fuel Cost Calculator on Daily Utility Dock lets you enter the efficiency unit you actually have, then estimates litres used and total cost.",
        ],
      },
      {
        heading: "How to split fuel costs fairly",
        body: [
          "For shared journeys, agree what is included before setting off. Some groups split fuel only. Others add parking, tolls, congestion charges, or a contribution for wear and tear. The fuel estimate gives a transparent starting point because everyone can see the same distance, efficiency, and price assumptions.",
          "If one person drives significantly out of their way to pick others up, include that extra distance. A fair split depends on the full route, not just the motorway section everyone shares.",
        ],
      },
      {
        heading: "Compare driving with other options",
        body: [
          "Fuel is only one part of travel cost, but it is the part most people can estimate quickly. Once you have a fuel figure, add parking, tolls, fares to the station, car hire, or accommodation changes. A train ticket that looks expensive may be competitive after parking and city driving are included.",
          "For regular commuting, multiply the round-trip estimate by your weekly or monthly travel days. This turns a small daily amount into a budget line you can compare with hybrid working, public transport, cycling, or moving parking location.",
        ],
      },
      {
        heading: "Keep estimates realistic",
        body: [
          "Round up if the journey is important. Fuel prices can move, traffic can reduce efficiency, and detours happen. For a long trip, a cautious estimate avoids arriving with a budget that was only accurate on paper.",
          "The aim is not perfect forecasting. It is to make a hidden cost visible before you commit to a route, invite passengers, or choose between travel options.",
        ],
      },
      {
        heading: "Save the assumptions for repeated journeys",
        body: [
          "If you make the same journey often, keep a small note of the distance, fuel price, and efficiency you used. The next estimate will be faster, and you can update only the price per litre or the number of travel days. This is helpful for commutes, school runs, regular site visits, and delivery routes.",
          "Compare the estimate with what you actually spent after a few trips. If the real cost is always higher, adjust the efficiency value downward or add a buffer. A calculator is most useful when the inputs reflect your driving rather than an ideal test figure.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I calculate fuel cost for a journey?",
        answer:
          "Convert the journey distance and vehicle efficiency into litres of fuel, then multiply by the price per litre. A calculator can handle MPG and litres per 100 km conversions for you.",
      },
      {
        question: "Should I use UK MPG or US MPG?",
        answer:
          "Use the unit shown by your vehicle data. UK and US gallons are different sizes, so entering the wrong MPG unit will change the estimate.",
      },
      {
        question: "Does fuel cost include parking or tolls?",
        answer:
          "No. A fuel estimate covers petrol or diesel only. Add parking, tolls, congestion charges, and wear and tear separately for a fuller trip budget.",
      },
      {
        question: "Why is my actual fuel cost higher than the estimate?",
        answer:
          "Traffic, speed, cold starts, hills, tyre pressure, load, detours, and fuel price changes can all increase real-world cost compared with a planning estimate.",
      },
    ],
  },
  {
    slug: "create-strong-passwords-you-can-manage",
    title: "How to create strong passwords you can actually manage",
    description:
      "Learn what makes a password strong, why uniqueness matters more than clever tricks, and how to use a password generator safely with a password manager.",
    excerpt:
      "A practical guide to length, randomness, reuse, password managers, and two-factor authentication for everyday account security.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "5 min read",
    category: "Internet & IT",
    keywords: [
      "create strong password",
      "password generator",
      "unique passwords",
      "password manager",
      "secure password tips",
    ],
    primaryToolSlug: "password-generator",
    relatedToolSlugs: ["password-generator", "ip-checker", "qr-generator", "base64-encoder-decoder"],
    intro: [
      "A strong password is not a clever word with a symbol on the end. Attackers can guess patterns, reuse breached password lists, and test common substitutions at scale. The safest everyday approach is to use long, random, unique passwords and store them in a trusted password manager.",
      "That may sound less memorable, but that is the point. You should not have to remember a different complex password for every account. You need a reliable way to generate and store credentials without reusing them.",
    ],
    sections: [
      {
        heading: "Length and randomness beat clever patterns",
        body: [
          "People often create passwords from names, birthdays, teams, pets, keyboard patterns, or familiar phrases with a few substitutions. Those are easier to remember, but they are also easier to guess. Automated attacks can test millions of common patterns and breached passwords very quickly.",
          "A random password with enough length is harder to attack because it does not follow a human pattern. The exact character mix matters less than having enough length and avoiding anything predictable. If a service allows longer passwords, use that space.",
        ],
      },
      {
        heading: "Use a different password for every account",
        body: [
          "Password reuse is the risk that causes the most damage. If one website is breached and you used the same password elsewhere, attackers may try it against email, banking, shopping, and social accounts. This is called credential stuffing, and it works because reuse is common.",
          "The Password Generator on Daily Utility Dock can create random passwords for new accounts or password changes. Use it with a password manager so every account gets its own credential without making your life unmanageable.",
        ],
      },
      {
        heading: "Store passwords safely",
        body: [
          "A password manager stores credentials in an encrypted vault and fills them when you need to sign in. That is safer than keeping passwords in notes, spreadsheets, screenshots, email drafts, or browser tabs. It also helps you notice fake login pages because autofill may not appear on the wrong domain.",
          "Protect the password manager itself with a strong master password and two-factor authentication if available. The master password is one of the few passwords you should memorise carefully.",
        ],
      },
      {
        heading: "Turn on two-factor authentication",
        body: [
          "Two-factor authentication adds another step after the password, such as an authenticator app, hardware key, or passkey. It does not make weak passwords acceptable, but it reduces the damage if a password is stolen. Use it first on email, banking, cloud storage, social media, and admin accounts.",
          "Avoid SMS codes for high-risk accounts if stronger options are available. An authenticator app or hardware security key is generally more resilient against SIM swap and phone-number attacks.",
        ],
      },
      {
        heading: "When to change a password",
        body: [
          "Change a password if a service reports a breach, your password manager flags reuse, you shared it with someone, you entered it on a suspicious site, or a device with saved credentials was lost. Routine forced changes can lead to weaker patterns if people just rotate numbers.",
          "When you do change a password, generate a fresh one rather than editing the old version. Small changes to a known password are not enough if the original has been exposed.",
        ],
      },
      {
        heading: "Make new account setup repeatable",
        body: [
          "A simple account setup routine reduces mistakes. Generate a fresh password, save it to the password manager immediately, confirm the login works, and enable two-factor authentication before storing recovery codes. Do this while the account is new rather than postponing security settings for later.",
          "For shared work accounts, avoid passing passwords around in chat or email. Use a team password manager or access control system where possible, and remove access when someone no longer needs it. The strongest password still needs careful handling after it is generated.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a password be?",
        answer:
          "For random passwords, longer is better. Many everyday accounts work well with 16 or more characters if the service allows it. Use the maximum practical length for important accounts.",
      },
      {
        question: "Is a password generator safe?",
        answer:
          "A browser-based generator can be safe for creating random passwords, especially when generation happens locally. Store the result in a trusted password manager and avoid pasting secrets into untrusted pages.",
      },
      {
        question: "Can I reuse a strong password?",
        answer:
          "No. A strong reused password can still be dangerous because one breached service can expose the same credential for other accounts.",
      },
      {
        question: "Do I still need two-factor authentication?",
        answer:
          "Yes. Two-factor authentication gives an extra layer of protection if a password is stolen, phished, or accidentally reused.",
      },
    ],
  },
  {
    slug: "make-a-qr-code-for-flyers-menus-and-events",
    title: "How to make a QR code for flyers, menus, signs, and events",
    description:
      "Create QR codes that scan reliably by choosing the right destination, using enough contrast, sizing for print, and testing before publishing.",
    excerpt:
      "A practical guide to QR code content, print size, contrast, destination URLs, and testing for posters, menus, handouts, packaging, and events.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "5 min read",
    category: "Internet & IT",
    keywords: [
      "make a QR code",
      "QR code for flyer",
      "QR code print size",
      "QR code generator",
      "QR code best practices",
    ],
    primaryToolSlug: "qr-generator",
    relatedToolSlugs: ["qr-generator", "utm-builder", "url-encoder-decoder", "email-link-generator"],
    intro: [
      "QR codes are useful because they remove typing from an offline-to-online journey. Someone can scan a poster, menu, event badge, invoice, classroom handout, or product insert and land on the right page in seconds. The code only works well, though, if the content, contrast, size, and destination are chosen carefully.",
      "A QR code is not magic. It is a visual way to store text, most often a URL. If the URL is wrong, the print is too small, or the page is not mobile-friendly, the scan experience will still disappoint people.",
    ],
    sections: [
      {
        heading: "Choose the right QR code content",
        body: [
          "Most public QR codes should point to a web page rather than storing a long block of text. A web page lets you update the content later, track visits if you use campaign parameters, and give visitors a better mobile experience. Static text is useful for simple notes, WiFi details, or contact information, but it is less flexible.",
          "Before generating the code, open the destination on a phone. Check that the page loads quickly, the call to action is obvious, and the visitor does not need to pinch or search.",
        ],
      },
      {
        heading: "Use clean URLs and campaign tracking carefully",
        body: [
          "Long URLs can create dense QR codes that are harder to scan, especially at small sizes. If you need analytics, build a clean campaign URL first, then generate the code from that final address. Avoid adding unnecessary parameters that make the code more complicated without improving reporting.",
          "The QR Code Generator on Daily Utility Dock can create codes for URLs, text, email, phone, SMS, and WiFi details. For marketing links, pair it with a UTM builder so your analytics can separate poster, flyer, event, or packaging traffic.",
        ],
      },
      {
        heading: "Contrast and quiet space matter",
        body: [
          "A QR code needs strong contrast between foreground and background. Black on white is the safest choice. Branded colours can work, but pale foreground colours, busy backgrounds, gradients, and low contrast can make scanning unreliable. If design is important, test more devices than usual.",
          "Leave clear space around the code. This margin, often called quiet space, helps phone cameras detect the code boundaries. Do not crowd it with text, logos, or decorative borders.",
        ],
      },
      {
        heading: "Pick a print size based on scan distance",
        body: [
          "A menu on a table can use a smaller code than a poster across a room. The farther away someone stands, the larger the code should be. For flyers and handouts, make it large enough that older phones and imperfect lighting still work. For signage, print a test at full size and scan from the expected distance.",
          "Do not judge only from a crisp design preview on a large monitor. Real-world printing adds glare, folds, smudges, and low light. A reliable QR code has a little more size and contrast than the minimum.",
        ],
      },
      {
        heading: "Test before you publish",
        body: [
          "Scan the code with more than one phone, in the lighting where it will be used, from the distance people will actually stand. Check that it opens the right page, that the page is secure, and that the content still makes sense without extra explanation.",
          "If the QR code will stay printed for a long time, use a destination URL you control. A static code does not expire by itself, but the web page behind it can be moved, deleted, or redirected badly.",
        ],
      },
      {
        heading: "Add helpful text around the code",
        body: [
          "A QR code should not sit alone unless the context is obvious. Add a short label such as 'Scan for the menu', 'Scan to register', or 'Scan for setup instructions'. This tells people what will happen and makes the code feel less suspicious, especially on public signs.",
          "If the action matters, include a short fallback URL nearby. Some people may have camera restrictions, poor lighting, or accessibility needs that make scanning harder. A typed address gives them another path without changing the main design.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do QR codes expire?",
        answer:
          "Static QR codes do not expire by themselves. If the code points to a URL, the destination page must stay live for the scan to remain useful.",
      },
      {
        question: "What size should a printed QR code be?",
        answer:
          "It depends on scan distance. Small handouts can use smaller codes than wall signs. Always print a full-size test and scan it from the expected distance.",
      },
      {
        question: "Can I use colours in a QR code?",
        answer:
          "Yes, but keep strong contrast. Dark foreground on a light plain background is safest. Low contrast, busy backgrounds, or very pale colours can reduce scan reliability.",
      },
      {
        question: "Should a QR code link directly to a PDF?",
        answer:
          "It can, but a mobile-friendly landing page is often better. It lets you explain the file, update links, and provide alternatives if the PDF is large.",
      },
    ],
  },
  {
    slug: "what-is-my-public-ip-address",
    title: "What is my public IP address, and why does it change?",
    description:
      "Understand public IP addresses, approximate IP location, VPN checks, dynamic addresses, and when an IP checker is useful for troubleshooting.",
    excerpt:
      "A plain-English explanation of what websites see when you connect, why your IP may change, and how to use an IP checker safely.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "5 min read",
    category: "Internet & IT",
    keywords: [
      "what is my public IP",
      "IP address checker",
      "why does my IP change",
      "VPN IP check",
      "public IP location",
    ],
    primaryToolSlug: "ip-checker",
    relatedToolSlugs: ["ip-checker", "speed-test", "password-generator", "url-encoder-decoder"],
    intro: [
      "Your public IP address is the internet-facing address that websites and online services see when your connection reaches them. It is part of how traffic finds its way back to your device or network. Most people only think about it when a VPN is involved, a service blocks access, or an IT team asks for the address.",
      "An IP address can be useful for troubleshooting, but it is easy to overstate what it reveals. It may show your internet provider and an approximate region. It usually does not reveal your exact home address.",
    ],
    sections: [
      {
        heading: "Public IP versus private IP",
        body: [
          "Your home or office network gives devices private local addresses so phones, laptops, printers, and smart devices can talk to the router. The wider internet usually sees the router or provider-facing public IP address instead. That public address is what an online IP checker displays.",
          "This distinction explains why your laptop and phone can have different local addresses but appear as the same public IP when they use the same WiFi. Switch one device to mobile data and the public IP will likely change.",
        ],
      },
      {
        heading: "Why your public IP changes",
        body: [
          "Many internet providers assign dynamic IP addresses. They can change when the router reconnects, after maintenance, or over time. Mobile networks, public WiFi, workplace networks, and VPN services can also show different public IPs because traffic exits through different network equipment.",
          "If you need a fixed address for remote access, hosting, or allowlisting, ask your provider or IT team about static IP options. For most home users, a changing public IP is normal.",
        ],
      },
      {
        heading: "What IP location can and cannot tell you",
        body: [
          "IP location databases estimate where a network address belongs. Sometimes they show a city or region that is close. Sometimes they show the provider's routing point, a nearby large city, or a completely different area. This is especially common with mobile networks and VPNs.",
          "Use the IP Address Checker on Daily Utility Dock to see your public IP and approximate network details. Treat location as a clue, not proof of a precise physical address.",
        ],
      },
      {
        heading: "Common reasons to check your IP",
        body: [
          "A quick IP check can confirm whether your VPN is active, whether a work network is being used, or which address to give an administrator for temporary allowlisting. It can also help when a website shows the wrong region, blocks sign-in, or behaves differently on WiFi and mobile data.",
          "If a connection also feels slow, pair the IP check with a speed test. A VPN exit server in another country may change both the public IP and the connection performance.",
        ],
      },
      {
        heading: "Privacy and safety notes",
        body: [
          "Do not post your public IP address in public forums unless you understand why it is needed. It is not the same as sharing a password, but it can reveal network information and invite unwanted attention. Share it only with trusted support staff when it is relevant.",
          "If you want to change the public IP a website sees, a reputable VPN or privacy network can route traffic through another server. Choose carefully because that service becomes part of your trust chain.",
        ],
      },
      {
        heading: "Use IP checks as part of a troubleshooting trail",
        body: [
          "When a website blocks access or shows the wrong region, write down the public IP, network type, VPN status, and time of the test. Then repeat the check on another connection, such as mobile data. The comparison can show whether the issue follows the account, the device, or the network.",
          "For work allowlisting, confirm whether your address is static before sharing it. If the IP changes frequently, an administrator may need a different access method, such as a VPN, single sign-on rule, or a wider provider range approved by policy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an IP address show my exact address?",
        answer:
          "Usually no. IP location is approximate and often reflects an internet provider, routing point, or region rather than a precise home or office.",
      },
      {
        question: "Why does my IP address change when I use a VPN?",
        answer:
          "A VPN routes your traffic through another server. Websites see the VPN server's public IP rather than your normal provider-facing address.",
      },
      {
        question: "Is it normal for home broadband IPs to change?",
        answer:
          "Yes. Many providers use dynamic addresses that can change after reconnection, maintenance, or over time.",
      },
      {
        question: "What is IP allowlisting?",
        answer:
          "Allowlisting means permitting access only from approved IP addresses. It is common for admin panels, databases, work systems, and temporary support access.",
      },
    ],
  },
  {
    slug: "calculate-exact-age-for-forms-and-milestones",
    title: "How to calculate exact age for forms, milestones, and eligibility",
    description:
      "Use date of birth to calculate exact age in years, months, and days, plus total days lived and next birthday timing.",
    excerpt:
      "A practical guide to exact age, leap years, birthday boundaries, age-based eligibility, anniversaries, and why a simple year subtraction can be wrong.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "5 min read",
    category: "Time & Date",
    keywords: [
      "calculate exact age",
      "age calculator",
      "date of birth calculator",
      "years months days age",
      "birthday calculator",
    ],
    primaryToolSlug: "age-calculator",
    relatedToolSlugs: ["age-calculator", "deadline-countdown-calculator", "world-clock", "uk-working-days-calculator"],
    intro: [
      "Age looks simple until a form asks for an exact age, an eligibility rule depends on a birthday, or you want to know the number of days between two dates. Subtracting birth year from current year can be wrong if the birthday has not happened yet. Month lengths and leap years add more small traps.",
      "An exact age calculation compares the date of birth with the chosen current date and breaks the result into years, months, and days. That is more useful than a rough year difference when the date matters.",
    ],
    sections: [
      {
        heading: "Why exact age is different from age this year",
        body: [
          "If someone was born in November 2000 and today is March 2026, subtracting years gives 26, but their birthday has not occurred yet. Their exact age is still 25 plus several months and days. That distinction matters for forms, benefits, competitions, age checks, and personal records.",
          "The Age Calculator on Daily Utility Dock handles this by comparing the full date, not just the year. It also shows total days, weeks, and months for people who need more than the standard age display.",
        ],
      },
      {
        heading: "Leap years and month lengths",
        body: [
          "Calendar months are uneven. February is shorter than March, and leap years add another day. An exact age calculation needs to account for those boundaries so the remaining months and days make sense. This is why manual calculations can become awkward around month ends.",
          "People born on 29 February can also face special handling depending on the context. Some systems treat 28 February or 1 March as the practical birthday in non-leap years. For official decisions, check the rule used by the organisation asking.",
        ],
      },
      {
        heading: "Forms and eligibility checks",
        body: [
          "Age-based rules often depend on whether someone has reached a specific birthday by a specific date. A school year, exam entry, sports age group, insurance rule, or event ticket category may use an exact cutoff date. In those cases, calculate age on that date rather than today.",
          "If the rule is official or high value, use the calculator as a check and then verify the wording. The important phrase is often 'on or before' or 'by' a certain date.",
        ],
      },
      {
        heading: "Milestones, birthdays, and anniversaries",
        body: [
          "Exact age is not only for paperwork. It is useful for milestone birthdays, anniversaries, memory books, cards, and family history. Total days lived can be a fun number for a birthday message, while a next-birthday countdown helps with planning.",
          "For anniversaries of events rather than births, use the same principle: compare the original date with the target date and decide whether you need calendar years, total days, or both.",
        ],
      },
      {
        heading: "Avoid entering future dates by mistake",
        body: [
          "A date of birth should be in the past. If a calculator rejects a future date, it is usually protecting against accidental year or month selection. Check the date format carefully, especially if you switch between day-month-year and month-day-year conventions.",
          "When exact age matters, write the date in an unambiguous form, such as 12 March 2004, rather than relying on a numeric format that can be read two ways.",
        ],
      },
      {
        heading: "Record the date used for the calculation",
        body: [
          "Exact age is tied to the date you calculate it on. If you are completing a form, planning eligibility, or recording a milestone, save both the date of birth and the target date. Without the target date, the same age result may be impossible to verify later.",
          "This is especially important for cutoffs that are not today's date. A child might be one age on the application date and another by the event date. The calculation should match the wording of the rule, not just the day you happen to check.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do you calculate exact age?",
        answer:
          "Compare the full date of birth with the target date, then count completed years, remaining months, and remaining days while accounting for month lengths and leap years.",
      },
      {
        question: "Why is subtracting birth year not enough?",
        answer:
          "It ignores whether the birthday has happened yet in the current year. That can make the result one year too high.",
      },
      {
        question: "Can I calculate age on a past or future eligibility date?",
        answer:
          "Use a calculator that supports a target date if you need age on a specific date. For official eligibility, verify the organisation's cutoff wording.",
      },
      {
        question: "How are leap day birthdays handled?",
        answer:
          "Total days can be calculated normally, but legal or organisational age rules for 29 February birthdays may vary. Check the relevant rule when it matters.",
      },
    ],
  },
  {
    slug: "convert-metric-and-imperial-units",
    title: "How to convert metric and imperial units without memorising formulas",
    description:
      "Convert length, weight, temperature, volume, and area values accurately enough for everyday recipes, DIY, travel, shipping, and study.",
    excerpt:
      "A practical guide to common unit conversions, rounding, US versus UK gallons, temperature formulas, and when a calculator is safer than mental maths.",
    publishedAt: "2026-06-01",
    updatedAt: "2026-06-01",
    readingTime: "6 min read",
    category: "Converters",
    keywords: [
      "metric imperial converter",
      "unit converter",
      "convert measurements",
      "Celsius Fahrenheit converter",
      "kg pounds metres feet",
    ],
    primaryToolSlug: "unit-converter",
    relatedToolSlugs: ["unit-converter", "fuel-calculator", "timezone-converter", "salary-to-hourly-calculator"],
    intro: [
      "Unit conversion is one of those tasks that feels small until the number matters. A recipe uses grams while your measuring cup is in ounces. A DIY guide lists inches while your tape measure is metric. A product weight is in pounds, a luggage limit is in kilograms, and a weather forecast is in Fahrenheit.",
      "You can memorise a few rough conversions, but a unit converter is faster and less error-prone when accuracy matters. The key is knowing which unit family you are in and how much rounding is acceptable for the task.",
    ],
    sections: [
      {
        heading: "Start with the measurement category",
        body: [
          "Length, weight, temperature, volume, and area use different units and sometimes different formulas. A metre-to-foot conversion is not the same kind of calculation as Celsius to Fahrenheit. Before converting, identify the category and make sure the source value belongs there.",
          "The Unit Converter on Daily Utility Dock groups common categories so you can choose the source unit, target unit, and value without searching for a separate formula each time.",
        ],
      },
      {
        heading: "Know when rough conversions are enough",
        body: [
          "For casual travel, it may be enough to know that a mile is about 1.6 kilometres, a kilogram is about 2.2 pounds, and 20 degrees Celsius is a comfortable room temperature. For cooking, shipping, construction, medication, or technical work, rough mental conversions can be risky.",
          "Round results based on the consequence of being wrong. A suitcase weight estimate can tolerate a little rounding if you leave margin. A shelf cut, recipe ratio, or lab measurement may need more care.",
        ],
      },
      {
        heading: "Temperature conversions use formulas",
        body: [
          "Temperature is not a simple multiply-by-a-factor conversion because Celsius and Fahrenheit start from different zero points. To convert Celsius to Fahrenheit, multiply by 9/5 and add 32. To convert Fahrenheit to Celsius, subtract 32 and multiply by 5/9.",
          "This is why temperature is easy to get wrong when doing mental maths. A converter avoids the common mistake of treating it like length or weight.",
        ],
      },
      {
        heading: "Watch US and UK volume differences",
        body: [
          "Gallons and fluid ounces can differ between US customary and UK imperial systems. A US gallon is about 3.785 litres, while a UK imperial gallon is about 4.546 litres. That difference matters for fuel economy, recipes, brewing, and imported product information.",
          "If your source mentions gallons, check whether it is from a US or UK context. For vehicle efficiency, this also affects MPG comparisons and fuel cost estimates.",
        ],
      },
      {
        heading: "Use conversions as part of a workflow",
        body: [
          "Conversions often support another decision. You might convert kilometres to miles before estimating fuel cost, pounds to kilograms before checking luggage, square feet to square metres before comparing rent, or Fahrenheit to Celsius before following a recipe.",
          "Keep the original value visible when you record the converted result. If someone needs to verify the number later, the source unit and rounding choice will be clear.",
        ],
      },
      {
        heading: "Check the source before trusting the result",
        body: [
          "A conversion is only as reliable as the value you start with. Product listings, old recipes, travel blogs, and forum posts can contain rounded or approximate numbers. If a measurement affects cost, safety, or fit, check whether the source value was exact, rounded, or copied from another unit system.",
          "For practical work, record the converted value with enough precision for the task and keep the original beside it. That makes it easier to spot whether a later difference came from rounding, a unit mix-up, or a changed source measurement.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the most common metric and imperial conversions?",
        answer:
          "Common conversions include miles and kilometres, feet and metres, pounds and kilograms, ounces and grams, Celsius and Fahrenheit, litres and gallons, and square feet and square metres.",
      },
      {
        question: "Why are US and UK gallons different?",
        answer:
          "They come from different measurement systems. A US gallon is about 3.785 litres, while a UK imperial gallon is about 4.546 litres.",
      },
      {
        question: "How accurate are online unit converters?",
        answer:
          "They are suitable for everyday conversions when they use standard factors. For regulated engineering, scientific, medical, or legal work, verify against the required standard.",
      },
      {
        question: "Should I round converted measurements?",
        answer:
          "Round based on the task. Casual estimates can be rounded more, while cooking, DIY cuts, shipping limits, and technical tasks need tighter precision.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3) {
  const current = getBlogPost(currentSlug);

  if (!current) {
    return blogPosts.slice(0, limit);
  }

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .sort((a, b) => {
      const aToolOverlap = a.relatedToolSlugs.filter((slug) =>
        current.relatedToolSlugs.includes(slug)
      ).length;
      const bToolOverlap = b.relatedToolSlugs.filter((slug) =>
        current.relatedToolSlugs.includes(slug)
      ).length;

      if (aToolOverlap !== bToolOverlap) {
        return bToolOverlap - aToolOverlap;
      }

      return a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}
