"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  AlarmClock,
  ArrowRight,
  Binary,
  BookOpen,
  Braces,
  Briefcase,
  Calculator,
  Calendar,
  Clock,
  Droplets,
  FileClock,
  Flame,
  HeartPulse,
  Home,
  Landmark,
  Link as LinkIcon,
  ListChecks,
  Mail,
  Megaphone,
  PiggyBank,
  Receipt,
  Scale,
  Search,
  Target,
  Timer,
  TrendingUp,
  Umbrella,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { AdsPlaceholder } from "@/components/ads-placeholder";
import { FAQSection } from "@/components/faq-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SeoTool } from "@/lib/seo-tools";
import { getBlogPostByToolSlug } from "@/lib/blog-posts";
import {
  getCountryConfigForTool,
  type CountryToolCalculatorConfig,
} from "@/lib/international-tools";
import { getSiteTool, siteCategories } from "@/lib/site-tools";
import { getSeoToolPageCopy } from "@/lib/tool-page-copy";

interface SeoToolPageProps {
  tool: SeoTool;
  relatedTools: SeoTool[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

const iconMap = {
  AlarmClock,
  Binary,
  BookOpen,
  Braces,
  Briefcase,
  Calculator,
  Calendar,
  Clock,
  Droplets,
  FileClock,
  Flame,
  HeartPulse,
  Home,
  Landmark,
  Link: LinkIcon,
  ListChecks,
  Mail,
  Megaphone,
  PiggyBank,
  Receipt,
  Scale,
  Search,
  Target,
  Timer,
  TrendingUp,
  Umbrella,
  Users,
  Wallet,
  Zap,
};

function numberValue(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatLocalCurrency(
  value: number,
  config: Pick<CountryToolCalculatorConfig, "locale" | "currency">
) {
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function amortizedPayment(principal: number, annualRate: number, months: number) {
  const monthlyRate = annualRate / 100 / 12;

  if (monthlyRate === 0) {
    return principal / Math.max(1, months);
  }

  return (
    (principal * monthlyRate * (1 + monthlyRate) ** months) /
    ((1 + monthlyRate) ** months - 1)
  );
}

function canadianMortgagePayment(principal: number, annualRate: number, months: number) {
  const monthlyRate = (1 + annualRate / 100 / 2) ** (2 / 12) - 1;

  if (monthlyRate === 0) {
    return principal / Math.max(1, months);
  }

  return (
    (principal * monthlyRate * (1 + monthlyRate) ** months) /
    ((1 + monthlyRate) ** months - 1)
  );
}

function progressiveTax(income: number, brackets: CountryToolCalculatorConfig["salary"]["brackets"]) {
  const sorted = [...brackets].sort((a, b) => a.threshold - b.threshold);

  return sorted.reduce((tax, bracket, index) => {
    const next = sorted[index + 1];
    const upper = next ? next.threshold : Number.POSITIVE_INFINITY;
    const taxableInBand = Math.max(0, Math.min(income, upper) - bracket.threshold);

    return tax + taxableInBand * bracket.rate;
  }, 0);
}

function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("en-GB", {
    maximumFractionDigits: digits,
  }).format(value);
}

function formatDuration(totalMinutes: number) {
  const minutes = Math.max(0, Math.round(totalMinutes));
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins} min`;
  return `${hours} hr ${mins} min`;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "number",
  min,
  max,
  step,
  prefix,
  suffix,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  min?: string;
  max?: string;
  step?: string;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type={type}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={prefix ? "pl-8" : suffix ? "pr-12" : undefined}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultGrid({ items }: { items: Array<{ label: string; value: string; help?: string }> }) {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardContent className="pt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-2xl font-bold">{item.value}</p>
              {item.help && <p className="mt-1 text-xs text-muted-foreground">{item.help}</p>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button type="button" variant="outline" onClick={copy} disabled={!text}>
      {copied ? "Copied" : "Copy"}
    </Button>
  );
}

function CompoundInterestTool() {
  const [principal, setPrincipal] = useState("5000");
  const [monthly, setMonthly] = useState("250");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("10");
  const [compounds, setCompounds] = useState("12");

  const result = useMemo(() => {
    const p = numberValue(principal);
    const m = numberValue(monthly);
    const r = numberValue(rate) / 100;
    const y = numberValue(years);
    const c = Math.max(1, numberValue(compounds));
    const periods = Math.round(y * c);
    const periodicRate = r / c;
    let balance = p;

    for (let i = 0; i < periods; i += 1) {
      balance += m * (12 / c);
      balance *= 1 + periodicRate;
    }

    const contributions = p + m * y * 12;
    return {
      balance,
      contributions,
      interest: balance - contributions,
    };
  }, [principal, monthly, rate, years, compounds]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="principal" label="Starting balance" prefix="GBP" value={principal} onChange={setPrincipal} min="0" />
        <Field id="monthly" label="Monthly contribution" prefix="GBP" value={monthly} onChange={setMonthly} min="0" />
        <Field id="rate" label="Annual interest rate" suffix="%" value={rate} onChange={setRate} min="0" step="0.1" />
        <Field id="years" label="Years" value={years} onChange={setYears} min="0" step="1" />
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="compound-frequency">Compounding frequency</Label>
          <select
            id="compound-frequency"
            value={compounds}
            onChange={(event) => setCompounds(event.target.value)}
            className="input-field"
          >
            <option value="1">Annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>
      </div>
      <ResultGrid
        items={[
          { label: "Projected balance", value: formatCurrency(result.balance) },
          { label: "Total contributions", value: formatCurrency(result.contributions) },
          { label: "Estimated interest", value: formatCurrency(result.interest) },
          { label: "Growth multiple", value: `${formatNumber(result.balance / Math.max(1, result.contributions))}x` },
        ]}
      />
    </div>
  );
}

function LoanRepaymentTool() {
  const [amount, setAmount] = useState("12000");
  const [apr, setApr] = useState("7.5");
  const [years, setYears] = useState("5");
  const [fee, setFee] = useState("0");

  const result = useMemo(() => {
    const principal = numberValue(amount) + numberValue(fee);
    const months = Math.max(1, Math.round(numberValue(years) * 12));
    const monthlyRate = numberValue(apr) / 100 / 12;
    const payment =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);
    const total = payment * months;
    return { payment, total, interest: total - principal, months };
  }, [amount, apr, years, fee]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="loan-amount" label="Loan amount" prefix="GBP" value={amount} onChange={setAmount} min="0" />
        <Field id="loan-apr" label="APR" suffix="%" value={apr} onChange={setApr} min="0" step="0.1" />
        <Field id="loan-years" label="Term" suffix="years" value={years} onChange={setYears} min="0" step="0.5" />
        <Field id="loan-fee" label="Upfront fee to include" prefix="GBP" value={fee} onChange={setFee} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated monthly payment", value: formatCurrency(result.payment) },
          { label: "Total repayable", value: formatCurrency(result.total) },
          { label: "Total interest and fee cost", value: formatCurrency(result.interest + numberValue(fee)) },
          { label: "Number of payments", value: `${result.months}` },
        ]}
      />
    </div>
  );
}

function simulateMortgage(balance: number, annualRate: number, basePayment: number, overpayment: number) {
  let current = balance;
  let interest = 0;
  let months = 0;
  const monthlyRate = annualRate / 100 / 12;

  while (current > 0 && months < 1200) {
    const monthlyInterest = current * monthlyRate;
    interest += monthlyInterest;
    current += monthlyInterest;
    current -= Math.max(0, basePayment + overpayment);
    months += 1;
  }

  return { months, interest };
}

function MortgageOverpaymentTool() {
  const [balance, setBalance] = useState("220000");
  const [rate, setRate] = useState("4.8");
  const [years, setYears] = useState("25");
  const [monthlyOverpayment, setMonthlyOverpayment] = useState("150");
  const [oneOff, setOneOff] = useState("0");

  const result = useMemo(() => {
    const b = Math.max(0, numberValue(balance));
    const r = numberValue(rate);
    const months = Math.max(1, Math.round(numberValue(years) * 12));
    const monthlyRate = r / 100 / 12;
    const basePayment =
      monthlyRate === 0 ? b / months : (b * monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);
    const base = simulateMortgage(b, r, basePayment, 0);
    const withOverpay = simulateMortgage(Math.max(0, b - numberValue(oneOff)), r, basePayment, numberValue(monthlyOverpayment));
    return {
      basePayment,
      base,
      withOverpay,
      savedInterest: base.interest - withOverpay.interest,
      savedMonths: base.months - withOverpay.months,
    };
  }, [balance, rate, years, monthlyOverpayment, oneOff]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="mortgage-balance" label="Mortgage balance" prefix="GBP" value={balance} onChange={setBalance} min="0" />
        <Field id="mortgage-rate" label="Interest rate" suffix="%" value={rate} onChange={setRate} min="0" step="0.1" />
        <Field id="mortgage-years" label="Remaining term" suffix="years" value={years} onChange={setYears} min="1" />
        <Field id="mortgage-monthly-overpay" label="Monthly overpayment" prefix="GBP" value={monthlyOverpayment} onChange={setMonthlyOverpayment} min="0" />
        <Field id="mortgage-one-off" label="One-off overpayment" prefix="GBP" value={oneOff} onChange={setOneOff} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Current monthly payment", value: formatCurrency(result.basePayment) },
          { label: "Interest saved", value: formatCurrency(Math.max(0, result.savedInterest)) },
          { label: "Time saved", value: formatDuration(Math.max(0, result.savedMonths) * 30 * 24 * 60), help: `${Math.max(0, result.savedMonths)} months` },
          { label: "New payoff time", value: `${Math.floor(result.withOverpay.months / 12)} years ${result.withOverpay.months % 12} months` },
        ]}
      />
    </div>
  );
}

function SavingsGoalTool() {
  const [target, setTarget] = useState("10000");
  const [current, setCurrent] = useState("1500");
  const [monthly, setMonthly] = useState("350");
  const [rate, setRate] = useState("3");

  const result = useMemo(() => {
    const goal = numberValue(target);
    let balance = numberValue(current);
    const deposit = numberValue(monthly);
    const monthlyRate = numberValue(rate) / 100 / 12;
    let months = 0;

    while (balance < goal && months < 1200) {
      balance = balance * (1 + monthlyRate) + deposit;
      months += 1;
      if (deposit <= 0 && monthlyRate <= 0) break;
    }

    return { months, balance, possible: balance >= goal };
  }, [target, current, monthly, rate]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="goal-target" label="Savings target" prefix="GBP" value={target} onChange={setTarget} min="0" />
        <Field id="goal-current" label="Current savings" prefix="GBP" value={current} onChange={setCurrent} min="0" />
        <Field id="goal-monthly" label="Monthly saving" prefix="GBP" value={monthly} onChange={setMonthly} min="0" />
        <Field id="goal-rate" label="Annual interest rate" suffix="%" value={rate} onChange={setRate} min="0" step="0.1" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated time to target", value: result.possible ? `${Math.floor(result.months / 12)} years ${result.months % 12} months` : "Not reachable" },
          { label: "Months needed", value: result.possible ? `${result.months}` : "Increase saving" },
          { label: "Projected balance", value: formatCurrency(result.balance) },
          { label: "Remaining today", value: formatCurrency(Math.max(0, numberValue(target) - numberValue(current))) },
        ]}
      />
    </div>
  );
}

function BudgetPlannerTool() {
  const [income, setIncome] = useState("3200");
  const [rent, setRent] = useState("1100");
  const [bills, setBills] = useState("350");
  const [groceries, setGroceries] = useState("450");
  const [transport, setTransport] = useState("180");
  const [debt, setDebt] = useState("120");
  const [savings, setSavings] = useState("400");
  const [other, setOther] = useState("300");

  const spending = [rent, bills, groceries, transport, debt, savings, other].reduce((sum, value) => sum + numberValue(value), 0);
  const surplus = numberValue(income) - spending;
  const savingsRate = numberValue(income) > 0 ? (numberValue(savings) / numberValue(income)) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="budget-income" label="Monthly take-home income" prefix="GBP" value={income} onChange={setIncome} min="0" />
        <Field id="budget-rent" label="Rent or mortgage" prefix="GBP" value={rent} onChange={setRent} min="0" />
        <Field id="budget-bills" label="Utilities and bills" prefix="GBP" value={bills} onChange={setBills} min="0" />
        <Field id="budget-groceries" label="Groceries" prefix="GBP" value={groceries} onChange={setGroceries} min="0" />
        <Field id="budget-transport" label="Transport" prefix="GBP" value={transport} onChange={setTransport} min="0" />
        <Field id="budget-debt" label="Debt repayments" prefix="GBP" value={debt} onChange={setDebt} min="0" />
        <Field id="budget-savings" label="Savings and investments" prefix="GBP" value={savings} onChange={setSavings} min="0" />
        <Field id="budget-other" label="Other spending" prefix="GBP" value={other} onChange={setOther} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Planned spending", value: formatCurrency(spending) },
          { label: surplus >= 0 ? "Left unassigned" : "Monthly shortfall", value: formatCurrency(Math.abs(surplus)) },
          { label: "Savings rate", value: `${formatNumber(savingsRate)}%` },
          { label: "Status", value: surplus >= 0 ? "Balanced" : "Over budget" },
        ]}
      />
    </div>
  );
}

function SalaryHourlyTool() {
  const [salary, setSalary] = useState("35000");
  const [hours, setHours] = useState("37.5");
  const [days, setDays] = useState("5");
  const [holiday, setHoliday] = useState("28");

  const annual = numberValue(salary);
  const weeklyHours = Math.max(1, numberValue(hours));
  const daysPerWeek = Math.max(1, numberValue(days));
  const paidDays = daysPerWeek * 52;
  const workedDays = Math.max(1, paidDays - numberValue(holiday));
  const dailyHours = weeklyHours / daysPerWeek;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="salary-annual" label="Annual salary" prefix="GBP" value={salary} onChange={setSalary} min="0" />
        <Field id="salary-hours" label="Working hours per week" value={hours} onChange={setHours} min="1" step="0.5" />
        <Field id="salary-days" label="Working days per week" value={days} onChange={setDays} min="1" step="0.5" />
        <Field id="salary-holiday" label="Paid holiday days" value={holiday} onChange={setHoliday} min="0" step="0.5" />
      </div>
      <ResultGrid
        items={[
          { label: "Monthly gross pay", value: formatCurrency(annual / 12) },
          { label: "Weekly gross pay", value: formatCurrency(annual / 52) },
          { label: "Contracted hourly rate", value: formatCurrency(annual / (weeklyHours * 52)) },
          { label: "Worked-day hourly equivalent", value: formatCurrency(annual / (workedDays * dailyHours)) },
        ]}
      />
    </div>
  );
}

function BreakEvenTool() {
  const [fixed, setFixed] = useState("2500");
  const [price, setPrice] = useState("40");
  const [variable, setVariable] = useState("16");

  const margin = numberValue(price) - numberValue(variable);
  const units = margin > 0 ? Math.ceil(numberValue(fixed) / margin) : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field id="break-fixed" label="Fixed costs" prefix="GBP" value={fixed} onChange={setFixed} min="0" />
        <Field id="break-price" label="Selling price per unit" prefix="GBP" value={price} onChange={setPrice} min="0" />
        <Field id="break-variable" label="Variable cost per unit" prefix="GBP" value={variable} onChange={setVariable} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Contribution margin", value: formatCurrency(margin) },
          { label: "Break-even units", value: margin > 0 ? `${units}` : "Not possible" },
          { label: "Break-even revenue", value: margin > 0 ? formatCurrency(units * numberValue(price)) : "Not possible" },
          { label: "Margin percentage", value: numberValue(price) > 0 ? `${formatNumber((margin / numberValue(price)) * 100)}%` : "0%" },
        ]}
      />
    </div>
  );
}

function PomodoroTool() {
  const [workMinutes, setWorkMinutes] = useState("25");
  const [breakMinutes, setBreakMinutes] = useState("5");
  const [mode, setMode] = useState<"work" | "break">("work");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setSecondsLeft(numberValue(mode === "work" ? workMinutes : breakMinutes) * 60);
    setRunning(false);
  }, [workMinutes, breakMinutes, mode]);

  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((value) => {
        if (value <= 1) {
          window.clearInterval(interval);
          setRunning(false);
          return 0;
        }
        return value - 1;
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [running]);

  const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="pomodoro-work" label="Work session" suffix="min" value={workMinutes} onChange={setWorkMinutes} min="1" />
        <Field id="pomodoro-break" label="Break session" suffix="min" value={breakMinutes} onChange={setBreakMinutes} min="1" />
      </div>
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6 text-center">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">{mode} session</p>
          <p className="my-6 font-mono text-6xl font-bold">{minutes}:{seconds}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={() => setRunning((value) => !value)}>{running ? "Pause" : "Start"}</Button>
            <Button variant="outline" onClick={() => setMode(mode === "work" ? "break" : "work")}>
              Switch to {mode === "work" ? "break" : "work"}
            </Button>
            <Button variant="outline" onClick={() => setSecondsLeft(numberValue(mode === "work" ? workMinutes : breakMinutes) * 60)}>
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function PriorityMatrixTool() {
  const [task, setTask] = useState("Prepare client proposal");
  const [urgency, setUrgency] = useState("4");
  const [impact, setImpact] = useState("5");
  const [effort, setEffort] = useState("3");
  const [hours, setHours] = useState("24");

  const score = numberValue(urgency) * 2 + numberValue(impact) * 3 - numberValue(effort) + (numberValue(hours) <= 24 ? 3 : 0);
  const recommendation = score >= 18 ? "Do next" : score >= 12 ? "Schedule" : score >= 7 ? "Delegate or batch" : "Drop or reduce scope";

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="priority-task">Task</Label>
        <Input id="priority-task" value={task} onChange={(event) => setTask(event.target.value)} />
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <Field id="priority-urgency" label="Urgency (1-5)" value={urgency} onChange={setUrgency} min="1" />
        <Field id="priority-impact" label="Impact (1-5)" value={impact} onChange={setImpact} min="1" />
        <Field id="priority-effort" label="Effort (1-5)" value={effort} onChange={setEffort} min="1" />
        <Field id="priority-hours" label="Due in" suffix="hours" value={hours} onChange={setHours} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Task", value: task || "Untitled task" },
          { label: "Priority score", value: `${formatNumber(score, 0)}/23` },
          { label: "Recommendation", value: recommendation },
          { label: "Reason", value: numberValue(impact) >= 4 ? "High impact" : "Lower impact", help: "Compare scores across tasks for best results." },
        ]}
      />
    </div>
  );
}

function MeetingCostTool() {
  const [attendees, setAttendees] = useState("8");
  const [hourly, setHourly] = useState("38");
  const [duration, setDuration] = useState("60");
  const [prep, setPrep] = useState("15");

  const totalHours = numberValue(attendees) * ((numberValue(duration) + numberValue(prep)) / 60);
  const totalCost = totalHours * numberValue(hourly);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="meeting-attendees" label="Attendees" value={attendees} onChange={setAttendees} min="1" />
        <Field id="meeting-hourly" label="Average hourly cost" prefix="GBP" value={hourly} onChange={setHourly} min="0" />
        <Field id="meeting-duration" label="Meeting length" suffix="min" value={duration} onChange={setDuration} min="0" />
        <Field id="meeting-prep" label="Prep/follow-up per person" suffix="min" value={prep} onChange={setPrep} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated meeting cost", value: formatCurrency(totalCost) },
          { label: "Total person-hours", value: `${formatNumber(totalHours)} hours` },
          { label: "Cost per 15 minutes", value: formatCurrency((numberValue(attendees) * numberValue(hourly)) / 4) },
          { label: "Time included per person", value: `${numberValue(duration) + numberValue(prep)} minutes` },
        ]}
      />
    </div>
  );
}

function ReadingTimeTool() {
  const [text, setText] = useState("Paste your article, email, presentation script, or notes here.");
  const [wpm, setWpm] = useState("220");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter((part) => part.trim()).length : 0;
  const minutes = words / Math.max(1, numberValue(wpm));

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="reading-text">Text</Label>
        <Textarea id="reading-text" value={text} onChange={(event) => setText(event.target.value)} rows={8} />
      </div>
      <Field id="reading-wpm" label="Reading speed" suffix="wpm" value={wpm} onChange={setWpm} min="1" />
      <ResultGrid
        items={[
          { label: "Estimated reading time", value: formatDuration(minutes * 60) },
          { label: "Words", value: `${words}` },
          { label: "Characters", value: `${text.length}` },
          { label: "Sentences", value: `${sentences}` },
        ]}
      />
    </div>
  );
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function timeToMinutes(value: string) {
  if (!value) return null;
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return null;
  return hours * 60 + minutes;
}

function TimeCardTool() {
  const [rows, setRows] = useState(
    weekdays.map((day) => ({ day, start: "09:00", end: "17:00", breakMinutes: "30" }))
  );

  const update = (index: number, key: "start" | "end" | "breakMinutes", value: string) => {
    setRows((current) => current.map((row, rowIndex) => (rowIndex === index ? { ...row, [key]: value } : row)));
  };

  const totals = rows.map((row) => {
    const start = timeToMinutes(row.start);
    const end = timeToMinutes(row.end);
    if (start === null || end === null) return 0;
    const raw = end >= start ? end - start : end + 24 * 60 - start;
    return Math.max(0, raw - numberValue(row.breakMinutes));
  });
  const totalMinutes = totals.reduce((sum, value) => sum + value, 0);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {rows.map((row, index) => (
          <div key={row.day} className="grid gap-3 rounded-lg border p-3 sm:grid-cols-4">
            <div className="font-medium">{row.day}</div>
            <Field id={`${row.day}-start`} label="Start" type="time" value={row.start} onChange={(value) => update(index, "start", value)} />
            <Field id={`${row.day}-end`} label="Finish" type="time" value={row.end} onChange={(value) => update(index, "end", value)} />
            <Field id={`${row.day}-break`} label="Break" suffix="min" value={row.breakMinutes} onChange={(value) => update(index, "breakMinutes", value)} min="0" />
          </div>
        ))}
      </div>
      <ResultGrid
        items={[
          { label: "Weekly total", value: formatDuration(totalMinutes) },
          { label: "Decimal hours", value: `${formatNumber(totalMinutes / 60)} hours` },
          { label: "Average per day", value: formatDuration(totalMinutes / rows.length) },
          { label: "Unpaid breaks", value: formatDuration(rows.reduce((sum, row) => sum + numberValue(row.breakMinutes), 0)) },
        ]}
      />
    </div>
  );
}

function DeadlineCountdownTool() {
  const [label, setLabel] = useState("Project deadline");
  const [deadline, setDeadline] = useState("");
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const target = deadline ? new Date(deadline).getTime() : now;
  const diff = target - now;
  const absSeconds = Math.abs(Math.floor(diff / 1000));
  const days = Math.floor(absSeconds / 86400);
  const hours = Math.floor((absSeconds % 86400) / 3600);
  const minutes = Math.floor((absSeconds % 3600) / 60);
  const seconds = absSeconds % 60;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="deadline-label" label="Deadline label" type="text" value={label} onChange={setLabel} />
        <Field id="deadline-date" label="Deadline date and time" type="datetime-local" value={deadline} onChange={setDeadline} />
      </div>
      <ResultGrid
        items={[
          { label: "Countdown", value: deadline ? `${days}d ${hours}h ${minutes}m ${seconds}s` : "Choose a deadline" },
          { label: "Status", value: deadline ? (diff >= 0 ? "Time remaining" : "Deadline passed") : "Not set" },
          { label: "Label", value: label || "Untitled deadline" },
          { label: "Total hours", value: deadline ? `${formatNumber(absSeconds / 3600)} hours` : "0" },
        ]}
      />
    </div>
  );
}

function UrlCodecTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [text, setText] = useState("name=Daily Utility Dock&topic=free tools");
  const result = useMemo(() => {
    try {
      return {
        output: mode === "encode" ? encodeURIComponent(text) : decodeURIComponent(text),
        error: "",
      };
    } catch {
      return {
        output: "",
        error: "The encoded text contains an invalid percent sequence.",
      };
    }
  }, [mode, text]);

  return <TextTransformTool mode={mode} setMode={setMode} text={text} setText={setText} output={result.output} error={result.error} />;
}

function Base64CodecTool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [text, setText] = useState("Daily Utility Dock");
  const result = useMemo(() => {
    try {
      if (mode === "encode") {
        const bytes = new TextEncoder().encode(text);
        let binary = "";
        bytes.forEach((byte) => {
          binary += String.fromCharCode(byte);
        });
        return { output: window.btoa(binary), error: "" };
      }
      const binary = window.atob(text.trim());
      const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
      return { output: new TextDecoder().decode(bytes), error: "" };
    } catch {
      return { output: "", error: "The input is not valid Base64 text." };
    }
  }, [mode, text]);

  return <TextTransformTool mode={mode} setMode={setMode} text={text} setText={setText} output={result.output} error={result.error} />;
}

function TextTransformTool({
  mode,
  setMode,
  text,
  setText,
  output,
  error,
}: {
  mode: "encode" | "decode";
  setMode: (mode: "encode" | "decode") => void;
  text: string;
  setText: (text: string) => void;
  output: string;
  error: string;
}) {
  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button variant={mode === "encode" ? "default" : "outline"} onClick={() => setMode("encode")}>
          Encode
        </Button>
        <Button variant={mode === "decode" ? "default" : "outline"} onClick={() => setMode("decode")}>
          Decode
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="transform-input">Input</Label>
          <Textarea id="transform-input" value={text} onChange={(event) => setText(event.target.value)} rows={8} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="transform-output">Output</Label>
          <Textarea id="transform-output" value={output} readOnly rows={8} />
        </div>
      </div>
      {error && <p className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <CopyButton text={output} />
    </div>
  );
}

function JsonFormatterTool() {
  const [text, setText] = useState('{"name":"Daily Utility Dock","tools":25,"free":true}');
  const [mode, setMode] = useState<"format" | "minify">("format");
  const [indent, setIndent] = useState("2");

  const result = useMemo(() => {
    try {
      const parsed = JSON.parse(text);
      return {
        output: mode === "format" ? JSON.stringify(parsed, null, Math.max(0, numberValue(indent))) : JSON.stringify(parsed),
        error: "",
      };
    } catch (error) {
      return { output: "", error: error instanceof Error ? error.message : "Invalid JSON" };
    }
  }, [text, mode, indent]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex gap-2">
          <Button variant={mode === "format" ? "default" : "outline"} onClick={() => setMode("format")}>
            Format
          </Button>
          <Button variant={mode === "minify" ? "default" : "outline"} onClick={() => setMode("minify")}>
            Minify
          </Button>
        </div>
        <Field id="json-indent" label="Indent spaces" value={indent} onChange={setIndent} min="0" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="json-input">JSON input</Label>
          <Textarea id="json-input" value={text} onChange={(event) => setText(event.target.value)} rows={10} className="font-mono" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="json-output">Output</Label>
          <Textarea id="json-output" value={result.output || result.error} readOnly rows={10} className="font-mono" />
        </div>
      </div>
      <ResultGrid
        items={[
          { label: "Status", value: result.error ? "Invalid JSON" : "Valid JSON" },
          { label: "Input characters", value: `${text.length}` },
          { label: "Output characters", value: `${result.output.length}` },
          { label: "Mode", value: mode === "format" ? "Pretty format" : "Minified" },
        ]}
      />
      <CopyButton text={result.output} />
    </div>
  );
}

function UtmBuilderTool() {
  const [url, setUrl] = useState("https://dailyutilitydock.com/tools");
  const [source, setSource] = useState("newsletter");
  const [medium, setMedium] = useState("email");
  const [campaign, setCampaign] = useState("spring-tools");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");

  const output = useMemo(() => {
    try {
      const parsed = new URL(url.includes("://") ? url : `https://${url}`);
      const params = [
        ["utm_source", source],
        ["utm_medium", medium],
        ["utm_campaign", campaign],
        ["utm_term", term],
        ["utm_content", content],
      ];
      params.forEach(([key, value]) => {
        if (value) parsed.searchParams.set(key, value);
        else parsed.searchParams.delete(key);
      });
      return parsed.toString();
    } catch {
      return "";
    }
  }, [url, source, medium, campaign, term, content]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="utm-url" label="Destination URL" type="url" value={url} onChange={setUrl} />
        <Field id="utm-source" label="Campaign source" type="text" value={source} onChange={setSource} />
        <Field id="utm-medium" label="Campaign medium" type="text" value={medium} onChange={setMedium} />
        <Field id="utm-campaign" label="Campaign name" type="text" value={campaign} onChange={setCampaign} />
        <Field id="utm-term" label="Campaign term (optional)" type="text" value={term} onChange={setTerm} />
        <Field id="utm-content" label="Campaign content (optional)" type="text" value={content} onChange={setContent} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="utm-output">Generated URL</Label>
        <Textarea id="utm-output" value={output || "Enter a valid URL"} readOnly rows={4} />
      </div>
      <CopyButton text={output} />
    </div>
  );
}

