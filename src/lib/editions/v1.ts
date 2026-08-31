import type { Edition } from '../types';

/**
 * grep v1 - August 2026.
 * Transcribed from the printed edition; section order and copy match the PDF.
 */
export const v1: Edition = {
  slug: 'grep-v1',
  number: 1,
  headerLabel: 'August 2026',
  footerLabel: '2026 | Because Technology Matters',
  dateline: 'August 2026',
  isoDate: '2026-08-31',
  tagline: 'Your search query for ACM-VIT updates.',
  blurb:
    'A year of building, in fragments. Code2Create back after four years, a CTF team ranked #1 in India, an Outstanding School Service Award from ACM International, and the workshops and project cycles that quietly made all of it possible.',
  pages: 32,
  pdf: '/editions/grep-v1.pdf',
  cover: 'brick',
  kind: 'full',
  status: 'published',
  sections: [
    {
      id: 'what-is-grep',
      title: 'What is GREP V1?',
      navTitle: 'What is GREP V1?',
      art: 'magnifier',
      blocks: [
        { type: 'lead', text: 'Welcome to grep, ACM-VIT’s official newsletter.' },
        {
          type: 'p',
          text: 'grep is a memoir of the chapter’s successful campaigns, which puts a spotlight on our initiatives, impactful work, and the wonderful team who make it all happen.',
        },
        {
          type: 'p',
          text: 'From events and technical projects to blogs and internal initiatives, each edition offers a structured overview of our work.',
        },
        {
          type: 'p',
          text: 'This edition looks back at the last few months, the events, projects, and people that kept ACM-VIT moving. Through this recollective, we aim to provide context, clarity, and continuity for everything that lies ahead.',
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
      art: 'highfive',
      blocks: [
        {
          type: 'p',
          text: 'Association for Computing Machinery (ACM) is the world’s largest educational and scientific organisation and research body in the field of computing. Established in 1947, ACM publishes technical research, sets industry standards, and supports computing professionals through lifelong learning, career development, and extensive professional networking opportunities.',
        },
        {
          type: 'p',
          text: 'ACM-VIT is the official student chapter of ACM at VIT-Vellore and proudly upholds the values and mission of its parent body. Founded in 2009, ACM-VIT is one of the most prestigious technical chapters on campus, committed to advancing computing as a science and profession.',
        },
        {
          type: 'p',
          text: 'Through hackathons, technical projects, and a range of ongoing initiatives, ACM-VIT works to make technology accessible, foster innovation, and empower the next generation of computing professionals.',
        },
        {
          type: 'p',
          text: 'We don’t just write code - we ask questions, build with purpose, and learn together. With a culture built on trust and innovation, we’re here to build tools, solve problems, and grow as a community - because technology, at its best, brings people together.',
        },
      ],
    },
    {
      id: 'acm-w',
      title: 'What is ACM-W?',
      accent: 'red',
      art: 'acmw-flying',
      blocks: [
        {
          type: 'p',
          text: 'ACM-W was founded with a simple yet powerful mission: to ensure equal opportunities in technology and empower everyone to grow in STEM. We believe talent and potential should never be limited by barriers, but nurtured through the right support, mentorship, and exposure.',
        },
        {
          type: 'p',
          text: 'As the sister chapter of ACM-VIT, it’s a vibrant community that celebrates contributions of women across all computing fields. Through initiatives like InspiHER podcast series, blogs, projects, we create spaces where stories are shared, perspectives are valued, and voices in tech are amplified.',
        },
        {
          type: 'p',
          text: 'Some of our recent initiatives include Neural Hack, an ML-focused hackathon. To promote inclusivity and encourage greater participation of women in tech, each team was required to have at least one female member. This not only ensured diverse collaboration but also created opportunities for women to actively contribute and compete within the technical community. Alongside such initiatives, the women of our chapter are currently at the forefront of developing a dedicated website specifically for ACM-W VIT, reflecting our commitment to creating impactful projects and strengthening our technical community.',
        },
        {
          type: 'p',
          text: 'We stand for inclusion, empowerment, and growth encouraging women to take initiative, share their ideas, and thrive in the world of computing alongside their peers.',
        },
      ],
    },
    {
      id: 'faculty-note',
      title: 'Faculty Co-ordinator’s Note',
      navTitle: 'Faculty Coordinator’s Note',
      art: 'desk',
      blocks: [
        { type: 'byline', name: 'Dr. Aswani Kumar Cherukuri' },
        {
          type: 'p',
          text: 'Hello readers, and welcome to the first edition of grep. The zeroth edition introduced the chapter and the journey behind it. This edition, and every one that follows, will tell you what ACM-VIT has been building since we last wrote to you.',
        },
        {
          type: 'p',
          text: 'This year has given us a great deal to be proud of. ACM-VIT has been recognised at the ACM Student Chapter Excellence Awards 2025-2026 with the Outstanding School Service Award, one of ACM’s highest global honours, given to chapters that make a lasting contribution to their home institution. Our CTF team, z0d1ak, is now ranked first in India, with an all-time best global rank of seventh. Our members were selected for Y Combinator’s first in-person Startup School in India, and others contributed to SGLang, an open-source LLM serving framework built by researchers at LMSYS, UC Berkeley, and Stanford. Our office bearers represented the chapter at the ACM India Summit at NMIMS Indore.',
        },
        {
          type: 'p',
          text: 'Much of the value a chapter offers lies in the people it brings to its students. Under ACM’s Distinguished Speaker Program we hosted Dr. Peter Robinson of the University of Cambridge, who spoke on emotion-aware computing. Mr. Krishnasuri Narayanam of IBM Research India joined us at Neural Hack through the ACM India Eminent Speaker Program. Dr. Meenakshi D’Souza, President of the ACM India Council, was with us at Code2Create, which returned to campus after four years. ACM has been consistently able to become the place where founders and industry leaders come and connect to student throughout the year.',
        },
        {
          type: 'p',
          text: 'Equally important is the work that happens week after week. Our Systems Reading Groups and workshops give students a space to learn and question ideas without the pressure of a competition, and many who arrived as beginners have gone on to build real software of their own, including projects like Conclave, ExamCooker, UniPool, Codigo, Tagred and more. That quiet progress, from curiosity to fruition, is what I value most about this chapter.',
        },
        {
          type: 'p',
          text: 'To the students of VIT Vellore, this remains one of the finest places on campus to learn by doing, and there is much more to come. I hope you will be part of it.',
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
      art: 'lounge',
      blocks: [
        { type: 'byline', name: 'Prakhar Joshi' },
        {
          type: 'lead',
          text: 'Hello, if you are reading an ACM newsletter for the first time, then welcome, and if you are here to catch up with the next edition of what this chapter has been building since our zeroth edition, welcome back.',
        },
        {
          type: 'p',
          text: 'If you’d like to know more about who we are, I’d suggest going through the previous edition of GREP V0, which captures the journey of this chapter from its foundation to where it stood then. This time, it is about what we’ve become.',
        },
        {
          type: 'p',
          text: 'Over the past year, ACM-VIT has grown not just in scale, but in intent. What follows is not just a collection of events or achievements, but fragments of a year spent building, pushing limits, and turning ideas from conversations into something real.',
        },
        {
          type: 'p',
          text: 'It’s been a year that didn’t really stay in one lane. We brought back one of the largest hackathons on campus, explored new spaces through initiatives that pushed for inclusivity, and saw our CTF team go further than ever before - ending the year ranked #1 in India, and #7 globally at their best. Along the way, we kept building - through workshops that turned curiosity into skill, and project cycles that made learning feel more hands-on and real, with projects that have grown faster than any of us expected, some of them now out in the world for anyone to use.',
        },
        {
          type: 'p',
          text: 'Somewhere in the middle of it, we also found ourselves in rooms we hadn’t been in before - summits, startup schools, an award from ACM International. None of it was the point, but it was a good sign that the work was travelling further than campus.',
        },
        {
          type: 'p',
          text: 'But more than anything, this year was about people - showing up, building together. Over the past two years that I’ve been here, one thing has stayed constant: this is a place where curious foolish brains and warmest of hearts come together. Somewhere along the way, it becomes more than just a chapter, it becomes a space you keep coming back to.',
        },
        {
          type: 'p',
          text: 'If this feels like something you’d want to be a part of, there’s always a place for you here.',
        },
        {
          type: 'p',
          text: 'I hope you enjoy going through this as much as we enjoyed building it. We’ll see you in what we build next.',
        },
        { type: 'signature', name: 'Prakhar Joshi', lines: ['Chairperson'] },
      ],
    },
    {
      id: 'chapter-retrospective',
      title: 'Chapter Retrospective',
      blocks: [
        { type: 'h', text: 'May 2025 - May 2026' },
        { type: 'script', text: 'driving innovation forward' },
        {
          type: 'p',
          text: 'From reviving flagship events to expanding hands-on learning, this period marked a high-impact phase for ACM-VIT.',
        },
        {
          type: 'p',
          text: 'This phase began with ACM’s Distinguished Speaker Program featuring Dr. Peter Robinson from University of Cambridge, who explored advancements in Human-Computer Interaction and Affective Computing. His session offered valuable insights into how technology is evolving to better understand and respond to human emotions.',
        },
        {
          type: 'p',
          text: 'The return of Code2Create after four years stood out as a defining milestone, attracting over 2,500 registrations from participants across the country and marking the most successful edition in its history. The event was further enriched by the presence of Dr. Meenakshi D’Souza, President of the ACM India Council, whose guidance and insights inspired and motivated participants throughout. Her session brought clarity, depth, and a lasting sense of inspiration to the community. Alongside this, Cryptic Hunt also made a comeback with its immersive, puzzle-driven format, challenging participants to apply logical thinking and problem-solving skills in dynamic scenarios.',
        },
        {
          type: 'p',
          text: 'The chapter further strengthened its learning ecosystem through initiatives like Forktober and Codex Cryptum. These provided students with hands-on exposure to open-source development, cybersecurity, and cryptography through engaging, challenge-based learning.',
        },
        {
          type: 'p',
          text: 'The second edition of Neural Hack was a 36-hour, data-centric ML hackathon that featured a speaker session by Mr. Krishnasuri Narayanam on Web3 and Tabular Foundation Models, conducted as part of the ACM India Eminent Speaker Program. Additionally, this year’s Reverse Coding witnessed impressive participation, with over 600 registrations and 7500+ submissions, reflecting strong engagement and a growing enthusiasm for competitive problem-solving among students.',
        },
        {
          type: 'p',
          text: 'A key highlight of this period was the Organizing Committee Selections (OCS), powered by explore.acmvit.in - developed entirely by ACM-VIT members. Designed as an interactive, browser-like experience, it encouraged users to explore ACM-VIT’s journey through hidden elements and discoverable interactions, showcasing the chapter’s emphasis on creativity, collaboration, and experiential learning.',
        },
        {
          type: 'p',
          text: 'Beyond campus initiatives, we, the VIT University ACM Student Chapter, have been recognised at the ACM Student Chapter Excellence Awards 2025-2026 with the Outstanding School Service Award, one of ACM’s highest global recognitions. This award recognises our initiatives and contributions towards our university, VIT Vellore, making this a truly significant moment for us.',
        },
        {
          type: 'p',
          text: 'Further strengthening our connection with the global ACM community, ACM-VIT’s Chairperson, Research Lead, along with ACM-W VIT’s Chairperson and Vice Chairperson, had the opportunity to represent the chapter at the ACM India Summit held at NMIMS Indore, engaging with ACM leaders, distinguished speakers, and student chapters from across the country.',
        },
        {
          type: 'p',
          text: 'At ACM-VIT, we’ve always been exploring new frontiers. z0d1ak, our dedicated CTF team, has brought together students passionate about cybersecurity, problem-solving, and systems to compete at the highest level in global Capture The Flag competitions. It’s been a space to learn, collaborate, and push each other to improve through real-world challenges. We are currently ranked #1 in India, with an all-time best global ranking of #7. We’re proud of how far this has come and excited about where it goes next.',
        },
      ],
    },
    {
      id: 'acm-international',
      title: 'ACM International',
      blocks: [
        {
          type: 'award',
          title: 'Outstanding School Service',
          sub: 'Student Chapter Excellence Award',
          year: 'ACM • 2026',
        },
        {
          type: 'p',
          text: 'ACM-VIT has been recognised at the renowned ACM Student Chapter Excellence Awards 2025-2026, with the Outstanding School Service Award, one of ACM, Association for Computing Machinery’s highest global recognitions. This award puts ACM-VIT at a respectable position worldwide.',
        },
        {
          type: 'p',
          text: 'The Outstanding School Service Award is presented to chapters that have made profound contributions and impacts at their home institution. Over the past year, ACM-VIT has made significant efforts at the Vellore Institute of Technology, organizing hackathons, workshops, events and industry-led tech talks.',
        },
        {
          type: 'p',
          text: 'This global recognition is the reflection of the hard work put in by the board members, core committee and faculty coordinator. Moving into the academic year of 2026-27, ACM-VIT aims to continue bringing laurels to the institute and putting out quality work.',
        },
        {
          type: 'list',
          items: [
            { title: 'Outstanding Chapter Activities', body: 'University of Texas at Dallas ACM Student Chapter' },
            { title: 'Outstanding Chapter Website', body: 'University of Florida ACM-W Student Chapter' },
            { title: 'Outstanding Recruitment', body: 'PICT ACM Student Chapter' },
            { title: 'Outstanding Community Service', body: 'BITS, Pilani - Dubai ACM Student Chapter' },
            { title: 'Outstanding School Service', body: 'VIT University ACM Student Chapter' },
          ],
        },
      ],
    },
    {
      id: 'major-events',
      title: 'Our Major Events',
      art: 'flag',
      blocks: [
        {
          type: 'entries',
          items: [
            {
              title: 'CODE2CREATE',
              body: [
                'Code2Create was back at graVITas from 4-6 September 2025 after a four-year hiatus, and it made up for lost time. With 2500+ registrations, free participation, and over ₹25 lakhs in sponsorship from RunPod and ElevenLabs, teams were equipped with real infrastructure to go far beyond the prototype stage. What began in September 2015 with just 400 participants has now grown into one of graVITas’ largest hackathons. The event was further elevated by the presence of Dr. Meenakshi D’Souza, whose inspiring words and guidance left a lasting impact on participants and organizers alike.',
                'Five tracks shaped the 48-hour experience: Digital Dawn focused on affordable and inclusive tech for India’s next billion users, AI Solutions leveraged RunPod’s compute to build scalable real-world applications, Game Over explored innovations in gaming and game development, Art Attack reimagined creative expression through media and design, and I Can Do It Better challenged teams to enhance and optimize existing software. Five tracks. Forty-eight hours. A prize pool to match the ambition. Because at C2C, we don’t just code for the vibes, we Code 2 Create.',
              ],
              figure: {
                src: '/photos/code2create.jpg',
                alt: 'Organisers and participants of Code2Create 2025 gathered on stage at graVITas.',
                align: 'full',
              },
            },
            {
              title: 'REVERSE CODING',
              body: [
                'Reverse Coding returned on 12th February 2026 and saw strong participation, with 600+ registrations and over 7,500 submissions recorded during the event.',
                'It was a competitive coding event conducted online and structured into two rounds. Participants were provided with executable files displaying outputs and were required to reconstruct the corresponding source code. A dedicated web portal was developed by the Tech team for smooth participation, allowing users to download the questions and upload their solutions efficiently.',
                'What started as a niche concept has grown into one of VIT’s flagship competitive coding events.',
              ],
              links: [
                { label: 'Questions and solutions on GitHub', href: 'https://github.com/ACM-VIT/rc26-solutions' },
              ],
              figure: {
                src: '/photos/reverse-coding.jpg',
                alt: 'A packed hall of participants at Reverse Coding 2026.',
              },
            },
            {
              title: 'CRYPTIC HUNT',
              body: [
                'Cryptic Hunt was back on 27-28 September 2025 for its 4th edition in graVITas. Since its debut at graVITas in September 2022, it’s grown from a single track of puzzles into one of the most layered and competitive events in the fest. Cryptic Hunt demands something different from its participants, unlike the other events of our fest: equal parts technical knowledge, lateral thinking, and the ability to function as a team when the pressure is on.',
                'Cryptic Hunt 4.0 brought that same energy forward, pulling in hundreds of contestants across a 36-hour window, racking up 41,000+ submissions and over 400 active users. All questions were hosted on the Cryptic Hunt app, where teams also tracked their stats and submitted answers or scanned QR codes to progress. One of the phases took things further with a dedicated Cryptic Hunt game built entirely by the team, adding a whole new dimension to an already demanding 36 hours.',
              ],
              figure: {
                src: '/photos/cryptic-hunt.jpg',
                alt: 'The Cryptic Hunt 4.0 team and participants at graVITas.',
              },
            },
            {
              title: 'CODEX CRYPTUM',
              body: [
                'Cybersecurity has a new variable, and it’s AI. Codex Cryptum 2025, hosted on 31st October as part of National Cybersecurity Awareness Month, put that front and center, exploring how artificial intelligence is transforming the cybersecurity landscape. Through live demonstrations and Capture the Flag challenges, participants got hands-on with what AI-powered threats actually look like in practice, what it enables for attackers, and what it demands from defenders.',
                'ACM-VIT’s workshop series on cybersecurity and cryptography has always been about giving people real exposure to concepts that actually matter, and this edition made that more relevant than ever. Each edition of Codex Cryptum opens up a new corner of the field. This one just happened to be the most urgent corner yet.',
              ],
              figure: {
                src: '/photos/codex-cryptum.png',
                alt: 'The Codex Cryptum badge.',
              },
            },
            {
              title: 'NEURAL HACK',
              body: [
                'The Neural Hack, held on 8 February 2026, marked a strong step forward for machine learning enthusiasts at VIT, bringing together driven minds for an intense 36-hour journey centered on data-centric AI. Focused on real-world problem solving, the hackathon encouraged participants to look beyond models and build solutions that were practical and impactful.',
                'The experience was enriched by a speaker session from Mr. Krishnasuri Narayanam, Senior Research Engineer and Manager at IBM Research India, who introduced participants to Web3 and Tabular Foundation Models, connecting these concepts to real-world applications and challenges. An IBM Master Inventor with over 45 US patents and more than 17 years of experience in AI and distributed systems, Mr. Narayanam brought both depth and practicality to the session.',
                'From ideation to execution, the hackathon fostered learning, collaboration, and creativity. At Neural Hack, it was not just about building models, but understanding what truly powers them.',
              ],
              figure: {
                src: '/photos/neural-hack.jpg',
                alt: 'Participants and organisers at Neural Hack 2026.',
              },
            },
            {
              title: 'SYSTEMS READING GROUPS & WORKSHOPS',
              body: [
                'ACM-VIT introduced Systems Reading Groups (SRGs) to foster curiosity, discussion, and deeper technical understanding among students through informal, idea-driven sessions.',
              ],
              links: [
                {
                  label: 'NCSAM - When AI Meets Cybersecurity | Codex Cryptum 2025',
                  href: 'https://www.youtube.com/@acmvit',
                },
              ],
            },
            {
              title: 'KICK. START. LEARN.',
              body: [
                'First impressions matter, and KSL 2.0 was all about making ours count. Held on 13 December 2025, it introduced students to ACM India, the Association for Computing Machinery, and ACM-VIT as a student community on campus. It’s a space to connect, interact and explore the opportunities the chapter has to offer, while keeping things light, welcoming, and easy to follow.',
                'Through the session, attendees got a clearer idea of ACM India’s conferences, research initiatives, and global network, while also learning about our own initiatives, including ACM-W, the sister body focused on supporting women in STEM. Overall, KSL 2.0 was about helping students understand what being part of the computing community really looks like beyond the classroom, while making them feel more connected to it.',
              ],
              figure: { src: '/photos/ksl.jpg', alt: 'Attendees at Kick. Start. Learn. 2.0.' },
            },
            {
              title: '“COMPUTERS HAVE FEELINGS TOO” | DSP SESSION BY DR PETER ROBINSON',
              body: [
                'Organized by ACM international, the Distinguished Speaker Program (DSP) brings together thought leaders and global experts to share insights on innovations shaping the world of science and technology. It serves as a platform for knowledge exchange, inspiration, and meaningful discussions that encourage intellectual exploration.',
                'As part of this initiative, ACM-VIT had the privilege of hosting Dr. Peter Robinson, Professor of Computer Technology at the University of Cambridge, on 21st May, 2025. In his talk, “Computers Have Feelings Too,” he explored how emotion-aware computing is enabling more natural and intuitive human-computer interactions. He also touched upon the ethical considerations surrounding such technologies, emphasizing the responsibility of designing systems that are not only intelligent but also respectful of human emotions and privacy. Additionally, he highlighted the importance of user-centric design and shared emerging trends that are redefining how we connect with technology.',
              ],
              links: [
                {
                  label: '“Computers Have Feelings Too” | Dr. Peter Robinson | DSP May 2025',
                  href: 'https://www.youtube.com/@acmvit',
                },
              ],
            },
            {
              title: 'BE THE BUILDER',
              body: [
                'ACM-VIT kicked things off for its newly inducted Junior Core on 4th February with a high-energy ideathon and hackathon - less of a formal intro, more of a deep dive into how we build, collaborate, and create. From quick icebreakers to exploring ACM, ACM-W, and the different domains, the focus was on getting everyone straight into the action.',
                'Securing Vercel as our collaborator was a huge milestone for this event. Participants got hands-on access to Vercel’s v0, using it to rapidly build and deploy projects across engineering, product, design, and marketing tracks. The energy translated into results too! One of our teams ranked among the top on the global v0 community page.',
                'A packed start, and a strong glimpse into what the Junior Core is set to build next.',
              ],
              figure: { src: '/photos/be-the-builder.jpg', alt: 'The Junior Core at Be The Builder.' },
            },
            {
              title: 'INSPIHER',
              body: [
                'ACM-W hosted another inspiring edition of its inspiHER series from 18th June 2025, an initiative dedicated to spotlighting the journeys of women in tech and connecting students with industry leaders across the globe. The session offered real, unfiltered insights into building a career in technology, while fostering confidence, motivation, and a strong sense of community.',
                'This season featured an incredible lineup of speakers, including Rashi Agarwal, Co-founder of Zypp Electric; Muskan Agarwal, Founder of Cherry Media; Shubhangi Gupta, GDG Noida Organizer and Women Techmakers Ambassador at Google Developers Group Noida; and Tanvi Shah, Founder of Saltie. Each speaker shared their experiences, challenges, and advice reminding participants that success in tech is absolutely within reach.',
              ],
              links: [
                {
                  label: 'Watch the inspiHER playlist',
                  href: 'https://youtube.com/playlist?list=PLW6zTUiVTfF77nYKDBsZGS2sDbjmX_UyP',
                },
              ],
            },
            {
              title: 'OUTREACH EVENT',
              body: [
                'As part of its community outreach initiatives, ACM-VIT conducted an engaging session on 15 October 2025 at Jeyamalli International School for around 120 students from classes 7 to 9, introducing them to the fundamentals of computing. Centred around the theme “Flowcharts and Digital Logic,” the session simplified abstract concepts through interactive activities and relatable examples, helping students explore binary thinking and understand how logic gates power everyday technology, while encouraging active participation, sparking curiosity, and building confidence in approaching computational problems.',
              ],
              figure: {
                src: '/photos/outreach.jpg',
                alt: 'Students at the ACM-VIT outreach session in Jeyamalli International School.',
              },
            },
            {
              title: 'FORKTOBER',
              body: [
                'As the name suggests, Forktober is a month-long open source initiative we organise every year in October. It is aimed at helping students get started with real-world development by contributing to beginner-friendly repositories, understanding GitHub workflows, and collaborating in teams.',
                'These projects keep the spirit of Forktober alive, giving students ongoing opportunities to learn, experiment, and contribute at their own pace.',
              ],
              links: [
                { label: 'Scrag - data automation and extraction workflows', href: 'https://github.com/ACM-VIT/scrag' },
                {
                  label: 'Digital Circuit Simulator - build and test logic circuits',
                  href: 'https://github.com/ACM-VIT/Digital-Circuit-Simulator',
                },
                {
                  label: 'Open With Browser - a utility for everyday browsing workflows',
                  href: 'https://github.com/ACM-VIT/open-with-browser',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'srg',
      title: 'Systems Reading Groups',
      navTitle: 'Systems Reading Groups',
      blocks: [
        {
          type: 'list',
          items: [
            {
              title: 'SRG 1: Smart Real-Time Game Experiences - 24 May 2025',
              body: 'Focused on real-time systems and how modern games deliver seamless, interactive experiences.',
            },
            {
              title: 'SRG 2: Virtualization and Containerisation - 30 May 2025',
              body: 'Covered the basics of VMs, containers, and their role in modern computing infrastructure.',
            },
            {
              title: 'SRG 3: Reinforcement Learning - 6 June 2025',
              body: 'Explored how agents learn through rewards and real-world applications of RL.',
            },
            {
              title: 'SRG 4: The Art of Piracy - 13 June 2025',
              body: 'Discussed digital piracy, including torrenting, DRM bypassing, and its ecosystem.',
            },
            {
              title: 'SRG 5: The Illusion of Thinking - 20 June 2025',
              body: 'Examined how content can appear insightful without true depth or critical reasoning.',
            },
            {
              title: 'SRG 6: Quantum Computing - Untangling the Qubits - 27 June 2025',
              body: 'Introduced foundational quantum concepts like superposition and entanglement.',
            },
            {
              title: 'SRG 7: Workshop - AI × Cybersecurity - 29 October 2025',
              body: 'An interactive online session exploring the intersection of AI and cybersecurity, covering AI fundamentals, its vulnerabilities, and its dual role in both attacks (deepfakes, ransomware, scams) and defense (threat detection, fraud prevention). The workshop also featured hands-on activities like quizzes, fake-content identification, CTF challenges, and discussions on real-world case studies and ethical implications.',
            },
          ],
        },
      ],
    },
    {
      id: 'design-bootcamp',
      title: 'Design Bootcamp',
      blocks: [
        {
          type: 'lead',
          text: 'The Design Bootcamp was a beginner-friendly design series aimed at helping students dive into the fundamentals of U/I/UX design, video editing, and motion graphics. Tailored for both newcomers and those looking to refine their skills, the workshop focused on hands-on learning with software like Adobe Premiere Pro, DaVinci Resolve, and Figma, covering everything from wireframing to prototyping. Participants gained practical experience while understanding the principles behind intuitive and visually appealing digital design.',
        },
        {
          type: 'cards',
          items: [
            {
              title: 'VIDEO EDITING & MOTION GRAPHICS WORKSHOP',
              meta: '29 March 2026',
              body: [
                'The Video Editing & Motion Graphics Workshop shifted focus from static screens to dynamic design. Participants explored colour, visual hierarchy, and balanced layouts, before moving into motion graphics, where animations and transitions showed how movement guides attention and shapes how a design feels. By the end, designs didn’t just sit on the screen anymore; they moved with purpose.',
              ],
            },
            {
              title: 'FIGMA WORKSHOPS',
              meta: '3 March 2026',
              body: [
                'The Figma Workshops (April to June 2025) took participants through a complete design journey, from basics to refinement. Starting with the Figma interface, frames, and tools, the repeated “why does this look off?” moments became key learning points, showing that good design is less about adding more and more about placing things right.',
                'The workshops then covered components, variants, and auto-layouts, shifting participants from trial-and-error to system-based thinking, before a final phase of refinement where small changes to spacing and typography showed that even a few pixels can make all the difference.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'web-unwebbed',
      title: 'Web Unwebbed',
      art: 'workstation',
      blocks: [
        {
          type: 'lead',
          text: 'Web Unwebbed was a beginner-friendly series crafted to help students understand how the web worked from the ground up. Designed for both newcomers and those looking to strengthen their fundamentals, the series focused on building practical skills while exploring the technologies that power modern web development.',
        },
        {
          type: 'cards',
          items: [
            {
              title: 'EPISODE 1: HTML & CSS FUNDAMENTALS',
              meta: '8 June 2025',
              body: [
                'Introduced the core building blocks of the web-HTML and CSS-focusing on semantic structure, styling, and key concepts like the DOM and box model. Participants also explored Flexbox, Grid, and responsive design to build a fully responsive webpage.',
              ],
              links: [
                { label: 'Introduction to HTML and CSS | Web Unwebbed #1', href: 'https://www.youtube.com/@acmvit' },
              ],
            },
            {
              title: 'EPISODE 2: JAVASCRIPT & INTERACTIVITY',
              meta: '19 June 2025',
              body: [
                'Covered JavaScript fundamentals including variables, functions, and objects, followed by DOM manipulation and event handling. Participants learned to create dynamic web experiences and work with browser and third-party APIs.',
              ],
              links: [
                { label: 'Introduction to JavaScript | Web Unwebbed #2', href: 'https://www.youtube.com/@acmvit' },
              ],
            },
            {
              title: 'EPISODE 3: BACKEND BASICS WITH JAVASCRIPT',
              meta: '1 July 2025',
              body: [
                'Introduced backend development concepts like HTTP requests/responses and asynchronous programming using async/await. Participants built basic server-side applications using Express.js and tested APIs with Postman.',
              ],
              links: [
                {
                  label: 'Introduction to Backend Development | Web Unwebbed #3',
                  href: 'https://www.youtube.com/@acmvit',
                },
              ],
            },
            {
              title: 'EPISODE 4: BACKEND ARCHITECTURE & DATABASES',
              meta: '2 July 2025',
              body: [
                'Explored MVC architecture and structured backend development using Express.js. Covered database fundamentals, SQL vs NoSQL, and hands-on integration with Prisma and PostgreSQL, along with security concepts like SQL injection.',
              ],
              links: [{ label: 'MVC Model & Databases | Web Unwebbed #4', href: 'https://www.youtube.com/@acmvit' }],
            },
          ],
        },
      ],
    },
    {
      id: 'projects',
      title: 'Our Projects',
      blocks: [
        {
          type: 'cards',
          items: [
            {
              title: 'TAGRED',
              logo: { text: 'TAGRED', bg: '#141414', fg: '#FF2D2D', font: 'pixel' },
              body: [
                'Tagred is an online horror game built using Godot/Unity and Blender, where the VIT campus is transformed into a suspense-filled environment. Players navigate the map, uncover clues, and escape while something is constantly on their trail. The project began as a game dev initiative within ACM, driven by growing interest in the space. Not only the design of the game, but even the name Tagred offers a subtle, familiar nod! It evolved into a horror experience blending design, 3D modelling, and interactive development, showing how familiar places can feel unexpectedly eerie.',
              ],
            },
            {
              title: 'CODIGO',
              logo: { text: 'CODIGO', bg: '#B4B7F5', fg: '#1B1BF0', font: 'sans' },
              body: [
                'Codigo is a gamified coding platform designed to make learning feel engaging and approachable. Inspired by Duolingo, it breaks concepts into bite-sized lessons with interactive activities like MCQs and code rearrangements, making learning more hands-on. With points, progress tracking, and badges, each step feels like progress rather than pressure. The idea stemmed from a push to build something useful for the student community. Guided by our faculty coordinator, the aim was to make coding less intimidating and more accessible, turning the learning process into something closer to a game than a task.',
              ],
            },
            {
              title: 'FORMSPACE',
              logo: { text: 'FS', bg: '#141414', fg: '#3DDCA6', font: 'sans' },
              body: [
                'FormSpace rethinks traditional forms by making them smarter and more adaptive. Instead of static question lists, it uses conditional logic to adjust the flow based on user responses, allowing questions to be skipped, redirected, or revealed dynamically. This creates a more interactive and intuitive experience. It also supports real-time collaboration, enabling multiple users to build and refine forms together. The idea emerged from recognizing that most forms collect responses but don’t adapt to them. Still in development, FormSpace aims to transform rigid structures into flexible, responsive systems that better suit modern needs.',
              ],
            },
            {
              title: 'HERMES',
              logo: { text: 'HERMES', bg: '#1B1230', fg: '#E9E4FF', font: 'sans' },
              body: [
                'Hermes is a peer-to-peer chat application built for the terminal, focusing on simplicity, efficiency, and speed. As a TUI-based platform, it lets users start chatting with a single command, avoiding bulky apps and constant tab switching. Built entirely in Rust, it emphasizes performance, safety, and a developer-first experience. The idea behind Hermes was to keep messaging lightweight and distraction-free. By using a peer-to-peer model, it ensures conversations remain direct, without unnecessary intermediaries, showing that simple tools can often be the most powerful.',
              ],
            },
            {
              title: 'TRACEFLOW',
              logo: { text: '⑂', bg: '#141414', fg: '#FFFFFF', font: 'glyph' },
              body: [
                'TraceFlow is an interactive platform designed to make learning data structures and algorithms more intuitive. Built using Astro and React, it uses dynamic visualizations to show how algorithms work step by step. With features like iteration explanations and code highlighting, users follow the logic as it executes rather than just seeing outputs. It includes visualizations for searching, sorting, and structures like stacks, queues, and linked lists. The idea stems from the challenge of understanding abstract concepts, aiming to make them visible and easier to grasp.',
              ],
            },
            {
              title: 'C0NCLAV3',
              logo: { text: 'c0nclav3', bg: '#141414', fg: '#FFFFFF', font: 'sans' },
              body: [
                'Conclave is a real-time communication platform built to make online interactions seamless and dependable, and has become ACM-VIT’s primary mode of online connection. Designed for smoother collaboration, it offers a clean, reliable experience with features like flexible joining options (Google, Apple, or guest access), host-controlled meeting locks, participant management, and built-in text-to-speech going beyond the typical experience of platforms like Google Meet by prioritizing flexibility, accessibility, and control.',
                'On the technical side, it is built using Next.js for the web and React Native with Expo for mobile, powered by a WebRTC-based Mediasoup SFU architecture to ensure scalable performance and consistent cross-platform usage.',
              ],
              links: [
                { label: 'conclave.acmvit.in', href: 'https://conclave.acmvit.in' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/conclave-by-acm-vit/id6758411334' },
                { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.acmvit.conclave' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ocs-26',
      title: 'OCS ’26',
      accent: 'red',
      blocks: [
        {
          type: 'p',
          text: 'OCS (Organizing Committee Selections) at ACM-VIT is a process designed to onboard new members and introduce them to the chapter’s work, culture, and community. It goes beyond traditional selections by focusing on exploration, learning, and engagement rather than just evaluation.',
        },
        {
          type: 'p',
          text: 'As part of this, explore.acmvit.in was built as a custom platform for the Batch of 2026. Designed as an interactive, browser-like experience, it encourages users to explore freely through interconnected pages, functional links, and intuitive navigation. As users move through the platform, they gradually uncover ACM-VIT’s journey, including its history, projects, and key milestones.',
        },
        {
          type: 'p',
          text: 'The entire platform was built by members within the club, many of whom began the process with little to no technical background. What started as a small idea quickly turned into a collaborative effort, with people from different domains coming together and learning along the way to make it happen. Designers, content writers, and developers all played their part, coming together to turn a simple idea into a success.',
        },
        { type: 'links', items: [{ label: 'explore.acmvit.in', href: 'https://explore.acmvit.in' }] },
      ],
    },
    {
      id: 'z0d1ak',
      title: 'z0d1ak',
      accent: 'ink',
      blocks: [
        {
          type: 'lead',
          text: 'We’re not about just doing the usual stuff at ACM-VIT. We are always exploring new frontiers, which is how z0d1ak - our dedicated competitive cybersecurity team was formed.',
        },
        {
          type: 'p',
          text: 'Have you ever tried legally hacking systems, breaking ciphers, or uncovering hidden vulnerabilities in a race against time? That’s what Capture The Flag (CTF) competitions are about.',
        },
        {
          type: 'p',
          text: 'z0d1ak, our dedicated CTF team and the only student chapter here at VIT exists to bring together students passionate about security, problem-solving, and systems, and to compete at the highest level in global Capture The Flag (CTF) competitions. It’s also a space to learn, collaborate, and push each other to improve through real-world challenges.',
        },
        {
          type: 'stats',
          items: [
            { value: '#1', label: 'in India' },
            { value: '#7', label: 'all-time best global rank' },
          ],
        },
        {
          type: 'list',
          items: [
            { title: 'HACKZERO ’26 - OWASP VIT Bhopal', body: '1 / 200' },
            { title: 'VishwaCTF ’2026 - Vishwakarma Institute of Technology', body: '2 / 591' },
            { title: 'KaalChakra Prelims - NFSU Goa', body: '3 / 203' },
            { title: 'Incognito 7.0 - IIIT Lucknow', body: '3 / 280' },
            { title: 'KashiCTF - IIT BHU', body: '5 / 431' },
            { title: 'BSides San Francisco CTF', body: '8 / 688' },
          ],
        },
        {
          type: 'p',
          text: 'These results reflect the team’s consistency, depth, and ability to perform across a wide range of challenging problem statements in competitive cybersecurity environments.',
        },
        { type: 'links', items: [{ label: 'z0d1ak on CTFtime', href: 'https://ctftime.org/team/373452' }] },
      ],
    },
    {
      id: 'blogs',
      title: 'Blogs',
      blocks: [
        {
          type: 'blogs',
          items: [
            {
              title: 'Can AI Catch a Killer Without a Brain?',
              author: 'Kavya Ramaswamy',
              date: '25 June 2026',
              readTime: '15 min read',
              href: 'https://blog.acmvit.in/can-ai-catch-a-killer-without-a-brain',
            },
            {
              title: 'Chasing the Ghost of Human Intelligence',
              author: 'Shraddha Sidhan',
              date: '17 May 2026',
              readTime: '18 min read',
              href: 'https://blog.acmvit.in/chasing-the-ghost-of-human-intelligence',
            },
            {
              title: 'Brain-Computer Interfaces: Can Your Brain Be Hacked?',
              author: 'Devi Kiran',
              date: '12 April 2026',
              readTime: '12 min read',
              href: 'https://blog.acmvit.in/brainhacking',
            },
            {
              title: 'The Idea That Can Measure Everything, Except Itself',
              author: 'Jiya Patel',
              date: '12 April 2026',
              readTime: '11 min read',
              href: 'https://blog.acmvit.in/kolmogorov-complexity',
            },
            {
              title: 'Turns Out, No One Pushes To Main on Day One',
              author: 'Sudiksha Kathuria',
              date: '1 May 2026',
              readTime: '17 min read',
              href: 'https://blog.acmvit.in/imposter-syndrome',
            },
            {
              title: 'Private Repo - Is It Just A Myth Now?',
              author: 'Ishita Joshi',
              date: '14 April 2026',
              readTime: '9 min read',
              href: 'https://blog.acmvit.in/the-private-repo-myth',
            },
            {
              title: 'Not the Cloud, Not the Algorithm: The Multiverse Is the Silicon',
              author: 'Lavanya Jain',
              date: '3 May 2026',
              readTime: '14 min read',
              href: 'https://blog.acmvit.in/silicon-and-ai',
            },
            {
              title: 'Agent Skills & AaaS: AI’s Universal Adapter & On-Demand Agents',
              author: 'Rishit Shivam',
              date: '26 January 2026',
              readTime: '9 min read',
              href: 'https://blog.acmvit.in/on-demand-agent-skills',
            },
            {
              title: 'Bugs, Breakdowns & Breakthroughs: A Guide to Debugging Without Losing Your Mind',
              author: 'Aarav Gupta',
              date: '21 January 2026',
              readTime: '6 min read',
              href: 'https://blog.acmvit.in/debugging',
            },
            {
              title: 'flag{H3LLO_FR13ND}',
              author: 'Harshit Narang',
              date: '15 January 2026',
              readTime: '8 min read',
              href: 'https://blog.acmvit.in/ctf101',
            },
            {
              title: 'Backs Against The Wall - ACM-VIT’s Biggest (almost) Failure',
              author: 'Manan Shah',
              date: '4 November 2025',
              readTime: '26 min read',
              href: 'https://blog.acmvit.in/the-cryptic-hunt-2024-blog',
            },
          ],
        },
      ],
    },
    {
      id: 'yc-startup-school',
      title: 'Y Combinator Startup School',
      navTitle: 'YC Startup School',
      blocks: [
        {
          type: 'p',
          text: 'When Y Combinator hosted Startup School India in person for the first time, ACM-VIT members Ishaan S., Adarsh Shirawalmath, and Divyam Agrawal were selected through a competitive shortlisting process to represent the chapter at the event.',
        },
        {
          type: 'p',
          text: 'Y Combinator is one of the most prominent startup accelerators globally, known for backing companies such as Airbnb, Stripe, and Dropbox, making this a notably significant opportunity.',
        },
        {
          type: 'p',
          text: 'The event brought together a large gathering of founders, builders, and aspiring entrepreneurs. Speakers included Aadit Palicha of Zepto, Vidit Aatrey of Meesho, Harshil Mathur of Razorpay, and Lalit Keshre of Groww, each sharing candid insights from their founding journeys rather than polished narratives, which made the experience all the more valuable.',
        },
        {
          type: 'list',
          items: [
            { title: 'Prioritize understanding your user', body: 'above everything else.' },
            { title: 'A unique idea matters less', body: 'than a real problem worth solving.' },
            { title: 'Execution consistently outweighs ideation.', body: '' },
          ],
        },
        {
          type: 'p',
          text: 'It is encouraging to see members of ACM-VIT being part of conversations at this level. Exposure to spaces like these contributes meaningfully to how our community thinks about building, problem solving, and taking initiative.',
        },
        {
          type: 'figure',
          figure: {
            src: '/photos/yc-startup-school.jpg',
            alt: 'ACM-VIT members at Y Combinator Startup School India.',
            align: 'full',
          },
        },
      ],
    },
    {
      id: 'sglang',
      title: 'SGLang',
      blocks: [
        {
          type: 'p',
          text: 'SGLang (Structured Generation Language) is an open-source, high-performance serving framework designed to make running and programming Large Language Models (LLMs) and multimodal models significantly faster and more efficient.',
        },
        {
          type: 'p',
          text: 'While our chapter has been busy serving the campus, our individual members were making contributions in the open-source community! We are incredibly proud to announce that members of ACM-VIT have actively contributed to SGLang, a high performance LLM framework developed by researchers at LMSYS, UC Berkeley, and Stanford. The public recognition by SGLang’s official social media accounts has been extremely encouraging.',
        },
      ],
    },
    {
      id: 'international-womens-day',
      title: 'International Women’s Day',
      accent: 'red',
      blocks: [
        { type: 'lead', text: 'International Women’s day comes once a year, and ACM-W made it count.' },
        {
          type: 'p',
          text: 'On March 9th, 2026, ACM-W put up a Women’s Day stall that brought energy to campus, mixing games and activities with conversations that actually mattered. The goal wasn’t just celebration; it was a reminder of what ACM-W has always stood for, building a space where women in tech belong, lead, and thrive. One day, one stall, one consistent message: the field is better when it’s built by everyone.',
        },
        {
          type: 'figure',
          figure: {
            src: '/photos/womens-day.jpg',
            alt: 'The ACM-W team at the International Women’s Day stall.',
            align: 'full',
          },
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
              title: 'The Morpheus Report on MakeMyTrip',
              href: 'https://www.morpheus-research.com/makemytrip/',
              body: 'Activist short-seller Morpheus Research released a critical report on MakeMyTrip, alleging continued non-compliance with Indian antitrust regulations. Despite a 2022 penalty by the Competition Commission of India, the report claims the company still enforces price parity using hidden “price competitiveness scores” that disadvantage non-compliant hotels. It also raises concerns about profit inflation through accounting practices and the use of dark patterns. Overall, the report offers insight into modern e-commerce monopolistic behavior and regulatory loopholes.',
            },
            {
              title: 'Taking Back Control from Airtel’s Routers',
              href: 'https://www.reddit.com/r/Airtel/s/LXLUDgGZn8',
              body: 'For those who have struggled with Airtel’s restricted routers, this thread explores how one user enabled the hidden “Bridge Mode,” typically locked to limit user flexibility. It outlines practical steps, including what to communicate to customer support and which settings to adjust, allowing users to run their own network setups. A useful guide for anyone looking to bypass ISP limitations and gain better control over their home network.',
            },
            {
              title: 'Swift 6.3 Supports Android',
              href: 'https://www.swift.org/blog/',
              source: 'TPOT',
              body: 'Swift 6.3 introduces native Android support, marking a major step toward cross-platform development. Developers can now build Android apps directly in Swift while integrating with existing Kotlin and Java codebases. For those who prefer low-level control without being tied to a single ecosystem, this update expands flexibility and opens new possibilities in mobile development.',
            },
          ],
        },
      ],
    },
    {
      id: 'acm-india-summit',
      title: 'ACM India Summit',
      blocks: [
        {
          type: 'p',
          text: 'Our chapter attended the ACM India Chapter Summit 2025 at NMIMS Indore on 19th and 20th December 2025, hosted by the ACM India Council, centered on the theme “Human-AI Partnership: Shaping Human Capital for an AI Future.” The summit was attended by our Chairperson, ACM-W’s Chairperson, Research Lead, and ACM-W’s Vice Chairperson.',
        },
        {
          type: 'p',
          text: 'The summit offered a balanced mix of keynote lectures, interactive discussions, and collaborative sessions. Key highlights included a talk by Sashikumaar Ganesan on AI-driven engineering and insights from his startup, as well as an engaging session by Suhas Joshi on Human-AI collaboration.',
        },
        {
          type: 'p',
          text: 'Interactive sessions with the ACM India Council offered valuable guidance on initiatives, funding opportunities, and collaboration across student chapters, while panel discussions enabled meaningful exchanges between students and professionals. Our ACM-W Chairperson, Lavanya Jain, was also part of one of the panels, contributing insightful perspectives.',
        },
        {
          type: 'p',
          text: 'The summit proved to be a memorable and impactful experience, strengthening connections and offering valuable insights into the future of Human-AI interaction.',
        },
        {
          type: 'figure',
          figure: {
            src: '/photos/acm-summit.jpg',
            alt: 'ACM-VIT representatives at the ACM India Chapter Summit 2025, NMIMS Indore.',
            align: 'full',
          },
        },
      ],
    },
    {
      id: 'future-plans',
      title: 'Future Plans',
      blocks: [
        {
          type: 'p',
          text: 'ACM-VIT is all about the growth of both the chapter and the people associated with it. We believe this growth comes not only from building new things but also from keeping our foundations strong. With this in mind, we will continue to focus on developing meaningful, user-centric products like ExamCooker and UniPool that address real-world needs, while also creating an environment where members can learn, collaborate, and build consistently.',
        },
        {
          type: 'p',
          text: 'At the same time, we aim to ensure continuous upskilling across our team, regardless of domain, by organizing more workshops and learning-focused sessions on diverse topics. We also plan to further strengthen ACM-W initiatives to support and empower women in STEM through dedicated opportunities and events like Neural Hack.',
        },
        {
          type: 'p',
          text: 'Additionally, we want to stay closely connected with our parent organization, ACM international, by bringing in more initiatives such as Distinguished Speaker Program sessions to provide valuable exposure and insights to our student community.',
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
            { name: 'Prakhar Joshi', role: 'Chairperson' },
            { name: 'Rohit Sakamuri', role: 'Vice-Chairperson' },
            { name: 'Drashti Shukla', role: 'Secretary' },
            { name: 'Shaurya Garg', role: 'Co-Secretary' },
            { name: 'Ishaan Samdani', role: 'Technical Director' },
            { name: 'Vansh Dhir', role: 'Projects Lead' },
            { name: 'Rishit Shivam', role: 'Research Lead' },
            { name: 'Harshit Narang', role: 'Competitions Lead' },
            { name: 'Nishtha Aggarwal', role: 'Design Lead' },
            { name: 'Krishika Sureka', role: 'Creative Lead' },
            { name: 'Lavanya Jain', role: 'ACM-W Chairperson', acmw: true },
            { name: 'Mahendra Chowdary', role: 'ACM-W Vice-Chairperson', acmw: true },
            { name: 'Navdha Sharma', role: 'ACM-W Secretary', acmw: true },
            { name: 'Adheesh Garg', role: 'ACM-W Technical Director', acmw: true },
            { name: 'Aarjav Jain', role: 'ACM-W Design Lead', acmw: true },
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
          editors: [
            'Somyadeep Tarat',
            'Aarav Gupta',
            'Sudiksha Kathuria',
            'Vian Mangal',
            'Tarun Ram',
            'Krishang Zinzuwadia',
            'Ananya Bisht',
          ],
          designers: ['Yash Raj Singh', 'Krishika Sureka', 'Aribam Tamanna Sharma', 'Archit Nigam', 'Nitu S U'],
        },
      ],
    },
  ],
};
