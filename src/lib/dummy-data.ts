export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedDate: string;
  categories: string[];
  tags: string[];
  image: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export const dummyArticles: Article[] = [
  {
    id: 1,
    title: "Introduction to React Hooks",
    content:
      "React Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features without writing a class component. This makes your functional components more powerful and your code more reusable and readable.",
    author: "Jane Doe",
    publishedDate: "2023-05-15",
    categories: ["Programming", "Web Development"],
    tags: ["React", "JavaScript", "Hooks"],
    image: "https://via.placeholder.com/800x400?text=React+Hooks",
  },
  {
    id: 2,
    title: "Building APIs with Node.js and Express",
    content:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In this article, we'll explore how to build RESTful APIs using Node.js and Express.",
    author: "John Smith",
    publishedDate: "2023-06-22",
    categories: ["Programming", "Backend"],
    tags: ["Node.js", "Express", "API", "REST"],
    image: "https://via.placeholder.com/800x400?text=Node.js+and+Express",
  },
  {
    id: 3,
    title: "Advanced TypeScript Patterns",
    content:
      "TypeScript adds static typing to JavaScript, helping developers catch errors early. This article explores advanced TypeScript patterns like mapped types, conditional types, and utility types to make your code more robust.",
    author: "Alex Johnson",
    publishedDate: "2023-07-10",
    categories: ["Programming", "TypeScript"],
    tags: ["TypeScript", "JavaScript", "Advanced"],
    image: "https://via.placeholder.com/800x400?text=TypeScript+Patterns",
  },
  {
    id: 4,
    title: "State Management with Redux Toolkit",
    content:
      "Redux Toolkit simplifies Redux development by providing utilities to simplify common Redux use cases. Learn how to efficiently manage state in your React applications using this powerful library.",
    author: "Emily Chen",
    publishedDate: "2023-08-05",
    categories: ["Programming", "Web Development"],
    tags: ["React", "Redux", "State Management"],
    image: "https://via.placeholder.com/800x400?text=Redux+Toolkit",
  },
  {
    id: 5,
    title: "CSS Grid Layout: A Complete Guide",
    content:
      "CSS Grid Layout is a powerful two-dimensional grid system that transformed how we design web layouts. This comprehensive guide walks through all the essential concepts and techniques for mastering CSS Grid.",
    author: "David Kim",
    publishedDate: "2023-09-18",
    categories: ["Web Design", "CSS"],
    tags: ["CSS", "Layout", "Web Design"],
    image: "https://via.placeholder.com/800x400?text=CSS+Grid",
  },
];

export const dummyUser: User = {
  id: 1,
  username: "testuser",
  email: "test@example.com",
  firstName: "Test",
  lastName: "User",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJpYXQiOjE2MTIzNDU2Nzh9.example-token",
};
