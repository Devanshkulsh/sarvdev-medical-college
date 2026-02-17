import React from "react";
import { Link } from "react-router-dom";
import { Leaf, ArrowRight, Target, Eye, Heart } from "lucide-react";

function Button({ asChild = false, className = "", children, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${className} ${children.props.className || ""}`.trim(),
      ...props,
    });
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

/* Card */
function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-(--brand-soft) bg-white text-(--text-primary) shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

/* Badge */
function Badge({ variant = "outline", className = "", children, ...props }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold";
  const variantClass =
    variant === "outline"
      ? "border border-[var(--brand-primary)] text-[var(--brand-primary)] bg-white"
      : "bg-[var(--brand-primary)] text-white";
  return (
    <div className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </div>
  );
}

/* Feature Item */
function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-(--brand-highlight)/20 rounded-lg text-(--brand-primary) shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-(--text-primary)">{title}</h4>
        <p className="text-sm text-(--text-muted)">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="relative">
            <div className="relative">
              <img
                src="/homepage/about-section.webp"
                alt="Sarvdev Ayurvedic Medical College and Maha Mrityunjay Hospital campus"
                title="Sarvdev Ayurvedic Medical College | BAMS College in Uttar Pradesh | Ayurvedic Hospital"
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl shadow-lg object-cover"
              />

              {/* Floating Card */}
              <div className="hidden md:block absolute -bottom-6 -right-6">
                <Card className="bg-(--brand-primary) text-white shadow-xl max-w-55">
                  <CardContent className="p-6 text-center">
                    <p className="text-4xl font-bold text-(--brand-highlight)">
                      5000+
                    </p>
                    <p className="text-sm mt-1 text-[color:var(--text-primary)]">
                      Years of Ayurvedic Wisdom
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <Badge variant="outline" className="inline-flex items-center">
              <Leaf className="h-4 w-4" />
              <span>About Our Institution</span>
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--text-primary)">
              Pioneers in Ayurvedic{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--brand-primary), var(--brand-highlight))",
                }}
              >
                Education & Healthcare
              </span>
            </h2>

            <p className="text-(--text-muted) leading-relaxed">
              Maha Mrityunjay hospital is the pioneer in the field of Ayurveda
              in the world. The Hospital offers treatment for every ailment and
              is affordable. The Hospital has is successfully running Out
              patient departments in Kayachikitsa, Kaumarbhritya, Panchkarma,
              Prasuti & Stri Roga, Shalakya tantra, Shalya tantra,
              Swasthavritta, and Physiotherapy. The Hospital prides itself in
              providing a well-equipped, hygienically maintained panchkarma
              therapy rooms to suit the need and affordability of one and all.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <FeatureItem
                icon={<Target className="h-5 w-5" />}
                title="Our Mission"
                description="to improve the health of our Community and the Global Community by setting the standard of excellence in patient care."
              />
              <FeatureItem
                icon={<Eye className="h-5 w-5" />}
                title="Our Vision"
                description="Quality education and excellence in patient care"
              />
              <FeatureItem
                icon={<Heart className="h-5 w-5" />}
                title="Our Values"
                description="Trust, honesty, mutual respect and compassion"
              />
              <FeatureItem
                icon={<Leaf className="h-5 w-5" />}
                title="Our Heritage"
                description="5000 years of Ayurvedic wisdom and tradition"
              />
            </div>

            {/* CTA */}
            <Button
              asChild
              className="inline-flex items-center gap-2 rounded-md bg-(--brand-primary) text-white px-4 py-2 font-semibold shadow hover:bg-(--brand-secondary) transition-colors"
            >
              <Link to="/about" className="inline-flex items-center gap-2">
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
