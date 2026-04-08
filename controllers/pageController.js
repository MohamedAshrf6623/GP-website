const asyncHandler = require('../utils/asyncHandler');
const ErrorHandler = require('../utils/errorHandler');
const { sendFormEmail } = require('../services/mailService');

// Page Controller

exports.home = asyncHandler(async (req, res) => {
  res.render('pages/home', {
    title: 'AlzaWare | Smart Glasses for Alzheimer Support',
    pageTitle: 'Smart Glasses for Alzheimer Support'
  });
});

exports.features = asyncHandler(async (req, res) => {
  res.render('pages/features', {
    title: 'Features | AI Modules',
    pageTitle: 'AI Modules & Features'
  });
});

exports.architecture = asyncHandler(async (req, res) => {
  res.render('pages/architecture', {
    title: 'Architecture | Cloud Infrastructure',
    pageTitle: 'Cloud Infrastructure & Backend'
  });
});

exports.team = asyncHandler(async (req, res) => {
  const teamMembers = [
    {
      name: 'Mohamed Ashraf Nashat',
      specialty: 'Backend',
      github: 'https://github.com/MohamedAshrf6623',
      linkedin: 'https://www.linkedin.com/in/mohamed-ashraf-9b770727a/'
    },
    {
      name: 'Aya Wael Mohamed',
      specialty: 'AI',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Sarah Abdo Awad',
      specialty: 'AI',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Nada Amr Farouk',
      specialty: 'Flutter',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Mena Abdel Meguid Mostafa',
      specialty: 'Flutter',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Yehia Hamdy Sayed Ahmed Mohamed',
      specialty: 'Hardware',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Mohamed Fattouh Abdel Hamid',
      specialty: 'Cloud',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Toqa Mohamed Farouk',
      specialty: 'Backend',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Mariam Ali Ali',
      specialty: 'AI',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Somaya Khaled Mohamed',
      specialty: 'AI',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Yomna Mahmoud El Sayed Abdel Khalek',
      specialty: 'Database',
      github: '#',
      linkedin: '#'
    },
    {
      name: 'Abdelrahman Mohamed Wasfy',
      specialty: 'Flutter',
      github: '#',
      linkedin: '#'
    }
  ];

  res.render('pages/team', {
    title: 'Team | AlzaWare',
    pageTitle: 'Project Team',
    members: teamMembers
  });
});

exports.contact = asyncHandler(async (req, res) => {
  res.render('pages/contact', {
    title: 'Contact | AlzaWare',
    pageTitle: 'Contact AlzaWare'
  });
});

exports.contactSubmit = asyncHandler(async (req, res) => {
  const payload = req.body || {};
  const type = payload.type === 'demo' ? 'demo' : 'contact';
  const name = payload.fullName || payload.name;
  const email = payload.email;
  const message = payload.message || payload.notes;

  // Validate input
  if (!name || !email) {
    throw new ErrorHandler('Name and email are required', 400);
  }

  if (type === 'contact' && !message) {
    throw new ErrorHandler('Message is required', 400);
  }

  await sendFormEmail(payload);

  console.log('Form received:', { type, name, email });

  res.status(200).json({
    success: true,
    message: type === 'demo' ? 'Your demo request was sent successfully.' : 'Your message was sent successfully.'
  });
});
