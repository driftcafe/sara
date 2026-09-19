// Content extracted from the WordPress export (Aug4-2026-backup/WordPress.2026-08-04.xml)

export const hero = {
  eyebrow: "Hello, I am",
  name: "Sara Peterson",
  tagline:
    "I specialize in writing, editing, and proofreading services that help you and your business grow or master difficult projects.",
  cta: "Have a project? Let's talk",
};

export const services = [
  {
    title: "Content writing",
    description:
      "I craft compelling text that reflects your own style and voice. But I also write original pieces with minimal guidance. Whatever it is you need.",
  },
  {
    title: "Editing",
    description:
      "Flow, consistency, and general text polish all contribute to an enjoyable reading experience. I want these things in a piece of writing just as much as you do, and make that “magic” happen.",
  },
  {
    title: "Proofreading",
    description:
      "I ensure text follows all the grammar rules (Chicago or AP style; whichever you prefer), is spelled correctly, and just generally looks its best. That way the writing is the main focus, as it should be.",
  },
];

export const about = {
  eyebrow: "A quick intro",
  heading: "About me",
  paragraphs: [
    "I love to work with words—stringing them together to get a message, feeling, or idea across; tightening them up so each one pulls its weight; or checking them over to see that every one is correctly placed, spelled, and used.",
    "Words captivate me for their storytelling abilities, whether the story is a sewing tutorial for a pillow cover (helpful!) or an image-packed description that transports you to a far corner of the world (maybe where the sun shines in February). For me, the human parts of words are the most interesting aspects. Otherwise, who’s reading them?",
  ],
};

export const experience = {
  eyebrow: "Experience",
  heading: "Skills you can trust",
  paragraphs: [
    "I have been writing and editing professionally since 2005. Much of my early experience was in the travel industry, and over time I branched out to other subjects. I am always eager to take on something new.",
    "I'm extremely familiar with writing and editing blog and web articles, website content, newsletters, style guidelines, product descriptions, training documents, and a host of other genres. Additionally, I have written and edited print ads and trivia questions, and even tightened up phrasing for product labels.",
  ],
};

export const proofreadingIntro = {
  eyebrow: "Proofreading",
  heading: "The proof is in the pudding",
  paragraphs: [
    "Proofreading has always been more of a habit than an assigned task. In 2013 I started proofreading books professionally, and have since lent my expertise to an ever-growing number of titles.",
    "Apart from books, I've also proofread a variety of pieces for the marketing world, ranging from flyers, print ads and brochures, and online ebrochures to emails, white papers, website wireframes, and a variety of other projects that require a careful eye. I am also experienced in proofreading blog posts, marketing plans, product descriptions, and resumes.",
  ],
};

export interface WorkSampleLink {
  label: string;
  href: string;
}

export interface WorkSample {
  slug: string;
  title: string;
  tags: string[];
  excerpt: string;
  body: string[];
  image?: string;
  imageFit?: "cover" | "contain";
  detailImage?: string;
  detailImageFit?: "cover" | "contain";
  embedPdf?: string;
  embedLinks?: boolean;
  links?: WorkSampleLink[];
}

