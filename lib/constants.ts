/**
 * Porton-IQ Shared Constants
 * Contains all static data and configuration used across the application components.
 */

export const TICKER_ITEMS = [
  "OVER-PORTIONING",
  "WASTAGE",
  "WRONG YIELD ASSUMPTIONS",
  "CHEF DEPENDENCY",
  "INVENTORY MISMATCHES",
  "WRONG MENU PRICING",
  "CASH FLOW PANIC",
];

export const PILLARS = [
  {
    num: "01",
    name: "Smart Procurement Control",
    sub: "Buy Smart — Track Smart — Spend Less",
    desc: "We restructure your entire supply chain — from supplier negotiation to what lands on your shelf — so every dirham of purchasing works harder.",
    features: [
      "Supplier pricing restructure & benchmarking",
      "Purchase quantity optimization",
      "Delivery quality inspection protocols",
      "Inventory receiving controls",
      "GRN (Goods Received Note) discipline",
      "Daily reconciliation systems",
      "Stock movement controls & accountability",
    ],
    stops: ["Over-purchasing", "Expiry losses", "Staff manipulation", "Invoice confusion"],
  },
  {
    num: "02",
    name: "Portion Precision System",
    sub: "Where 70% of Your Losses Come From",
    badge: "70% OF LOSSES COME FROM HERE",
    desc: "Inspired by KFC, AlBaik, and McDonald's. We systematize every portion, every recipe, every prep SOP — so your food cost is locked and consistent, regardless of who's in the kitchen.",
    features: [
      "Exact portion weights per dish",
      "Cooking yield testing & documentation",
      "Costed recipe cards for every item",
      "Visual portion guides for all staff",
      "Prep SOPs & batch production rules",
      "Zero chef-dependency protocols",
      "Consistency training & certification",
    ],
    stops: ["Over-portioning", "Taste inconsistency", "Staff guesswork", "Wastage"],
  },
  {
    num: "03",
    name: "Variance Monitoring System",
    sub: "The Profit Protector",
    profitBadge: "THE PROFIT PROTECTOR",
    desc: "The one system 99% of UAE restaurants never implement. It's the difference between knowing your costs and controlling them.",
    features: [
      "Actual vs. ideal usage tracking",
      "Daily wastage monitoring",
      "Theft & mis-portion detection",
      "Over-production tracking",
      "Prep inefficiency analysis",
      "Menu performance reporting",
    ],
    stops: ["Theft", "Undetected waste", "Cost drift", "Blind spots"],
  },
];

export const RESTAURANT_TYPES = [
  "Lebanese / Arabic Restaurant",
  "Indian / Pakistani Restaurant",
  "Asian / Chinese Restaurant",
  "Western / Continental",
  "Café / Coffee Shop",
  "Bakery / Pastry",
  "Fast Casual / QSR",
  "Hotel F&B Outlet",
  "Catering Company",
];

export const REVENUE_RANGES = [
  "Under AED 50,000",
  "AED 50,000 – 150,000",
  "AED 150,000 – 400,000",
  "AED 400,000 – 1,000,000",
  "Over AED 1,000,000",
];

export const MUNICIPALITY_DANGERS = {
  external: [
    "Customer trust eroded over time",
    "Food safety compliance risks",
    "Brand reputation damage",
    "Blocked approval for expansion",
    "Inspection instability & surprise closures",
  ],
  internal: [
    "Excessive cleaning materials usage",
    "Wrong chemicals — damage & waste",
    "Wastage during improper prep",
    "Repeated mistakes from untrained staff",
    "Poor equipment handling & breakages",
  ],
};

export const EXPERTISE_TEAM = [
  { icon: "CA", label: "Chartered Accountants" },
  { icon: "FT", label: "Food Technologists" },
  { icon: "OA", label: "Operations Auditors" },
  { icon: "SB", label: "SOP Builders" },
  { icon: "KC", label: "Chain-Level Kitchen Consultants" },
];

export const WHY_IT_WORKS_ROLES = [
  "A Chartered Accountant",
  "A Food Technologist",
  "A Kitchen Auditor",
  "A Costing Expert",
  "A Procurement Officer",
];

export const STATS_DATA = [
  { target: 25000, prefix: "AED ", suffix: "/mo", red: true, label: "Max monthly losses stopped per UAE restaurant" },
  { target: 48600, prefix: "AED ", suffix: "/yr", red: true, label: "Annual loss from 20g over-portion on one item" },
  { target: 70, prefix: "", suffix: "%", red: false, label: "Kitchen losses that come from portioning alone" },
  { target: 30, prefix: "", suffix: " days", red: false, label: "Average days to implement the full system" },
];

export const TRANSFORMATION_DATA = {
  before: [
    "Chef dependency — quality changes daily",
    "Wastage everywhere, no one notices",
    "No clarity on real plate cost",
    "Wrong menu pricing — guessed, not costed",
    "Inventory mismatches every month",
    "Cash flow stress with no clear cause",
    "Owner frustration & burnout",
    "Municipality risks from untrained staff",
  ],
  after: [
    "Exact per-plate cost on every dish",
    "Controlled portions — consistent, every time",
    "Predictable profitability, month after month",
    "Real-time inventory visibility",
    "Lower food cost % — more margin",
    "Higher net margins with same revenue",
    "Owner peace of mind — system runs itself",
    "Municipality-compliant SOPs in place",
  ],
};

export const PROBLEMS_DATA = [
  { num:"01", title:"Over-Portioning on Every Plate",   desc:"Your chefs give 'a bit extra' thinking it's generous. At 300 covers/day, that generosity is costing you thousands monthly." },
  { num:"02", title:"Incorrect Yield Assumptions",      desc:"You price a dish based on raw ingredient cost. But after trimming, cooking, and plating, your actual yield may be 30–40% less." },
  { num:"03", title:"Invisible Wastage Every Shift",    desc:"Spoilage, over-trimming, burnt batches, dropped items — these don't appear on any report. They just vanish from your margin." },
  { num:"04", title:"Prep Over-Producing Daily",        desc:"Excess prep that doesn't sell becomes waste. Without production planning, you're throwing profit in the bin every night." },
  { num:"05", title:"Wrong Menu Pricing",               desc:"Your menu prices weren't set using real costed recipes. They were guessed — or copied from competitors. You may be selling at a loss." },
  { num:"06", title:"Inventory Mismatches",             desc:"What's on paper vs. what's on the shelf never matches. That gap represents real money — stolen, wasted, or miscounted." },
  { num:"07", title:"Chef Dependency",                  desc:"When your head chef calls in sick, consistency collapses. Your food cost spikes and quality drops — because it's all in one person's head." },
];

export const HIDDEN_LOSS_MATH = [
  { label:"One protein dish served daily",  val:"300 covers",  red:false },
  { label:"Over-portion per plate",          val:"+20g",        red:true  },
  { label:"Cost per kg of protein",          val:"AED 35/kg",   red:false },
  { label:"Daily over-cost",                 val:"AED 210",     red:true  },
  { label:"Monthly over-cost",               val:"AED 6,300",   red:true  },
];

export const RECOVERABLE_PROFIT = [
  { label:"10 menu items with same issue",         val:"AED 486,000/yr",   red:true  },
  { label:"Add wastage, wrong pricing, inventory", val:"+AED 150,000/yr",  red:true  },
  { label:"Your Recoverable Profit",               val:"AED 636,000+/yr",  red:false },
];
