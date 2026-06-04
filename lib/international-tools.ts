export type CountryHubSlug = "us-tools" | "canada-tools" | "australia-tools";

export type CountryCode = "us" | "canada" | "australia";

export interface RatePreset {
  label: string;
  value: number;
  note?: string;
}

export interface SalaryBracket {
  threshold: number;
  rate: number;
}

export interface CountryToolCalculatorConfig {
  countryCode: CountryCode;
  countryName: string;
  hubPath: `/${CountryHubSlug}`;
  locale: string;
  currency: string;
  currencyPrefix: string;
  salesTaxLabel: string;
  salesTaxPresets: RatePreset[];
  mortgageDefaults: {
    homePrice: number;
    downPayment: number;
    rate: number;
    termYears: number;
    annualTax: number;
    annualInsurance: number;
    extraMonthlyCostLabel: string;
    compounding: "monthly" | "canadian-semi-annual";
  };
  loanDefaults: {
    amount: number;
    rate: number;
    termYears: number;
    fee: number;
  };
  salary: {
    defaultSalary: number;
    defaultRetirementPercent: number;
    defaultStateOrProvinceRate: number;
    federalAllowance: number;
    brackets: SalaryBracket[];
    payrollNotes: string[];
    extraPayrollRate?: number;
    extraPayrollWageBase?: number;
  };
  savings: {
    label: string;
    defaultBalance: number;
    defaultAnnualContribution: number;
    defaultEmployerPercent: number;
    defaultReturn: number;
    defaultYears: number;
    annualLimit: number;
    contributionLabel: string;
    employerLabel: string;
  };
  assumptions: string[];
}

export interface CountryToolHub {
  slug: CountryHubSlug;
  countryCode: CountryCode;
  path: `/${CountryHubSlug}`;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  focusAreas: string[];
  toolSlugs: string[];
  content: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedCategoryLinks: Array<{
    label: string;
    href: string;
    description: string;
  }>;
  globalToolSlugs: string[];
}