export const workSamples: WorkSample[] = [
  {
    slug: "feeding-kids-article",
    title: "Feeding Kids Article",
    tags: ["Parenting"],
    excerpt:
      "Turns out, getting kids to eat can be hard. I wrote an article for PEPS (Program for Early Parent Support) with tips to ease mealtime stress.",
    body: [
      "Turns out, getting kids to eat can be hard. I wrote an article for PEPS (Program for Early Parent Support) with tips to ease mealtime stress.",
    ],
    image: "feeding-kids",
    detailImage: "feeding-kids",
  },
  {
    slug: "meditation-article",
    title: "Meditation Article",
    tags: ["Health", "Lifestyle"],
    excerpt:
      "An overview about meditation for the CareDash health and wellness website.",
    body: [
      "I wrote a few articles for the CareDash website, which offers a collection of articles centered on healthcare and wellness topics. This particular article is one I wrote as an overview on meditation.",
    ],
    image: "meditation",
    detailImage: "meditation",
  },
  {
    slug: "microsoft-partner-network-story",
    title: "Microsoft Partner Network Story",
    tags: ["Technology"],
    excerpt:
      "How the Port of Seattle used Microsoft technology to better organize and use its own information stockpile.",
    body: [
      "Microsoft recognizes the great achievements of some of its partners with articles about how the partners used technology from Microsoft to help overcome a challenge, improve a process, or just generally make something better. I wrote an article about how the Port of Seattle found a better way to organize and use its wealth of information.",
    ],
    image: "microsoft-partner",
    detailImage: "microsoft-partner",
  },
  {
    slug: "belltown-restaurant-tour-description",
    title: "Belltown Restaurant Tour Description",
    tags: ["Dining", "Travel"],
    excerpt: "Writing and food—two of my favorite things.",
    body: [
      "A travel website description of a downtown Seattle food tour (that I also went on).",
    ],
    image: "belltown-restaurant",
    detailImage: "belltown-restaurant",
  },
  {
    slug: "online-video-marketing-campaign",
    title: "Online Video Marketing Campaign",
    tags: ["Finances"],
    excerpt:
      "I break down how banking with a credit union and coaching college football are more alike than you think.",
    body: [
      "Vantage West Credit Union in Southern Arizona ran a video marketing campaign during the 2014 college football season. It featured posted videos with the University of Arizona’s coach, Rich Rodriguez, talking about different qualities of effective coaching.",
      "Each quality (six total) received its own video. I provided the accompanying text that described how each quality was mirrored in the services the credit union offers. Below is a sample page for one of the qualities (Flexibility).",
    ],
    image: "online-video-marketing",
    detailImage: "online-video-marketing",
  },
  {
    slug: "hawaii-video-slide-shows",
    title: "Hawaii Video Slide Shows",
    tags: ["Travel"],
    excerpt:
      "Copy for a video loop that ran in hotel lobbies throughout Hawaii.",
    body: [
      "For this project, I wrote short copy snippets for a video loop that ran in hotel lobbies throughout Hawaii. The text focuses on interesting facts about the state as a whole and about each of the main islands.",
    ],
    image: "hawaii-video",
    embedLinks: true,
    links: [
      { label: "Hawaii Statewide", href: "/samples/hawaii-statewide.pdf" },
      { label: "Oahu", href: "/samples/hawaii-oahu.pdf" },
      { label: "Maui", href: "/samples/hawaii-maui.pdf" },
      { label: "Big Island", href: "/samples/hawaii-big-island.pdf" },
      { label: "Kauai", href: "/samples/hawaii-kauai.pdf" },
    ],
  },
  {
    slug: "carl-english-biography-article",
    title: "Carl English Biography Article",
    tags: ["History", "Local Interest"],
    excerpt:
      "Who was Carl English, the namesake of the gardens at Seattle's Hiram M. Chittenden Locks?",
    body: [
      "The Friends of the Ballard Locks volunteer group helps preserve and share the history of Seattle’s Hiram M. Chittenden Locks. I worked with the group to write an article about Carl S. English, Jr., the namesake of the expansive gardens at the locks.",
    ],
    image: "carl-english",
    detailImage: "carl-english",
    links: [
      {
        label: "Friends of the Ballard Locks post",
        href: "http://blog.friendsoftheballardlocks.org/2015/08/carl-s-english-jr-man-behind-ballard.html",
      },
      { label: "HistoryLink.org post", href: "https://www.historylink.org/File/20223" },
    ],
  },
  {
    slug: "english-countryside-tour-description",
    title: "English Countryside Tour Description",
    tags: ["Travel"],
    excerpt:
      "A travel website description of a full-day tour outside of London and through the English countryside.",
    body: [
      "A travel website description of a full-day tour outside of London and through the English countryside. This write-up was done for a site redesign introduced in April 2014.",
    ],
    image: "english",
    detailImage: "english-countryside",
  },
  {
    slug: "specialty-mortgages-brochure-text",
    title: "Specialty Mortgages Brochure Text",
    tags: ["Finances"],
    excerpt:
      "Explanation of specialty mortgages available through an Arizona credit union for attorneys and CPAs.",
    body: [
      "The Vantage West Credit Union in Arizona offers specialty mortgages for specific professions, including doctors, nurses, and—as is explained in this brochure—attorneys and CPAs. My task with the brochure designer, the WhyFor design agency, was to develop some introductory copy for the brochures for each profession type.",
    ],
    image: "specialty-mortgages",
    embedPdf: "/samples/specialty-mortgages-brochure.pdf",
    links: [
      {
        label: "Specialty Mortgages brochure (PDF)",
        href: "/samples/specialty-mortgages-brochure.pdf",
      },
    ],
  },
  {
    slug: "once-the-musical-description",
    title: "“Once” the Musical Description",
    tags: ["Entertainment", "Travel"],
    excerpt: "Write-up of the Broadway musical “Once.”",
    body: [
      "A travel website description of “Once” the Broadway musical. This write-up was done for a site redesign introduced in April 2014.",
    ],
    image: "once-musical",
    detailImage: "once-musical",
  },
  {
    slug: "retirement-community-magazine-ad",
    title: "Retirement Community Magazine Ad",
    tags: ["Lifestyle", "Retirement"],
    excerpt:
      "Ad copy for a retirement community, based on an interview of the ad's featured community residents.",
    body: [
      "The copy and headline I wrote for this magazine ad was based on an interview the Maravilla Scottsdale retirement community conducted with the residents featured in the ad. My task was to take the interview information and turn it into a cohesive and compelling story that highlighted specific services offered at the retirement community.",
    ],
    image: "retirement-community",
    detailImage: "retirement-community",
  },
  {
    slug: "trivia-questions-and-answers",
    title: "Trivia Questions and Answers",
    tags: ["Trivia"],
    excerpt: "Putting my Jeopardy!-watching skills to good use.",
    body: [
      "As an avid Jeopardy! watcher, I was especially excited to get a chance to write some trivia questions for the Boom Industries organization. The questions I wrote were for use in the organization’s competitive trivia games. My subject of focus was Useless Information.",
      "For this project, I not only wrote the questions, but did all the research and fact-checking to find the subject matter for the questions, as well as supplied the incorrect answers.",
    ],
    image: "trivia",
    links: [{ label: "Betcha didn't know... (PDF)", href: "/samples/trivia-questions.pdf" }],
  },
];

