export const books = [
  {
    slug: "wired-for-success",
    title: "Wired for Success",
    summary:
      "Wired for Success is your practical guide to surviving and thriving in tech, whether you're just starting out or deep into your career.",
    details: [
      "Drawing from real-life struggles and breakthroughs, Uche Livingstone shares the mindset shifts and strategies that helped him overcome burnout, pressure, and uncertainty.",
      "This book will help you build clarity, resilience, and confidence to grow in your tech career without losing yourself along the way.",
    ],
    body: "Wired for Success is your practical guide to surviving and thriving in tech, whether you're just starting out or deep into your career. Drawing from real-life struggles and breakthroughs, Uche Livingstone shares the mindset shifts and strategies that helped him overcome burnout, pressure, and uncertainty. This book will help you build clarity, resilience, and confidence to grow in your tech career without losing yourself along the way.",
    purchase: "https://selar.com/83w576",
    cover: "/images/writing/wired-for-success.jpg",
  },
] as const;

export const getBook = (slug: string) => books.find((book) => book.slug === slug);
