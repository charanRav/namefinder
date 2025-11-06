import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Name Finder</title>
        <meta name="description" content="Read Name Finder's privacy policy to understand how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://namefinder-nu.vercel.app/privacy" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Welcome to Name Finder ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website namefinder-nu.vercel.app (the "Site").
                </p>
                <p className="text-muted-foreground">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Use our name generation tool</li>
                  <li>Contact us via email or contact form</li>
                  <li>Subscribe to our newsletter (if applicable)</li>
                  <li>Save favorite names (stored locally in your browser)</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  The personal information we collect may include: name, email address, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-4">
                  When you visit our Site, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Browser type and version</li>
                  <li>IP address</li>
                  <li>Time zone and location data</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect or receive to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our services</li>
                  <li>Understand and analyze how you use our website</li>
                  <li>Develop new products, services, and features</li>
                  <li>Communicate with you for customer service and support</li>
                  <li>Send you updates and marketing communications (with your consent)</li>
                  <li>Process your transactions</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar tracking technologies to track activity on our Site and store certain information. Cookies are files with a small amount of data that are sent to your browser and stored on your device.
                </p>
                <p className="text-muted-foreground mb-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
                <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
                <p className="text-muted-foreground mb-4">
                  We use Google AdSense to display advertisements on our Site. Google AdSense uses cookies to serve ads based on your prior visits to our Site or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Affiliate Links</h3>
                <p className="text-muted-foreground mb-4">
                  Our Site contains affiliate links to domain registrars (such as Namecheap). When you click on these links and make a purchase, we may earn a commission at no additional cost to you. These third-party services have their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Data Storage and Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
                <p className="text-muted-foreground mb-4">
                  Favorite names are stored locally in your browser's local storage and are not transmitted to our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Your Privacy Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The right to access – You have the right to request copies of your personal data</li>
                  <li>The right to rectification – You have the right to request correction of inaccurate information</li>
                  <li>The right to erasure – You have the right to request deletion of your personal data</li>
                  <li>The right to restrict processing – You have the right to request limitation of processing</li>
                  <li>The right to data portability – You have the right to request transfer of your data</li>
                  <li>The right to object – You have the right to object to our processing of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>Email: contact@namefinder.com</li>
                  <li>Website: <a href="https://namefinder-nu.vercel.app" className="text-primary hover:underline">namefinder-nu.vercel.app</a></li>
                </ul>
              </section>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
