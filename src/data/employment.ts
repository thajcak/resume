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
    company: "Swoop",
    positions: [
      {
        title: "Senior GTM Engineer",
        startDate: "2026-05-04",
        responsibilities: [
            "Serve as technical owner of the GTM platform, designing the Segment Request process end to end and building a two-way integration with downstream systems to replace an ad hoc request pattern with a structured, repeatable workflow.",
            "Stand up Gearset-based CI/CD for the org, defining deployment, validation, and promotion processes and configuring automated backups and observability alerts that route error reporting into a dedicated Slack channel.",
            "Drive data model cleanup across the org, retiring unused metadata and legacy fields and rationalizing the Opportunity object, while supporting post-acquisition system integration to keep the platform consistent and maintainable.",
            "Strengthen platform access and security by managing integration-user permission sets, validating readiness for phishing-resistant MFA and passkeys, and standing up Okta SSO for sandboxes and Gearset, closing gaps in the org's authentication posture.",
            "Design and develop AI workflows to automate and improve go-to-market processes, adopting AI where the problem and payoff are clear."
        ]
      }
    ]
  },
  {
    company: "Epic Games",
    positions: [
      {
        title: "Senior Salesforce Developer",
        startDate: "2025-06-01",
        endDate: "2026-03-24",
        responsibilities: [
          "Re-architected Feedback and Question form frameworks serving 2k+ users montly to improve scalability and maintainability, cutting component load time by 50% and making future form changes more reliable and faster to deliver.",
          "Led security remediation design for community experiences by addressing 3 security findings in Q1 2026, involving LWC process control changes, and locking down Community profiles to reduce exposure for external and guest users.",
          "Lead legacy Case trigger architecture redesign to bring modern practices, eliminating years of technical debt and increasing performance by 80% during Case operations.",
          "Served as technical architect across as many as 5 concurrent projects, partnering with 2 BAs and 1-2 developers per engagement to drive code quality and functional readiness prior to BA validation.",
          "Built an AI-assisted codebase analysis workflow to infer and backfill missing technical documentation, improving system clarity and long-term maintainability."
        ]
      }
    ]
  },
  {
    company: "Stitch Consulting",
    positions: [
      {
        title: "Senior Technical Architect",
        startDate: "2023-02-01",
        endDate: "2025-05-31",
        responsibilities: [
          "Led greenfield Salesforce implementations for financial services clients, integrating core banking systems to bring member/account data into Salesforce for operational teams.",
          "Designed and implemented a custom LWC-driven deal workflow that unified up to 4 teams per deal into a single execution model, reducing information processing time and cross-team coordination overhead by 35% through role-specific self-service, targeted notifications, and shared Salesforce process flows.",
          "Designed and implemented customer portals end to end from UI/UX design through delivery, increasing user self-service behavior and reducing communication friction and user frustration.",
          "Improved data availability in Salesforce through timely integration patterns and caching mechanisms that reduced external API callout dependence.",
          "Implemented a MuleSoft-centered integration service that improved data flow and enabled consolidation of two additional legacy services, delivering meaningful licensing and operational cost savings."
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
          "Managed a 5-person Salesforce team (2 developers, 3 admins), leading roadmap execution, stakeholder alignment, and platform reliability across Deal Desk, Contracting, and Website initiatives.",
          "Partnered directly with cross-functional stakeholders to scope and prioritize solutions, ensuring sprint commitments mapped to high-impact business needs.",
          "Improved production stability by hardening brittle legacy components and adding guardrails, reducing on-call incidents from 1-2 per week to 1 every two weeks during tenure.",
          "Maintained CI/CD pipeline reliability to support consistent biweekly sprint-end releases and minimize deployment disruption.",
          "Owned hiring for team expansion, interviewing and selecting 2 contractors to increase delivery capacity.",
          "Supported team growth and advancement by advocating for internal promotion, including progression of an admin to senior-level responsibilities, and mentoring an admin through a cross-functional transition into development work."
        ]
      },
      {
        title: "Senior Salesforce Engineer",
        startDate: "2020-08-01",
        endDate: "2022-06-30",
        responsibilities: [
          "Built an LWC-based renewal terms interface with reactive calculations and workflow automation, enabling Deal Desk users to model custom deal structures while protecting profitability and reducing renewal configuration and approval time by 40%.",
          "Replaced a website integration service with an internally owned integration architecture, improving sync reliability and observability while saving $500K annually in licensing costs.",
          "Designed and implemented an in-house contracting orchestration service to replace a third-party platform, delivering$1.5M in annual savings and improving contracting stability by reducing errors from 1-2 per week to 1-2 per month.",
          "Served as team lead by unblocking technical issues, enforcing robust code review practices, and establishing coding standards to improve maintainability."
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
          "Led technical design and implementation for pharma commercial operations and customer portal initiatives, converting complex business requirements into scalable Salesforce solutions.",
          "Delivered end-to-end technical execution across 3-18 month programs, including requirements analysis, solution design, implementation, and stakeholder validation.",
          "Partnered directly with 2-5 business stakeholders per engagement to map processes and improve operational speed and data accuracy through system design.",
          "Owned UI/UX design, implementation, and delivery of customer community experiences to support engagement, self-service, and structured information distribution.",
          "Architected internal operations UX for the client portal initiative, producing full UI/UX designs that were implemented by engineering teams.",
          "Built and enhanced a React sales tool that analyzed historical office product usage, improving targeting strategy and account-level sales planning quality.",
          "Authored technical and administrative documentation to support implementation quality, handoff clarity, and long-term maintainability."
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
          "Shipped Objective-C features and fixes in sync with web launches, using the Three20 framework and APIs tied to core site functionality.",
          "Established the enterprise Apple developer account and distribution practices for internal and external app delivery.",
          "Implement CI/CD for iPhone builds, including an internal webpage for distributing builds to the team, standardizing releases and reducing manual packaging overhead.",
          "Triaged crash logs and prioritized fixes to improve app stability and reduce recurring production issues.",
          "Implemented and coordinated push notifications with server engineers so mobile and backend behavior stayed aligned."
        ]
      },
      {
        title: "Senior Quality Assurance Analyst",
        startDate: "2008-06-01",
        endDate: "2010-07-31",
        responsibilities: [
          "Ran daily outbound email tests across providers to catch delivery, rendering, and integration issues before they reached users.",
          "Owned QA for the Games section and reward flows, validating how games integrated with site-wide currency.",
          "Tested new features in preproduction and production, documenting defects and working to protect release quality.",
          "Reproduced complex bugs and defined clear replication paths so engineering could fix issues faster and with fewer round trips.",
          "Authored and maintained testing scripts and documentation to support repeatable coverage and consistent test execution.",
          "Translated user feedback and product behavior into UX recommendations and prioritized fixes alongside functional defects."
        ]
      }
    ]
  }
];