export const internationalToolConfigs: Record<string, CountryToolCalculatorConfig> = {
  "us-sales-tax-calculator": {
    countryCode: "us",
    countryName: "United States",
    hubPath: "/us-tools",
    locale: "en-US",
    currency: "USD",
    currencyPrefix: "$",
    salesTaxLabel: "Sales tax",
    salesTaxPresets: [
      { label: "No state/local sales tax example", value: 0 },
      { label: "Lower combined example", value: 5 },
      { label: "Common combined example", value: 8.25 },
      { label: "Higher local example", value: 10.25 },
    ],
    mortgageDefaults: {
      homePrice: 400000,
      downPayment: 80000,
      rate: 6.5,
      termYears: 30,
      annualTax: 4800,
      annualInsurance: 1800,
      extraMonthlyCostLabel: "Property tax and homeowners insurance",
      compounding: "monthly",
    },
    loanDefaults: {
      amount: 25000,
      rate: 8.5,
      termYears: 5,
      fee: 0,
    },
    salary: {
      defaultSalary: 75000,
      defaultRetirementPercent: 5,
      defaultStateOrProvinceRate: 4,
      federalAllowance: 14600,
      brackets: [
        { threshold: 0, rate: 0.1 },
        { threshold: 11600, rate: 0.12 },
        { threshold: 47150, rate: 0.22 },
        { threshold: 100525, rate: 0.24 },
        { threshold: 191950, rate: 0.32 },
        { threshold: 243725, rate: 0.35 },
        { threshold: 609350, rate: 0.37 },
      ],
      payrollNotes: [
        "Uses simplified single-filer federal brackets and an editable state/local tax rate.",
        "FICA is estimated with Social Security and Medicare-style rates; additional Medicare tax, credits, and deductions are not included.",
      ],
      extraPayrollRate: 0.0765,
      extraPayrollWageBase: 168600,
    },
    savings: {
      label: "401k",
      defaultBalance: 25000,
      defaultAnnualContribution: 9000,
      defaultEmployerPercent: 3,
      defaultReturn: 6,
      defaultYears: 20,
      annualLimit: 23000,
      contributionLabel: "Employee annual 401k contribution",
      employerLabel: "Employer match percentage of salary",
    },
    assumptions: [
      "US rates vary by state, city, county, lender, employer plan, and tax year.",
      "Sales tax presets are examples only; enter the combined local rate that applies to your purchase.",
      "Salary and 401k results are estimates only and should be checked against IRS guidance, payroll records, lender documents, or professional advice.",
    ],
  },
  "canada-gst-hst-calculator": {
    countryCode: "canada",
    countryName: "Canada",
    hubPath: "/canada-tools",
    locale: "en-CA",
    currency: "CAD",
    currencyPrefix: "C$",
    salesTaxLabel: "GST/HST",
    salesTaxPresets: [
      { label: "Alberta / Territories GST", value: 5, note: "GST only" },
      { label: "British Columbia GST", value: 5, note: "PST is not included" },
      { label: "Ontario HST", value: 13 },
      { label: "Atlantic HST example", value: 15 },
    ],
    mortgageDefaults: {
      homePrice: 650000,
      downPayment: 130000,
      rate: 5.25,
      termYears: 25,
      annualTax: 4200,
      annualInsurance: 1500,
      extraMonthlyCostLabel: "Property tax and home insurance",
      compounding: "canadian-semi-annual",
    },
    loanDefaults: {
      amount: 30000,
      rate: 8,
      termYears: 5,
      fee: 0,
    },
    salary: {
      defaultSalary: 85000,
      defaultRetirementPercent: 4,
      defaultStateOrProvinceRate: 7,
      federalAllowance: 15705,
      brackets: [
        { threshold: 0, rate: 0.15 },
        { threshold: 55867, rate: 0.205 },
        { threshold: 111733, rate: 0.26 },
        { threshold: 173205, rate: 0.29 },
        { threshold: 246752, rate: 0.33 },
      ],
      payrollNotes: [
        "Uses simplified federal brackets, an editable province/territory tax estimate, and broad CPP/EI-style payroll deductions.",
        "Credits, pension adjustments, Quebec-specific rules, benefits, and detailed province/territory brackets are not included.",
      ],
      extraPayrollRate: 0.076,
      extraPayrollWageBase: 68500,
    },
    savings: {
      label: "TFSA",
      defaultBalance: 20000,
      defaultAnnualContribution: 7000,
      defaultEmployerPercent: 0,
      defaultReturn: 5,
      defaultYears: 15,
      annualLimit: 7000,
      contributionLabel: "Annual TFSA contribution",
      employerLabel: "Additional annual contribution percentage",
    },
    assumptions: [
      "GST/HST presets are editable planning constants and do not include separate PST, QST, or RST unless the province uses HST.",
      "Canadian mortgage payments use a common semi-annual compounding convention for estimates.",
      "Salary and TFSA results are estimates only; check CRA guidance, your province/territory rules, plan room, lender terms, or professional advice.",
    ],
  },
  "australia-gst-calculator": {
    countryCode: "australia",
    countryName: "Australia",
    hubPath: "/australia-tools",
    locale: "en-AU",
    currency: "AUD",
    currencyPrefix: "A$",
    salesTaxLabel: "GST",
    salesTaxPresets: [
      { label: "Australian GST", value: 10 },
      { label: "GST-free example", value: 0 },
    ],
    mortgageDefaults: {
      homePrice: 800000,
      downPayment: 160000,
      rate: 6.25,
      termYears: 30,
      annualTax: 0,
      annualInsurance: 1800,
      extraMonthlyCostLabel: "Home insurance and optional extra costs",
      compounding: "monthly",
    },
    loanDefaults: {
      amount: 35000,
      rate: 8.75,
      termYears: 5,
      fee: 0,
    },
    salary: {
      defaultSalary: 95000,
      defaultRetirementPercent: 0,
      defaultStateOrProvinceRate: 2,
      federalAllowance: 0,
      brackets: [
        { threshold: 0, rate: 0 },
        { threshold: 18200, rate: 0.16 },
        { threshold: 45000, rate: 0.3 },
        { threshold: 135000, rate: 0.37 },
        { threshold: 190000, rate: 0.45 },
      ],
      payrollNotes: [
        "Uses simplified resident income tax brackets and an editable Medicare levy-style percentage.",
        "Offsets, HELP/HECS repayments, salary sacrifice, deductions, fringe benefits, and residency details are not included.",
      ],
    },
    savings: {
      label: "Superannuation",
      defaultBalance: 80000,
      defaultAnnualContribution: 5000,
      defaultEmployerPercent: 12,
      defaultReturn: 6,
      defaultYears: 25,
      annualLimit: 30000,
      contributionLabel: "Extra annual concessional contribution",
      employerLabel: "Employer super guarantee percentage",
    },
    assumptions: [
      "Australian GST is modelled at 10% by default, with an editable GST-free option for estimates.",
      "Salary estimates use simplified resident tax bands and a Medicare levy-style input, not a full ATO assessment.",
      "Superannuation projections are estimates only and should be checked against ATO guidance, fund fees, caps, preservation rules, and professional advice.",
    ],
  },
};

