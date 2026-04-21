export interface SkillEntry {
  type: string;
  skills: string[];
}

export const skillData: SkillEntry[] = [
  {
    type: "Salesforce Technologies",
    skills: ["Apex", "Apex REST", "Lightning Web Components", "Platform Cache", "Platorm Events", "SFDX"]
  },
  {
    type: "Web Technologies",
    skills: ["CSS", "HTML", "JS", "JSON", "React", "REST", "SOAP", "XML"]
  },
  {
    type: "Architectural Patterns",
    skills: ["Asynchronous Processing", "Batch Processing", "Event Driven Architecture", "Integration Design", "Trigger Handler"]
  },
  {
    type: "Interface Design",
    skills: ["Mockup Design", "Salesforce Lightning Design System", "User Experience", "User Interface", "UX Testing"]
  },
  {
    type: "Development Lifecycle",
    skills: ["CI/CD", "Gearset", "Git", "GitHub Actions", "NPM", "YAML"]
  },
  {
    type: "Project Management",
    skills: ["ClickUp", "Figma", "Google Workspace", "Jira", "Miro", "Slack"]
  },
  {
    type: "Tools & AI",
    skills: ["ChatGPT", "Claude Code", "Cursor", "Postman", "VSCode"]
  },
  {
    type: "Salesforce Clouds",
    skills: ["Experience Cloud", "Financial Services Cloud", "Sales Cloud", "Service Cloud"]
  },
];