function EmailLinkTool() {
  const [to, setTo] = useState("hello@example.com");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("Tool request");
  const [body, setBody] = useState("Hello, I would like to ask about...");

  const mailto = useMemo(() => {
    const params = new URLSearchParams();
    if (cc) params.set("cc", cc);
    if (bcc) params.set("bcc", bcc);
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const query = params.toString();
    return `mailto:${to}${query ? `?${query}` : ""}`;
  }, [to, cc, bcc, subject, body]);
  const html = `<a href="${mailto}">Email us</a>`;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="email-to" label="To" type="email" value={to} onChange={setTo} />
        <Field id="email-cc" label="Cc (optional)" type="email" value={cc} onChange={setCc} />
        <Field id="email-bcc" label="Bcc (optional)" type="email" value={bcc} onChange={setBcc} />
        <Field id="email-subject" label="Subject" type="text" value={subject} onChange={setSubject} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-body">Body</Label>
        <Textarea id="email-body" value={body} onChange={(event) => setBody(event.target.value)} rows={5} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="mailto-output">Mailto link</Label>
          <Textarea id="mailto-output" value={mailto} readOnly rows={4} />
          <CopyButton text={mailto} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mailto-html">HTML link</Label>
          <Textarea id="mailto-html" value={html} readOnly rows={4} />
          <CopyButton text={html} />
        </div>
      </div>
    </div>
  );
}

