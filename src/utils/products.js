// src/utils/products.js

import { list } from "postcss";
import { Customer, VayuBanner } from "./utils";

export const products = [
  {
    id: 1,
    name: "Laminar Air Flow Unit",
    slug: "laminar-air-flow-unit",
    description:
      "Widely used in microbiology labs, quality control, and aseptic processing.",
    category: "Laminar Air Flow",
    image: VayuBanner,
    list: [
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
    ],
  },
  {
    id: 2,
    name: "Air Handling Unit",
    slug: "air-handling-unit",
    description:
      "Controls air flow and quality in cleanrooms with high efficiency.",
    category: "Laminar Air Flow",
    image: "https://picsum.photos/300/200?random=2",
    list: [
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
    ],
  },
  {
    id: 3,
    name: "Modular Cleanroom",
    slug: "modular-cleanroom",
    description:
      "Custom cleanroom structures designed for pharmaceutical environments.",
    category: "Laminar Air Flow",
    image: "https://picsum.photos/300/200?random=3",
    list: [
      {
        title: "Test List",
        description:
          "This is a test list item lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
    ],
  },
  {
    id: 4,
    name: "Bio Safety Cabinet",
    slug: "bio-safety-cabinet",
    description:
      "Essential in handling biological samples, especially in R&D and diagnostics.",
    category: "Electronics",
    image: "https://picsum.photos/300/200?random=4",
    list: [],
  },
  {
    id: 5,
    name: "Pass Box (Static & Dynamic)",
    slug: "pass-box-static-dynamic",
    description:
      "Crucial for contamination-free material transfer in cleanroom environments.",
    category: "Photography",
    image: "https://picsum.photos/300/200?random=5",
    list: [],
  },
  {
    id: 6,
    name: "Air Shower",
    slug: "air-shower",
    description:
      "High-demand pre-entry solution for particulate removal before entering clean zones.",
    category: "Furniture",
    image: "https://picsum.photos/300/200?random=6",
    list: [],
  },
  {
    id: 7,
    name: "Test",
    slug: "test",
    description: "test description",
    category: "clean",
    image: "https://picsum.photos/300/200?random=6",
    list: [
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
      {
        title: "Test List",
        description: "This is a test list item",
      },
    ],
  },
];

// ✅ Category list separately

export const categories = [
  {
    name: "Laminar Air Flow",
    description: "This is a test list item",
    image: "https://picsum.photos/300/200?random=6",
    slug: "laminar-air-flow",
  },
  {
    name: "Furniture",
    description: "This is a test list item",
    image: "https://picsum.photos/300/200?random=7",
    slug: "furniture",
  },
  {
    name: "Wearables",
    description: "This is a test list item",
    image: "https://picsum.photos/300/200?random=8",
    slug: "wearables",
  },
  {
    name: "Computers",
    description: "This is a test list item",
    image: "https://picsum.photos/300/200?random=9",
    slug: "computers",
  },
  {
    name: "clean",
    description: "This is a test list item",
    image: "https://picsum.photos/300/200?random=10",
    slug: "clean",
  },
];
