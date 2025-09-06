import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Header with logo on left and login button on right */}
      <header className="w-full flex justify-between items-center px-6 py-4 shadow-md">
        <div className="flex items-center">
          <Image 
            src="/logo1.png" // replace with your logo path
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div>
          <Link href="/dashboard">
            <Button className="text-lg px-6 py-2 rounded-lg shadow-md">
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex flex-col flex-1 items-center px-6 py-10 space-y-12">
        
        {/* Image section about the website */}
        <section className="w-full max-w-4xl flex justify-center">
          <Image 
            src="/image.png" // replace with your content image path
            alt="About Website"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </section>

        {/* Content section 1 */}
<section className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">About Our Website</h2>
  <div className="space-y-4 text-gray-700">
    <p>
      PrepGrid is an innovative platform dedicated to helping students and professionals excel in job interviews. Powered by advanced AI technology, PrepGrid provides realistic mock interviews using the Google Gemini API, allowing users to practice and refine their skills in a supportive environment.
    </p>
    <p>
      Our mission is to make interview preparation accessible, personalized, and effective. By offering instant feedback, performance tracking, and tailored interview scenarios, PrepGrid empowers users to build confidence and sharpen their communication skills.
    </p>
    <p>
      Built with the Next.js framework and styled with TailwindCSS, our platform delivers a fast, responsive, and user-friendly experience. With secure authentication, detailed analytics, and a modern interface, PrepGrid is your trusted companion in career growth and self-improvement.
    </p>
    <p>
      Whether you’re a student preparing for your first job or a professional aiming to ace your next interview, PrepGrid is here to guide you every step of the way.
    </p>
  </div>
</section>


        {/* Content section 2 */}
<section className="w-full max-w-4xl bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Features</h2>
  <ul className="list-disc list-inside space-y-2">
    <li>✅ <strong>AI-Powered Interviews</strong> – Practice with realistic interview scenarios using Google Gemini API.</li>
    <li>✅ <strong>Personalized Feedback</strong> – Receive instant, actionable suggestions to improve your responses.</li>
    <li>✅ <strong>Next.js Framework</strong> – Enjoy a fast, scalable, and SEO-friendly platform.</li>
    <li>✅ <strong>Secure Authentication</strong> – Login and signup system to protect your data and progress.</li>
    <li>✅ <strong>Interview Analytics</strong> – Track your performance and growth over time.</li>
    <li>✅ <strong>Modern UI/UX</strong> – Clean, responsive, and easy-to-use interface built with TailwindCSS.</li>
  </ul>
</section>

        {/* Additional sections can be added similarly */}

      </main>

    </div>
  );
}