function MetaPreviewTool() {
  const [url, setUrl] = useState("https://dailyutilitydock.com/tools/meta-tag-preview-checker");
  const [title, setTitle] = useState("Meta Tag Preview Checker - Free SEO Snippet Tool");
  const [description, setDescription] = useState("Preview title tags and meta descriptions before publishing with this free browser-based SEO utility.");

  const titleOk = title.length >= 30 && title.length <= 60;
  const descriptionOk = description.length >= 120 && description.length <= 160;

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <Field id="meta-url" label="Page URL" type="url" value={url} onChange={setUrl} />
        <Field id="meta-title" label="Title tag" type="text" value={title} onChange={setTitle} />
        <div className="space-y-2">
          <Label htmlFor="meta-description">Meta description</Label>
          <Textarea id="meta-description" value={description} onChange={(event) => setDescription(event.target.value)} rows={4} />
        </div>
      </div>
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-green-700">{url}</p>
          <p className="mt-1 text-xl text-blue-700">{title || "Page title preview"}</p>
          <p className="mt-1 text-sm text-muted-foreground">{description || "Meta description preview appears here."}</p>
        </CardContent>
      </Card>
      <ResultGrid
        items={[
          { label: "Title length", value: `${title.length} characters`, help: titleOk ? "Within common guidance." : "Aim for roughly 30 to 60 characters." },
          { label: "Description length", value: `${description.length} characters`, help: descriptionOk ? "Within common guidance." : "Aim for roughly 120 to 160 characters." },
          { label: "Title status", value: titleOk ? "Good range" : "Review length" },
          { label: "Description status", value: descriptionOk ? "Good range" : "Review length" },
        ]}
      />
    </div>
  );
}

