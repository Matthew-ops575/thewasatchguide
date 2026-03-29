export interface NavCommunity {
  name: string;
  href: string;
  published: boolean;
}

export interface NavTopic {
  name: string;
  href: string | null;
}

export const communities: NavCommunity[] = [
  { name: "Draper", href: "/draper", published: true },
  { name: "Sandy", href: "/sandy", published: true },
  { name: "Cottonwood Heights", href: "/cottonwood-heights", published: true },
  { name: "Wasatch Back", href: "/wasatch-back", published: true },
  { name: "South Jordan", href: "/south-jordan", published: true },
  { name: "Holladay", href: "/holladay", published: true },
  { name: "Sugar House", href: "/sugar-house", published: true },
];

export const topics: NavTopic[] = [
  { name: "Dining & Restaurants", href: null },
  { name: "Home Services", href: null },
  { name: "Healthcare", href: null },
  { name: "Outdoor Recreation", href: null },
  { name: "Real Estate", href: null },
];
