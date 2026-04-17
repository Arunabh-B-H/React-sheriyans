import { Bookmark } from "lucide-react";
import Card from "./components/Card";


function App() {
  const jobData = [
  {
    id: 1,
    company: "Amazon",
    logo: "data:image/jpeg;base64,...", // Your base64 string
    postedAt: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    postedAt: "2 days ago",
    title: "Frontend Developer",
    type: "Full-time",
    level: "Intermediate",
    salary: "$150/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    postedAt: "1 day ago",
    title: "Product Designer",
    type: "Contract",
    level: "Senior Level",
    salary: "$140/hr",
    location: "Remote"
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    postedAt: "3 days ago",
    title: "React Engineer",
    type: "Full-time",
    level: "Expert",
    salary: "$180/hr",
    location: "Los Angeles, USA"
  },
  {
    id: 5,
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    postedAt: "1 week ago",
    title: "Software Architect",
    type: "Full-time",
    level: "Senior Level",
    salary: "$200/hr",
    location: "Hyderabad, India"
  },
  {
    id: 6,
    company: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
    postedAt: "4 hours ago",
    title: "Full Stack Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "$90/hr",
    location: "San Francisco, USA"
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    postedAt: "6 days ago",
    title: "Interaction Designer",
    type: "Part-time",
    level: "Intermediate",
    salary: "$110/hr",
    location: "Stockholm, Sweden"
  },
  {
    id: 8,
    company: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    postedAt: "2 weeks ago",
    title: "Lead UI Developer",
    type: "Full-time",
    level: "Lead",
    salary: "$175/hr",
    location: "Tokyo, Japan"
  },
  {
    id: 9,
    company: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    postedAt: "8 hours ago",
    title: "System Engineer",
    type: "Contract",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Austin, USA"
  },
  {
    id: 10,
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    postedAt: "12 days ago",
    title: "Visual Designer",
    type: "Full-time",
    level: "Junior Level",
    salary: "$85/hr",
    location: "Noida, India"
  }
];
  return (
    <div className="parent">
    {jobData.map((job) => (
      <Card
        key={job.id}
        company={job.company}
        logo={job.logo}
        postedAt={job.postedAt}
        title={job.title}
        type={job.type}
        level={job.level}
        salary={job.salary}
        location={job.location}
      />
    ))}
    </div>
  );
}
export default App;
