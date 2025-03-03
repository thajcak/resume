export interface CertificationEntry {
  organization: string;
  certifications: {
    title: string;
    date: string;
    image: string;
  }[];
}

export interface EducationEntry {
  degree: string;
  date: string;
  school: string;
}

export const certificationData: CertificationEntry[] = [
  {
    organization: "Salesforce",
    certifications: [
      {
        title: "Platform App Builder",
        date: "2016-01-01",
        image: "/images/2021-03_Badge_SF-Certified_Platform-App-Builder_High-Res.png"
      },
      {
        title: "Platform Developer I",
        date: "2016-02-01",
        image: "/images/2021-03_Badge_SF-Certified_Platform-Developer-I_High-Res.png"
      },
      {
        title: "Platform Developer II",
        date: "2017-07-01",
        image: "/images/2021-03_Badge_SF-Certified_Platform-Developer-II_High-Res.png"
      },
      {
        title: "Agentforce Specialist",
        date: "2025-03-01",
        image: "/images/2025-02_Badge_SF-Certified_Agentforce-Specialist_High-Res.png"
      }
    ]
  }
];

export const educationData: EducationEntry[] = [
  {
    degree: "BA, Creative Arts & Technology: Game Development",
    date: "2008-05-01",
    school: "Bloomfield College"
  },
  {
    degree: "AS, Computer Science",
    date: "2005-05-01",
    school: "Warren County Community College"
  }
];
