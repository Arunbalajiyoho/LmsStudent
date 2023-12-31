const accordian = [
  {
    id: 1,
    title: "What is Learn Management",
    content:
      "An LMS enables you to create, manage, and deliver eLearning courses the same way word processors (like Microsoft Word) help you write documents and email servers (like Gmail) help you manage your email.",
  
    },
  {
    id: 2,
    title: "How to use  Learn Management",
    content:
      " Upload courses. To start training, you need to add materials to the LMS. .",
  },
  {
    id: 3,
    title: "How to use  Learn Management",
    content:
      " Upload courses. To start training, you need to add materials to the LMS. .",
  },
  {
    id: 4,
    title: "How to use  Learn Management",
    content:
      " Upload courses. To start training, you need to add materials to the LMS. .",
  },
  {
    id: 5,
    title: "How to use Learn Management",
    content:
      " Upload courses. To start training, you need to add materials to the LMS. .",
  },
 
];


const upcomingExam = [
  {
    id: 1,
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
  },
];


const completed = [
  {
    id: 1,
    coursename: "Web Development",
    timing: "5 hrs",
    status: "completed",
  },

  {
    id: 2,
    coursename: "App",
    timing: "3hrs",
    status: "completed",
  },
];


const examHistory = [
  {
    id: "1",
    courseName: "App Development",
    timing: "2023-01-01 10:00 AM",
    status: "Passed",
  },
  {
    id: "2",
    courseName: "Developing",
    timing: "2023-02-15 02:30 PM",
    status: "Failed",
  },
  // Add more exam history entries as needed
];

const screens = [
  {
    id: "1",
    dashboard: "Dashboard",
    classes: "Class",
    exams: "Exams",
    community: "Community",
    account: "Account",
  },
];

const notifications = [
  {
    id: 1,
    date: "Today",
    notifications: [
      {
        id: 1,
        image:
          "https://yt3.googleusercontent.com/ytc/AOPolaQoqnc_0A03GxBRqYSLLMXmWnPyT_0NTn4YZsLqjg=s900-c-k-c0x00ffffff-no-rj",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
      {
        id: 2,
        image:
          "https://static.wikia.nocookie.net/logopedia/images/7/70/Sun_News.jpg/revision/latest?cb=20180318050509",
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
        image:
          "https://www.behindwoods.com/cmsadmin/images/behindwoods-logo-og-1.jpg",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
      {
        id: 4,
        image:
          "https://yt3.googleusercontent.com/ytc/AOPolaQXMRuhoZR4c_uOOHoRgRvlJJ2URj9aal1oStuMmWY=s900-c-k-c0x00ffffff-no-rj",
        title: "Sun Television uploaded:",
        description: "futfguohiohiohioyhio",
      },
    ],
  },
 

];


 const payment = [
  {
  id:1,
  image:"https://freepngimg.com/thumb/credit_card/25637-6-credit-card-visa-and-master-card-transparent-image.png",
  name:"Master Card"
   },
   {
    id:2,
    image:"https://newsroom.paypal-corp.com/image/pp_h_rgb_logo_tn.jpg",
    name:"PayPal"
   },
   {
    id:3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPqn_KAoZf_59xONxbsJ5ZVl7tNVPC5tA1hFwR__I7A&s",
    name:"Rupay"
   },
   {
    id:4,
    image:"https://d28wu8o6itv89t.cloudfront.net/images/visalogopngtransparentpng-1579588235384.png",
    name:"Visa"
   },
];

 const completedclass = [
  {
    id: 1,
    coursename: "Web Development",
    timing: "5 hrs",
    status: "completed",
    inst:"Sanjay",
    
  },
  {
    id: 2,
    coursename: "App",
    timing: "3hrs",
    status: "completed",
    inst:"Aravindh"
  },
];

const  events = [
  {
  id:1,
  image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg",
  name:"React Development Classes DVGFHFHFB VFBFG FDSGFHF",
  des:"React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
  time:"3 hrs",
  Date:"29/03/23"
   },
   {
    id:2,
    image:"https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
    name:"Reactotron",
  des:"A desktop app for inspecting React Native apps on various platforms, including iOS, Android, Linux, and Windows. It monitors API activity, tracks errors, action dispatch, and Redux store interactions.",
  time:"4 hrs",
  Date:"03/05/24"
   },
  
  
];


  // Dummy certificate data
  const certificates = [
    {
      title: "Certificate of Completion",
      description: "Awarded for completing the Programming Basics course.",
      date: "June 15, 2023",
      imageUrl: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg", // Replace with actual image URL
      studentName:"ArunBalaji",
      date:"01/01/2000",
   
    },
  
  ];

  
const studentDetails = [

{
  name: "Arunbalaji",
  email: "Arunbalaji@.com",
  age: 25,
  profileImage: "https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-260nw-2071252046.jpg",
  grade: "A",
  enrolledCourses: ["Programming 101", "Web Development Basics", "Mathematics Fundamentals"],

  // Add more details as needed
},


];



const paymentgateway =[
  {
    id:1,
    name:"student1",
    course:"aviation",
    description:""
  },
  {
    id:2,
    name:"student2",
    course:"aws"
  }

]


const studentData = [

{
  name: "John Doe",
  course: "Computer Science",
  studentID: "YT0502",
  contactNumber: "6380730461",
  enrollmentDate: "01/01/2000",
  additionalFrontFields: [
    { label: "name", value: "Value1" },
    { label: "Department", value: "Value2" },
  ],
  additionalBackFields: [
    { label: "Dept", value: "Value3" },
    { label: "Dept", value: "Value4" },
  ],
}
]




export default {
  screens,
  accordian,
  upcomingExam,
  completed,
  examHistory,
  notifications,
  payment,
  completedclass,
  events,
  certificates,
  studentDetails,
  paymentgateway,
  studentData,
};
