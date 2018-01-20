/*** 
THIS FILE CONTAINS ALL INFORMATION NEEDED FOR THE COMPONENTS:
- Brotherhood
- Executives
- BrotherImage
- Brother
- PageHandler
***/

const IMAGE_PATH = "images/brothers";

const VP_LIST = [
  "catie_fan",
  "dhakshi_balakumar",
  "harika_kalluri",
  "kelvin_xu",
  "kevin_lee",
  "yixuan_lu"
];

const ALL_EXECS_LIST = [
  "sean_yu",
  "catie_fan",
  "dhakshi_balakumar",
  "harika_kalluri",
  "kelvin_xu",
  "kevin_lee",
  "yixuan_lu"
];

/***
this is an Object of every brother's information
***/
const BROTHER_INFO = {
  /* 1 */
  aaron_corona: {
    img: `${IMAGE_PATH}/aaron_corona.jpg`,
    name: "Aaron Corona",
    position: "Active",
    year: "Senior",
    hometown: "Los Angeles, CA",
    class: "Iota",
    major: "Political Economy",
    minor: "",
    career_interests: "Management Consulting & Marketing",
    previous_positions: "Vice President of Public Relations",
    bio:
      "Aaron greatly values the consulting and marketing interview skills he learned as a prospective member last semester. His role model is Nathan Aminpour, PSE's former president. Aaron spends the majority of his free time working out and playing basketball at the RSF in his free time.",
    linkedin: "https://linkedin.com/in/aaronmcorona"
  },

  /* 2 */
  abhi_nathan: {
    img: `${IMAGE_PATH}/abhi_nathan.jpg`,
    name: "Abhi Nathan",
    position: "Director of Alumni Relations",
    year: "Sophomore",
    hometown: "San Diego, CA",
    class: "Iota",
    major: "Intended Business & Cognitive Science",
    minor: "",
    career_interests: "Technology Consulting",
    previous_positions: "Director of External Recruitment",
    bio:
      "PSE has helped Abhi grow personally and professionally. She initially joined with hopes of learning the skills she would need to be successful in the business world. She has gained that and more. In addition to her newfound communication skills and exposure to the various fields within business, PSE has given Abhi the opportunity to make lasting friendships with people who inspire her to be her best self. Her role model is her mother. Abhi loves to make art, run, and explore new places in her free time.",
    linkedin: "https://linkedin.com/in/abhinathan"
  },

  /* 3 */
  akshay_madane: {
    img: `${IMAGE_PATH}/akshay_madane.jpg`,
    name: "Akshay Madane",
    position: "Active",
    year: "Senior",
    hometown: "Singapore",
    class: "Epsilon",
    major: "Political Economy",
    minor: "",
    career_interests: "Healthcare Management/Strategy & Law",
    previous_positions: "Vice President of Finance",
    bio:
      "In addition to invaluable business skills, PSE has taught Akshay to develop a healthy balance of fun and professionalism, and to let his charming character shine in the workplace. His role model is Punit Renjen, CEO of Deloitte. Akshay is a member of the International Students at Berkeley, and a Marketing Director for both Google@Berkeley and the ASUC Office of the Chief Technology Officer. He was a finalist for the Deloitte Consulting case competition, and attended both the Deloitte Freshman Leadership Conference and FullBridge Leadership Summit. Akshay loves to read, swim, and travel throughout Southeast Asia.",
    linkedin: "https://linkedin.com/in/madaneakshay"
  },

  /* 4 */
  alex_dao: {
    img: `${IMAGE_PATH}/alex_dao.jpg`,
    name: "Alex Dao",
    position: "Active",
    year: "Junior",
    hometown: "Irvine, CA",
    class: "Lambda",
    major: "EECS",
    minor: "",
    career_interests: "Software Development, Product Management",
    previous_positions: "",
    bio:
      "Through PSE, Alex learned the foundations of brotherhood, consulting, and finance. His role models are his parents. Alex is involved in AFX and VSA. He loves to golf, listen to music, and travel.",
    linkedin: "www.linkedin.com/in/adao1"
  },

  /* 5 */
  cathy_an: {
    img: `${IMAGE_PATH}/cathy_an.jpg`,
    name: "Cathy An",
    position: "Active",
    year: "Sophomore",
    hometown: "Philadelphia, Pennsylvania",
    class: "Lambda",
    major: "Economics",
    minor: "",
    career_interests: "Consulting, Finance",
    previous_positions: "",
    bio:
      "Through PSE, Cathy has learned how to collaborate with others in professional environments as well as gained insights into the different industries in business. She looks to activist Malala Yousifazi as a role model. Cathy is in Dance Maraton and AFX. She enjoys dancing, playing soccer, and listening to music.",
    linkedin: "https://www.linkedin.com/in/cathy-an/"
  },

  /* 6 */
  catie_fan: {
    img: `${IMAGE_PATH}/catie_fan.jpg`,
    name: "Catie Fan",
    position: "Vice President of Public Relations",
    year: "Sophomore",
    hometown: "San Diego, CA",
    class: "Iota",
    major: "Intended Business",
    minor: "",
    career_interests: "Management Consulting",
    previous_positions: "Director of Projects, Prospective Member Trainer",
    bio:
      "Through PSE, Catie has learned invaluable professional skills to help her tackle interviews, presentations, and more. She's also learned the value of hard work, and every brother inspires her in a unique way to be a better person every day. She looks to Beyonce as a role model. Catie is also on the Cal Mock Trial team here at Berkeley, and won 2nd place at the 2016 PwC case competition. She loves to sing, travel, and visit art museums.",
    linkedin: "https://linkedin.com/in/catie-fan"
  },

  /* 7 */
  charissa_saputra: {
    img: `${IMAGE_PATH}/charissa_saputra.jpg`,
    name: "Charissa Saputra",
    position: "",
    year: "Junior",
    hometown: "Irvine, CA",
    class: "Kappa",
    major: "Media Studies",
    minor: "Environmental Science",
    career_interests: "Brand Marketing & Social Impact Consulting",
    previous_positions: "Director of Technology",
    bio:
      "PSE has allowed Charissa to grow personally and professionally. When joining PSE, she acquired many skills applicable in the workforce that classes never taught her, such as interview and networking tips. Learning from her peers, Charissa became more aware of different fields of business that she was not comfortable with, such as finance. Learning from the companies PSE has networked with, she gained exposure to the many positions available within one sector of business that she is interested in. Personally, PSE allowed Charissa to see her potential and become more confident in her abilities. Charissa's role model is Michelle Obama, and enjoys running and reading in her free time. She is also involved in CalTV.",
    linkedin: "https://linkedin.com/in/charissasaputra"
  },

  /* 8 */
  clevian_hsia: {
    img: `${IMAGE_PATH}/clevian_hsia.jpg`,
    name: "Clevian Hsia",
    position: "Director of Projects",
    year: "Sophomore",
    hometown: "San Ramon, CA",
    class: "Kappa",
    major: "Intended Business & Economics",
    minor: "",
    career_interests: "Strategy Consulting & Project Management",
    previous_positions: "",
    bio:
      "PSE has given Clevian professional development, expanded her knowledge about different facets of business, taught her the importance of teamwork and time management, and most importantly, provided her with a family that motivates her to continue to learn and succeed. Her role models are her parents. She enjoys hiking, vlogging, and listening to music in her free time, and was previously involved in the ASUC and Spoon University.",
    linkedin: "https://linkedin.com/in/clevianhsia"
  },

  /* 9 */
  connor_smith: {
    img: `${IMAGE_PATH}/connor_smith.jpg`,
    name: "Connor Smith",
    position: "Active",
    year: "Sophomore",
    hometown: "Los Angeles, CA",
    class: "Iota",
    major: "Intended Business & Economics",
    minor: "",
    career_interests: "Investment Banking & Consulting",
    previous_positions: "Director of Brotherhood, Director of Scholarship",
    bio:
      "Through PSE, Connor has learned to improve upon his weaknesses and capitalize on his strengths. PSE has taught him the importance of cooperation in group settings and the essential role of leadership in all situations. Everything he has learned from PSE gives him a deeper understanding of business and prepares him for the real world. His role model is serial entrepreneur and businessman Elon Musk. Connor is also a member of Enactus, an entrepreneurship club at Berkeley, and works in the Office of the Registrar. He has received the Eagle Scout Award, and spends his free time running, camping, or woodworking.",
    linkedin: "https://linkedin.com/in/connordsmith"
  },

  /* 10 */
  daniel_yoon: {
    img: `${IMAGE_PATH}/daniel_yoon.jpg`,
    name: "Daniel Yoon",
    position: "Active",
    year: "Sophomore",
    hometown: "Chino Hills, CA",
    class: "Lambda",
    major: "Economics",
    minor: "",
    career_interests: "Consulting, Marketing",
    previous_positions: "",
    bio:
      "PSE has given Daniel the tools to help him achieve his future goals. He looks to his mother as his role model. Daniel enjoys listening to music, trying new food, and traveling. ",
    linkedin: "https://www.linkedin.com/in/daniel-yoon-6738a6141/"
  },

  /* 11 */
  dallas_taylor: {
    img: `${IMAGE_PATH}/dallas_taylor.jpg`,
    name: "Dallas Taylor",
    position: "Active",
    year: "Senior",
    hometown: "",
    class: "Epsilon",
    major: "",
    minor: "",
    career_interests: "",
    previous_positions: "",
    bio: "",
    linkedin: ""
  },

  /* 12 */
  dhakshi_balakumar: {
    img: `${IMAGE_PATH}/dhakshi_balakumar.jpg`,
    name: "Dhakshi Balakumar",
    position: "Vice President of Human Resources",
    year: "Sophomore",
    hometown: "Alpharetta, GA",
    class: "Iota",
    major: "Cognitive Science",
    minor: "",
    career_interests: "Consulting",
    previous_positions:
      "Director of External Recruitment, Director of Philanthropy",
    bio:
      "PSE has helped Dhakshi develop her professional skills and expose her to several industries in the business world. She has made new friends with diverse backgrounds and interests, enhancing her college experience with broadened perspectives. Her role model is former Starbucks CEO Howard Schultz. She is a facilitator for the Introduction to Leadership & Culture Decal, a dancer in Maya at Cal, a Golder Bear Orientation Leader, and involved in the Cal Rotaract organization at Berkeley. She loves to cook, sing karaoke, and travel in her free time.",
    linkedin: "https://linkedin.com/in/dhakshib"
  },

  /* 13 */
  emma_tsuneishi: {
    img: `${IMAGE_PATH}/emma_tsuneishi.jpg`,
    name: "Emma Tsuneishi",
    position: "Director of Internal Recruitment",
    year: "Sophomore",
    hometown: "Torrance, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Consulting",
    previous_positions: "",
    bio:
      "PSE has improved Emma's public speaking and presentation skills. She's learned to work efficiently and better manage her time. Her role model is actress Emma Watson. She enjoys teaching, singing, and playing basketball. Emma is involved in Wonderworks and Intervarsity, and is a recipient of the Association of Torrance School Administration Scholarship.",
    linkedin: "https://linkedin.com/in/emmatsuneishi"
  },

  /* 14 */
  eva_su: {
    img: `${IMAGE_PATH}/eva_su.jpg`,
    name: "Eva Su",
    position: "Director of Scholarship",
    year: "Sophomore",
    hometown: "Kansas City, Missouri",
    class: "Iota",
    major: "Intended Business & Economics",
    minor: "",
    career_interests: "Strategy Consulting & Digital Marketing",
    previous_positions: "",
    bio:
      "PSE has given Eva a close network of friends who she can not only rely on for business advice, but unending support through college. PSE helped her gain exposure to the marketing world through numerous case competitions, mock interviews, resume workshops, and networking events. Her role model is Michelle Obama. Eva is involved in several other campus organizations, including Berkeley Women in Business, Enactus, Dance the Bay, and Freshmen Sophomore Business Club. She is a top-rated eBay seller and has sold to all 50 states and 4 continents. She recently made her 6,000th transaction while maintaining a 100% positive feedback rating. She loves Broadway and performed with the NYU Tisch performance troupe last summer. She greatly enjoys musical theatre, yoga, and hiking.",
    linkedin: "https://linkedin.com/in/sueva"
  },

  /* 15 */
  harika_kalluri: {
    img: `${IMAGE_PATH}/harika_kalluri.jpg`,
    name: "Harika Kalluri",
    position: "Vice President of Professional Development",
    year: "Sophomore",
    hometown: "San Jose, CA",
    class: "Iota",
    major: "Intended Business & Economics",
    minor: "Technology & Entrepreneurship Certificate",
    career_interests: "Management Consulting",
    previous_positions:
      "Prospective Member Trainer, Director of Professional Development",
    bio:
      "PSE has introduced Harika to a group of intelligent, creative, and determined individuals - each willing to share their experiences to help one another grow professionally and personally. Furthermore, being in a fraternity that focuses on marketing has taught her not only to develop effective marketing strategies, but also to market herself as an individual. Her role models are Rushil Desai, her big in PSE, and Saad Hirani, a leader in her other campus organization Berkeley Business Society. Harika was awarded 2nd place in the 2016 PwC case competition. She enjoys hand lettering, dance, and photography in her free time.",
    linkedin: "https://linkedin.com/in/harikakalluri"
  },

  /* 16 */
  howard_huang: {
    // img: 'images/brothers/howard_huang.jpg', // TODO
    img: `${IMAGE_PATH}/bro-placeholder.jpg`,
    name: "Howard Huang",
    position: "Prospective Member Trainer",
    year: "Senior",
    hometown: "Arcadia, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Consulting",
    previous_positions: "Director of Brotherhood",
    bio:
      "As a transfer student, PSE has given Howard the confidence and skills that helped him transition socially and professionally into a new environment at Cal. Cases, info sessions, and mock interviews have better prepared him for real-world experiences. Howard's role models are his parents. He is an avid musician and athlete - he collects vinyls, and plays piano and volleyball. Howard is also a member of Voyager Consulting, and was a brother of PSE Beta Kappa at Cal Poly Pomona.",
    linkedin: "https://linkedin.com/in/chinhaohowardhuang"
  },

  /* 17 */
  jacqueline_tsang: {
    img: `${IMAGE_PATH}/jacqueline_tsang.jpg`,
    name: "Jacqueline Tsang",
    position: "Director of Social Media",
    year: "Junior",
    hometown: "La Canada, CA",
    class: "Iota",
    major: "Business Administration",
    minor: "",
    career_interests: "Product Management & Digital Marketing",
    previous_positions: "Director of Internal Recruitment",
    bio:
      "PSE has taught Jacqueline the importance of and practice of bette communication, especially when convey messages and ideas or pitching startups and providing case solutions. Her role models are her father, and Facebook COO Sheryl Sandberg. Jacqueline was a finalist in the CITRIS Mobile App Challenge, and is an active member in Dance the Bay and Circle K. She enjoys dancing, drawing, and journaling in her free time.",
    linkedin: "https://linkedin.com/in/tsangjacqueline"
  },

  /* 18 */
  john_van: {
    img: `${IMAGE_PATH}/john_van.jpg`,
    name: "John Van",
    position: "Director of Brotherhood",
    year: "Freshman",
    hometown: "San Marino, CA",
    class: "Lambda",
    major: "Intended Business & Intended Computer Science",
    minor: "",
    career_interests: "Software Development",
    previous_positions: "",
    bio:
      "Through PSE, John developed professionalism as well as analytical and public speaking skills. His role model is his father. John is in the Cal Aquatics Swim Club. He enjoys swimming, playing the piano, and eating.",
    linkedin: "www.linkedin.com/in/johnvan1"
  },

  /* 19 */
  joshua_nuesca: {
    img: `${IMAGE_PATH}/joshua_nuesca.jpg`,
    name: "Joshua Nuesca",
    position: "Director of External Recruitment",
    year: "Sophomore",
    hometown: "Redlands, CA",
    class: "Lambda",
    major: "Environmental Economics & Intended Data Science",
    minor: "Certificate in Entrepreneurship and Technology",
    career_interests: "Management Consulting, Product Management",
    previous_positions: "",
    bio:
      "Josh was able to unlock his creative potential and presentation skills with numerous case study presentations answering complex questions spanning a variety of industries. PSE also taught him the meaning of brotherhood through teamwork and trust. His role model is Mark Zuckerberg. Josh is in the student-run newspaper group of Cal, The Daily Californian, and is a Resident Assistant. He enjoys exploring new cultures, reading novels, and philosophical conversations on long car rides.",
    linkedin: "www.linkedin.com/in/joshnuesca"
  },

  /* 20 */
  jonathan_duan: {
    img: `${IMAGE_PATH}/jonathan_duan.jpg`,
    name: "Jonathan Duan",
    position: "Active",
    year: "Senior",
    hometown: "Short Hills, NJ",
    class: "Eta",
    major: "Economics & Political Science",
    minor: "",
    career_interests: "Consulting & Project Management",
    previous_positions: "Director of Projects, Director of Philanthropy",
    bio:
      "PSE has taught Jonathan that learning about business is more fun with those who share similar mindsets and passions. His role model is professional bodybuilder Jeff Nippard. Jonathan is very involved in the UC Berkeley community, as he is also a member of the ASUC Office of the Academic Affairs Vice President, campus political party Student Action, Cal Club Tennis team, technology consulting organization DiversaTech, and a brother of Chi Psi social fraternity. He loves to play tennis, lift weights, and listen to music whenever he can.",
    linkedin: "https://linkedin.com/in/jonduan"
  },

  /* 21 */
  justin_tan: {
    img: `${IMAGE_PATH}/justin_tan.JPG`,
    name: "Justin Tan",
    position: "Active",
    year: "Junior",
    hometown: "Newbury Park, CA",
    class: "Kappa",
    major: "Intended Business & Environmental Economics",
    minor: "",
    career_interests: "Investment Banking & Consulting",
    previous_positions: "Director of Brotherhood",
    bio:
      "Justin's biggest lesson from PSE is that communication is the key to holding a group together. In PSE, he's found a family that will motivate him and push him to do his best. Justin's role model is his father. He enjoys traveling around the world, meeting new people and hearing their stories, and playing sports such as soccer and volleyball. He is one of Berkeley's three MicMen and an active member in Cal Rotaract.",
    linkedin: "https://linkedin.com/in/justintan14"
  },

  /* 22 */
  kailin_li: {
    img: `${IMAGE_PATH}/kailin_li.jpg`,
    name: "Kailin Li",
    position: "Active",
    year: "Senior",
    hometown: "Granada Hills, CA",
    class: "Theta",
    major: "Economics & Cognitive Science",
    minor: "",
    career_interests: "Human Resources Consulting & Product Design",
    previous_positions:
      "Director of External Recruitment, Vice President of Human Relations",
    bio:
      "Kailin has learned to stay curious; professionally, PSE has exposed her to new career paths with its networking dinners and info sessions. And socially, she loves the fact that she gets to work and grow with the PSE family. Whether it's going to a Kanye concert together or heading to the city together, getting to know her brothers has been the most rewarding aspect PSE has given her. Her role model is professional player Rafael Nadal. Kailin won 2nd place at the Infosys Design Thinking competition, and is involved in the Philosophy Forum at Berkeley. Her hobbies include hiking, photography, and learning new languages.",
    linkedin: "https://linkedin.com/in/kailinli"
  },

  /* 23 */
  kelvin_xu: {
    img: `${IMAGE_PATH}/kelvin_xu.jpg`,
    name: "Kelvin Xu",
    position: "Vice President of Administration",
    year: "Sophomore",
    hometown: "Shanghai, China",
    class: "Kappa",
    major: "Economics & Statistics",
    minor: "",
    career_interests: "Management Consulting & Data Analysis",
    previous_positions: "",
    bio:
      "Through PSE, Kelvin has learned useful skills in professinal service industries and to utilize his strengths within a team. His role model is film director Stephen Chow, and he plays soccer, basketball, and blackjack whenever he can. Kelvin is the Public Relations Chair of the Chinese People Union.",
    linkedin: "https://linkedin.com/in/kelvinxu97"
  },

  /* 24 */
  kevin_lee: {
    img: `${IMAGE_PATH}/kevin_lee.jpg`,
    name: "Kevin Lee",
    position: "Vice President of Finance",
    year: "Junior",
    hometown: "Fullerton, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Tax Advisory",
    previous_positions: "Chapter Secretary",
    bio:
      "PSE has taught Kevin that the people you meet mold and shape your future; PSE has given him the opportunity to realize his dreams. Kevin's role model is his father. He enjoys playing tennis, trying out new food, and singing. Kevin is also an active member of Korean American Student Association (KASA) and Coaching Corps.",
    linkedin: "https://linkedin.com/in/kevinkeyhyunlee/"
  },

  /* 25 */
  kian_kiasaleh: {
    img: `${IMAGE_PATH}/kian_kiasaleh.jpg`,
    name: "Kian Kiasaleh",
    position: "Director of Professional Development",
    year: "Sophomore",
    hometown: "San Clemente, CA",
    class: "Kappa",
    major: "Economics",
    minor: "",
    career_interests: "Brand Consulting & Product Marketing",
    previous_positions: "Director of Alumni Relations",
    bio:
      "PSE introduced Kian to a community that inspires him to improve himself, and taught him to develop his personal brand. His role models are Robert Downey Jr. and Tyra Banks. He enjoys trying new foods, riding roller coasters, and doing impressions. Kian is also a member of the Film Committee in Business Careers in Entertainment Club (BCEC).",
    linkedin: "https://linkedin.com/in/kiankiasaleh"
  },

  /* 26 */
  kyle_lu: {
    img: `${IMAGE_PATH}/kyle_lu.jpg`,
    name: "Kyle Lu",
    position: "Active",
    year: "Junior",
    hometown: "Cerritos, CA",
    class: "Iota",
    major: "Economics & Statistics",
    minor: "",
    career_interests: "Consulting & Investment Banking",
    previous_positions: "Director of Technology, Prospective Member Trainer",
    bio:
      "Through PSE, Kyle has learned many professional skills, especially how to market himself. His role model is Chinese martial artist Ip Man, mentor to Bruce Lee. Kyle is also involved in Cal Dragon Boat and Innovative Design. He won 2nd place in the Fall 2016 PwC case competition, and was a finalist in the Spring 2016 Deloitte case competition. He hobbies include photography, graphic design, and paddling.",
    linkedin: "https://linkedin.com/in/kylewongkailu"
  },

  /* 27 */
  linda_li: {
    img: `${IMAGE_PATH}/linda_li.jpg`,
    name: "Linda Li",
    position: "Director of Philanthropy",
    year: "Junior",
    hometown: "Davis, CA",
    class: "Iota",
    major: "Business",
    minor: "Public Health",
    career_interests: "Healthtech Consulting & Marketing",
    previous_positions:
      "Director of Professional Development, Director of Projects",
    bio:
      "PSE has provided Linda with professional development in decking presentations, competing in case competitions, interviewing, and resume-building. She has expanded her network and created a space she can truly call home here at Cal. Her role models are Beyonce and Michelle Obama. Linda is a scheduling supervisor for the ASUC Event Services team, and a member of Spoon University. She was a marketing intern at healthtech startup Stroll Health, and loves to hike, play the piano, and attend music festivals whenever she can.",
    linkedin: "www.linkedin.com/in/li-linda"
  },

  /* 28 */
  liona_li: {
    img: `${IMAGE_PATH}/liona_li.jpg`,
    name: "Liona Li",
    position: "Active",
    year: "Freshman",
    hometown: "Alameda, CA",
    class: "Lambda",
    major: "Political Economy",
    minor: "",
    career_interests: "Management Consulting, Marketing",
    previous_positions: "",
    bio:
      "PSE has given Liona knowledge of various industries and skills such as time mangament. Her role model is Austrian-American actor and politician Arnold Schwarzenegger. Liona is also involved in ASUC. Her hobbies include hiking, baking, and scrapbooking.",
    linkedin: "https://linkedin.com/in/lionali"
  },

  /* 29 */
  max_seltzer: {
    img: `${IMAGE_PATH}/max_seltzer.jpg`,
    name: "Max Seltzer",
    position: "Active",
    year: "Senior",
    hometown: "Los Angeles, CA",
    class: "Delta",
    major: "Political Science",
    minor: "",
    career_interests: "Product Management & UX Design",
    previous_positions: "Vice President of Finance",
    bio:
      "PSE taught Max the value of learning to work with individuals from such diverse backgrounds, and how everyone can contribute to a team. His role model is professional baseball player Derek Jeter. Max is a Birthright Excel Fellow, world traveler, and back-to-back Intramural Softball Champion. He is involved in EnableTech, Intramural sports, is a brother of Phi Kappa Psi social fraternity. Max loves to watch and play sports, read the newspaper, and cultivate above-average Spotify playlists.",
    linkedin: "https://linkedin.com/in/maxsseltzer"
  },

  /* 30 */
  michael_hillsman: {
    img: `${IMAGE_PATH}/michael_hillsman.jpg`,
    name: "Michael Hillsman",
    position: "Active",
    year: "Freshman",
    hometown: "Tulsa, Oklahoma",
    class: "Lambda",
    major: "Cognitive Science & Computer Science",
    minor: "",
    career_interests: "Software Development, Product Management",
    previous_positions: "",
    bio:
      "Michael has learned ways in which he can better himself professionally as well as how to more effectively work with others towards a common goal. His role models are tech visionaries Elon Musk and Steve Jobs. Michael enjoys software development, day-trading, and tennis.",
    linkedin: "www.linkedin.com/in/MichaelHillsman"
  },

  /* 31 */
  nancy_zhu: {
    img: `${IMAGE_PATH}/nancy_zhu.jpg`,
    name: "Nancy Zhu",
    position: "Active",
    year: "Senior",
    hometown: "Burlingame, CA",
    class: "Zeta",
    major: "Applied Mathematics",
    minor: "",
    career_interests: "Financial Services & Investment Banking",
    previous_positions:
      "Vice President of Human Resources, Director of Brotherhood",
    bio:
      "No matter what field you are trying to get in, personal branding is important. PSE has taught Nancy to discover her passions and strengths and fully leverage them on her way to achieve her goals in all aspects of life. Her role model is Sheryl Sandberg, COO of Facebook. Nancy was a Finalist in the 2016 Deloitte case competition. Her hobbies include rooftop photography, singing with an acoustic piano, and traveling.",
    linkedin: "https://linkedin.com/in/nancyzy"
  },

  /* 32 */
  olivia_lee: {
    img: `${IMAGE_PATH}/olivia_lee.jpg`,
    name: "Olivia Lee",
    position: "Director of Brotherhood",
    year: "Freshman",
    hometown: "Fullerton, CA",
    class: "Lambda",
    major: "Economics & Computer Science",
    minor: "",
    career_interests: "Technology Consulting & Marketing",
    previous_positions: "",
    bio:
      "Through PSE, Olivia learned about the finer details of the various industries within the business world and the expectations of them. As a result, She found my interest in consulting and marketing, and was able to receive proper support and guidance. Through the constantly ongoing professional development and collaborative projects, She is able to challenge herself to different ideas and perspectives that contribute to her personal growth. Her role model are her parents. Olivia was a CSF Seymour Award Finalist. She loves digital design, journalism, and cooking.",
    linkedin: "https://www.linkedin.com/in/oliviasulee/"
  },

  /* 33 */
  nicholas_chun: {
    img: `${IMAGE_PATH}/nicholas_chun.JPG`,
    name: "Nicholas Chun",
    position: "Active",
    year: "Junior",
    hometown: "Carmel, IN",
    class: "Theta",
    major: "Economics",
    minor: "",
    career_interests: "Consulting",
    previous_positions:
      "Director of Internal Recruitment, Vice President of Finance",
    bio:
      "Through PSE, Nicholas now has a better understanding of what it means to effectively work with others professionally while also maintaining close, personal relationships. College is a great time to explore oneself and reach new heights while also forming strong friendships with others and he believes PSE helps him achieve this. His role model is professional wrestler and actor Dwayne 'The Rock' Johnson. Nicholas co-wrote several articles at the American Chamber of Commerce in South Korea, and is involved in the ASUC Office of the Academic Affairs Vice President. He plays the electric guitar, longboards around Berkeley, and listens to music whenever he can.",
    linkedin: "https://linkedin.com/in/nicholas-chun-188a98113"
  },

  /* 34 */
  nick_cheng: {
    img: `${IMAGE_PATH}/nick_cheng.jpg`,
    name: "Nick Cheng",
    position: "Active",
    year: "Senior",
    hometown: "Bangkok, Thailand",
    class: "Delta",
    major: "Sustainable Environmental Design",
    minor: "",
    career_interests: "Environmental Consulting",
    previous_positions: "Director of Technology",
    bio:
      "PSE has taught Nick about the power and importance of marketing. His role model is politician and environmentalist Al Gore. Nick won 5th place in the CMYK Designathon, and is an active member of FEMTech, Thai Student Association, and dance team AFX. Nick loves photography, web design, and playing music in his free time.",
    linkedin: "https://linkedin.com/in/chengnick"
  },

  /* 35 */
  peter_vu: {
    img: `${IMAGE_PATH}/bro-placeholder.jpg`,
    name: "Peter Vu",
    position: "Prospective Member Trainer",
    year: "Senior",
    hometown: "",
    class: "Zeta",
    major: "Business Administration",
    minor: "",
    career_interests: "",
    previous_positions: "Vice President of Professional Development",
    bio: "",
    linkedin: ""
  },

  /* 36 */
  rahul_rangnekar: {
    img: `${IMAGE_PATH}/rahul_rangnekar.jpg`,
    name: "Rahul Rangnekar",
    position: "Prospective Member Trainer",
    year: "Senior",
    hometown: "Claremont, CA",
    class: "Theta",
    major: "Computer Science & Economics",
    minor: "",
    career_interests: "Product Management & Software Development",
    previous_positions: "Director of Brotherhood, Vice President of Marketing",
    bio:
      "Through PSE, Rahul has learned to adapt his leadership style and 'fill the gaps' when working with team members who have distinct work ethics and skillsets. He enjoys the experiences PSE has given him - the Under Armour project, the opportunity to code this entire website, and the brotherhood of a lifetime. His role models are retired NBA player Tim Duncan and entrepreneur Tim Ferriss. Rahul was previously involved in the ASUC and American Red Cross at Cal. He enjoys working out daily, writing on Medium and LinkedIn, trying and reviewing restaurants on Yelp, and developing applications for others to enjoy.",
    linkedin: "https://linkedin.com/in/rahrang",
    medium: "https://medium.com/@rahrang",
    github: "https://github.com/rahrang",
    website: "http://rahrang.xyz"
  },

  /* 37 */
  reina_zhang: {
    img: `${IMAGE_PATH}/reina_zhang.jpg`,
    name: "Reina Zhang",
    position: "Active",
    year: "Sophomore",
    hometown: "Beijing, China",
    class: "Lambda",
    major: "Economics & Media Studies",
    minor: "Theater",
    career_interests: "Advertising and Brand Marketing",
    previous_positions: "",
    bio:
      "Reina gained both professional knowledge and brotherhood from PSE. Aside from learning about different fields of business such as finance, she also acquired applicable skills such as public speaking and decking. Being in a marketing fraternity has given Reina insights on potential positions in companies and strengthened her interest in the marketing profession. Her role model is her father. Reina is in the Berkeley Advertising Agency. She enjoys theater lighting design, music, and reading.",
    linkedin: "https://www.linkedin.com/in/reinazhang"
  },

  /* 38 */
  reshma_belur: {
    img: `${IMAGE_PATH}/reshma_belur.jpg`,
    name: "Reshma Belur",
    position: "Director of Projects",
    year: "Freshman",
    hometown: "Collegeville, PA",
    class: "Lambda",
    major: "Economics",
    minor: "",
    career_interests: "Marketing, Communications",
    previous_positions: "",
    bio:
      "From PSE, Reshma learned the value of community and professional development. Her role model is her brother Varun. Reshma works for the Center on the Economics and Demographics of Aging and the Haas Alumni Association. She also won the Rotary Student Achievement Award. She enjoys meeting new people, taking walks, and online shopping. ",
    linkedin: "https://www.linkedin.com/in/reshmabelur"
  },

  /* 39 */
  rick_choi: {
    img: `${IMAGE_PATH}/rick_choi.jpg`,
    name: "Rick Choi",
    position: "Active",
    year: "Freshman",
    hometown: "Seoul, Korea",
    class: "Lambda",
    major: "Intended Business & Economics",
    minor: "Art Practice",
    career_interests: "Management Consulting, Corporate Law",
    previous_positions: "",
    bio:
      "Through PSE, Rick learned basic information about business and gained important tips in preparing for interviews, resumes, and internships. His role model is South Korean diplomat Ban Ki-moon. Rick is invovled in KASA and Dentro. He also won the China Marchants Art Mural. Rick enjoys playing basketball, sketching, and exercising in his free time.",
    linkedin: "www.linkedin.com/in/rick-choi"
  },

  /* 40 */
  rose_min: {
    img: `${IMAGE_PATH}/rose_min.jpg`,
    name: "Rose Min",
    position: "Director of Projects",
    year: "Sophomore",
    hometown: "Shanghai, China",
    class: "Kappa",
    major: "Intended Business",
    minor: "French",
    career_interests: "Consulting & Marketing",
    previous_positions: "",
    bio:
      "PSE has given Rose the opportunity to further explore and practice her interest in different business fields. She's learned the importance of managing her time effectively, the beauty of team work, the strategy behind a personal brand, and networking etiquette. Her role model is actress Emma Watson. She enjoys traveling, photography, and dancing, and is actively involved in the Marketing team of Fashion and Student Trends (FAST).",
    linkedin: "https://linkedin.com/in/rosemin"
  },

  /* 41 */
  rushil_desai: {
    img: `${IMAGE_PATH}/rushil_desai.jpg`,
    name: "Rushil Desai",
    position: "Active",
    year: "Senior",
    hometown: "Santa Cruz, CA",
    class: "Zeta",
    major: "Economics",
    minor: "",
    career_interests: "Investment Banking & Corporate Banking",
    previous_positions:
      "Vice President of Administration, Prospective Member Trainer",
    bio:
      "PSE has taught Rushil to sell his brand. PSE has given Rushil the tools necessary to overcome barriers in highly competitive industries. PSE has prepared him to break into Investment Banking with interview preparation, networking tips, resume building, and hands-on consulting/marketing projects. Rushil's role model is his mother, Jigisha Desai. He is also involved in Indus South Asian Organization, the ASUC, UC Berkeley Men's Volleyball, and Berkeley College Republicans. Rushil is a Regent's Scholar, and an athlete on the All-Northern California Collegiate Volleyball League 2nd Team.",
    linkedin: "https://linkedin.com/in/rushil-desai-29a825a7"
  },

  /* 42 */
  sean_yu: {
    img: `${IMAGE_PATH}/sean_yu.jpg`,
    name: "Sean Yu",
    position: "President",
    year: "Junior",
    hometown: "Manila, Philippines",
    class: "Theta",
    major: "Economics",
    minor: "",
    career_interests: "Corporate Strategy & Financial Technology",
    previous_positions:
      "Prospective Member Trainer, Vice President of Professional Development",
    bio:
      "PSE has taught Sean to be a great communicator. From networking with professionals at career fairs, to public speaking and giving presentations, and to casual chats with strangers, communication has unlocked multiple doors for him and has helped him to develop as an individual. His parents are his role models. Sean was previously involved in Berkeley ABA (Asian Business Association), and his hobbies include playing golf, fishing, and traveling.",
    linkedin: "https://linkedin.com/in/seanjcyu"
  },

  /* 43 */
  syed_adil: {
    img: `${IMAGE_PATH}/syed_adil.jpg`,
    name: "Syed Adil",
    position: "Active",
    year: "Senior",
    hometown: "Kuala Lumpur, Malaysia",
    class: "Zeta",
    major: "Political Economy",
    minor: "",
    career_interests: "Management Consulting",
    previous_positions: "Director of Internal Recruitment",
    bio:
      "Syed appreciates how PSE taught him to learn and understand his teammates in order to make a large impact when working on team projects. He has worked as a PwC Assurance intern and a CIMB Islamic Finance Asset Management Intern over previous summers. His role model is Jack Ma, founder and CEO of the Alibaba Group. Syed is a national fencer, and an active member of the Cal Fencing team. He also plays soccer in his free time.",
    linkedin: "https://linkedin.com/in/syedadilemirputra"
  },

  /* 44 */
  taylor_lee: {
    img: `${IMAGE_PATH}/taylor_lee.jpg`,
    name: "Taylor Lee",
    position: "Chapter Secretary",
    year: "Senior",
    hometown: "Danville, California",
    class: "Theta",
    major: "Economics",
    minor: "",
    career_interests: "Accounting & Consulting",
    previous_positions: "Vice President of Administration",
    bio:
      "PSE has taught Taylor a variety of skills, including public speaking, interview skills, and, most importantly, how to get an internship. His role model is Kevin Phan, current president of PSE. Taylor is also actively involved in Cal Rotaract and The Green Initiative Fund. He is knowledgeable in LLC formation, and enjoys distance running (with dogs), playing the guitar, and ice skating.",
    linkedin: "https://linkedin.com/in/taylorthomaslee"
  },

  /* 45 */
  tia_chen_wong: {
    img: `${IMAGE_PATH}/tia_chen_wong.jpg`,
    name: "Tia Chen-Wong",
    position: "Active",
    year: "Sophomore",
    hometown: "Rancho Santa Margarita, CA",
    class: "Kappa",
    major: "Intended Business",
    minor: "English",
    career_interests: "Marketing",
    previous_positions: "",
    bio:
      "Tia has learned to deck beautiful presentations, the mechanics of case competitions, and public speaking skills through PSE. Her role models are actress Emma Watson and Eleanor Roosevelt. Tia enjoys writing creatively, hiking, and reading literature. She is a Resident Assistant (RA) in the Units.",
    linkedin: "https://linkedin.com/in/tiare-chen-wong"
  },

  /* 46 */
  tim_cheng: {
    img: `${IMAGE_PATH}/tim_cheng.jpg`,
    name: "Tim Cheng",
    position: "Director of Technology",
    year: "Sophomore",
    hometown: "Oak Park, CA",
    class: "Kappa",
    major: "Computer Science",
    minor: "",
    career_interests: "Software Development",
    previous_positions: "",
    bio:
      "Through PSE, Tim learned to effectively utilize his soft skills such as public speaking in a professional setting. His role model is rapper Kanye West. Tim enjoys working out and trying new foods.",
    linkedin: "https://www.linkedin.com/in/tim-cheng/"
  },

  /* 47 */
  varsha_sundar: {
    img: `${IMAGE_PATH}/varsha_sundar.jpg`,
    name: "Varsha Sundar",
    position: "Director of Projects",
    year: "Sophomore",
    hometown: "Irvine, CA",
    class: "Kappa",
    major: "Intended Business & Economics",
    minor: "Technology & Entrepreneurship Certificate",
    career_interests: "Management Consulting",
    previous_positions: "",
    bio:
      "PSE has provided Varsha with professional development in respect to interviewing, emailing, and networking. She has gained exposure to various business paths and the ability to unlock hidden potential in herself and others. Her role models are her grandmother and Michelle Obama. Varsha is actively involved in Asha for Education and the ASUC Office of the EVP. She is a recipient of the Cal Alumni Leadership Award, and loves to take photos, travel, and review movies in her free time.",
    linkedin: "https://linkedin.com/in/varsha-sundar"
  },

  /* 48 */
  yixuan_lu: {
    img: `${IMAGE_PATH}/yixuan_lu.jpg`,
    name: "Yixuan Lu",
    position: "Vice President of Marketing",
    year: "Junior",
    hometown: "Fremont, CA",
    class: "Iota",
    major: "Media Studies",
    minor: "Political Economy",
    career_interests: "Marketing, Business Development, & Brand Strategy",
    previous_positions: "Director of Internal Recruitment",
    bio:
      "PSE has taught Yixuan the importance of having an excellent personal brand. It has shaped her into a more confident, knowledgeable, and professional individual through coffee chats, case competitions, and various Chapter events. PSE has introduced her to many motivated and successful individuals that she feel beyond blessed to be a part of the diverse community at Cal. Her role model is her grandmother. Yixuan was awarded 2nd place in the 2016 PwC case competition, and is also an active member of Berkeley Women in Business. She loves blogging, watercoloring, and going on road trips.",
    linkedin: "https://linkedin.com/in/yixuanlu11280"
  }
};

export { VP_LIST, ALL_EXECS_LIST, BROTHER_INFO };
