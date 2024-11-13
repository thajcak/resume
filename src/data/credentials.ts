export interface CertificationEntry {
  organization: string;
  certifications: {
    title: string;
    date: string;
  }[];
}

export interface EducationEntry {
  degree: string;
  date: string;
}

export const certificationData: CertificationEntry[] = [
  {
    organization: "Salesforce",
    certifications: [
      {
        title: "Platform App Builder",
        date: "2016-01-01"
      },
      {
        title: "Platform Developer I",
        date: "2016-02-01"
      },
      {
        title: "Platform Developer II",
        date: "2017-07-01"
      }
    ]
  }
];

export const educationData: EducationEntry[] = [
  {
    degree: "BA, Creative Arts & Technology: Game Development",
    date: "2008-05-01"
  },
  {
    degree: "AS, Computer Science",
    date: "2005-05-01"
  }
];
