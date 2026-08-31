import type { Edition } from '../types';

/**
 * grep v0 - Origins Edition (November 2025).
 * Transcribed from the printed edition; section order and copy match the PDF.
 */
export const v0: Edition = {
  slug: 'grep-v0',
  number: 0,
  name: 'Origins Edition',
  headerLabel: 'Origins Edition',
  footerLabel: '2025 | Because Technology Matters',
  dateline: 'November 2025',
  isoDate: '2025-11-10',
  tagline: 'Your search query for ACM-VIT updates.',
  blurb:
    'The zeroth edition. Fifteen years of ACM-VIT in one place - how the chapter started in 2009, the events that became traditions, the projects students actually shipped, and the people behind all of it.',
  pages: 20,
  pdf: '/editions/grep-v0-origins-edition.pdf',
  cover: 'keyboard',
  status: 'published',
  sections: [
    {
      id: 'what-is-grep',
      title: 'What is GREP V0?',
      navTitle: 'What is GREP V0?',
      art: 'thinking',
      blocks: [
        {
          type: 'lead',
          text: 'grep, ACM-VIT’s official quarterly newsletter, is a curated snapshot of the chapter’s journey, spotlighting our initiatives, impactful work, and the people who make it all happen.',
        },
        {
          type: 'p',
          text: 'From events and technical projects to blogs and internal initiatives, each edition offers a structured overview of our work.',
        },
        {
          type: 'p',
          text: 'This 0th edition marks the beginning of the series, where we take a step back to revisit ACM-VIT’s 15-year journey. Through this retrospective, we aim to provide context, clarity, and continuity for everything that lies ahead.',
        },
        {
          type: 'p',
          text: 'More than just a newsletter, grep is your search query for all ACM-VIT updates - capturing the ideas, efforts, and people that shape us.',
        },
      ],
    },
    {
      id: 'what-is-acm-vit',
      title: 'What is ACM-VIT?',
      art: 'skydive',
      blocks: [
        {
          type: 'p',
          text: 'The Association for Computing Machinery (ACM) is the world’s largest educational and scientific organisation in the field of computing.',
        },
        {
          type: 'p',
          text: 'Established in 1947 with a commitment to excellence, ACM amplifies the collective voice of the computing profession through visionary leadership, advocacy for high standards, and recognition of outstanding technical achievements.',
        },
        {
          type: 'p',
          text: 'It empowers its members by offering lifelong learning, career development, and extensive professional networking opportunities.',
        },
        {
          type: 'p',
          text: 'ACM-VIT is the official student chapter of ACM at VIT-Vellore and proudly upholds the values and mission of its parent body. Founded in 2009, ACM-VIT is one of the most prestigious technical chapters on campus, committed to advancing computing as a science and profession.',
        },
        {
          type: 'p',
          text: 'As a student-led and technology-driven community, ACM-VIT consistently aims to make technology accessible, foster innovation, and empower the next generation of computing professionals.',
        },
      ],
    },
    {
      id: 'acm-w',
      title: 'Empowering Women in Tech',
      navTitle: 'What is ACM-W?',
      accent: 'red',
      art: 'acmw-train',
      blocks: [
        {
          type: 'p',
          text: 'At the heart of innovation is inclusivity, and ACM-W (Association for Computing Machinery - Women) stands as a strong pillar in building a vibrant, inclusive space for women in tech.',
        },
        {
          type: 'p',
          text: 'ACM-W’s mission is to encourage and empower women in STEM by fostering a community where knowledge is shared, mentorship is available, and every woman feels supported in her journey.',
        },
        {
          type: 'p',
          text: 'This semester, we’ve hosted InspiHER, a powerful speaker series featuring accomplished women from across science and engineering. These sessions spark meaningful conversations, offer real-life insights into career growth, and create a space for honest questions and advice. Our chapter also publishes blogs on topics ranging from coding and UI/UX to emerging tech trends.',
        },
        {
          type: 'p',
          text: 'From events to everyday interactions, we’re working to bridge the gender gap and champion diversity in tech.',
        },
      ],
    },
    {
      id: 'faculty-note',
      title: 'From the desk of Faculty Co-ordinator',
      navTitle: 'Faculty Coordinator’s Note',
      art: 'tablet',
      blocks: [
        { type: 'byline', name: 'Dr. Aswani Kumar Cherukuri' },
        {
          type: 'p',
          text: 'Hello readers, and welcome to the zeroth edition of ACM-VIT’s newsletter. ACM VIT Student Chapter is a dynamic and vibrant student body that actively upholds and advances the mission and values of the ACM (Association for Computing Machinery). Through its initiatives and activities, the chapter fosters innovation, collaboration, and academic excellence within the computing community.',
        },
        {
          type: 'p',
          text: 'Over the years, ACM-VIT has been recognized for organizing some of VIT’s largest flagship events, including Cryptic Hunt, Reverse Coding, Code2Create, and many more. But our vision extends far beyond campus boundaries. Moving forward, we aim to take on large-scale projects and nation-wide events, building on the success of Code2Create 2025, our recently concluded pan-India hackathon.',
        },
        {
          type: 'p',
          text: 'In 2024, the team was invited to Coimbatore for ACM India’s annual event, where we had the pleasure of interacting with Dr. Yannis Ioannidis, the President of the Association for Computing Machinery (ACM), as well as Dr. Meenakshi D’Souza, the President of ACM India - who were in appreciation for the activities and initiatives we have taken as a student chapter. ACM-W was awarded the best emerging chapter award at the annual ACM-India Summit 2024.',
        },
        {
          type: 'p',
          text: 'It is therefore my absolute pleasure to invite all students of VIT Vellore to join ACM-VIT. Here, you won’t just hone your skills in STEM-you will also contribute to initiatives larger than yourself, connect with people across diverse fields, and broaden your horizons in ways that will shape your academic and professional journey.',
        },
        {
          type: 'signature',
          name: 'Dr. Aswani Kumar Cherukuri',
          lines: ['Faculty Coordinator', 'ACM-VIT'],
        },
      ],
    },
    {
      id: 'chairpersons-note',
      title: 'Chairperson’s Note',
      art: 'megaphone',
      blocks: [
        { type: 'byline', name: 'Manan Shah' },
        {
          type: 'lead',
          text: 'Alright, this is new. This probably won’t be “just another” chairperson’s note. No AI slop here.',
        },
        {
          type: 'p',
          text: 'This newsletter marks the start of something new for us at ACM, but that’s just what we do. We’re a chapter that doesn’t settle for doing things in our comfort zone. Every single day we, as a team, look at our limits - and every single day we, as a team, make sure we break past those constraints.',
        },
        {
          type: 'p',
          text: 'At ACM-VIT, our aim is to harness the infinite potential technology brings to us, and use it for good, as our tagline says, “Because Technology Matters”. The zeroth edition of our quarterly newsletter is going to bring you up to speed with how we’ve grown as a chapter, all the way since our incubation back in 2009 - and how we stay true to our motto - “Give people wonderful tools, and they’ll do wonderful things.” On a personal note, this chapter has been home for the entirety of my life at VIT, and I feel proud to call this bunch of truly remarkable people not only my friends, but a part of my family.',
        },
        {
          type: 'p',
          text: 'The further editions of our newsletter will highlight our progress in terms of research, events, projects and so much more - but I’ll let this edition showcase the one thing we do better than anyone else - have the warmest environment and foster a culture of openness, innovation and pure vibes. Feel free to join us, and as always - Stay Hungry, Stay Foolish :)',
        },
        {
          type: 'signature',
          name: 'Manan Shah',
          lines: ['Chairperson, ACM-VIT', 'github.com/manansh'],
        },
      ],
    },
    {
      id: 'chapter-retrospective',
      title: 'Chapter Retrospective',
      art: 'timeline',
      blocks: [
        {
          type: 'timeline',
          items: [
            {
              period: '2009-2010',
              title: 'inception',
              body: [
                'The ACM-VIT chapter was officially launched on January 25, 2010, marking the beginning of a student-led initiative to promote computing as both a science and profession. The launch event saw participation from over 180 attendees and introduced the university community to ACM’s vision, values, and commitment to advancing technology. From the very beginning, ACM-VIT aligned closely with its international parent body, fostering curiosity, dialogue, and collaboration within the student community.',
              ],
            },
            {
              period: '2010-2011',
              title: 'expanding horizons',
              body: [
                'The chapter began conducting technical sessions and community outreach efforts. A notable lecture on the Bharat Operating System Solutions (BOSS) by Mr. R.K.V.S. Raman from C-DAC, Bangalore, introduced students to open-source initiatives. During the Computer Science and Engineering Department (CSED) Week, ACM-VIT reached out to over 400 students from nearby schools, spreading awareness of computer science and promoting technological literacy at the grassroots level.',
              ],
            },
            {
              period: '2011-2013',
              title: 'nurturing technology',
              body: [
                'This phase was marked by hands-on workshops on tools and platforms like WordPress, Photoshop CS5, Java, and Android, equipping students with practical technical skills. A significant milestone was the workshop on Windows 8 app development by Microsoft, which drew an enthusiastic response. During this period, internal flagship events such as Reverse Coding emerged, laying the groundwork for a culture of problem-solving and competitive programming that would become central to the chapter’s identity.',
              ],
            },
            {
              period: '2015-2017',
              title: 'adapting and excelling',
              body: [
                'As the chapter matured, events became more immersive and innovation-driven. Reverse Coding returned in new formats, and events like Tech Talk and Codart showcased the creative and analytical abilities of students. Codart, in particular, stood out as a unique event that gamified coding through physical activities and problem-solving. With workshops on Big Data Analytics and Python using Google App Engine, ACM-VIT kept pace with emerging technologies while encouraging exploration beyond the curriculum. Code2Create, the chapter’s flagship 36-hour hackathon, was launched during this time and quickly gained prominence across campuses nationwide.',
              ],
            },
            {
              period: '2018-2020',
              title: 'foundations of innovation',
              body: [
                'This period saw ACM-VIT events scale in reach and depth. Code2Create witnessed external participation, with more than 250 students from across India. Tracks in domains such as FinTech, Smart Cities, AR/VR, Health Tech, and Open Innovation challenged participants to solve real-world problems. Online coding contests like Code++ became regular features, and the recruitment process began attracting wide interest, drawing over 1000 applicants annually. The chapter’s commitment to upskilling and mentorship grew stronger, reflected in the increasing attendance across workshops and bootcamps.',
              ],
            },
            {
              period: '2020-2022',
              title: 'scaling impact',
              body: [
                'During the pandemic, ACM-VIT seamlessly transitioned to virtual platforms, continuing to deliver high-quality experiences. The fifth edition of Code2Create was its most ambitious yet, with over 950 participants and six diverse tracks. The chapter hosted Apptitude, a 24-hour app development challenge, and organized one of its most popular online sessions-The Full Stack Developer Workshop with Sonny Sangha. Reverse Coding continued to grow in stature, reaching over 560 participants. Despite the constraints of remote interaction, ACM-VIT retained its momentum and community spirit.',
              ],
            },
            {
              period: '2022-2025',
              title: 'because technology matters',
              body: [
                'In the wake of the pandemic, ACM-VIT united the virtual and physical realms, ushering in a new era of learning and leadership. The ACM Summer Bootcamp shone brightly, guiding 400 learners through Web, App, ML, and Design with student-led mentorship.',
                'Forktober championed open-source excellence, while Apptitude’21, a 36-hour SDG-themed app based hackathon, ignited purpose-driven innovation. Reverse Coding soared to legendary status with 642 participants, reaffirming the chapter’s coding prowess. The debut of the R&D Showcases explored Wi-Fi Security, Quantum Teleportation, and Gradient Descent, blending curiosity with cutting-edge insight. Codex Cryptum 2.0 and the Hybrid Cryptic Hunt turned campus into a cryptographic quest, brimming with intrigue and intellect.',
              ],
            },
          ],
        },
        {
          type: 'p',
          text: 'Events like Reverse Coding and Cryptic Hunt continue to remain student favorites, drawing an increasing number of registrations each year.',
        },
        {
          type: 'p',
          text: 'At ACM, our focus is on building scalable, innovative projects while fostering continuous learning and growth. With the induction of our new junior core this year, we’ve grown into a strong community of over 150 members, united by a shared vision of expanding ACM-VIT’s impact beyond the boundaries of VIT.',
        },
      ],
    },
    {
      id: 'yearly-events',
      title: 'Our Yearly Events',
      art: 'flag',
      blocks: [
        {
          type: 'entries',
          items: [
            {
              title: 'CODART',
              body: [
                'A standout event combining competitive programming with dart throwing, Codart started with 120 participants in 2016 and grew massively by 2018 breaking VIT’s records at over 200 teams. The format featured intense online rounds followed by an offline finale where three dart throws decided the difficulty of a coding challenge.',
              ],
            },
            {
              title: 'CODE++',
              body: [
                'Code Plus Plus showcased competitive programming at its purest form. With 800 participants joining the 4 hour mathematical marathon on HackerRank and solving complex algorithms and mathematical puzzles where success depended on cracking test cases within the time limit. The 2020 edition included detailed editorials afterward, giving valuable solution insights. Code++ is an event where you discover your true coding potential, walking away with either newfound confidence or lessons that push you to improve your algorithmic thinking skills.',
              ],
            },
            {
              title: 'THE TINY HACK',
              body: [
                'The Tiny Hack was a 10-hour-long hackathon held in 2023, designed for individuals eager to develop and build innovative projects within a short time frame. The event focused on creating small yet impactful solutions to real-world problems using technology. Participants collaborated with like-minded individuals from diverse academic and professional backgrounds, working intensively to bring their ideas to life.',
              ],
            },
            {
              title: 'APPTITUDE',
              body: [
                'Apptitude is a 36-hour hackathon dedicated to app development first organized in July 2020. Unlike general hackathons that spread across multiple domains, Apptitude gives app dev the spotlight of its own. Participants brainstorm and develop apps that are not just functional but impactful. It’s the perfect stage to innovate, collaborate, and bring fresh ideas to life.',
              ],
            },
            {
              title: 'FORKTOBER',
              body: [
                'Riding on the spirit of Hacktoberfest - the month-long celebration of open-source software by DigitalOcean, we took the initiative of hosting Forktober in October 2021 to promote open source in VIT. Every contribution helps build confidence, strengthens collaboration skills, and creates real-world impact. With beginner-friendly and impactful repositories across App Development, Web Development, and Machine Learning, Forktober is the perfect launchpad to sharpen skills and grow as a developer.',
              ],
            },
            {
              title: 'CODE2CREATE',
              body: [
                'Code2Create made its debut in September 2015 as a 36-hour hackathon. For its first edition, it welcomed interdisciplinary teams to work together diligently on four theme-based tracks: Fintech, AR/VR, Clean Energy, and Health Care, to solve real-world issues from ideation to prototype. By April 2017, student participation had grown to 250 across the country, highlighting its swift transformation into a flagship event. Later editions added six tracks, such as Education, Smart Cities, Space, and Health Care, and attracted close to 1,000 registrations. With a focus on innovation, collaboration and real-world problem solving, this event is the perfect platform for tech enthusiasts to showcase their skills.',
              ],
            },
            {
              title: 'REVERSE CODING',
              body: [
                'Reverse Coding is a competitive coding event that pushes participants to think beyond conventional problem-solving. Unlike traditional coding contests, where problems are clearly stated, this event conceals the logic behind the expected output, requiring participants to reverse-engineer the solution and write the original source code from scratch.',
                'Since its inception in April 2013 with just 96 participants, Reverse Coding has grown exponentially in scale and complexity. By 2018, it adopted a two-round structure and today, it has evolved into the biggest competitive coding event at VIT, drawing a massive crowd of 900 participants in its latest edition.',
              ],
            },
            {
              title: 'CRYPTIC HUNT',
              body: [
                'In essence, Cryptic Hunt is a tech based scavenger hunt where participants solve cryptic riddles by scanning QR codes. Initially introduced as a lead Gravitas event in September 2022, it pushed hundreds of contestants to crack ciphers, solve riddles, and dig up hidden clues from the internet within a stressful 36-hour timeframe. Cryptic Hunt has grown to be graVITas’ biggest Scavenger Hunt, bringing together enthusiasts in a contest to solve mysteries and gain ultimate bragging rights, having 800+ participants each year.',
              ],
            },
            {
              title: 'CODEX CRYPTUM',
              body: [
                'With its first edition in September 2022, Codex Cryptum started as a specialized workshop focused on deepening participants’ understanding of cybersecurity and cryptography. The event offers hands-on sessions and interactions with industry specialists, enabling attendees to delve into advanced topics and gain practical insights. Through this workshop, participants can expand their knowledge base, refine their skills, and engage in meaningful discussions with peers and experts in the field.',
              ],
            },
            {
              title: 'THE NEURAL HACK',
              body: [
                'Powered by the ACM-W community, Neural Hack is an AI-based hackathon that welcomes participants from diverse backgrounds, be it curious learners taking their first steps into AI or skilled developers eager to experiment with advanced models. With AI redefining the future of tech, in December 2020, Neural Hack set the perfect platform to build impactful solutions. The event is all about exploring new approaches, experimenting with ideas, and contributing to the evolving landscape of innovation.',
              ],
            },
            {
              title: 'BOOTCAMP',
              body: [
                'The ACM Summer Bootcamp of July 2021 was a multi-day program offering intensive exploration of foundational technology domains through expertly curated workshops. Web Development established participants’ proficiency through comprehensive portfolio creation using HTML, CSS, and JavaScript. Mobile Application Engineering advanced students through Flutter’s cross-platform development with emphasis on contemporary UI design and application architecture. Machine Learning Excellence delivered practical AI education through an innovative Python-based gesture recognition system. Design Innovation integrated creative vision with technical execution, guiding participants from concept to functional prototype.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'project-cycles',
      title: 'Our Project Cycles',
      art: 'build',
      blocks: [
        {
          type: 'cards',
          items: [
            {
              title: 'EXAMCOOKER',
              links: [{ label: 'examcooker.acmvit.in', href: 'https://examcooker.acmvit.in' }],
              body: [
                'Designed to make exam preparation a little less stressful, ExamCooker is a platform that brings together everything VIT students need in one place - notes, past papers, and an active forum for asking and answering doubts. With a clean interface, fast search, and smooth resource sharing, it’s built to be especially helpful when the pressure’s on and exams are just around the corner. Developed using Next.js, CockroachDB, and Prisma, the platform handles high traffic without slowing down. ExamCooker currently has a user base of over 12,000.',
              ],
            },
            {
              title: 'CLI RPG',
              links: [{ label: 'cli-rpg.acmvit.in', href: 'https://cli-rpg.acmvit.in' }],
              body: [
                'CLI-RPG is a text-based game that brings interactive storytelling to the command line. Inspired by classic adventure games, it features a branching narrative with challenging puzzles and detailed ASCII art. With dynamic music, an integrated audio visualizer, and multiple endings, the experience is both engaging and immersive. Developed using Rust, Ratatui, and Supabase, the project highlights the creative potential of the command line. It’s a different kind of technical build - one that mixes logic with storytelling in a uniquely retro-modern format.',
              ],
            },
            {
              title: 'UNIPOOL',
              links: [{ label: 'unipool.acmvit.in', href: 'https://unipool.acmvit.in' }],
              body: [
                'UniPool is a seamless carpooling platform designed specifically for VITians. Whether you need a ride or want to offer one, UniPool helps you find carpools that match your route and schedule, connect with fellow students, and coordinate everything effortlessly. With real-time updates, easy communication, and smart matching, UniPool streamlines the entire carpooling experience. It’s a simpler, smarter way to find rides.',
              ],
            },
            {
              title: 'ACMONE',
              links: [{ label: 'acmone.acmvit.in', href: 'https://acmone.acmvit.in' }],
              body: [
                'With over 100 organizing committee members working across teams, staying coordinated is no small task, and that’s where ACMOne comes in. It brings together key functions like event planning, deadline tracking, ID scanning, and team communication into one streamlined system. With real-time updates, an intuitive calendar, and built-in collaboration tools, it helps everyone stay on the same page. Designed for clarity and coordination, ACMOne keeps the chapter’s backend running smoothly so the focus stays on the work that matters.',
              ],
            },
            {
              title: 'OS',
              links: [{ label: 'os.acmvit.in', href: 'https://os.acmvit.in' }],
              body: [
                'OS is ACM VIT’s 2025 organizing committee selections portal featuring a sleek macOS-inspired interface that transforms recruitment into an interactive desktop experience. The platform showcases the chapter’s projects, events, and memories while allowing you to enjoy mini-games like ACM Draws, Doom, and 2048. The platform serves as both a recruitment tool and digital showcase, that reflects the chapter’s commitment to creative technical solutions.',
              ],
            },
            {
              title: 'LOCALHOST',
              links: [{ label: 'localhost.acmvit.in', href: 'https://localhost.acmvit.in' }],
              body: [
                'Localhost is a VS Code-inspired platform built for ACM VIT’s 2024 organizing committee selections. With its familiar code-editor interface, the platform streamlines the entire recruitment process from application submission to candidate evaluation. The system provides organizing teams with efficient tools to assess prospective members while creating an engaging, developer-friendly experience for applicants.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'blogs',
      title: 'Our Blogs',
      art: 'read',
      blocks: [
        {
          type: 'blogs',
          items: [
            {
              title: 'Honey I shrunk the AI : Quantizing LLM’s for Edge Hardware',
              author: 'Hemanth Balgi',
              readTime: '5 min read',
              href: 'https://with.acmvit.in/LLM-quantisation',
            },
            {
              title: 'Whispers Between the Hovers: The Magic of Micro-Interactions',
              author: 'Nishtha Aggarwal',
              readTime: '5 min read',
              href: 'https://blog.acmvit.in/micro-interactions',
            },
            {
              title: 'Blockchain Took Over My Bank Account (And I Kind of Liked It)',
              author: 'Shaurya Garg',
              readTime: '5 min read',
              href: 'https://with.acmvit.in/defi-101',
            },
            {
              title: 'Quantum Time Bomb: When Encryption Stops Working',
              author: 'Harshit Narang',
              readTime: '5 min read',
              href: 'https://with.acmvit.in/quantum-timebomb',
            },
            {
              title: 'How I Met Your AI: The Matrix of Microchips',
              author: 'Drashti Shukla',
              readTime: '5 min read',
              href: 'https://with.acmvit.in/matrix-of-microchips',
            },
            {
              title: 'The Chef’s Secrets: The Story behind ExamCooker',
              author: 'The ExamCooker Team',
              readTime: '5 min read',
              href: 'https://with.acmvit.in/chefs-secret',
            },
          ],
        },
      ],
    },
    {
      id: 'localhost-finds',
      title: 'localhost finds',
      accent: 'red',
      blocks: [
        {
          type: 'lead',
          text: 'localhost is ACM-VIT’s hub for rare tech finds and sharp discussions you won’t come across every day. Here are some of the most exciting discoveries from the past three months.',
        },
        {
          type: 'finds',
          items: [
            {
              title: 'Self-Adapting Language Models (SEAL)',
              href: 'https://arxiv.org/abs/2506.10943',
              body: 'Self-Adapting Language Models (SEAL): a new June 2025 paper showing how an AI can teach itself to improve. Instead of relying on extra adapters or add-ons, the model actually creates its own training edits and then updates its own weights directly. It’s trained with reinforcement learning so the self-updates really make it better on tasks.',
            },
            {
              title: 'Wilson Lin - Building a web search engine from scratch',
              href: 'https://blog.wilsonl.in/search-engine/',
              body: 'A surprisingly deep, practical write-up of making a neural search engine in just two months. He scales to 3B embeddings on ~200 GPUs, indexes ~280M pages, and serves results in ~500 ms, with a live demo to try. Quietly one of those rare, bookmark-worthy builds.',
            },
            {
              title: 'assets.vercel.com still points to Cloudinary',
              href: 'http://assets.vercel.com',
              body: 'Even though Vercel now has products like Blob for first-party storage, this old setup lingers on, likely a case where they once used Cloudinary for assets and just never cleaned up the DNS records. A subtle trace of Vercel’s past that almost nobody notices.',
            },
          ],
        },
      ],
    },
    {
      id: 'credits',
      title: 'Credits',
      art: 'credits',
      blocks: [
        {
          type: 'credits',
          editors: ['Drashti Shukla', 'Shaurya Garg', 'Lavanya Jain', 'Navdha Sharma', 'Rishit Shivam'],
          designers: ['Yash Raj Singh', 'Krishika Sureka'],
        },
      ],
    },
    {
      id: 'the-team',
      title: 'The Team',
      blocks: [
        {
          type: 'team',
          items: [
            { name: 'Dr Aswani Kumar Cherukuri', role: 'Faculty Coordinator' },
            { name: 'Manan Shah', role: 'Chairperson' },
            { name: 'Kairav Nitim Sheth', role: 'Vice-Chairperson' },
            { name: 'Sunny Gogoi', role: 'Secretary' },
            { name: 'Eshita Chobhani', role: 'Co-Secretary' },
            { name: 'Tanush Golwala', role: 'Technical Director' },
            { name: 'Yasha Pacholee', role: 'Research Lead' },
            { name: 'Supratim Ghose', role: 'Projects Lead' },
            { name: 'Garv Jain', role: 'Developer Relations' },
            { name: 'Yash Raj Singh', role: 'Design Lead' },
            { name: 'Srija Punnada', role: 'Creative Lead' },
            { name: 'Harshitaa Kashyap', role: 'ACM-W Chairperson', acmw: true },
            { name: 'Aastik Narang', role: 'ACM-W Vice-Chairperson', acmw: true },
            { name: 'Shambhavi Paygude', role: 'ACM-W Secretary', acmw: true },
          ],
        },
      ],
    },
  ],
};
