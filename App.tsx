import React, { useState } from 'react';
import ChatBot from './components/ChatBot/ChatBot';
import Header from './components/Navigation/Header';
import Sidebar from './components/Navigation/Sidebar';
import StickyBanner from './components/Navigation/StickyBanner';
import { Building2, Users, Briefcase, MessageSquare, FileText, Award, Shield, Mail } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <Header onMenuToggle={toggleSidebar} />
      
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onToggle={toggleSidebar} 
        onClose={closeSidebar} 
      />
      
      {/* Sticky Banner */}
      <StickyBanner />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Welcome to TechCorp Internships
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our innovative team and kickstart your career with hands-on experience in cutting-edge technology. 
              We're looking for passionate students ready to make an impact.
            </p>
            <div className="flex items-center justify-center gap-2 text-blue-600 font-medium">
              <MessageSquare size={20} />
              <span>Need help? Chat with our FAQ assistant!</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Our Company</h3>
              <p className="text-gray-600 leading-relaxed">
                Leading technology company focused on innovation and creating solutions that make a positive impact. 
                Founded in 2010, we specialize in software development and AI research.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer internships across Engineering, Product Management, Marketing, HR, Finance, Data Science, 
                UX/UI Design, and Business Development departments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Paid Internships</h3>
              <p className="text-gray-600 leading-relaxed">
                All our internships are paid positions with competitive compensation. We offer both remote and 
                on-site opportunities with housing assistance for those who need to relocate.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Have questions about our internship program? Our AI assistant is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                View Open Positions
              </button>
              <span className="text-blue-200">or</span>
              <span className="text-blue-100">Click the chat icon to ask questions instantly →</span>
            </div>
          </div>
        </section>

        {/* Navigation Sections */}
        <section id="internship-application" className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Internship Application</h2>
            <p className="text-lg text-gray-600 mb-8">
              Start your journey with us by submitting your internship application. We review all applications carefully 
              and will get back to you within 2-3 weeks.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105">
              Start Application
            </button>
          </div>
        </section>

        <section id="offer-letter" className="container mx-auto px-4 py-16 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Offer Letter Generation</h2>
            <p className="text-lg text-gray-600 mb-8">
              Generate and download your official offer letter once you've been accepted into our internship program.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
              Generate Letter
            </button>
          </div>
        </section>

        <section id="certificate-verification" className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificate Verification</h2>
            <p className="text-lg text-gray-600 mb-8">
              Verify the authenticity of internship certificates and completion documents issued by our organization.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-violet-700 transition-all duration-200 transform hover:scale-105">
              Verify Certificate
            </button>
          </div>
        </section>

        <section id="team-join" className="container mx-auto px-4 py-16 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Join Form</h2>
            <p className="text-lg text-gray-600 mb-8">
              Complete your onboarding process and officially join your assigned team and department.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105">
              Join Team
            </button>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our HR team for any questions about the internship program or application process.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-blue-600">internships@techcorp.com</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-blue-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Chatbot */}
      <ChatBot />
    </div>
  );
}

export default App;