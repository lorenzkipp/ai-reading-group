// app/readings/data.ts

export type Reading = {
  title: string
  authors?: string
  venue?: string
  year?: string | number
  link?: string
  note?: string
  tags?: string[]
}

export const readings: Record<string, Reading[]> = {
  'Foundational Literature': [
    {
      title: 'Skills, tasks and technologies: Implications for employment and earnings',
      authors: 'D. Acemoglu & D. Autor',
      venue: 'Handbook of Labor Economics, Vol. 4',
      year: 2011,
      link: '',
    },
    {
      title: 'Automation and new tasks: How technology displaces and reinstates labor',
      authors: 'D. Acemoglu & P. Restrepo',
      venue: 'Journal of Economic Perspectives',
      year: 2019,
      link: '',
    },
    {
      title: 'Platform competition in two-sided markets',
      authors: 'J.-C. Rochet & J. Tirole',
      venue: 'Journal of the European Economic Association',
      year: 2003,
      link: '',
    },
    {
      title: 'AI-tocracy',
      authors: 'M. Beraja, J. Kao, C. Yang & N. Yuchtman',
      venue: 'Quarterly Journal of Economics',
      year: 2023,
      link: '',
    },
    {
      title: 'The political economy of AI: Towards democratic control of the means of prediction',
      authors: 'M. Kasy',
      venue: 'INET Oxford Working Paper',
      year: 2023,
      link: '',
    },

    {
      title: 'The Economics of Transformative AI',
      authors: 'NBER (eds.)',
      link: 'https://www.nber.org/books-and-chapters/economics-transformative-ai',
      note: 'Essay Collection',
      tags: ['overview'],
      venue: '',
      year: '',
    },
    {
      title: 'The “Wage Ladder” and Labor Demand: New Occupations and Employment Growth',
      authors: 'D. Autor, C. Chin, A. Salomons & B. Seegmiller',
      venue: 'Quarterly Journal of Economics',
      year: 2024,
      link: 'https://academic.oup.com/qje/article/139/3/1399/7630187',
    },
    {
      title: 'The Economics of Data',
      authors: 'L. Veldkamp & C. Chung',
      venue: 'Journal of Economic Literature',
      link: 'https://www.aeaweb.org/articles?id=10.1257/jel.20221580',
      tags: ['data'],
      year: '2024',
    },
  ],

  Distribution: [
    {
      title: 'The simple macroeconomics of AI',
      authors: 'D. Acemoglu',
      venue: 'Economic Policy',
      year: 2025,
      link: 'https://www.nber.org/papers/w32487',
    },
    {
      title: 'Generative AI at work',
      authors: 'E. Brynjolfsson, D. Li & L. Raymond',
      venue: 'Quarterly Journal of Economics',
      year: 2025,
      link: 'https://academic.oup.com/qje/article/140/2/889/7990658',
    },
    {
      title: 'Applying AI to rebuild middle class jobs',
      authors: 'D. Autor',
      venue: 'NBER Working Paper 32140',
      year: 2024,
      link: 'https://www.nber.org/papers/w32140',
    },
    {
      title: 'Artificial Intelligence and Its Implications for Income Distribution and Unemployment',
      authors: 'A. Korinek & J. E. Stiglitz',
      venue: 'NBER Working Paper 24174',
      year: 2019,
      link: 'https://www.nber.org/papers/w24174',
    },
    {
      title: 'AI and Jobs: Evidence from Online Vacancies',
      authors: 'D. Acemoglu, D. Autor, J. Hazell & P. Restrepo',
      venue: 'Journal of Labor Economics',
      year: 2022,
      link: 'https://www.journals.uchicago.edu/doi/abs/10.1086/718327',
    },
    {
      title: 'AI Adoption and Inequality',
      authors: 'E. J. Rockall, M. M. Tavares & P. Pizzinelli',
      venue: 'IMF Working Paper 25/68',
      year: 2025,
      link: 'https://www.imf.org/en/Publications/WP/Issues/2025/04/04/AI-Adoption-and-Inequality-565729',
    },
    {
      title: 'Artificial intelligence and wage inequality',
      authors: 'A. Georgieff',
      venue: 'OECD Working Paper',
      year: 2024,
      link: 'https://www.oecd.org/en/publications/artificial-intelligence-and-wage-inequality_bf98a45c-en.html',
    },
    // Your suggested additions:
    {
      title: 'Artificial Intelligence in the Knowledge Economy',
      authors: 'E. Ide & D. Talamàs',
      link: 'https://www.journals.uchicago.edu/doi/10.1086/737233',
      note: '',
      tags: ['inequality'],
      venue: 'Journal of Political Economy',
      year: '2025',
    },
    {
      title: 'Induced Automation Innovation: Evidence from Firm-Level Patent Data',
      authors: 'D. Hémous, M. Olsen, C. Zanella & A. Dechezleprêtre',
      venue: 'Journal of Political Economy',
      year: 2025,
      link: 'https://www.journals.uchicago.edu/doi/10.1086/734778',
      tags: ['automation'],
    },
    {
      title: 'AER Session: AI and the Future of Work',
      authors: 'AER 2025 session',
      link: 'https://www.aeaweb.org/conference/2025/program/1378?q=eNqrVipOLS7OzM8LqSxIVbKqhnGVrJQMlWp1lJITS1LT84sqgXwlHaXE4uL8ZAizJLUoF8JKSYTKlmTmpkJYZZmp5SDDigoKgAKmBiCTChLTQbJmSrVcMFnqXCJl',
      note: 'Session page (evidence on Europe)',
      venue: '',
      year: '',
    },
  ],

  'Power, Concentration, and Control': [
    {
      title: 'Concentrating Intelligence: Scaling and Market Structure in AI',
      authors: 'A. Korinek & J. Vipra',
      venue: 'NBER Working Paper 33139',
      year: 2024,
      link: 'https://www.nber.org/papers/w33139',
    },
    {
      title: 'Market Power in Artificial Intelligence',
      authors: 'J. S. Gans',
      venue: 'NBER Working Paper 32270',
      year: 2024,
      link: 'https://www.nber.org/papers/w32270',
    },
    {
      title: 'AI and Democratic Equality: How Surveillance Capitalism and Computational Propaganda Threaten Democracy',
      authors: 'B. Black',
      venue: 'Springer (Law and the Future of Meaningful Work, 2024)',
      year: 2024,
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-73741-1_21',
    },
    {
      title: 'Big Other: Surveillance Capitalism and the Prospects of an Information Civilization',
      authors: 'S. Zuboff',
      venue: 'Journal of Information Technology',
      year: 2015,
      link: 'https://journals.sagepub.com/doi/10.1057/jit.2015.5',
    },
    {
      title: 'Exporting the Surveillance State via Trade in AI',
      authors: 'M. Beraja, J. Kao, C. Yang & N. Yuchtman',
      venue: 'NBER Working Paper 31676',
      year: 2023,
      link: 'https://www.nber.org/papers/w31676',
    },
    // Your suggested addition:
    {
      title: 'Algorithmic Pricing and Competition: Empirical Evidence from the German Retail Gasoline Market',
      authors: 'S. Assad, R. Clark, D. Ershov, & L. Xu',
      venue: 'Journal of Political Economy',
      link: 'https://www.journals.uchicago.edu/doi/10.1086/726906',
      tags: ['empirical', 'competition'],
      year: '2024',
    },
  ],

  Geoeconomics: [
    {
      title: 'The Global Impact of AI: Mind the Gap',
      authors: 'E. Cerutti et al.',
      venue: 'IMF Working Paper 25/76',
      year: 2025,
      link: 'https://www.imf.org/en/Publications/WP/Issues/2025/04/11/The-Global-Impact-of-AI-Mind-the-Gap-566129',
    },
    {
      title: 'Putting Economics Back Into Geoeconomics',
      authors: 'C. Clayton, M. Maggiori & J. Schreger',
      venue: 'NBER Working Paper 33681',
      year: 2025,
      link: 'https://www.nber.org/papers/w33681',
    },
    {
      title: 'Global AI governance: barriers and pathways forward',
      authors: 'H. Roberts et al.',
      venue: 'International Affairs',
      year: 2024,
      link: 'https://academic.oup.com/ia/article/100/3/1275/7641064',
    },
    {
      title: 'Arms Race or Innovation Race? Geopolitical AI Development',
      authors: 'S. Schmid, D. Lambach, C. Diehl, & Christian Reuter',
      venue: 'Geopolitics',
      year: 2025,
      link: 'https://www.tandfonline.com/doi/full/10.1080/14650045.2025.2456019',
    },
    {
      title: 'Digital Disruption: AI and international trade policy',
      authors: 'R. Seamans & M. Raj',
      venue: 'Oxford Review of Economic Policy',
      year: 2023,
      link: 'https://ora.ox.ac.uk/objects/uuid:18f7271f-dd14-4c20-9d69-03c49e82a7ed',
    },
    {
      title: 'Co-Governance and the Future of AI Regulation',
      authors: 'S. A. Thompson & J. Martinez',
      venue: 'Harvard Law Review',
      year: 2025,
      link: 'https://harvardlawreview.org/print/vol-138/co-governance-and-the-future-of-ai-regulation/',
    },
    {
      title: 'The AI Dilemma: Growth versus Existential Risk',
      authors: 'C. Jones',
      link: 'https://www.aeaweb.org/articles?id=10.1257/aeri.20230570',
      venue: 'American Economic Review: Insights',
      year: '2024',
    },
  ],

  Information: [
    {
      title: 'When Big Data Enables Behavioral Manipulation',
      authors: 'D. Acemoglu, A. Makhdoumi, A. Malekian & A. Ozdaglar',
      venue: 'American Economic Review: Insights',
      year: 2025,
      link: 'https://www.aeaweb.org/articles?id=10.1257/aeri.20230589',
    },
    {
      title: 'GenAI Misinformation, Trust, and News Consumption: Field Experiment',
      authors: 'F. Campante, R. Durante, M. Hagemeister & A. Sen',
      venue: 'NBER Working Paper 34100',
      year: 2025,
      link: 'https://www.nber.org/papers/w34100',
    },
    {
      title: 'The Polarizing Effect of Partisan Echo Chambers',
      authors: 'S. B. Hobolt, F. Lawall & J. Tilley',
      venue: 'American Political Science Review',
      year: 2023,
      link: 'https://www.cambridge.org/core/journals/american-political-science-review/article/polarizing-effect-of-partisan-echo-chambers/5044B63A13A458A97CA747E9DCA07228',
    },
    {
      title: 'Echo chamber formation sharpened by priority users',
      authors: 'G. F. de Arruda, F. N. Silva, L. F. Costa & S. M. Amaral',
      venue: 'iScience',
      year: 2024,
      link: 'https://www.sciencedirect.com/science/article/pii/S258900422402323X',
    },
    {
      title: 'AI-Generated Misinformation: Case Study across Brazil, Germany, UK',
      authors: 'R. Cazzamatta & E. Sarısakaloğlu',
      venue: 'Journal of Communication (forthcoming)',
      year: 2025,
      link: 'https://journals.sagepub.com/doi/10.1177/27523543251344971',
    },
    {
      title: 'Artificial intelligence, algorithmic recommendations and competition',
      authors: 'E. Calvano, G. Calzolari, V. Denicolò & S. Pastorello',
      venue: 'Working paper',
      year: 2023,
      link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4448010',
    },
    {
      title: 'AI emerges as the frontier in behavioral science',
      authors: 'Q. Mei, J. Xie, J. Walter & D. McDuff',
      venue: 'PNAS Nexus',
      year: 2024,
      link: 'https://www.pnas.org/doi/10.1073/pnas.2401336121',
    },
    // Your suggested addition:
    {
      title: 'The impact of AI and digital platforms on the information ecosystem',
      authors: 'J. E. Stiglitz & Màxim Ventura-Bolet',
      link: 'https://www.nber.org/system/files/chapters/c15317/c15317.pdf',
      venue: 'Working Paper',
      year: '2025',
    },
  ],

  'Econ Research Hub': [
    {
      title: 'Generative AI for Economic Research: Use Cases and Implications for Economists',
      authors: 'A. Korinek',
      venue: 'Journal of Economic Literature',
      year: 2023,
      link: 'https://www.aeaweb.org/articles?id=10.1257/jel.20231736',
    },
    {
      title: "AI Agents for Economic Research: August 2025 Update to 'Generative AI for Economic Research'",
      authors: 'A. Korinek',
      venue: 'NBER Working Paper 34202',
      year: 2025,
      link: 'https://www.nber.org/papers/w34202',
    },
    {
      title: 'The AI Economist: Taxation policy via multiagent RL',
      authors: 'S. Zheng, A. Trott, S. Srinivasa et al.',
      venue: 'Science Advances',
      year: 2021,
      link: 'https://arxiv.org/abs/2108.02755',
    },
    {
      title: 'An Economy of AI Agents',
      authors: 'G. Hadfield & P. W. Koh',
      venue: 'NBER Handbook on the Economics of Transformative AI',
      year: 2025,
      note: 'arXiv: 2509.01063',
      link: 'https://arxiv.org/pdf/2509.01063',
    },
    {
      title: 'Virtual Agent Economies',
      authors: 'N. Tomasev et al.',
      year: 2024,
      note: 'arXiv: 2509.10147v1',
      venue: '',
      link: 'https://arxiv.org/html/2509.10147v1',
    },
    {
      title: 'Algorithmic collusion by large language models',
      authors: 'A. Fish, Y. A. Gonczarowski & R. I. Shorrer',
      year: 2024,
      note: 'arXiv: 2404.00806',
      venue: '',
      link: 'https://arxiv.org/abs/2404.00806',
    },
  ],

  'Important Research Labs': [
    { title: 'Stanford Institute for Human-Centered AI — AI Index Report', link: 'https://hai.stanford.edu/ai-index/2025-ai-index-report', authors: '', venue: '', year: '' },
    { title: 'Stone Center on Inequality and Shaping the Future of Work', link: 'https://shapingwork.mit.edu/', authors: '', venue: '', year: '' },
    { title: 'Center for Applied Artificial Intelligence (Chicago Booth)', link: 'https://www.chicagobooth.edu/research/center-for-applied-artificial-intelligence', authors: '', venue: '', year: '' },
    { title: 'Stanford Digital Economy Lab', link: 'https://digitaleconomy.stanford.edu/', authors: '', venue: '', year: '' },
    { title: 'ETH AI Center', link: 'https://ai.ethz.ch/', authors: '', venue: '', year: '' },
    { title: 'AI Now Institute', link: 'https://ainowinstitute.org/', authors: '', venue: '', year: '' },
    { title: 'AI Econ Lab', link: 'http://ai-econlab.com/', authors: '', venue: '', year: '' },
    { title: 'AI for Good / Microsoft AI Economy Institute', link: 'https://www.microsoft.com/en-us/research/group/ai-for-good-research-lab/ai-economy-institute/', authors: '', venue: '', year: '' },
    { title: 'GovAI', link: 'https://www.governance.ai/', authors: '', venue: '', year: '' },
  ],
}
