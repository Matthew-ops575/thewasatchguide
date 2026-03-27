import Link from "next/link";

const areaGuides = [
  {
    slug: "living-in-draper-utah",
    name: "Living in Draper",
    tag: "Salt Lake County",
    desc: "Mountain access, Silicon Slopes tech corridor, and Utah's most sought-after school district.",
    read: "12 min read",
    gradient: "from-[#3D5A4C] to-[#2A3540]",
    featured: true,
  },
  {
    slug: null,
    name: "Sandy",
    tag: "South Valley",
    desc: "Where the south valley comes together — dining, shopping, and family-first neighborhoods.",
    read: "10 min read",
    gradient: "from-[#4A5568] to-[#2D3748]",
  },
  {
    slug: null,
    name: "Cottonwood Heights",
    tag: "Canyon Communities",
    desc: "Premier ski access with a suburban feel — Big and Little Cottonwood at your doorstep.",
    read: "9 min read",
    gradient: "from-[#553C3C] to-[#3D2A2A]",
  },
  {
    slug: null,
    name: "The Wasatch Back",
    tag: "Mountain & Resort",
    desc: "Park City, Heber Valley, Midway — a different pace of life just 30 minutes from Salt Lake.",
    read: "14 min read",
    gradient: "from-[#4A5D6B] to-[#2C3E50]",
  },
  {
    slug: null,
    name: "South Jordan & Daybreak",
    tag: "South Salt Lake County",
    desc: "Master-planned living, TRAX access, and the fastest-growing zip codes in the state.",
    read: "Coming soon",
    gradient: "from-[#5A4E3C] to-[#3D3628]",
  },
  {
    slug: null,
    name: "Holladay & Millcreek",
    tag: "East Bench",
    desc: "Established neighborhoods, mature trees, and the charm of Salt Lake's east side.",
    read: "Coming soon",
    gradient: "from-[#4C5A5A] to-[#2E3A3A]",
  },
];

