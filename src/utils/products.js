// src/utils/products.js

import { Customer, VayuBanner } from "./utils";

export const products = [
  {
    id: 1,
    name: "Laminar Air Flow Unit",
    slug: "laminar-air-flow-unit",
    description:
      "Widely used in microbiology labs, quality control, and aseptic processing.",
    category: "Electronics",
    image: VayuBanner,
  },
  {
    id: 2,
    name: "Air Handling Unit",
    slug: "air-handling-unit",
    description:
      "Controls air flow and quality in cleanrooms with high efficiency.",
    category: "Wearables",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "Modular Cleanroom",
    slug: "modular-cleanroom",
    description:
      "Custom cleanroom structures designed for pharmaceutical environments.",
    category: "Computers",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    id: 4,
    name: "Bio Safety Cabinet",
    slug: "bio-safety-cabinet",
    description:
      "Essential in handling biological samples, especially in R&D and diagnostics.",
    category: "Electronics",
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 5,
    name: "Pass Box (Static & Dynamic)",
    slug: "pass-box-static-dynamic",
    description:
      "Crucial for contamination-free material transfer in cleanroom environments.",
    category: "Photography",
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 6,
    name: "Air Shower",
    slug: "air-shower",
    description:
      "High-demand pre-entry solution for particulate removal before entering clean zones.",
    category: "Furniture",
    image: "https://picsum.photos/300/200?random=6",
  },
  {
    id: 7,
    name: "Test",
    slug: "test",
    description: "test description",
    category: "clean",
    image: "https://picsum.photos/300/200?random=6",
  },
];

// ✅ Category list separately
export const categories = [
  "Electronics",
  "Wearables",
  "Computers",
  "Photography",
  "Furniture",
];
