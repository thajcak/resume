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
        title: "Senior Technical Architect",
        startDate: "2023-02-01",
        responsibilities: [
          "Provide Salesforce expertise to guide project requirements collection.",
          "Translate technical requirements into effective solutions and designs using code, configuration, and integrations.",
          "Collaborate with technical and non-technical teams to explain solutions in terms everyone can understand.",
          "Draft technical documentation to facilitate communication between clients and delivery teams.",
          "Provide input and assist in developing go-live plans that ensure clients’ success post-engagement.",
          "Conduct demos to showcase the technical functionality being delivered."
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
          "Plan roadmaps for platform enhancements and prioritize stakeholder needs.",
          "Work directly with stakeholders to define, prioritize, and scope projects.",
          "Ensure timely project delivery by resolving blockers, providing clear guidance, and maintaining stakeholder communication.",
          "Maintain development excellence by improving SDLC and CI/CD processes, conducting code reviews, monitoring systems, and triaging on-call issues.",
          "Advocate for engaging team projects, prioritize tech debt mitigation, and promote team recognition and advancement."
        ]
      },
      {
        title: "Senior Salesforce Engineer",
        startDate: "2020-08-01",
        endDate: "2022-06-30",
        responsibilities: [
          "Design and implement tools that increase user independence.",
          "Build integrations with both internal and external systems.",
          "Investigate and resolve obscure issues in business automations.",
          "Conduct research to identify and resolve cross-system data quality issues.",
          "Ensure high code quality through rigorous code reviews and adherence to best practices."
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
          "Manage the full development life cycle of projects in the life sciences industry, including commercial pharmaceutical operations and patient programs.",
          "Lead technical teams through full project development cycles spanning three to eighteen months and multiple phases.",
          "Design and implement public and private-facing customer communities to drive user engagement, self-service functionality, and information distribution.",
          "Manage and enhance multiple React+Redux web applications.",
          "Develop data consolidation processes for synchronization and consumption.",
          "Determine scope, effort, and timeline for project requirements.",
          "Author documentation covering both the technical and administrative aspects of implemented solutions.",
          "Work directly with clients to gather requirements, approve visual and technical designs, and showcase solutions."
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
          "Develop new apps and features that integrate directly with the website.",
          "Maintain existing features, fix issues, and investigate crashes."
        ]
      },
      {
        title: "Senior Quality Assurance Analyst",
        startDate: "2008-06-01",
        endDate: "2010-07-31",
        responsibilities: [
          "Test and verify live and preproduction web applications.",
          "Evaluate user feedback for problems and potential enhancements.",
          "Thoroughly vet new applications in development.",
          "Maintain a catalog of known bugs and issues.",
          "Compile recommendations for UI and UX adjustments.",
          "Author and maintain testing documentation."
        ]
      }
    ]
  }
];
