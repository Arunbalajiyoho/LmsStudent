
 const accordian=[
        {
            id:1,
            title:"What is Learn Management",
            content:"An LMS enables you to create, manage, and deliver eLearning courses the same way word processors (like Microsoft Word) help you write documents and email servers (like Gmail) help you manage your email.",
        },
        {
            id:2,
            title:"How to use  Learn Management",
            content:" Upload courses. To start training, you need to add materials to the LMS. .",
        }
    ]
  
    const upcomingExam=[
        {
        id:1,
        title: "Development Exam",
        examType: "Multiple Choice",
        numberOfQuestions: 100,
        highlightMarks: 20,
        time: "9:00 PM",
        duration: {
          hours: 3,
          minutes: 45,
        },
        date: "2023-12-15",
    }

    ]
    const completed=[
        {
            id:1,
            coursename:"Web Development",
            timing:"5 hrs",
            status:"completed",
        },
        {
            id:2,
            coursename:"App",
            timing:"3hrs",
            status:"completed",
        }
    ]
    const examHistory =[
        { id: '1',
         courseName: 'App Development', 
         timing: '2023-01-01 10:00 AM',
          status: 'Passed' },
        { id: '2',
         courseName: 'Developing',
          timing: '2023-02-15 02:30 PM',
           status: 'Failed' },
        // Add more exam history entries as needed
      ]

      const screens=[
      {
        id:'1',
        dashboard:"Dashboard",
        classes:"Class",
        exams:"Exams",
        community:"Community",
        account:"Account",
      }
 ]

 
 const notifications =[


  {
    id: 1,
    date: "Today",
    notifications: [
      {
        id: 1,
        image: "https://yt3.googleusercontent.com/ytc/AOPolaQoqnc_0A03GxBRqYSLLMXmWnPyT_0NTn4YZsLqjg=s900-c-k-c0x00ffffff-no-rj",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
      {
        id: 2,
        image: "https://static.wikia.nocookie.net/logopedia/images/7/70/Sun_News.jpg/revision/latest?cb=20180318050509",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
    ],
  },
  {
    id: 2,
    date: "Yesterday",
    notifications: [
      {
        id: 3,
        image: "https://www.behindwoods.com/cmsadmin/images/behindwoods-logo-og-1.jpg",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
      {
        id: 4,
        image: "https://yt3.googleusercontent.com/ytc/AOPolaQXMRuhoZR4c_uOOHoRgRvlJJ2URj9aal1oStuMmWY=s900-c-k-c0x00ffffff-no-rj",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
    ],
  },
 ]


   export default {screens,accordian,upcomingExam,completed,examHistory,notifications}