function UkHolidayTool() {
  const [days, setDays] = useState("5");
  const [months, setMonths] = useState("12");
  const annual = Math.min(numberValue(days) * 5.6, 28);
  const prorated = annual * (Math.min(12, Math.max(0, numberValue(months))) / 12);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="holiday-days" label="Days worked per week" value={days} onChange={setDays} min="0" step="0.5" />
        <Field id="holiday-months" label="Months worked in leave year" value={months} onChange={setMonths} min="0" max="12" step="0.5" />
      </div>
      <ResultGrid
        items={[
          { label: "Full-year statutory entitlement", value: `${formatNumber(annual)} days` },
          { label: "Pro-rated entitlement", value: `${formatNumber(prorated)} days` },
          { label: "Weekly leave equivalent", value: "5.6 weeks" },
          { label: "Cap applied", value: annual >= 28 ? "28 day cap" : "No cap reached" },
        ]}
      />
    </div>
  );
}

function UkTakeHomeTool() {
  const [salary, setSalary] = useState("35000");
  const [pensionPercent, setPensionPercent] = useState("5");
  const gross = numberValue(salary);
  const pension = gross * (numberValue(pensionPercent) / 100);
  const adjusted = Math.max(0, gross - pension);
  const allowance = adjusted > 100000 ? Math.max(0, 12570 - (adjusted - 100000) / 2) : 12570;
  const taxable = Math.max(0, adjusted - allowance);
  const basicTax = Math.min(taxable, 37700) * 0.2;
  const higherTax = Math.min(Math.max(0, taxable - 37700), 87440) * 0.4;
  const additionalTax = Math.max(0, taxable - 125140) * 0.45;
  const incomeTax = basicTax + higherTax + additionalTax;
  const ni = Math.min(Math.max(0, gross - 12570), 37700) * 0.08 + Math.max(0, gross - 50270) * 0.02;
  const net = gross - pension - incomeTax - ni;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="takehome-salary" label="Annual gross salary" prefix="GBP" value={salary} onChange={setSalary} min="0" />
        <Field id="takehome-pension" label="Employee pension" suffix="%" value={pensionPercent} onChange={setPensionPercent} min="0" step="0.1" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated annual take-home", value: formatCurrency(net) },
          { label: "Estimated monthly take-home", value: formatCurrency(net / 12) },
          { label: "Income tax", value: formatCurrency(incomeTax) },
          { label: "National Insurance", value: formatCurrency(ni) },
          { label: "Pension contribution", value: formatCurrency(pension) },
          { label: "Tax-free allowance used", value: formatCurrency(allowance) },
        ]}
      />
    </div>
  );
}

function UkSspTool() {
  const [days, setDays] = useState("10");
  const [qualifyingDays, setQualifyingDays] = useState("5");
  const [weeklyRate, setWeeklyRate] = useState("118.75");
  const waiting = Math.min(3, Math.max(0, numberValue(days)));
  const payableDays = Math.max(0, numberValue(days) - waiting);
  const dailyRate = numberValue(weeklyRate) / Math.max(1, numberValue(qualifyingDays));
  const pay = payableDays * dailyRate;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field id="ssp-days" label="Qualifying sickness days" value={days} onChange={setDays} min="0" />
        <Field id="ssp-qualifying" label="Qualifying days per week" value={qualifyingDays} onChange={setQualifyingDays} min="1" />
        <Field id="ssp-rate" label="Weekly SSP rate" prefix="GBP" value={weeklyRate} onChange={setWeeklyRate} min="0" step="0.01" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated SSP", value: formatCurrency(pay) },
          { label: "Waiting days", value: `${waiting}` },
          { label: "Payable days", value: `${payableDays}` },
          { label: "Daily SSP rate", value: formatCurrency(dailyRate) },
        ]}
      />
    </div>
  );
}

function UkRedundancyTool() {
  const [age, setAge] = useState("45");
  const [years, setYears] = useState("8");
  const [weeklyPay, setWeeklyPay] = useState("650");
  const [cap, setCap] = useState("719");

  const completedYears = Math.min(20, Math.floor(numberValue(years)));
  let weeks = 0;
  for (let i = 0; i < completedYears; i += 1) {
    const ageDuringYear = numberValue(age) - i;
    if (ageDuringYear < 22) weeks += 0.5;
    else if (ageDuringYear < 41) weeks += 1;
    else weeks += 1.5;
  }
  const cappedPay = Math.min(numberValue(weeklyPay), numberValue(cap));
  const pay = weeks * cappedPay;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="redundancy-age" label="Current age" value={age} onChange={setAge} min="16" />
        <Field id="redundancy-years" label="Complete years of service" value={years} onChange={setYears} min="0" />
        <Field id="redundancy-weekly" label="Gross weekly pay" prefix="GBP" value={weeklyPay} onChange={setWeeklyPay} min="0" />
        <Field id="redundancy-cap" label="Statutory weekly pay cap" prefix="GBP" value={cap} onChange={setCap} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated statutory redundancy pay", value: formatCurrency(pay) },
          { label: "Entitlement weeks", value: `${formatNumber(weeks)} weeks` },
          { label: "Capped weekly pay used", value: formatCurrency(cappedPay) },
          { label: "Years counted", value: `${completedYears}` },
        ]}
      />
    </div>
  );
}

