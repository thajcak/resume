export interface SkillEntry {
  type: string;
  skills: string[];
}

export const skillData: SkillEntry[] = [
  {
    type: "Salesforce",
    skills: ["Apex", "Lightning Web Components"]
  },
  {
    type: "Frameworks",
    skills: ["Trigger Handler", "Platform Events"]
  },
  {
    type: "Patterns",
    skills: ["Batch Processing", "Asynchronous Processing"]
  },
  {
    type: "Design",
    skills: ["User Interface", "User Experience"]
  },
  {
    type: "Web Development",
    skills: ["HTML", "CSS", "JS", "REST", "JSON"]
  },
  {
    type: "Lifecycle",
    skills: ["Git", "SFDX", "CI/CD", "GitHub Actions", "Gearset"]
  }
];