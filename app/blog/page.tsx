import Image from "next/image";

//image import
import khnog5 from "../images/group3-blog/khnog5.jpg";
import it_pro_proseth from "../images/group3-blog/it_pro_career_iii.jpg"
import cam4_0_ii from "../images/group3-blog/cambodia4.0_ii.jpg"
import it_career_iv from "../images/group3-blog/it-career-iv.jpg"
import training_wing from "../images/group3-blog/training_cert.jpg"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "KHNOG 5 2023",
      date: "22 October 2023",
      location: "CKCC Hall, RUPP",
      description:
        "Attended the KHNOG 5 conference, an insightful event focused on computer networking, cybersecurity, and internet infrastructure. Gained valuable knowledge from industry experts, participated in discussions on network security, and connected with professionals in the field.",
      image: khnog5,
    },
    {
      id: 2,
      title: "IT Professional Career III - Proseth Solutions",
      date: "17 December 2023",
      location: "CKCC Hall, RUPP",
      description:
        "Participated in IT Professional Career III, organized by Proseth Solutions. The event provided deep insights into cloud computing, its applications, and career opportunities in the IT industry. Engaged with experienced professionals, learned about the latest trends in cloud technologies, and discussed the future of IT careers.",
      image: it_pro_proseth,
    },
    {
      id: 3,
      title: "Cambodia4.0 II Forum On `Cyber Security`",
      date: "6 April 2024",
      location: "Camtech University",
      description:
        "Attended the Cambodia4.0 II Forum, focusing on cybersecurity. The forum covered critical topics such as cyber threats, data protection, and ethical hacking. Listened to expert speakers share their experiences in securing digital infrastructures and gained a better understanding of modern cybersecurity challenges.",
      image: cam4_0_ii,
    },
    {
      id: 4,
      title: "IT Professional Career IV - Proseth Solutions",
      date: "26 January 2025",
      location: "CKCC Hall, RUPP",
      description:
        "Joined IT Professional Career IV, hosted by Proseth Solutions, exploring the evolving role of AI in career development. The event featured discussions on how AI is reshaping industries, improving productivity, and influencing future job opportunities. Engaged in meaningful conversations with industry leaders and gained a clearer perspective on the integration of AI in various career paths.",
      image: it_career_iv,
    },
    {
      id: 5,
      title: "Training: New Employee Orientation 2025 - Wing Bank",
      date: "10,11 February 2025",
      location: "Wing Bank Bokor Branch",
      description:
        "Completed a short training on **New Employee Orientation**, covering company policies, workplace culture, and professional expectations. Learned about internal processes, teamwork dynamics, and key responsibilities to ensure a smooth transition into the role.",
      image: training_wing,
    },
  ];


  return (
    <div>
      <main className="w-full mx-auto max-w-[1024px] p-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            My <span className="text-[#00ADB5]">Blogs</span>
          </h1>
          <p className="text-gray-300 mt-2">
            Sharing my events, conferences, and experiences to showcase my
            journey in tech.
          </p>
        </header>

        {/* Blog Post Cards */}
        <section className="space-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#393E46] rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-1">
                  <strong>Date:</strong> {post.date}
                </p>
                <p className="text-gray-300 mb-1">
                  <strong>Location:</strong> {post.location}
                </p>
                <p className="text-gray-300 mt-4">{post.description}</p>
              </div>
              <Image
                src={post.image}
                alt={post.title}
                width={1024}
                height={576}
                className="w-full object-cover p-6"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