export const booksProofread: { genre: string; titles: { title: string; author: string }[] }[] = [
  {
    genre: "Nonfiction",
    titles: [
      { title: "Enough", author: "Shauna M. Ahern" },
      { title: "Every Penguin in the World", author: "Charles Bergman" },
      { title: "Become America", author: "Eric Liu" },
      { title: "Oh, La La", author: "Ciscoe Morris" },
    ],
  },
  {
    genre: "Fiction",
    titles: [
      { title: "The Banks of Certain Rivers", author: "Jon Harrison" },
      { title: "Going Home", author: "James D. Shipman" },
    ],
  },
  {
    genre: "Romance",
    titles: [
      { title: "Need You For Always", author: "Marina Adair" },
      { title: "Need You For Mine", author: "Marina Adair" },
      { title: "Turbulent Waters", author: "Melody Anne" },
      { title: "In the Cards", author: "Jamie Beck" },
      { title: "Worth the Risk", author: "Jamie Beck" },
      { title: "Wish Me Home", author: "Kay Bratt" },
      { title: "Love Me Sweet", author: "Tracy Brogan" },
      { title: "Along the Broken Road", author: "Heather Burch" },
      { title: "Taken by Tuesday", author: "Catherine Bybee" },
      { title: "Seduced by Sunday", author: "Catherine Bybee" },
      { title: "The Rogue’s Wager", author: "Christi Caldwell" },
      { title: "This Time Around", author: "Tawna Fenske" },
      { title: "Under a Falling Star", author: "Caroline Fyffe" },
      { title: "Whispers on the Wind", author: "Caroline Fyffe" },
      { title: "Make Me Sin", author: "J.T. Geissinger" },
      { title: "Sweet as Sin", author: "J.T. Geissinger" },
      { title: "Storm Warned", author: "Dani Harper" },
      { title: "Caught in the Act", author: "Kim Law" },
      { title: "She Can Kill", author: "Melinda Leigh" },
      { title: "On the Record", author: "K.A. Linde" },
      { title: "Return to Homecoming Ranch", author: "Julia London" },
      { title: "Meant For You", author: "Michelle Major" },
      { title: "A Rake Reformed", author: "Shirley Marks" },
      { title: "Filthy Rich", author: "Raine Miller" },
      { title: "Gone", author: "Elisabeth Naughton" },
      { title: "Repressed", author: "Elisabeth Naughton" },
      { title: "Her Hopes and Dreams", author: "Terri Osburn" },
      { title: "Home to Stay", author: "Terri Osburn" },
      { title: "The Last in Love", author: "Terri Osburn" },
      { title: "More to Give", author: "Terri Osburn" },
      { title: "Falling For Her", author: "Sandra Owens" },
      { title: "Jack of Hearts", author: "Sandra Owens" },
      { title: "Lost in Her", author: "Sandra Owens" },
      { title: "Someone Like Her", author: "Sandra Owens" },
      { title: "Between Breaths", author: "Anna Philpot" },
      { title: "Beneath the Surface", author: "Melynda Price" },
      { title: "Fighting For Control", author: "Melynda Price" },
      { title: "Consumed by Fire", author: "Anne Stuart" },
      { title: "The Best Victim", author: "Colleen Thompson" },
      { title: "The Drowned Girls", author: "Loreth Anne White" },
      { title: "Unlaced by the Outlaw", author: "Michelle Willingham" },
    ],
  },
  {
    genre: "Science Fiction and Fantasy",
    titles: [
      { title: "Lost in Arcadia", author: "Sean Gandert" },
      { title: "Alien Wars", author: "Vaughn Heppner" },
      { title: "The Void", author: "J.D. Horn" },
      { title: "(R)evolution", author: "PJ Manney" },
      { title: "Unborn", author: "Amber Lynn Natusch" },
      { title: "Desperate Fire", author: "Christopher G. Nuttall" },
      { title: "The Curse Defiers", author: "Denise Grover Swank" },
      { title: "Trident Code", author: "Thomas Waite" },
      { title: "The Banished of Muirwood", author: "Jeff Wheeler" },
      { title: "The Void of Muirwood", author: "Jeff Wheeler" },
    ],
  },
  {
    genre: "Mystery, Thriller, and True Crime",
    titles: [
      { title: "Chilling Effect", author: "Melissa F. Miller" },
      { title: "Finding Sheba", author: "H.B. Moore" },
      { title: "American Woman", author: "Robert Pobi" },
      { title: "Afterlife", author: "Marcus Sakey" },
      { title: "Don’t Order Dog", author: "C.T. Wente" },
    ],
  },
  {
    genre: "Young Adult",
    titles: [{ title: "The Rules of Regret", author: "Megan Squires" }],
  },
];

export const contact = {
  eyebrow: "Contact me",
  heading: "Let's talk about your project",
  email: "spwrites@gmail.com",
};
