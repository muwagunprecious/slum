export interface InstallmentPlan {
  id: string;
  durationLabel: string;
  months: number;
  monthlyAmount: number;
  totalAmount: number;
  frequency: string;
  popular?: boolean;
  highlightText: string;
  impactDescription: string;
}

export const TOTAL_ARTWORK_PRICE = 1200;

export const installmentPlans: InstallmentPlan[] = [
  {
    id: "immediate",
    durationLabel: "Immediate Payment",
    months: 1,
    monthlyAmount: 1200,
    totalAmount: 1200,
    frequency: "One-time contribution",
    popular: true,
    highlightText: "Immediate Full Sponsorship",
    impactDescription:
      "Fully funds the construction materials of an eco-friendly PET bottle classroom module and provides 3 months of school supplies for 10 slum children.",
  },
  {
    id: "3-months",
    durationLabel: "3 Months Plan",
    months: 3,
    monthlyAmount: 400,
    totalAmount: 1200,
    frequency: "per month for 3 months",
    highlightText: "$400 / month",
    impactDescription:
      "Funds upcycled bottle collection, foundation masonry, and provides daily warm meals for 20 children during art training.",
  },
  {
    id: "6-months",
    durationLabel: "6 Months Plan",
    months: 6,
    monthlyAmount: 200,
    totalAmount: 1200,
    frequency: "per month for 6 months",
    highlightText: "$200 / month",
    impactDescription:
      "Supplies paint, drawing canvas, recycled paper materials, and monthly stipends for volunteer artist mentors in the community.",
  },
  {
    id: "1-year",
    durationLabel: "1 Year Plan (12 Mos)",
    months: 12,
    monthlyAmount: 100,
    totalAmount: 1200,
    frequency: "per month for 12 months",
    popular: true,
    highlightText: "$100 / month",
    impactDescription:
      "Sponsors 1 child's full annual tuition, nutritious daily lunches, school uniforms, and art education supplies for an entire year.",
  },
  {
    id: "2-years",
    durationLabel: "2 Years Plan (24 Mos)",
    months: 24,
    monthlyAmount: 50,
    totalAmount: 1200,
    frequency: "per month for 24 months",
    highlightText: "$50 / month",
    impactDescription:
      "A flexible, sustainable community micro-sponsorship providing consistent monthly nutritional packages and art kits to vulnerable children.",
  },
];