const latestPosts = [
  {
    title: "Living in Draper, Utah: The Complete 2026 Guide",
    excerpt:
      "Schools, commute times, average prices, best subdivisions, and what daily life actually looks like at the foot of the Wasatch. Everything you need to know before making the move.",
    badge: "Neighborhood",
    badgeColor: "bg-ridge",
    gradient: "from-[#3D5A4C] to-[#2A3540]",
    read: "12 min read",
    date: "March 2026",
    slug: "/guides/living-in-draper-utah",
    large: true,
  },
  {
    title: "Best HVAC Companies in the South Valley",
    excerpt:
      "Who Sandy and Draper residents actually trust for furnace and AC work — rated by reviews, response time, and pricing transparency.",
    badge: "Home Services",
    badgeColor: "bg-sky-brand",
    gradient: "from-[#6B97B0] to-[#4A7080]",
    read: "7 min read",
    date: "March 2026",
    slug: null,
  },
  {
    title: "Where Locals Actually Eat in Sandy",
    excerpt:
      "Skip the chains. The restaurants and hidden spots Sandy residents recommend to friends — from early morning coffee to late-night tacos.",
    badge: "Dining",
    badgeColor: "bg-rust",
    gradient: "from-[#B5654A] to-[#8A4A36]",
    read: "8 min read",
    date: "March 2026",
    slug: null,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-[#2A3540] via-35% to-ridge" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[15%] right-[8%] w-[300px] h-[300px] border border-sage/[.06] rounded-full" />
          <div className="absolute bottom-[20%] right-[15%] w-[180px] h-[180px] border border-sand/[.05] rounded-full" />
        </div>

        <div className="relative z-2 px-6 md:px-12 max-w-[760px]">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-sage" />
            <span className="text-[11px] text-sage tracking-[0.18em] uppercase font-semibold">
              Your insider&apos;s guide to life along the Wasatch Front
            </span>
          </div>
          <h1 className="font-heading text-[34px] md:text-[56px] font-extrabold text-white leading-[1.05] mb-5 tracking-tight">
            Know the<br />neighborhood<br />before you<br />know the <em className="italic font-normal text-sage">address.</em>
          </h1>
          <p className="text-[17px] text-white/45 leading-[1.8] mb-9 max-w-[540px] font-light">
            In-depth guides to the communities, restaurants, services, and
            outdoor life that make the Salt Lake metro unlike anywhere else.
          </p>
          <div className="flex max-w-[480px]">
            <input
              type="text"
              placeholder="Search neighborhoods, topics, or businesses..."
              className="flex-1 py-4 px-5 bg-white/[.08] border border-white/[.12] border-r-0 rounded-l-[6px] text-white font-body text-sm outline-none placeholder:text-white/30"
            />
            <button className="py-4 px-7 bg-ridge text-white border border-ridge rounded-r-[6px] font-body text-[13px] font-semibold tracking-wide cursor-pointer hover:bg-ridge-light transition-colors">
              Explore
            </button>
          </div>
        </div>

        {/* Hero area cards */}
        <div className="absolute bottom-0 left-0 right-0 z-3 flex flex-wrap border-t border-white/[.06]">
          {[
            { name: "Draper", desc: "Tech corridor, mountain trails, top-rated schools", slug: "/guides/living-in-draper-utah" },
            { name: "Sandy", desc: "South Valley hub, family neighborhoods, ski access", slug: null },
            { name: "Cottonwood Heights", desc: "Canyon living, Big & Little Cottonwood at your door", slug: null },
            { name: "Wasatch Back", desc: "Park City, Heber Valley, mountain resort life", slug: null },
          ].map((area) => {
            const inner = (
              <>
                <div className="font-heading text-[17px] font-bold text-white mb-0.5">{area.name}</div>
                <div className="text-[11px] text-white/35 leading-[1.5]">{area.desc}</div>
                <div className="text-sage text-[12px] mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read guide →
                </div>
              </>
            );
            const classes = "group flex-1 min-w-[50%] md:min-w-0 py-6 px-8 cursor-pointer transition-all border-r border-white/[.06] last:border-r-0 hover:bg-white/[.04] no-underline block";
            return area.slug ? (
              <Link key={area.name} href={area.slug} className={classes}>{inner}</Link>
            ) : (
              <div key={area.name} className={classes}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* AREA GUIDES */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-ridge" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">Area Guides</span>
          </div>
          <div className="font-heading text-4xl font-bold text-slate-brand leading-[1.1] mb-2">Find Your Community</div>
          <div className="text-[15px] text-muted leading-[1.7] max-w-[520px]">Everything you need to know before you move — or to appreciate where you already live.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {areaGuides.map((area) => {
            const card = (
              <div
                key={area.name}
                className={`group relative rounded-xl overflow-hidden h-[340px] cursor-pointer ${area.featured ? "md:col-span-2" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} transition-transform duration-500 group-hover:scale-[1.04]`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-brand/[.92] via-slate-brand/30 via-45% to-slate-brand/15 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-2">
                  <div className="text-[10px] text-sage tracking-[0.12em] uppercase font-bold mb-1.5">{area.tag}</div>
                  <div className="font-heading text-2xl font-bold text-white mb-1.5">{area.name}</div>
                  <div className="text-[13px] text-white/50 leading-[1.6] max-h-0 overflow-hidden opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-300">{area.desc}</div>
                  <div className="inline-flex items-center gap-1.5 mt-2.5 text-[11px] text-sand font-medium">{area.read}</div>
                </div>
              </div>
            );
            return area.slug ? (
              <Link key={area.name} href={`/guides/${area.slug}`} className={`no-underline block ${area.featured ? "md:col-span-2" : ""}`}>{card}</Link>
            ) : card;
          })}
        </div>
      </section>

      {/* LATEST CONTENT */}
      <section className="py-20 px-6 md:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-ridge" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">Latest</span>
          </div>
          <div className="font-heading text-4xl font-bold text-slate-brand leading-[1.1]">Fresh from the Guide</div>
        </div>
        <div className="flex gap-3 flex-wrap mb-10">
          {["All", "Neighborhoods", "Dining", "Home Services", "Outdoors", "Healthcare"].map((cat, i) => (
            <div
              key={cat}
              className={`py-2 px-5 rounded-full text-[12px] font-semibold tracking-wide cursor-pointer transition-all border ${
                i === 0
                  ? "bg-ridge text-white border-ridge"
                  : "border-sand-light text-muted bg-white hover:bg-ridge hover:text-white hover:border-ridge"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-5">
          {latestPosts.map((post) => {
            const card = (
              <div className="group bg-white rounded-xl overflow-hidden border border-black/[.04] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                <div className={`h-[200px] relative bg-gradient-to-br ${post.gradient}`}>
                  <span className="absolute inset-0 flex items-center justify-center text-[11px] text-white/20 tracking-wider uppercase">
                    Cover photo
                  </span>
                  <div className={`absolute top-3.5 left-3.5 py-1 px-3 rounded-[4px] text-[10px] font-bold tracking-wide uppercase text-white ${post.badgeColor}`}>
                    {post.badge}
                  </div>
                </div>
                <div className="p-[22px]">
                  <div className={`font-heading font-bold text-slate-brand leading-[1.25] mb-2 ${post.large ? "text-[22px]" : "text-[19px]"}`}>
                    {post.title}
                  </div>
                  <div className="text-[13px] text-muted leading-[1.65]">{post.excerpt}</div>
                  <div className="flex items-center gap-3 mt-3.5 text-[11px] text-muted">
                    <span>{post.read}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-muted" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            );
            return post.slug ? (
              <Link key={post.title} href={post.slug} className="no-underline block">{card}</Link>
            ) : (
              <div key={post.title}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* NEWSLETTER */}
      <div id="newsletter" className="bg-slate-brand rounded-2xl py-14 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mx-6 md:mx-12 mb-20">
        <div>
          <div className="font-heading text-[32px] font-bold text-white leading-[1.15] mb-3">
            Get the local<br />perspective, weekly.
          </div>
          <div className="text-sm text-white/45 leading-[1.7]">
            One email per week with new neighborhood guides, local business
            spotlights, and the updates that matter along the Wasatch Front.
          </div>
        </div>
        <div>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 py-4 px-5 bg-white/[.07] border border-white/10 border-r-0 rounded-l-lg text-white font-body text-sm outline-none placeholder:text-white/30"
            />
            <button className="py-4 px-8 bg-ridge text-white border-none rounded-r-lg font-body text-sm font-semibold cursor-pointer whitespace-nowrap hover:bg-ridge-light transition-colors">
              Subscribe
            </button>
          </div>
          <div className="text-[11px] text-white/25 mt-2">
            No spam. Unsubscribe anytime. We&apos;re local too.
          </div>
        </div>
      </div>
    </div>
  );
}
