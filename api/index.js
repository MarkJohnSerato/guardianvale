module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const projects = [
    {
      id: 1,
      title: 'CloudStack Staff',
      description: 'Build a CloudStack dashboard for managing virtual machines, networks, and storage.',
      status: 'Coming soon',
      url: '/placeholder-pages/project-cloudstack.html'
    },
    {
      id: 2,
      title: 'Network Operations Dashboard',
      description: 'Create a dashboard to monitor network health, uptime, and security alerts.',
      status: 'Coming soon',
      url: '/placeholder-pages/project-network-dashboard.html'
    },
    {
      id: 3,
      title: 'Amortization Calculator',
      description: 'Calculate loan payments in Philippine Peso with monthly breakdown and full amortization schedule.',
      status: 'Live',
      url: '/placeholder-pages/project-amortization-calculator.html'
    }
  ];

  res.status(200).json(projects);
};