function UkNoticeTool() {
  const [years, setYears] = useState("3");
  const [months, setMonths] = useState("0");
  const [contractWeeks, setContractWeeks] = useState("4");
  const totalMonths = numberValue(years) * 12 + numberValue(months);
  const completeYears = Math.floor(totalMonths / 12);
  const statutory = totalMonths < 1 ? 0 : completeYears < 2 ? 1 : Math.min(12, completeYears);
  const practical = Math.max(statutory, numberValue(contractWeeks));

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field id="notice-years" label="Years of service" value={years} onChange={setYears} min="0" />
        <Field id="notice-months" label="Additional months" value={months} onChange={setMonths} min="0" max="11" />
        <Field id="notice-contract" label="Contract notice" suffix="weeks" value={contractWeeks} onChange={setContractWeeks} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Statutory notice estimate", value: `${statutory} weeks` },
          { label: "Contractual notice entered", value: `${formatNumber(numberValue(contractWeeks))} weeks` },
          { label: "Planning notice period", value: `${formatNumber(practical)} weeks` },
          { label: "Complete years counted", value: `${completeYears}` },
        ]}
      />
    </div>
  );
}

function UkWorkingDaysTool() {
  const [start, setStart] = useState("2026-06-01");
  const [end, setEnd] = useState("2026-06-30");
  const [includeEnd, setIncludeEnd] = useState(true);
  const [closures, setClosures] = useState("0");

  const result = useMemo(() => {
    const startDate = new Date(`${start}T00:00:00`);
    const endDate = new Date(`${end}T00:00:00`);
    if (!start || !end || Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
      return { weekdays: 0, calendarDays: 0, workingDays: 0 };
    }
    const step = startDate <= endDate ? 1 : -1;
    let weekdaysCount = 0;
    let calendarDays = 0;
    const cursor = new Date(startDate);
    while ((step === 1 && cursor <= endDate) || (step === -1 && cursor >= endDate)) {
      const isEnd = cursor.getTime() === endDate.getTime();
      if (includeEnd || !isEnd) {
        const day = cursor.getDay();
        if (day !== 0 && day !== 6) weekdaysCount += 1;
        calendarDays += 1;
      }
      cursor.setDate(cursor.getDate() + step);
    }
    return {
      weekdays: weekdaysCount,
      calendarDays,
      workingDays: Math.max(0, weekdaysCount - numberValue(closures)),
    };
  }, [start, end, includeEnd, closures]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="working-start" label="Start date" type="date" value={start} onChange={setStart} />
        <Field id="working-end" label="End date" type="date" value={end} onChange={setEnd} />
        <Field id="working-closures" label="Bank holidays or closures to subtract" value={closures} onChange={setClosures} min="0" />
        <div className="flex items-center gap-3 rounded-lg border p-3">
          <input id="working-include-end" type="checkbox" checked={includeEnd} onChange={(event) => setIncludeEnd(event.target.checked)} />
          <Label htmlFor="working-include-end">Include end date</Label>
        </div>
      </div>
      <ResultGrid
        items={[
          { label: "Working days", value: `${result.workingDays}` },
          { label: "Weekdays before adjustments", value: `${result.weekdays}` },
          { label: "Calendar days counted", value: `${result.calendarDays}` },
          { label: "Closures subtracted", value: `${formatNumber(numberValue(closures), 0)}` },
        ]}
      />
    </div>
  );
}

function UkElectricityCostTool() {
  const [watts, setWatts] = useState("2000");
  const [hoursPerDay, setHoursPerDay] = useState("1");
  const [daysPerWeek, setDaysPerWeek] = useState("7");
  const [unitRate, setUnitRate] = useState("26.11");
  const [standbyWatts, setStandbyWatts] = useState("0");
  const [standingCharge, setStandingCharge] = useState("57.19");

  const result = useMemo(() => {
    const activeHours = Math.max(0, numberValue(hoursPerDay)) * Math.min(7, Math.max(0, numberValue(daysPerWeek)));
    const activeKwh = (Math.max(0, numberValue(watts)) / 1000) * activeHours;
    const standbyHours = Math.max(0, 24 * 7 - activeHours);
    const standbyKwh = (Math.max(0, numberValue(standbyWatts)) / 1000) * standbyHours;
    const weeklyKwh = activeKwh + standbyKwh;
    const rate = Math.max(0, numberValue(unitRate)) / 100;
    const activeUseKwh = (Math.max(0, numberValue(watts)) / 1000) * Math.max(0, numberValue(hoursPerDay));

    return {
      activeUseCost: activeUseKwh * rate,
      weeklyCost: weeklyKwh * rate,
      monthlyCost: weeklyKwh * 52 * rate / 12,
      annualCost: weeklyKwh * 52 * rate,
      annualKwh: weeklyKwh * 52,
      annualStandingCharge: (Math.max(0, numberValue(standingCharge)) / 100) * 365,
    };
  }, [watts, hoursPerDay, daysPerWeek, unitRate, standbyWatts, standingCharge]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="electricity-watts" label="Appliance power" suffix="W" value={watts} onChange={setWatts} min="0" />
        <Field id="electricity-hours" label="Hours used per active day" suffix="hours" value={hoursPerDay} onChange={setHoursPerDay} min="0" step="0.25" />
        <Field id="electricity-days" label="Active days per week" suffix="days" value={daysPerWeek} onChange={setDaysPerWeek} min="0" max="7" step="0.5" />
        <Field id="electricity-rate" label="Electricity unit rate" suffix="p/kWh" value={unitRate} onChange={setUnitRate} min="0" step="0.01" />
        <Field id="electricity-standby" label="Standby power" suffix="W" value={standbyWatts} onChange={setStandbyWatts} min="0" step="0.1" />
        <Field id="electricity-standing" label="Daily standing charge" suffix="p/day" value={standingCharge} onChange={setStandingCharge} min="0" step="0.01" />
      </div>
      <ResultGrid
        items={[
          { label: "Cost per active day", value: formatCurrency(result.activeUseCost) },
          { label: "Estimated weekly cost", value: formatCurrency(result.weeklyCost) },
          { label: "Estimated monthly cost", value: formatCurrency(result.monthlyCost) },
          { label: "Estimated annual cost", value: formatCurrency(result.annualCost), help: `${formatNumber(result.annualKwh)} kWh per year` },
          { label: "Annual standing charge", value: formatCurrency(result.annualStandingCharge), help: "Shown separately from appliance usage." },
        ]}
      />
    </div>
  );
}

function UkGasBillTool() {
  const [previousReading, setPreviousReading] = useState("12000");
  const [currentReading, setCurrentReading] = useState("12150");
  const [meterUnit, setMeterUnit] = useState<"metric" | "imperial">("metric");
  const [calorificValue, setCalorificValue] = useState("39.5");
  const [correctionFactor, setCorrectionFactor] = useState("1.02264");
  const [unitRate, setUnitRate] = useState("7.33");
  const [standingCharge, setStandingCharge] = useState("29.04");
  const [billingDays, setBillingDays] = useState("30");
  const [vatRate, setVatRate] = useState("5");

  const result = useMemo(() => {
    const unitsUsed = Math.max(0, numberValue(currentReading) - numberValue(previousReading));
    const volumeMultiplier = meterUnit === "imperial" ? 2.83 : 1;
    const kwh = (unitsUsed * volumeMultiplier * Math.max(0, numberValue(correctionFactor)) * Math.max(0, numberValue(calorificValue))) / 3.6;
    const usageCost = kwh * (Math.max(0, numberValue(unitRate)) / 100);
    const standingCost = Math.max(0, numberValue(billingDays)) * (Math.max(0, numberValue(standingCharge)) / 100);
    const subtotal = usageCost + standingCost;
    const vat = subtotal * (Math.max(0, numberValue(vatRate)) / 100);

    return {
      unitsUsed,
      kwh,
      usageCost,
      standingCost,
      vat,
      total: subtotal + vat,
    };
  }, [previousReading, currentReading, meterUnit, calorificValue, correctionFactor, unitRate, standingCharge, billingDays, vatRate]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="gas-previous-reading" label="Previous meter reading" value={previousReading} onChange={setPreviousReading} min="0" />
        <Field id="gas-current-reading" label="Current meter reading" value={currentReading} onChange={setCurrentReading} min="0" />
        <div className="space-y-2">
          <Label htmlFor="gas-meter-unit">Meter type</Label>
          <select
            id="gas-meter-unit"
            value={meterUnit}
            onChange={(event) => setMeterUnit(event.target.value as "metric" | "imperial")}
            className="input-field"
          >
            <option value="metric">Metric (m3)</option>
            <option value="imperial">Imperial (hundreds ft3)</option>
          </select>
        </div>
        <Field id="gas-calorific" label="Calorific value" value={calorificValue} onChange={setCalorificValue} min="0" step="0.1" />
        <Field id="gas-correction" label="Correction factor" value={correctionFactor} onChange={setCorrectionFactor} min="0" step="0.00001" />
        <Field id="gas-unit-rate" label="Gas unit rate" suffix="p/kWh" value={unitRate} onChange={setUnitRate} min="0" step="0.01" />
        <Field id="gas-standing" label="Daily standing charge" suffix="p/day" value={standingCharge} onChange={setStandingCharge} min="0" step="0.01" />
        <Field id="gas-days" label="Billing period" suffix="days" value={billingDays} onChange={setBillingDays} min="0" />
        <Field id="gas-vat" label="VAT rate" suffix="%" value={vatRate} onChange={setVatRate} min="0" step="0.1" />
      </div>
      <ResultGrid
        items={[
          { label: "Meter units used", value: formatNumber(result.unitsUsed, 0) },
          { label: "Estimated gas kWh", value: `${formatNumber(result.kwh)} kWh` },
          { label: "Usage charge", value: formatCurrency(result.usageCost) },
          { label: "Standing charge", value: formatCurrency(result.standingCost) },
          { label: "VAT", value: formatCurrency(result.vat) },
          { label: "Estimated bill total", value: formatCurrency(result.total) },
        ]}
      />
    </div>
  );
}

