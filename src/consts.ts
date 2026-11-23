import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Gustavo H. Santos",
  EMAIL: "gustavohenriquesantos@alunos.utfpr.edu.br",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Urban researcher and engineer. Author of fastmob, a fast mobility analysis library for Python.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on research, engineering and reading.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Open-source libraries and research tools.",
};

export const PAPERS: Metadata = {
  TITLE: "Papers",
  DESCRIPTION: "Peer-reviewed research on urban computing and social networks.",
};

export const SOCIALS: Socials = [
  {
    NAME: "cv",
    HREF: "/cv.pdf",
  },
  {
    NAME: "scholar",
    HREF: "https://scholar.google.com/citations?user=Di8YT_UAAAAJ",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/gefgu"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gustavobruno-developer/",
  }
];
