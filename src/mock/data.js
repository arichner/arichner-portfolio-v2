import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Richner | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Aaron Richner',
  subtitle: 'Full Stack Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Software engineering is my second career but my first passion. A decade in the publishing industry taught me the finer points of a dying trade, and gave me the superpower of spotting every typo on every restaurant menu I encounter, much to my own chagrin.',
  paragraphTwo:
    "From my first simple Java application, I was hooked on coding. I took any excuse to write code, at work and at home. I'd found my calling. Later, in graduate school, I learned the core skills of a Software Engineer: architecture, design, project management, formal methods, data modeling, and how to communicate complex ideas in straightforward ways.",
  paragraphThree:
    "I thrive in environments where I learn new things every day. I perform best when challenged, and am most engaged when I can't figure something out.",
  resume: 'https://linkedin.com/in/awrichner', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'lams.jpg',
    title: 'Finding efficiency in Active Directory Reads and Writes',
    info:
      'Our team received an alert about a web app we support that allows non-technical users to manage the members of Active Directory (AD) groups.',
    info2:
      "The algorithm used to write to AD was inefficient and imprecise, resulting in a job that took nearly an hour to complete and registered tens of thousands of writes to AD per job to accomplish small membership changes to the set of groups. This was largely due to the nature of PHP's native LDAP library, which is, ahem, not awesome.",
    info3:
      "The key to solving this problem lay in writing tests and instrumentation that allowed me to see real-time, execution-level data of when and how the application used PHP's LDAP library to actually write to AD. Once this activity was visible, I refactored the algorithm to be much more efficient, reducing writes to hundreds or less per day, and reducing average job execution time to less than 5 minutes.",
    alt:
      'The sun sinks below the horizon over Lake Superior. In the foreground, a rocky shoreline can be barely made out. This image has nothing to do with the application, but the app contains private, proprietary data and thus a screenshot would be inappropriate.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dr_ace.jpg',
    title: 'DR. ACE',
    info:
      'DR. ACE is a contact management application for the Office of Disability Resources. We worked closely with the ODR team to design an application that fit their business process, digitized and improved manual, paper-based processes, and allows students to manage their course accommodations.',
    info2:
      "The project was successful and has been expanded to 3 of UMN's 5 campuses, with a 4th campus in the process of being added.",
    info3:
      'An agile, iterative process has allowed this application to evolve to better fit the divergent needs of the 3 campuses and serves students, faculty and ODR staff alike.',
    alt:
      'A signpost from the bus loading zone in Alaska\'s Denali National Park reads, "Wonder Lake", "Kantishna", "Toklat", and "Discovery". This image has nothing to do with the application, but the app contains private, proprietary data and thus a screenshot would be inappropriate.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lib-dot-d.png',
    title: 'Technical Lead for Campus Drupal Implementation',
    info:
      'Our campus had a hodgepodge of different web authoring technologies in place -- mostly raw HTML that end users edited with Adobe Dreamweaver. The University of Minnesota negotiated a system-wide contract for Drupal hosting, and so we began a migration to this platform.',
    info2:
      'The migration included creating a custom theme, writing multiple modules to alter default Drupal behavior, and working closely with around 120 campus web editors. We established a regular cadence of meetings at which all were welcome to attend, encouraged participation, implemented requested features and moved the majority of campus websites to the Drupal platform.',
    info3:
      'Throughout this, my role was to work directly with web editors, the marketing department and other IT staff and coordinate our work, and do all of the development for the technical implementation.',
    alt:
      'A screenshot from the Kathryn A. Martin Library website. Only the first third or so of the page is visible.',
    url: 'https://lib.d.umn.edu',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Interested in hearing more? Let's talk!",
  btn: 'Email me',
  email: 'awrichner@gmail.com',
};