function UkEnergyDirectDebitTool() {
  const [electricityKwh, setElectricityKwh] = useState("2900");
  const [gasKwh, setGasKwh] = useState("11500");
  const [electricityRate, setElectricityRate] = useState("26.11");
  const [gasRate, setGasRate] = useState("7.33");
  const [electricityStanding, setElectricityStanding] = useState("57.19");
  const [gasStanding, setGasStanding] = useState("29.04");
  const [currentMonthly, setCurrentMonthly] = useState("160");
  const [accountBalance, setAccountBalance] = useState("0");
  const [targetBuffer, setTargetBuffer] = useState("0");
  const [months, setMonths] = useState("12");

  const result = useMemo(() => {
    const electricityUsageCost = Math.max(0, numberValue(electricityKwh)) * (Math.max(0, numberValue(electricityRate)) / 100);
    const gasUsageCost = Math.max(0, numberValue(gasKwh)) * (Math.max(0, numberValue(gasRate)) / 100);
    const electricityStandingCost = (Math.max(0, numberValue(electricityStanding)) / 100) * 365;
    const gasStandingCost = (Math.max(0, numberValue(gasStanding)) / 100) * 365;
    const annualCost = electricityUsageCost + gasUsageCost + electricityStandingCost + gasStandingCost;
    const monthsToSpread = Math.max(1, numberValue(months));
    const amountToCollect = Math.max(0, annualCost - numberValue(accountBalance) + numberValue(targetBuffer));
    const suggestedMonthly = amountToCollect / monthsToSpread;
    const difference = suggestedMonthly - numberValue(currentMonthly);

    return {
      electricityCost: electricityUsageCost + electricityStandingCost,
      gasCost: gasUsageCost + gasStandingCost,
      annualCost,
      suggestedMonthly,
      difference,
      currentAnnualised: numberValue(currentMonthly) * 12,
    };
  }, [
    electricityKwh,
    gasKwh,
    electricityRate,
    gasRate,
    electricityStanding,
    gasStanding,
    currentMonthly,
    accountBalance,
    targetBuffer,
    months,
  ]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="direct-debit-electricity-kwh" label="Annual electricity usage" suffix="kWh" value={electricityKwh} onChange={setElectricityKwh} min="0" />
        <Field id="direct-debit-gas-kwh" label="Annual gas usage" suffix="kWh" value={gasKwh} onChange={setGasKwh} min="0" />
        <Field id="direct-debit-electricity-rate" label="Electricity unit rate" suffix="p/kWh" value={electricityRate} onChange={setElectricityRate} min="0" step="0.01" />
        <Field id="direct-debit-gas-rate" label="Gas unit rate" suffix="p/kWh" value={gasRate} onChange={setGasRate} min="0" step="0.01" />
        <Field id="direct-debit-electricity-standing" label="Electricity standing charge" suffix="p/day" value={electricityStanding} onChange={setElectricityStanding} min="0" step="0.01" />
        <Field id="direct-debit-gas-standing" label="Gas standing charge" suffix="p/day" value={gasStanding} onChange={setGasStanding} min="0" step="0.01" />
        <Field id="direct-debit-current" label="Current monthly direct debit" prefix="GBP" value={currentMonthly} onChange={setCurrentMonthly} min="0" />
        <Field id="direct-debit-balance" label="Current account balance" prefix="GBP" value={accountBalance} onChange={setAccountBalance} step="1" />
        <Field id="direct-debit-buffer" label="Target credit buffer" prefix="GBP" value={targetBuffer} onChange={setTargetBuffer} min="0" />
        <Field id="direct-debit-months" label="Months to spread over" suffix="months" value={months} onChange={setMonths} min="1" max="24" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated annual energy cost", value: formatCurrency(result.annualCost) },
          { label: "Suggested monthly payment", value: formatCurrency(result.suggestedMonthly) },
          { label: "Difference vs current DD", value: `${result.difference >= 0 ? "+" : "-"}${formatCurrency(Math.abs(result.difference))}` },
          { label: "Electricity share", value: formatCurrency(result.electricityCost) },
          { label: "Gas share", value: formatCurrency(result.gasCost) },
          { label: "Current DD annualised", value: formatCurrency(result.currentAnnualised) },
        ]}
      />
    </div>
  );
}

function UkWaterBillTool() {
  const [annualUsage, setAnnualUsage] = useState("120");
  const [waterRate, setWaterRate] = useState("1.80");
  const [wastewaterRate, setWastewaterRate] = useState("1.70");
  const [returnToSewer, setReturnToSewer] = useState("95");
  const [waterStanding, setWaterStanding] = useState("45");
  const [wastewaterStanding, setWastewaterStanding] = useState("65");
  const [surfaceWater, setSurfaceWater] = useState("0");

  const result = useMemo(() => {
    const usage = Math.max(0, numberValue(annualUsage));
    const cleanWaterCost = usage * Math.max(0, numberValue(waterRate));
    const wastewaterVolume = usage * (Math.max(0, numberValue(returnToSewer)) / 100);
    const wastewaterCost = wastewaterVolume * Math.max(0, numberValue(wastewaterRate));
    const fixedCharges = Math.max(0, numberValue(waterStanding)) + Math.max(0, numberValue(wastewaterStanding)) + Math.max(0, numberValue(surfaceWater));
    const annualCost = cleanWaterCost + wastewaterCost + fixedCharges;

    return {
      cleanWaterCost,
      wastewaterCost,
      fixedCharges,
      annualCost,
      monthlyCost: annualCost / 12,
      dailyCost: annualCost / 365,
      wastewaterVolume,
    };
  }, [annualUsage, waterRate, wastewaterRate, returnToSewer, waterStanding, wastewaterStanding, surfaceWater]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id="water-usage" label="Annual metered usage" suffix="m3" value={annualUsage} onChange={setAnnualUsage} min="0" />
        <Field id="water-rate" label="Clean water rate" prefix="GBP" value={waterRate} onChange={setWaterRate} min="0" step="0.01" />
        <Field id="wastewater-rate" label="Wastewater rate" prefix="GBP" value={wastewaterRate} onChange={setWastewaterRate} min="0" step="0.01" />
        <Field id="return-to-sewer" label="Return to sewer" suffix="%" value={returnToSewer} onChange={setReturnToSewer} min="0" max="100" step="1" />
        <Field id="water-standing" label="Annual water standing charge" prefix="GBP" value={waterStanding} onChange={setWaterStanding} min="0" />
        <Field id="wastewater-standing" label="Annual wastewater standing charge" prefix="GBP" value={wastewaterStanding} onChange={setWastewaterStanding} min="0" />
        <Field id="surface-water" label="Surface water or drainage charge" prefix="GBP" value={surfaceWater} onChange={setSurfaceWater} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated annual bill", value: formatCurrency(result.annualCost) },
          { label: "Estimated monthly cost", value: formatCurrency(result.monthlyCost) },
          { label: "Estimated daily cost", value: formatCurrency(result.dailyCost) },
          { label: "Clean water charge", value: formatCurrency(result.cleanWaterCost) },
          { label: "Wastewater charge", value: formatCurrency(result.wastewaterCost), help: `${formatNumber(result.wastewaterVolume)} m3 billed` },
          { label: "Fixed charges", value: formatCurrency(result.fixedCharges) },
        ]}
      />
    </div>
  );
}

function getCountryConfigOrThrow(slug: string) {
  const config = getCountryConfigForTool(slug);

  if (!config) {
    throw new Error(`Missing international tool config for ${slug}`);
  }

  return config;
}