const usToolSlugs = [
  "us-sales-tax-calculator",
  "us-mortgage-calculator",
  "us-loan-repayment-calculator",
  "us-salary-calculator",
  "401k-calculator",
];

const canadaToolSlugs = [
  "canada-gst-hst-calculator",
  "canadian-mortgage-calculator",
  "canadian-loan-repayment-calculator",
  "canadian-salary-calculator",
  "tfsa-savings-calculator",
];

const australiaToolSlugs = [
  "australia-gst-calculator",
  "australian-mortgage-calculator",
  "australian-loan-repayment-calculator",
  "australian-salary-calculator",
  "superannuation-calculator",
];

export const countryToolHubs: CountryToolHub[] = [
  {
    slug: "us-tools",
    countryCode: "us",
    path: "/us-tools",
    title: "USA Tools & Calculators",
    seoTitle: "USA Tools & Calculators for Finance, Tax, Loans and Productivity",
    metaDescription:
      "Use USA tools and calculators for sales tax, mortgages, loans, salary estimates, 401k planning, and everyday productivity utilities.",
    intro:
      "Country-specific calculators for US sales tax, mortgage payment planning, loan repayment checks, salary estimates, 401k projections, and everyday utility workflows.",
    focusAreas: [
      "US finance tools",
      "US tax tools",
      "US mortgage and loan calculators",
      "US productivity utilities",
    ],
    toolSlugs: usToolSlugs,
    content: [
      "Daily Utility Dock is a global utility site, but some money calculations only make sense when the country context is clear. The USA Tools & Calculators hub collects the first US-specific finance and utility pages in one focused section, so visitors do not need to adapt UK VAT, pay, or mortgage language for American situations. The calculators here use US terminology such as sales tax, mortgage payment, state and local tax rate, and 401k contribution while keeping the same simple, mobile-friendly layout used across the wider site.",
      "The US Sales Tax Calculator is designed for quick net-to-total and total-to-pre-tax checks when a combined state, county, and city rate is known. Because sales tax can vary by address and product type, the page uses editable example rates instead of pretending to know every local rule. The US Mortgage Calculator estimates principal and interest plus optional property tax and homeowners insurance, while the US Loan Repayment Calculator helps compare fixed-rate repayment scenarios before reviewing lender quotes.",
      "For income planning, the US Salary Calculator uses simplified federal brackets, an editable state/local rate, and broad payroll deduction assumptions. It is deliberately framed as an income tax estimate rather than a precise filing result. The 401k Calculator projects account growth from existing balance, employee contribution, employer match, assumed return, and years remaining. It includes editable contribution assumptions and reminders to check plan documents, IRS limits, and professional guidance before making decisions.",
      "This hub also links to global Daily Utility Dock tools that remain useful in the United States, including the budget planner, compound interest calculator, unit converter, time zone converter, and productivity utilities. The goal is not to create hundreds of thin state pages. It is to provide a strong country hub with practical calculators, transparent assumptions, FAQ content, related category links, and internal pathways to existing tools where they add genuine value.",
    ],
    faqs: [
      {
        question: "Are the USA calculators exact for tax filing or lending?",
        answer:
          "No. They provide estimates only based on editable assumptions. For final tax, payroll, mortgage, or investment decisions, check IRS guidance, state sources, lender disclosures, plan documents, or a qualified professional.",
      },
      {
        question: "Why does the sales tax calculator ask for a rate?",
        answer:
          "US sales tax can vary by state, county, city, address, product, and exemption. Enter the combined local rate from an official source or receipt for the best planning estimate.",
      },
      {
        question: "Can I use global Daily Utility Dock tools in the United States?",
        answer:
          "Yes. General tools such as budgets, compound interest, loans, unit conversion, time zones, and productivity utilities can still be useful when the inputs match your situation.",
      },
    ],
    relatedCategoryLinks: [
      {
        label: "Financial Tools",
        href: "/financial-tools",
        description: "General budgets, savings, loans, and everyday money calculators.",
      },
      {
        label: "Productivity Tools",
        href: "/productivity-tools",
        description: "Time, planning, meeting, and work utilities for daily tasks.",
      },
      {
        label: "Time & Date Tools",
        href: "/time-date-tools",
        description: "World clocks, time zones, deadlines, and date utilities.",
      },
    ],
    globalToolSlugs: [
      "budget-planner",
      "compound-interest-calculator",
      "unit-converter",
      "timezone-converter",
    ],
  },
  {
    slug: "canada-tools",
    countryCode: "canada",
    path: "/canada-tools",
    title: "Canada Tools & Calculators",
    seoTitle: "Canada Tools & Calculators for GST/HST, Mortgage, Salary and Savings",
    metaDescription:
      "Use Canadian tools and calculators for GST/HST, mortgage payments, loan repayments, salary estimates, TFSA savings, and everyday utilities.",
    intro:
      "Canadian calculators for GST/HST checks, mortgage and loan planning, salary estimates by province/territory assumptions, TFSA savings, and everyday utilities.",
    focusAreas: [
      "Canadian finance tools",
      "GST/HST calculators",
      "Mortgage and savings tools",
      "Everyday utilities",
    ],
    toolSlugs: canadaToolSlugs,
    content: [
      "The Canada Tools & Calculators hub gives Daily Utility Dock a focused Canadian finance and utility section without changing existing UK pages or global URLs. Canadian visitors often need different terminology and assumptions from UK or US pages, especially around GST/HST, province/territory context, mortgage compounding conventions, payroll deductions, and TFSA contribution planning. This hub gathers those initial calculators in one place and links them to broader utilities where the global tools still fit.",
      "The GST/HST Calculator Canada page lets users add tax to a pre-tax amount or remove GST/HST from a tax-included total. It includes editable province/territory-style presets and clear notes that separate PST, QST, or RST is not automatically included unless the preset reflects an HST scenario. That keeps the tool useful for everyday receipt checks and pricing estimates without claiming exact tax treatment for every product, place, or exemption.",
      "For borrowing decisions, the Canadian Mortgage Calculator estimates a monthly mortgage payment using a common semi-annual compounding convention for planning, plus optional property tax and insurance inputs. The Canadian Loan Repayment Calculator models fixed-rate repayments for personal loans, car loans, or other instalment borrowing. Both pages are intended for scenario comparison before checking lender documents, amortization schedules, fees, and eligibility requirements.",
      "The Canadian Salary Calculator estimates annual and monthly take-home pay using simplified federal brackets, an editable province/territory tax estimate, and broad payroll deduction assumptions. The TFSA Savings Calculator projects growth from current balance, annual contributions, assumed return, and years. It reminds users to confirm TFSA room, CRA limits, investment risk, and product fees before acting. Related links connect this hub to the wider financial, converter, and productivity sections so visitors can continue with budgeting, compound interest, unit conversion, time zones, or planning tools without landing on orphan pages.",
    ],
    faqs: [
      {
        question: "Does the Canada GST/HST calculator include PST or QST?",
        answer:
          "Not automatically. It focuses on GST/HST and includes editable presets. In non-HST provinces, separate PST, QST, or RST may apply and should be checked with official provincial or territorial sources.",
      },
      {
        question: "Are the Canadian salary and mortgage calculators official?",
        answer:
          "No. They are estimates only. Verify final payroll, tax, mortgage, and lending decisions with CRA guidance, province/territory sources, lender disclosures, payroll records, or professional advice.",
      },
      {
        question: "Why include TFSA savings with finance tools?",
        answer:
          "TFSA planning is a common Canadian savings task. The calculator helps compare contribution and growth scenarios, but users must confirm their own contribution room and product details.",
      },
    ],
    relatedCategoryLinks: [
      {
        label: "Financial Tools",
        href: "/financial-tools",
        description: "General budgets, savings goals, compound interest, and loan checks.",
      },
      {
        label: "Converters",
        href: "/converters",
        description: "Metric, imperial, time zone, salary, and text conversion utilities.",
      },
      {
        label: "Productivity Tools",
        href: "/productivity-tools",
        description: "Planning, priority, meeting, and deadline utilities.",
      },
    ],
    globalToolSlugs: [
      "budget-planner",
      "savings-goal-calculator",
      "compound-interest-calculator",
      "unit-converter",
    ],
  },
  {
    slug: "australia-tools",
    countryCode: "australia",
    path: "/australia-tools",
    title: "Australia Tools & Calculators",
    seoTitle: "Australia Tools & Calculators for GST, Salary, Loans and Superannuation",
    metaDescription:
      "Use Australian tools and calculators for GST, mortgage payments, loan repayments, salary estimates, superannuation projections, and everyday utilities.",
    intro:
      "Australian calculators for GST checks, salary and loan estimates, mortgage payment planning, superannuation projections, and everyday utility workflows.",
    focusAreas: [
      "Australian finance tools",
      "GST calculators",
      "Salary and loan tools",
      "Everyday utilities",
    ],
    toolSlugs: australiaToolSlugs,
    content: [
      "The Australia Tools & Calculators hub adds a focused Australian utility area to Daily Utility Dock while keeping the global brand and existing site structure stable. Australian finance tasks often use different language and assumptions from UK, US, or Canadian pages, especially around GST, income tax estimates, mortgage repayment planning, and superannuation. This hub starts with a compact set of practical calculators rather than a large collection of thin pages.",
      "The GST Calculator Australia page helps add 10% GST to a GST-exclusive amount or remove GST from a GST-inclusive total. It also includes an editable GST-free option and reminders that some goods, services, and business circumstances need official treatment checked separately. The Australian Mortgage Calculator estimates repayments from loan amount, interest rate, term, deposit, and optional insurance or extra cost inputs. The Australian Loan Repayment Calculator uses a fixed-rate repayment formula for simple borrowing comparisons.",
      "The Australian Salary Calculator provides an income tax estimate using simplified resident tax bands and an editable Medicare levy-style input. It does not include offsets, deductions, HELP/HECS repayments, residency complications, salary packaging, or fringe benefits, so it is useful for planning rather than final payroll decisions. The Superannuation Calculator estimates retirement savings growth from current balance, employer super guarantee percentage, extra annual contributions, assumed return, and years. It includes editable contribution cap assumptions and clear reminders to check ATO and fund rules.",
      "The hub also points visitors to global Daily Utility Dock utilities that are country-neutral, including budgets, savings goals, unit conversion, time zone conversion, and productivity calculators. This keeps the Australian section useful without duplicating thin versions of every general page. Each tool page includes explanatory content, assumptions, FAQs, related tools, schema markup, mobile-first cards, and ad-friendly spacing so visitors can understand both the calculation and its limits.",
    ],
    faqs: [
      {
        question: "Are Australian tax and superannuation results exact?",
        answer:
          "No. They are estimates only. Check ATO guidance, payroll records, fund rules, contribution caps, lender documents, or professional advice before making final decisions.",
      },
      {
        question: "Does the GST calculator handle every GST exemption?",
        answer:
          "No. It adds or removes an editable GST percentage. Whether a specific item is taxable, GST-free, input-taxed, or affected by business rules should be checked with official guidance.",
      },
      {
        question: "Why link Australian pages to global tools?",
        answer:
          "Many utilities, such as unit conversion, budgets, savings goals, world clocks, and productivity calculators, are useful in Australia when users enter local figures.",
      },
    ],
    relatedCategoryLinks: [
      {
        label: "Financial Tools",
        href: "/financial-tools",
        description: "Budgets, savings, loans, and everyday money utilities.",
      },
      {
        label: "Time & Date Tools",
        href: "/time-date-tools",
        description: "Time zones, world clocks, deadline, and date calculators.",
      },
      {
        label: "Health & Lifestyle Tools",
        href: "/health-lifestyle-tools",
        description: "Personal planning, age, focus, reading, and lifestyle utilities.",
      },
    ],
    globalToolSlugs: [
      "budget-planner",
      "savings-goal-calculator",
      "unit-converter",
      "world-clock",
    ],
  },
];

export function getCountryHub(slug: string) {
  return countryToolHubs.find((hub) => hub.slug === slug);
}

export function getCountryConfigForTool(slug: string) {
  if (slug.startsWith("us-") || slug === "401k-calculator") {
    return internationalToolConfigs["us-sales-tax-calculator"];
  }

  if (slug.startsWith("canadian-") || slug.startsWith("canada-") || slug === "tfsa-savings-calculator") {
    return internationalToolConfigs["canada-gst-hst-calculator"];
  }

  if (slug.startsWith("australian-") || slug.startsWith("australia-") || slug === "superannuation-calculator") {
    return internationalToolConfigs["australia-gst-calculator"];
  }

  return undefined;
}
