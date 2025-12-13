const rulesRegulations = [
  {
    title: "General Discipline",
    blocks: [
      {
        type: "text",
        content:
          "The college expects the students to maintain high standards of discipline, ideal behaviour and dress codes to keep up the reputation of our institution.",
      },
      {
        type: "list",
        items: [
          "Students are expected to maintain the best standards of behaviour in and out of the college.",
          "Students are expected to wear a clean and decent dress.",
          "No student shall enter or leave the class without permission.",
          "Political activities are strictly prohibited in the campus.",
          "Ragging of any kind is prohibited.",
        ],
      },
    ],
  },

  {
    title: "Attendance Rules",
    blocks: [
      {
        type: "heading",
        content: "Minimum Attendance Requirement",
      },
      {
        type: "list",
        items: [
          "Minimum 75% attendance is mandatory.",
          "Students with shortage of attendance will not be allowed to appear in exams.",
        ],
      },
      {
        type: "table",
        headers: ["Course Type", "Minimum Attendance"],
        rows: [
          ["Theory", "75%"],
          ["Practical", "75%"],
          ["Clinical Posting", "100%"],
        ],
      },
    ],
  },

  {
    title: "Library Rules",
    blocks: [
      {
        type: "text",
        content:
          "The library is a place for quiet study and reference. Students must follow the library rules strictly.",
      },
      {
        type: "list",
        items: [
          "Maintain silence inside the library.",
          "Mobile phones are not allowed.",
          "Books must be returned on time.",
        ],
      },
    ],
  },
];

export default rulesRegulations;
