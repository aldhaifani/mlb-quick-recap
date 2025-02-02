import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          About MLB Quick Recap
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                MLB Quick Recap aims to provide baseball fans with concise,
                engaging summaries of every Major League Baseball game. Our goal
                is to keep you informed and connected to America's favorite
                pastime, no matter how busy your schedule may be. By combining
                Google Cloud's powerful infrastructure with MLB statistics and
                Gemini AI, we aim to create an engaging and accessible platform
                for all baseball enthusiasts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive game recaps for all MLB matches</li>
                <li>Multilingual support (English, Spanish, and Japanese)</li>
                <li>Interactive timelines for key game events</li>
                <li>Detailed statistics and performance metrics</li>
                <li>User-friendly interface for easy navigation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This project is built and maintained by a solo developer
                passionate about programming, technology, and innovation. As a
                student, I am continuously learning and exploring ways to push
                the boundaries of web development, AI, and cloud computing. This
                project is my entry for the Google Cloud x MLB(TM) Hackathon -
                Building with Gemini Models.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                I would love to hear your feedback, suggestions, or any
                questions you may have about the project. Feel free to reach out
                via email:
              </p>
              <p className="mt-2 font-semibold">ox6ar8@icloud.com</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
