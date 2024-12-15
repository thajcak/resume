export interface EmploymentEntry {
  company: string;
  positions: {
    title: string;
    startDate: string;
    endDate?: string; // Optional for current positions
    responsibilities: string[];
  }[];
}

export const employmentData: EmploymentEntry[] = [
  {
    company: "Stitch Consulting",
    positions: [
      {
        title: "Sr Technical Architect",
        startDate: "2023-02-01",
        responsibilities: [
          "Provides Salesforce platform expertise necessary to guide project requirement collection.",
          "Translate technical client requirements into thoughtful systems through code and integrations.",
          "Collaborate with technical and non-technical teams to explain complex solutions in terms everyone can understand.",
          "Draft technical written materials to facilitate communication between clients and the delivery teams.",
          "Provides input and assist in building out Go-Live plans that allow clients to be successful post-engagement.",
          "Run demos that pertain to the technical functionality to be delivered."
        ]
      }
    ]
  },
  {
    company: "Compass",
    positions: [
      {
        title: "Engineering Manager",
        startDate: "2022-06-01",
        endDate: "2023-02-28",
        responsibilities: [
          "Roadmap planning for platform enhancements and stakeholder priorities.",
          "Working directly with stakeholders to define, prioritize, and scope projects.",
          "Ensuring project deliverability by resolving blockers, getting answers, and maintaining communication with stakeholders.",
          "Maintaining development excellence through SDLC and CI/CD enhancements, code reviews, monitoring, and assisting with on-call issue triage.",
          "Advocating for interesting projects for the team, tech debt mitigation, and team recognition and promotions."
        ]
      },
      {
        title: "Sr Salesforce Engineer",
        startDate: "2020-08-01",
        endDate: "2022-06-30",
        responsibilities: [
          "Designing and implementing tools providing user independence.",
          "Building integrations with systems in and outside of the Compass infrastructure.",
          "Investigating and correcting obscure issues in business automations.",
          "Assisting in research to discovery and resolve cross-system data quality problems.",
          "Ensuring high code quality through code reviews and adhering to best practices for implementations."
        ]
      }
    ]
  },
  {
    company: "Mavens",
    positions: [
      {
        title: "Technical Architect",
        startDate: "2011-03-01",
        endDate: "2020-08-31",
        responsibilities: [
          "Owning the full development life cycle of projects in the life sciences industry including commercial pharmaceutical operations and patient programs.",
          "Leading technical teams through full development of projects with timeframes ranging from three to eighteen months and multiple phases.",
          "Designing and implementing public and private customer facing communities that drive user engagement, self service functionality, and information distribution.",
          "Managing and enhancing multiple React+Redux web applications.",
          "Crafting data consolidation processes for syncing and consumption.",
          "Determining scope, effort, and timeline for project requirements.",
          "Authoring documentation on both technical and administrative aspects of implemented solutions.",
          "Working directly with clients to gather requirements, approve visual and technical designs, and showcase solutions."
        ]
      }
    ]
  },
  {
    company: "myYearbook",
    positions: [
      {
        title: "iPhone Developer",
        startDate: "2010-07-01",
        endDate: "2011-03-31",
        responsibilities: [
          "Developing new apps and features that integrate directly with the website.",
          "Maintaining existing features, fixing various issues, and investigating crashes."
        ]
      },
      {
        title: "Sr QA Analyst & Tester",
        startDate: "2008-06-01",
        endDate: "2010-07-31",
        responsibilities: [
          "Testing and verifying live and preproduction web applications.",
          "Evaluating user feedback for problems and enhancements.",
          "Thoroughly vetting new applications in development.",
          "Maintaining catalog of known bugs and issues.",
          "Compiling recommendations for UI and UX adjustments.",
          "Authoring and maintaining testing documentation."
        ]
      }
    ]
  }
];
