import React from 'react';
import Head from 'next/head';
import { Shield, Users, Briefcase, CheckCircle, TrendingUp, Award, ArrowRight, MapPin } from 'lucide-react';

export default function SeekerLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>SEEKER | Trust Infrastructure for Global Talent</title>
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">SEEKER</span>
          </div>
          <a href="/register" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">Trust Infrastructure for </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Global Talent</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            We verify credentials and skills for everyone—from software engineers to electricians.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/register" className="px-8 py-4 bg-indigo-600 rounded-xl font-semibold flex items-center gap-2">
              Hire Verified Talent <TrendingUp className="w-5 h-5" />
            </a>
            <a href="/register" className="px-8 py-4 bg-white/10 border border-white/10 rounded-xl font-semibold">
              Get Verified Free
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-slate-900/30 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold">52,473</div>
            <div className="text-slate-400">Verified Workers</div>
          </div>
          <div>
            <div className="text-4xl font-bold">12,847</div>
            <div className="text-slate-400">Active Employers</div>
          </div>
          <div>
            <div className="text-4xl font-bold">87%</div>
            <div className="text-slate-400">Avg Trust Score</div>
          </div>
          <div>
            <div className="text-4xl font-bold">156,234</div>
            <div className="text-slate-400">Credentials Verified</div>
          </div>
        </div>
      </section>

      {/* Workers */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recently Verified</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Emmanuel O.', trade: 'Master Electrician', score: 94, location: 'Lekki, Lagos', rate: 5000 },
            { name: 'Fatima A.', trade: 'Professional Nanny', score: 91, location: 'Wuse, Abuja', rate: 3500 },
            { name: 'Kofi M.', trade: 'Plumbing Expert', score: 78, location: 'Accra, Ghana', rate: 2800 }
          ].map((worker, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-xl font-bold">
                  {worker.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{worker.name}</h3>
                  <p className="text-sm text-slate-400">{worker.trade}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <MapPin className="w-4 h-4" /> {worker.location}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <span className="text-2xl font-bold">₦{worker.rate.toLocaleString()}</span>
                <span className="text-indigo-400 font-bold">{worker.score} Score</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-slate-500">
        <p>© 2024 SEEKER Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}