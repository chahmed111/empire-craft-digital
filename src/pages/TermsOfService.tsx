import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Services Provided</h2>
                <p className="text-muted-foreground mb-4">
                  The Window and Door Guys provides installation services for windows, doors, and related 
                  home improvement products. All services are subject to availability and our standard 
                  terms and conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Warranties and Guarantees</h2>
                <p className="text-muted-foreground mb-4">
                  We provide a 10-year warranty on our installations and products. Warranty terms and 
                  conditions will be provided separately with each installation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  Payment terms will be agreed upon before work commences. We accept various payment 
                  methods including cash, bank transfer, and approved financing options.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Our liability is limited to the value of the services provided. We are not liable for 
                  indirect or consequential damages arising from our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cancellation Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Cancellations must be made in writing. Cancellation terms and any applicable fees 
                  will be outlined in your service agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  For questions about these terms, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: thewindowdoorguyz@gmail.com<br />
                  Phone: +44 743 585 4263
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on our website.
                </p>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;