function CountrySalesTaxTool({ slug }: { slug: string }) {
  const config = getCountryConfigOrThrow(slug);
  const defaultRate =
    config.salesTaxPresets.find((preset) => preset.value > 0)?.value ??
    config.salesTaxPresets[0]?.value ??
    0;
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState(defaultRate.toString());
  const [mode, setMode] = useState<"add" | "remove">("add");

  const result = useMemo(() => {
    const amountValue = Math.max(0, numberValue(amount));
    const taxRate = Math.max(0, numberValue(rate)) / 100;

    if (mode === "add") {
      const tax = amountValue * taxRate;
      return { net: amountValue, tax, total: amountValue + tax };
    }

    const net = taxRate === 0 ? amountValue : amountValue / (1 + taxRate);
    return { net, tax: amountValue - net, total: amountValue };
  }, [amount, rate, mode]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${slug}-preset`}>{config.salesTaxLabel} preset</Label>
          <select
            id={`${slug}-preset`}
            value={rate}
            onChange={(event) => setRate(event.target.value)}
            className="input-field"
          >
            {config.salesTaxPresets.map((preset) => (
              <option key={`${preset.label}-${preset.value}`} value={preset.value}>
                {preset.label} ({preset.value}%){preset.note ? ` - ${preset.note}` : ""}
              </option>
            ))}
          </select>
        </div>
        <Field id={`${slug}-custom-rate`} label={`Editable ${config.salesTaxLabel} rate`} suffix="%" value={rate} onChange={setRate} min="0" step="0.01" />
        <Field id={`${slug}-amount`} label={mode === "add" ? "Amount before tax" : "Amount including tax"} prefix={config.currencyPrefix} value={amount} onChange={setAmount} min="0" step="0.01" />
        <div className="space-y-2">
          <Label htmlFor={`${slug}-mode`}>Calculation type</Label>
          <select
            id={`${slug}-mode`}
            value={mode}
            onChange={(event) => setMode(event.target.value as "add" | "remove")}
            className="input-field"
          >
            <option value="add">Add {config.salesTaxLabel}</option>
            <option value="remove">Remove {config.salesTaxLabel}</option>
          </select>
        </div>
      </div>
      <ResultGrid
        items={[
          { label: "Amount before tax", value: formatLocalCurrency(result.net, config) },
          { label: `${config.salesTaxLabel} amount`, value: formatLocalCurrency(result.tax, config), help: `${formatNumber(numberValue(rate))}% estimate` },
          { label: "Total amount", value: formatLocalCurrency(result.total, config) },
          { label: "Rate source", value: "Editable estimate", help: "Check official sources for final decisions." },
        ]}
      />
    </div>
  );
}

function CountryMortgageTool({ slug }: { slug: string }) {
  const config = getCountryConfigOrThrow(slug);
  const defaults = config.mortgageDefaults;
  const [homePrice, setHomePrice] = useState(defaults.homePrice.toString());
  const [downPayment, setDownPayment] = useState(defaults.downPayment.toString());
  const [rate, setRate] = useState(defaults.rate.toString());
  const [termYears, setTermYears] = useState(defaults.termYears.toString());
  const [annualTax, setAnnualTax] = useState(defaults.annualTax.toString());
  const [annualInsurance, setAnnualInsurance] = useState(defaults.annualInsurance.toString());

  const result = useMemo(() => {
    const principal = Math.max(0, numberValue(homePrice) - numberValue(downPayment));
    const months = Math.max(1, Math.round(numberValue(termYears) * 12));
    const principalAndInterest =
      defaults.compounding === "canadian-semi-annual"
        ? canadianMortgagePayment(principal, numberValue(rate), months)
        : amortizedPayment(principal, numberValue(rate), months);
    const monthlyExtras = Math.max(0, numberValue(annualTax)) / 12 + Math.max(0, numberValue(annualInsurance)) / 12;

    return {
      principal,
      principalAndInterest,
      monthlyExtras,
      totalMonthly: principalAndInterest + monthlyExtras,
      totalInterest: principalAndInterest * months - principal,
      months,
    };
  }, [homePrice, downPayment, rate, termYears, annualTax, annualInsurance, defaults.compounding]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id={`${slug}-home-price`} label="Home price" prefix={config.currencyPrefix} value={homePrice} onChange={setHomePrice} min="0" />
        <Field id={`${slug}-down-payment`} label="Down payment or deposit" prefix={config.currencyPrefix} value={downPayment} onChange={setDownPayment} min="0" />
        <Field id={`${slug}-rate`} label="Mortgage interest rate" suffix="%" value={rate} onChange={setRate} min="0" step="0.01" />
        <Field id={`${slug}-term`} label="Mortgage term" suffix="years" value={termYears} onChange={setTermYears} min="1" step="1" />
        <Field id={`${slug}-annual-tax`} label="Annual property tax or rates" prefix={config.currencyPrefix} value={annualTax} onChange={setAnnualTax} min="0" />
        <Field id={`${slug}-annual-insurance`} label="Annual home insurance" prefix={config.currencyPrefix} value={annualInsurance} onChange={setAnnualInsurance} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated loan amount", value: formatLocalCurrency(result.principal, config) },
          { label: "Principal and interest", value: formatLocalCurrency(result.principalAndInterest, config), help: "Monthly estimate" },
          { label: defaults.extraMonthlyCostLabel, value: formatLocalCurrency(result.monthlyExtras, config), help: "Optional monthly add-on" },
          { label: "Estimated total monthly payment", value: formatLocalCurrency(result.totalMonthly, config) },
          { label: "Estimated interest over term", value: formatLocalCurrency(result.totalInterest, config) },
          { label: "Payments", value: `${result.months}` },
        ]}
      />
    </div>
  );
}

function CountryLoanTool({ slug }: { slug: string }) {
  const config = getCountryConfigOrThrow(slug);
  const defaults = config.loanDefaults;
  const [amount, setAmount] = useState(defaults.amount.toString());
  const [rate, setRate] = useState(defaults.rate.toString());
  const [termYears, setTermYears] = useState(defaults.termYears.toString());
  const [fee, setFee] = useState(defaults.fee.toString());

  const result = useMemo(() => {
    const principal = Math.max(0, numberValue(amount) + numberValue(fee));
    const months = Math.max(1, Math.round(numberValue(termYears) * 12));
    const payment = amortizedPayment(principal, numberValue(rate), months);
    const total = payment * months;

    return { principal, payment, total, interest: total - principal, months };
  }, [amount, rate, termYears, fee]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id={`${slug}-amount`} label="Loan amount" prefix={config.currencyPrefix} value={amount} onChange={setAmount} min="0" />
        <Field id={`${slug}-rate`} label="Annual rate or APR" suffix="%" value={rate} onChange={setRate} min="0" step="0.01" />
        <Field id={`${slug}-term`} label="Loan term" suffix="years" value={termYears} onChange={setTermYears} min="0.25" step="0.25" />
        <Field id={`${slug}-fee`} label="Upfront fee to include" prefix={config.currencyPrefix} value={fee} onChange={setFee} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated monthly payment", value: formatLocalCurrency(result.payment, config) },
          { label: "Total repayable", value: formatLocalCurrency(result.total, config) },
          { label: "Interest and included fee cost", value: formatLocalCurrency(result.interest + numberValue(fee), config) },
          { label: "Principal modelled", value: formatLocalCurrency(result.principal, config) },
          { label: "Number of payments", value: `${result.months}` },
        ]}
      />
    </div>
  );
}

function CountrySalaryTool({ slug }: { slug: string }) {
  const config = getCountryConfigOrThrow(slug);
  const defaults = config.salary;
  const [salary, setSalary] = useState(defaults.defaultSalary.toString());
  const [retirementPercent, setRetirementPercent] = useState(defaults.defaultRetirementPercent.toString());
  const [localRate, setLocalRate] = useState(defaults.defaultStateOrProvinceRate.toString());

  const localRateLabel =
    config.countryCode === "us"
      ? "State/local income tax estimate"
      : config.countryCode === "canada"
        ? "Province/territory tax estimate"
        : "Medicare levy-style estimate";

  const result = useMemo(() => {
    const gross = Math.max(0, numberValue(salary));
    const preTax = gross * (Math.max(0, numberValue(retirementPercent)) / 100);
    const taxable = Math.max(0, gross - preTax - defaults.federalAllowance);
    const federalTax = progressiveTax(taxable, defaults.brackets);
    const localTax = Math.max(0, gross - preTax) * (Math.max(0, numberValue(localRate)) / 100);
    let payrollTax = 0;

    if (config.countryCode === "us") {
      payrollTax = Math.min(gross, defaults.extraPayrollWageBase ?? gross) * 0.062 + gross * 0.0145;
    } else if (defaults.extraPayrollRate) {
      payrollTax = Math.min(gross, defaults.extraPayrollWageBase ?? gross) * defaults.extraPayrollRate;
    }

    const net = Math.max(0, gross - preTax - federalTax - localTax - payrollTax);

    return { preTax, federalTax, localTax, payrollTax, net };
  }, [salary, retirementPercent, localRate, defaults, config.countryCode]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Field id={`${slug}-salary`} label="Annual gross salary" prefix={config.currencyPrefix} value={salary} onChange={setSalary} min="0" />
        <Field id={`${slug}-retirement`} label="Pre-tax retirement or savings" suffix="%" value={retirementPercent} onChange={setRetirementPercent} min="0" step="0.1" />
        <Field id={`${slug}-local-tax`} label={localRateLabel} suffix="%" value={localRate} onChange={setLocalRate} min="0" step="0.1" />
      </div>
      <ResultGrid
        items={[
          { label: "Estimated annual take-home", value: formatLocalCurrency(result.net, config) },
          { label: "Estimated monthly take-home", value: formatLocalCurrency(result.net / 12, config) },
          { label: "Income tax estimate", value: formatLocalCurrency(result.federalTax, config) },
          { label: localRateLabel, value: formatLocalCurrency(result.localTax, config) },
          { label: "Payroll deduction estimate", value: formatLocalCurrency(result.payrollTax, config) },
          { label: "Pre-tax contribution", value: formatLocalCurrency(result.preTax, config) },
        ]}
      />
      <div className="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Estimate notes</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {defaults.payrollNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CountrySavingsTool({ slug }: { slug: string }) {
  const config = getCountryConfigOrThrow(slug);
  const defaults = config.savings;
  const [balance, setBalance] = useState(defaults.defaultBalance.toString());
  const [salary, setSalary] = useState(config.salary.defaultSalary.toString());
  const [annualContribution, setAnnualContribution] = useState(defaults.defaultAnnualContribution.toString());
  const [employerPercent, setEmployerPercent] = useState(defaults.defaultEmployerPercent.toString());
  const [returnRate, setReturnRate] = useState(defaults.defaultReturn.toString());
  const [years, setYears] = useState(defaults.defaultYears.toString());
  const [annualLimit, setAnnualLimit] = useState(defaults.annualLimit.toString());

  const result = useMemo(() => {
    const horizon = Math.max(0, Math.round(numberValue(years)));
    const annualReturn = Math.max(0, numberValue(returnRate)) / 100;
    const employeeContribution = Math.min(Math.max(0, numberValue(annualContribution)), Math.max(0, numberValue(annualLimit)));
    const employerContribution = Math.max(0, numberValue(salary)) * (Math.max(0, numberValue(employerPercent)) / 100);
    let projected = Math.max(0, numberValue(balance));
    let totalEmployee = 0;
    let totalEmployer = 0;

    for (let year = 0; year < horizon; year += 1) {
      projected += employeeContribution + employerContribution;
      totalEmployee += employeeContribution;
      totalEmployer += employerContribution;
      projected *= 1 + annualReturn;
    }

    return {
      projected,
      totalEmployee,
      totalEmployer,
      growth: projected - Math.max(0, numberValue(balance)) - totalEmployee - totalEmployer,
      annualContributionUsed: employeeContribution,
      employerContribution,
    };
  }, [balance, salary, annualContribution, employerPercent, returnRate, years, annualLimit]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field id={`${slug}-balance`} label={`Current ${defaults.label} balance`} prefix={config.currencyPrefix} value={balance} onChange={setBalance} min="0" />
        <Field id={`${slug}-salary`} label="Annual salary or income basis" prefix={config.currencyPrefix} value={salary} onChange={setSalary} min="0" />
        <Field id={`${slug}-contribution`} label={defaults.contributionLabel} prefix={config.currencyPrefix} value={annualContribution} onChange={setAnnualContribution} min="0" />
        <Field id={`${slug}-employer`} label={defaults.employerLabel} suffix="%" value={employerPercent} onChange={setEmployerPercent} min="0" step="0.1" />
        <Field id={`${slug}-return`} label="Assumed annual return" suffix="%" value={returnRate} onChange={setReturnRate} min="0" step="0.1" />
        <Field id={`${slug}-years`} label="Years to project" value={years} onChange={setYears} min="0" step="1" />
        <Field id={`${slug}-limit`} label="Editable annual contribution limit assumption" prefix={config.currencyPrefix} value={annualLimit} onChange={setAnnualLimit} min="0" />
      </div>
      <ResultGrid
        items={[
          { label: "Projected balance", value: formatLocalCurrency(result.projected, config) },
          { label: "Annual contribution used", value: formatLocalCurrency(result.annualContributionUsed, config), help: "Capped by editable limit assumption" },
          { label: "Estimated employer or extra contribution", value: formatLocalCurrency(result.employerContribution, config), help: "Annual amount" },
          { label: "Total personal contributions", value: formatLocalCurrency(result.totalEmployee, config) },
          { label: "Total employer or extra contributions", value: formatLocalCurrency(result.totalEmployer, config) },
          { label: "Estimated investment growth", value: formatLocalCurrency(result.growth, config) },
        ]}
      />
    </div>
  );
}

function ToolBody({ tool }: { tool: SeoTool }) {
  const type = tool.toolType;

  switch (type) {
    case "compound-interest":
      return <CompoundInterestTool />;
    case "loan-repayment":
      return <LoanRepaymentTool />;
    case "mortgage-overpayment":
      return <MortgageOverpaymentTool />;
    case "savings-goal":
      return <SavingsGoalTool />;
    case "budget-planner":
      return <BudgetPlannerTool />;
    case "salary-hourly":
      return <SalaryHourlyTool />;
    case "break-even":
      return <BreakEvenTool />;
    case "pomodoro":
      return <PomodoroTool />;
    case "priority-matrix":
      return <PriorityMatrixTool />;
    case "meeting-cost":
      return <MeetingCostTool />;
    case "reading-time":
      return <ReadingTimeTool />;
    case "time-card":
      return <TimeCardTool />;
    case "deadline-countdown":
      return <DeadlineCountdownTool />;
    case "url-codec":
      return <UrlCodecTool />;
    case "base64-codec":
      return <Base64CodecTool />;
    case "json-formatter":
      return <JsonFormatterTool />;
    case "utm-builder":
      return <UtmBuilderTool />;
    case "email-link":
      return <EmailLinkTool />;
    case "meta-preview":
      return <MetaPreviewTool />;
    case "uk-holiday":
      return <UkHolidayTool />;
    case "uk-take-home":
      return <UkTakeHomeTool />;
    case "uk-ssp":
      return <UkSspTool />;
    case "uk-redundancy":
      return <UkRedundancyTool />;
    case "uk-notice":
      return <UkNoticeTool />;
    case "uk-working-days":
      return <UkWorkingDaysTool />;
    case "uk-electricity-cost":
      return <UkElectricityCostTool />;
    case "uk-gas-bill":
      return <UkGasBillTool />;
    case "uk-energy-direct-debit":
      return <UkEnergyDirectDebitTool />;
    case "uk-water-bill":
      return <UkWaterBillTool />;
    case "country-sales-tax":
      return <CountrySalesTaxTool slug={tool.slug} />;
    case "country-mortgage":
      return <CountryMortgageTool slug={tool.slug} />;
    case "country-loan":
      return <CountryLoanTool slug={tool.slug} />;
    case "country-salary":
      return <CountrySalaryTool slug={tool.slug} />;
    case "country-savings":
      return <CountrySavingsTool slug={tool.slug} />;
  }
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <p key={item} className="mt-3 text-muted-foreground">
          {item}
        </p>
      ))}
    </>
  );
}

export function SeoToolPage({ tool, relatedTools, faqs }: SeoToolPageProps) {
  const Icon = iconMap[tool.icon as keyof typeof iconMap] ?? Calculator;
  const pageCopy = getSeoToolPageCopy(tool);
  const guide = getBlogPostByToolSlug(tool.slug);
  const siteTool = getSiteTool(tool.slug);
  const primaryCategory = siteCategories.find(
    (category) => category.slug === siteTool?.categorySlugs[0]
  );
  const countryConfig = getCountryConfigForTool(tool.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          {primaryCategory ? (
            <>
              <Link href={primaryCategory.path} className="hover:text-primary">
                {primaryCategory.title}
              </Link>
              <span>/</span>
            </>
          ) : (
            <>
              <Link href="/#tools" className="hover:text-primary">
                Tools
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{tool.title}</span>
        </nav>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="tool-card-icon mb-0">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <p className="mb-1 text-sm font-medium text-primary">{tool.category}</p>
            <h1 className="text-3xl font-bold">{tool.title}</h1>
            <p className="mt-2 text-muted-foreground">{tool.description}</p>
          </div>
        </div>

        <AdsPlaceholder size="banner" className="mb-6" />

        <Card className="mb-8">
          <CardContent className="pt-6">
            <ToolBody tool={tool} />
          </CardContent>
        </Card>

        <AdsPlaceholder size="inline" className="mb-8" />

        <section className="prose prose-slate max-w-none rounded-xl border bg-card p-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <Paragraphs items={pageCopy.introduction} />

          <h2 className="mt-8 text-2xl font-semibold">About this {tool.shortTitle.toLowerCase()} tool</h2>
          <Paragraphs items={pageCopy.about} />

          <h2 className="mt-8 text-2xl font-semibold">How this tool works</h2>
          <Paragraphs items={pageCopy.howItWorks} />
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
            {tool.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h2 className="mt-8 text-2xl font-semibold">When to use this tool</h2>
          <Paragraphs items={pageCopy.whenToUse} />

          <h2 className="mt-8 text-2xl font-semibold">Good to know</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            {tool.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          {countryConfig ? (
            <>
              <h2 className="mt-8 text-2xl font-semibold">
                Country-specific assumptions
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                {countryConfig.assumptions.map((assumption) => (
                  <li key={assumption}>{assumption}</li>
                ))}
              </ul>
              <p className="mt-3 text-muted-foreground">
                Results are estimates only. Do not use this page as regulated
                financial, tax, legal, payroll, mortgage, or investment advice;
                check official government sources, provider documents, or a
                qualified professional before making final decisions.
              </p>
            </>
          ) : null}
        </section>

        {guide ? (
          <section className="mt-8 rounded-xl border bg-primary/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary">
                  <BookOpen className="h-4 w-4" />
                  Full guide
                </div>
                <h2 className="text-2xl font-semibold">{guide.title}</h2>
                <p className="mt-3 text-muted-foreground">{guide.excerpt}</p>
              </div>
              <Link
                href={`/blog/${guide.slug}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/40"
              >
                Read guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        ) : null}

        {relatedTools.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold">Related free tools</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((related) => (
                <Link
                  key={related.slug}
                  href={`/tools/${related.slug}`}
                  className="rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-primary/40"
                >
                  <p className="font-semibold">{related.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{related.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <FAQSection items={faqs} />
      </div>
    </div>
  );
}
