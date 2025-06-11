import { FAQItem } from '../types/chat';

export const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How do I apply for an internship?',
    answer: 'To apply for an internship, visit our careers page and submit your resume along with a cover letter. Applications are typically reviewed within 2-3 weeks. Make sure to highlight relevant coursework, projects, and any previous experience.',
    keywords: ['apply', 'application', 'internship', 'how to apply', 'submit', 'resume'],
    category: 'internship',
    followUp: ['What documents do I need?', 'When is the application deadline?', 'What are the requirements?']
  },
  {
    id: '2',
    question: 'What are the internship requirements?',
    answer: 'Our internship requirements include: currently enrolled in a relevant degree program, minimum GPA of 3.0, strong communication skills, and relevant coursework or experience. Some positions may require specific technical skills.',
    keywords: ['requirements', 'qualifications', 'eligibility', 'gpa', 'skills', 'criteria'],
    category: 'internship',
    followUp: ['What GPA do I need?', 'Do you accept international students?', 'What technical skills are needed?']
  },
  {
    id: '3',
    question: 'When is the application deadline?',
    answer: 'Application deadlines vary by program: Summer internships typically close in March, Fall internships in July, and Spring internships in November. We recommend applying early as positions fill quickly.',
    keywords: ['deadline', 'when', 'date', 'apply by', 'close', 'timeline'],
    category: 'application',
    followUp: ['What are the different internship periods?', 'Can I apply for multiple positions?', 'Is there a rolling admission?']
  },
  {
    id: '4',
    question: 'What documents do I need to apply?',
    answer: 'Required documents include: updated resume, cover letter, unofficial transcript, and two professional or academic references. Some positions may require a portfolio or writing samples.',
    keywords: ['documents', 'materials', 'resume', 'cover letter', 'transcript', 'references'],
    category: 'application',
    followUp: ['Can I submit after the deadline?', 'How should I format my resume?', 'Who can be a reference?']
  },
  {
    id: '5',
    question: 'Do you offer remote internships?',
    answer: 'Yes, we offer both remote and hybrid internship opportunities. Remote positions are available for certain roles, while others require on-site presence. This will be clearly specified in each job posting.',
    keywords: ['remote', 'work from home', 'virtual', 'online', 'hybrid', 'location'],
    category: 'internship',
    followUp: ['What roles are available remotely?', 'Do remote interns get the same experience?', 'What technology do I need for remote work?']
  },
  {
    id: '6',
    question: 'Are internships paid?',
    answer: 'Yes, all our internships are paid positions. Compensation varies based on the role, location, and your academic level. We believe in fairly compensating our interns for their valuable contributions.',
    keywords: ['paid', 'salary', 'compensation', 'money', 'stipend', 'wage'],
    category: 'internship',
    followUp: ['What is the typical salary range?', 'Are there additional benefits?', 'How often are interns paid?']
  },
  {
    id: '7',
    question: 'What is your organization about?',
    answer: 'We are a leading technology company focused on innovation and creating solutions that make a positive impact. Founded in 2010, we specialize in software development, AI research, and digital transformation services for Fortune 500 companies.',
    keywords: ['about', 'company', 'organization', 'what do you do', 'mission', 'background'],
    category: 'organization',
    followUp: ['What are your core values?', 'Where are you located?', 'How many employees do you have?']
  },
  {
    id: '8',
    question: 'What departments offer internships?',
    answer: 'We offer internships across multiple departments including Engineering, Product Management, Marketing, Human Resources, Finance, Data Science, UX/UI Design, and Business Development. Each department has specific roles and requirements.',
    keywords: ['departments', 'teams', 'divisions', 'areas', 'roles', 'positions'],
    category: 'internship',
    followUp: ['What does the Engineering team do?', 'Are there Product Management internships?', 'What about Marketing opportunities?']
  },
  {
    id: '9',
    question: 'How long are the internships?',
    answer: 'Our internships typically last 10-12 weeks for summer programs, and 12-16 weeks for fall/spring programs. Some specialized roles may offer flexible duration based on academic schedules and project requirements.',
    keywords: ['duration', 'length', 'how long', 'weeks', 'months', 'time'],
    category: 'internship',
    followUp: ['Can I extend my internship?', 'Are part-time internships available?', 'What is the weekly commitment?']
  },
  {
    id: '10',
    question: 'Do you provide housing assistance?',
    answer: 'For interns relocating more than 50 miles, we provide housing assistance including subsidized housing options, relocation stipends, or partnerships with local housing providers. Details are provided upon offer acceptance.',
    keywords: ['housing', 'accommodation', 'relocation', 'living', 'apartment', 'assistance'],
    category: 'internship',
    followUp: ['What cities do you have offices in?', 'How much is the housing stipend?', 'Can I choose my own housing?']
  }
];

export const quickSuggestions = [
  'How do I apply for an internship?',
  'What are the requirements?',
  'Are internships paid?',
  'Do you offer remote work?',
  'Tell me about your company'
];

export const fallbackResponses = [
  "I'm not sure about that specific question, but I'd be happy to help you with information about our internships, application process, or organization. Try asking something like 'How do I apply?' or choose from the suggestions below.",
  "That's a great question! While I don't have specific information about that topic, I can help you with internship applications, requirements, or general company information. What would you like to know?",
  "I don't have details on that particular topic, but I'm here to help with frequently asked questions about our internship program and organization. Feel free to ask about applications, requirements, or our company!"
];