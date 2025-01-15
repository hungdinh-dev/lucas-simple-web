import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";
import {
  User,
  Users,
  Presentation,
  Code,
  Brain,
  Coffee,
  Trophy,
  Heart,
  Monitor,
  Network,
  ArrowRight,
} from "lucide-react";
import Marquee from "react-fast-marquee";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold mb-6">CYA</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            A selective residency program where ambitious young entrepreneurs
            build extraordinary things together
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100">
              Apply for Residency
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why We Exist</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 rounded-xl">
              <div className="text-2xl font-bold mb-6">
                Community & Commitment
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                We fundamentally believe great things come from commitment and
                accountability from the community around you which an online
                program can't offer.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-xl">
              <div className="text-2xl font-bold mb-6">Balanced Growth</div>
              <p className="text-slate-600 text-lg leading-relaxed">
                Even though we praised the hustling culture, we believe you can
                only build great things from a balanced development: an
                entrepreneur mind, an athlete body, an artist soul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-4 bg-slate-50 overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Do</h2>

          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h3 className="text-2xl font-bold mb-4">
              A Game-Changing Residency
            </h3>
            <p className="text-slate-600 text-lg">
              Bring 10 super talented young founders together, give them space
              to build cool stuff, play sports, and become best buds. Simple as
              that.
            </p>
          </div>

          <div className="flex flex-row gap-6 overflow-x-auto pb-4 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm flex-1 min-w-[250px]">
              <h4 className="text-xl font-bold mb-2">Build Together</h4>
              <p className="text-slate-600">
                Weekly workshops where we get our hands dirty building stuff
                that matters
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex-1 min-w-[250px]">
              <h4 className="text-xl font-bold mb-2">Play Together</h4>
              <p className="text-slate-600">
                Because nothing beats a good game of basketball after crushing
                code all day
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex-1 min-w-[250px]">
              <h4 className="text-xl font-bold mb-2">Grow Together</h4>
              <p className="text-slate-600">
                Late night convos, shared wins, and maybe a few energy drinks
              </p>
            </div>
          </div>

          {/* Horizontally Scrolling Icons */}
          <Marquee autoFill pauseOnHover className="rounded-lg">
            <div className="bg-white p-6 rounded-xl shadow-sm w-40 ml-10">
              <Code size={48} className="text-slate-600" />
              <div className="mt-2 font-medium">Hack Sessions</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm w-40 ml-10">
              <Trophy size={48} className="text-slate-600" />
              <div className="mt-2 font-medium">Team Sports</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm w-40 ml-10">
              <Coffee size={48} className="text-slate-600" />
              <div className="mt-2 font-medium">Late Nights</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm w-40 ml-10">
              <Brain size={48} className="text-slate-600" />
              <div className="mt-2 font-medium">Ideation</div>
            </div>
          </Marquee>
        </div>
      </section>

      {/* Why Should You Join - Grid Layout */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Should You Join?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="col-span-2 row-span-2 bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
              <img
                src="/api/placeholder/800/600"
                alt="Main feature"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Instant plug-and-play systemsddddddddd
                </h3>
                <p className="text-xl">
                  Leverage our proven systems to grow your personal brand and a
                  community of 1,000,000+ raving fans.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl p-6 relative overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Feature 1"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">
                  Automate your business
                </h3>
                <p>Implement proven systems that remove you from operations</p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-xl p-6 relative overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Feature 2"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">
                  Personal board of advisors
                </h3>
                <p>Access successful entrepreneurs for valuable feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Community */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Meet the Community
          </h2>

          {/* Organizers */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Organizers</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "Program Director",
                  bio: "Former YC founder, passionate about building communities and empowering the next generation of founders.",
                  icon: <User size={24} />,
                },
                {
                  name: "Sarah Kim",
                  role: "Community Lead",
                  bio: "Community builder with experience running accelerators and founder programs across Asia.",
                  icon: <Heart size={24} />,
                },
              ].map((person, i) => (
                <div key={i} className="bg-white p-8 rounded-xl flex gap-6">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center">
                    {person.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{person.name}</h4>
                    <div className="text-slate-600 font-medium mb-2">
                      {person.role}
                    </div>
                    <p className="text-slate-600">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Mentors</h3>
            <Marquee>
              <div className="flex gap-6 overflow-x-auto pb-4">
                {[
                  {
                    name: "David Wong",
                    role: "Tech Lead at SpaceX",
                    expertise: "Deep Tech, Aerospace",
                  },
                  {
                    name: "Michelle Park",
                    role: "Product Lead at Stripe",
                    expertise: "Fintech, Product Strategy",
                  },
                  {
                    name: "James Rivera",
                    role: "YC Partner",
                    expertise: "Startup Growth, Fundraising",
                  },
                ].map((mentor, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-xl min-w-[300px] flex gap-4"
                  >
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <User size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{mentor.name}</h4>
                      <div className="text-slate-600 font-medium mb-2">
                        {mentor.role}
                      </div>
                      <p className="text-slate-600 text-sm">
                        {mentor.expertise}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Who Should Join
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Technical Founders</h3>
              <p className="text-slate-600">
                Engineers and developers building the next generation of
                technology
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Product Visionaries</h3>
              <p className="text-slate-600">
                Product managers and designers with a clear vision for the
                future
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Domain Experts</h3>
              <p className="text-slate-600">
                Specialists with deep knowledge in emerging industries
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Creative Innovators</h3>
              <p className="text-slate-600">
                Creative problem-solvers bringing fresh perspectives to old
                problems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">FAQ</h2>
          <div className="space-y-8">
            {[
              {
                q: "How long is the residency?",
                a: "The residency runs for X months, giving you enough time to build something meaningful while forming lasting connections.",
              },
              {
                q: "What's the selection process?",
                a: "We carefully review each application to ensure we bring together a diverse group of talented individuals who can contribute to and benefit from the community.",
              },
              {
                q: "Is accommodation provided?",
                a: "Yes! We take care of your stay so you can focus on what matters - building great things and connecting with amazing people.",
              },
              {
                q: "What's expected of me?",
                a: "Show up, be present, build cool stuff, and be a good community member. That's pretty much it!",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Adventure?
          </h2>
          <p className="text-xl mb-8">Be part of something extraordinary</p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100">
            Apply for Residency
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
