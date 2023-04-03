import {
  faLinkedin,
  faMedium,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import amcImage from "./assets/AMC_Image.png";
import bbcaImage from "./assets/BBCA_Image.png";
import ifcImage from "./assets/IFC_Image.png";
import sundanceImage from "./assets/Sundance_Image.png";
import wetvImage from "./assets/WeTv_Image.png";
import bloomImage from "./assets/Bloom_Full.png";
import simmerImage from "./assets/Simmer_Full.jpg";
import bigSpliceImage from "./assets/BigSplice_Full.png";
import portfolioImage from "./assets/Portfolio_Full.png";
import AMCNLogo from "./assets/AMCN_Logo.png";
import AMCPlayer from "./assets/AMC_Player.png";
import BashLogo from "./assets/Bash_Logo.png";
import BrightcoveLogo from "./assets/Brightcove_Logo.png";
import CronLogo from "./assets/Cron_Logo.png";
import CSSLogo from "./assets/CSS_Logo.png";
import CSSModulesLogo from "./assets/CSSModules_Logo.png";
import DeluxeLogo from "./assets/Deluxe_Logo.png";
import DjangoLogo from "./assets/Django_Logo.png";
import ExpressLogo from "./assets/Express_Logo.png";
import FFmpegLogo from "./assets/FFmpeg_Logo.png";
import FullstackLogo from "./assets/Fullstack_Logo.png";
import GitLogo from "./assets/Git_Logo.png";
import GraphQLLogo from "./assets/GraphQL_Logo.png";
import HTMLLogo from "./assets/HTML_Logo.png";
import JestLogo from "./assets/Jest_Logo.png";
import JSLogo from "./assets/JS_Logo.png";
import NextJSLogo from "./assets/NextJS_Logo.png";
import NodeLogo from "./assets/Node_Logo.png";
import NYULogo from "./assets/NYU_Logo.png";
import PHPLogo from "./assets/PHP_Logo.png";
import PostgreSQLLogo from "./assets/Postgresql_Logo.png";
import PreactLogo from "./assets/Preact_Logo.png";
import PrimeFocusLogo from "./assets/PrimeFocus_Logo.png";
import PythonLogo from "./assets/Python_Logo.png";
import ReactLogo from "./assets/React_Logo.png";
import RecoilLogo from "./assets/Recoil_Logo.svg";
import ZustandLogo from "./assets/Zustand_Logo.png";
import ReduxLogo from "./assets/Redux_Logo.png";
import RollupLogo from "./assets/Rollup_Logo.png";
import SCSSLogo from "./assets/SCSS_Logo.jpeg";
import SQLLogo from "./assets/SQL_Logo.jpg";
import TypescriptLogo from "./assets/Typescript_Logo.png";
import VideojsLogo from "./assets/Videojs_Logo.png";
import VimeoLogo from "./assets/Vimeo_Logo.png";
import WebpackLogo from "./assets/Webpack_Logo.png";
import VideoHQ from "./assets/Portfolio_Video.mp4";
import VideoLQ from "./assets/Portfolio_Video_1mbps.webm";
import VideoPlaceholder from "./assets/Portfolio_Video Placeholder.jpg";
import VimeoUI from "./assets/Vimeo_UI.png";
import VimeoCCCustomization from "./assets/Vimeo_CC_Customization.png";
import VimeoCustomColors from "./assets/Vimeo_Custom_Colors.png";
import VimeoWebinar from "./assets/Vimeo_Webinar.png";
import resume from "./assets/Brandon_H_Rowe_Tech_Resume_2021.pdf";

const constants = {
  resume,
  backgroundVideo: {
    lowQuality: {
      src: VideoLQ,
      type: "video/webm",
    },
    highQuality: {
      src: VideoHQ,
      type: "video/mp4",
    },
    placeholder: VideoPlaceholder,
  },
  personalLinks: [
    {
      component: faLinkedin,
      link: "https://www.linkedin.com/in/brandonhrowe/",
      key: "linkedin",
    },
    {
      component: faGithub,
      link: "https://github.com/brandonhrowe",
      key: "github",
    },
    {
      component: faMedium,
      link: "https://medium.com/@brandon.h.rowe",
      key: "medium",
    },
    {
      component: faEnvelope,
      link: "mailto:brandonhrowe@gmail.com?subject=Greetings!",
      key: "email",
    },
  ],
  projects: [
    {
      title: "Vimeo | Preact UI",
      description: "A complete overhall of the Vimeo Player UI, made with Preact, Typescript, and Zustand.",
      image: VimeoUI,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://player.vimeo.com/video/76979871",
          key: "vimeo-ui",
          title: "Vimeo Player"
        }
      ]
    },
    {
      title: "Vimeo | CC Customization",
      description: "Customize the color, font, background, and more for closed captions.",
      image: VimeoCCCustomization,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://player.vimeo.com/video/76979871",
          key: "vimeo-cc",
          title: "Vimeo Player"
        }
      ]
    },
    {
      title: "Vimeo | Custom Colors",
      description: "Update the color scheme for the Vimeo Player in whatever manner is desired.",
      image: VimeoCustomColors,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://player.vimeo.com/video/76979871?color_one=0fda&color_two=06a&color_three=41b&color_four=442",
          key: "vimeo-custom-colors",
          title: "Vimeo Player"
        }
      ]
    },
    {
      title: "Vimeo | Webinars",
      description: "Create a webinar for all your live event needs.",
      image: VimeoWebinar,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://vimeo.com/features/virtual-events",
          key: "vimeo-webinar",
          title: "Webinars"
        }
      ]
    },
    {
      title: "AMC | AMC Player",
      description: "The video player to watch content from AMC+, AMC, and all the affiliated networks",
      image: AMCPlayer,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.amcplus.com/",
          key: "amc-player",
          title: "AMC+"
        }
      ]
    },
    {
      title: "AMC | AMC Networks",
      description:
        "Watch the latest full episodes and video extras for AMC shows: The Walking Dead, Better Call Saul, Killing Eve, Fear the Walking Dead, Mad Men and more.",
      image: amcImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.amc.com/",
          key: "amc-site",
          title: "AMC",
        },
      ],
    },
    {
      title: "BBC America | AMC Networks",
      description:
        "Watch the latest full episodes and video extras for BBC America shows: Doctor Who, Killing Eve, Orphan Black, Luther, Planet Earth and more.",
      image: bbcaImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.bbcamerica.com/",
          key: "bbca-site",
          title: "BBC America",
        },
      ],
    },
    {
      title: "IFC | AMC Networks",
      description:
        "Watch the latest full episodes and video extras for IFC shows: Sherman's Showcase, Brockmire, Documentary Now!, Portlandia, Stan Against Evil and more.",
      image: ifcImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.ifc.com/",
          key: "ifc-site",
          title: "IFC",
        },
      ],
    },
    {
      title: "SundanceTV | AMC Networks",
      description:
        "Watch the latest full episodes and video extras for SundanceTV shows: Liar, The Split, Back, The A Word, Close Up With Hollywood Reporter and more.",
      image: sundanceImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.sundancetv.com/",
          key: "sundance-site",
          title: "SundanceTV",
        },
      ],
    },
    {
      title: "WEtv | AMC Networks",
      description:
        "Watch the latest full episodes and video extras for WE tv shows: Marriage Boot Camp, Growing Up Hip Hop, Braxton Family Values, Love After Lockup, Mama June: From Not to Hot and more.",
      image: wetvImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.wetv.com/",
          key: "wetv-site",
          title: "WEtv",
        },
      ],
    },
    {
      title: "Bloom Writing",
      description:
        "Write stories with the help of randomly-generated prompts and sentence suggestions.",
      image: bloomImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://bloom-writing.herokuapp.com",
          key: "bloom-site",
          title: "Site",
        },
        {
          component: faGithub,
          link: "https://github.com/brandonhrowe/bloom-writing",
          key: "bloom-github",
          title: "GitHub",
        },
        {
          component: faMedium,
          link:
            "https://medium.com/@brandon.h.rowe/in-search-of-lost-words-8a431227da67?source=friends_link&sk=a63a2cfe1c3ff9cf6d462754d452ab52",
          key: "bloom-medium",
          title: "Article",
        },
      ],
    },
    // {
    //   title: "Simmer",
    //   description:
    //     "Bookmark recipes from various cooking sites through the Simmer Chrome extension for on- and off-line access.",
    //   image: simmerImage,
    //   links: [
    //     {
    //       component: faGlobeAmericas,
    //       link: "https://simmer.brook.li",
    //       key: "simmer-site",
    //       title: "Site",
    //     },
    //     {
    //       component: faGithub,
    //       link: "https://github.com/1902cs-indigo-oscar/Simmer",
    //       key: "simmer-github",
    //       title: "GitHub",
    //     },
    //     {
    //       component: faYoutube,
    //       link: "https://www.youtube.com/embed/N-c-Lw-gp-o",
    //       key: "simmer-youtube",
    //       title: "Presentation",
    //     },
    //   ],
    // },
    {
      title: "The Big Splice",
      description:
        "Create old-fashioned, film-noir collages by assembling clips selected from the Internet Archive.",
      image: bigSpliceImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.thebigsplice.com",
          key: "big-splice-site",
          title: "Site",
        },
        {
          component: faGithub,
          link: "https://github.com/brandonhrowe/the-big-splice",
          key: "big-splice-github",
          title: "GitHub",
        },
        {
          component: faMedium,
          link:
            "https://medium.com/@brandon.h.rowe/splicing-concepts-together-faedc90170a9?source=friends_link&sk=12dc945a03cf4a027c9c7dd0c4a274ec",
          key: "big-splice-medium",
          title: "Article",
        },
      ],
    },
    {
      title: "Brandon Rowe Portfolio Site",
      description: "This very site upon which you gander right now.",
      image: portfolioImage,
      links: [
        {
          component: faGithub,
          link: "https://github.com/brandonhrowe/brandonrowe-portfolio-v2",
          key: "portfolio-github",
          title: "GitHub",
        },
      ],
    },
  ],
  experience: [
    {
      name: "Vimeo",
      logo: VimeoLogo,
      link: "https://vimeo.com",
      roles: []
    },
    {
      name: "AMC Networks",
      logo: AMCNLogo,
      link: "https://www.amc.com/",
      roles: [
        {
          title: "Frontend Engineer I",
          dates: "November 2019-present",
          description: [
            'Co-authored "Content Compiler" middleware to reduce frontend call times by ~95%',
            "Lead development of Video Player implementation using Brightcove Studios",
            'Built out "White Label" web application to host multiple websites from a single React project',
            "Work with international team to resolve React/SCSS features and defects",
          ],
        },
      ],
    },
    {
      name: "Fullstack Academy",
      logo: FullstackLogo,
      link: "https://www.fullstackacademy.com/",
      roles: [
        {
          title: "Software Engineering Mentor",
          dates: "October 2020-February 2021",
          description: [
            "Provided guidance to recent bootcamp graduate with their job application process",
            "Conducted mock technical interviews with mentee to sharpen their skills",
          ],
        },
        {
          title: "Software Engineering Teaching Fellow",
          dates: "May 2019-September2019",
          description: [
            "Mentored ~40 software-engineering students on Node.js, React and other JavaScript libraries",
            "Led algorithm reviews",
            "Acted as scrum master for senior-phase group projects",
            "Interviewed student candidates and vet their technical abilities",
          ],
        },
      ],
    },
    {
      name: "Prime Focus Technologies",
      logo: PrimeFocusLogo,
      link: "https://www.primefocustechnologies.com/",
      className: "img-resize",
      roles: [
        {
          title: "Post-Production Technician",
          dates: "May 2017-January 2019",
          description: [
            "Coded scripts to automate workflows using Bash and FFmpeg, speeding up processes by 500%",
            "Managed and updated daily workflows for tech department with advanced software, increasing encoding capacity from 5 to 40 a day",
            "Liaised with key stakeholders at HBO, IFC and A&E to manage their video encoding and editing work",
          ],
        },
      ],
    },
    {
      name: "Deluxe",
      logo: DeluxeLogo,
      link: "https://www.bydeluxe.com/en/",
      roles: []
    },
    {
      name: "NYU",
      logo: NYULogo,
      link: "https://www.nyu.edu/",
      roles: []
    }
  ],
  tech: [
    {
      name: 'JavaScript',
      logo: JSLogo,
      link: 'https://www.javascript.com/'
    },
    {
      name: 'Python',
      logo: PythonLogo,
      link: 'https://www.python.org/'
    },
    {
      name: 'React',
      logo: ReactLogo,
      link: 'https://reactjs.org/'
    },
    {
      name: 'Preact',
      logo: PreactLogo,
      link: 'https://preactjs.com/'
    },
    {
      name: 'HTML',
      logo: HTMLLogo,
      className: 'img-resize',
      link: 'https://www.w3schools.com/html/html_intro.asp'
    },
    {
      name: 'CSS',
      logo: CSSLogo,
      className: 'img-resize',
      link: 'https://www.w3schools.com/css/'
    },
    {
      name: 'SCSS',
      logo: SCSSLogo,
      link: 'https://sass-lang.com/'
    },
    // {
    //   name: 'CSS Modules',
    //   logo: CSSModulesLogo,
    //   link: 'https://github.com/css-modules/css-modules'
    // },
    {
      name: 'Zustand',
      logo: ZustandLogo,
      link: 'https://github.com/pmndrs/zustand'
    },
    {
      name: 'Redux',
      logo: ReduxLogo,
      link: 'https://redux.js.org/'
    },
    {
      name: 'Node',
      logo: NodeLogo,
      link: 'https://nodejs.org/en/'
    },
    {
      name: 'Express',
      logo: ExpressLogo,
      link: 'https://expressjs.com/'
    },
    // {
    //   name: 'Git',
    //   logo: GitLogo,
    //   link: 'https://git-scm.com/'
    // },
    // {
    //   name: 'Recoil',
    //   logo: RecoilLogo,
    //   link: 'https://recoiljs.org/'
    // },
    {
      name: 'Brightcove',
      logo: BrightcoveLogo,
      link: 'https://www.brightcove.com/en/'
    },
    // {
    //   name: 'video.js',
    //   logo: VideojsLogo,
    //   link: 'https://videojs.com/'
    // },
    {
      name: 'Jest',
      logo: JestLogo,
      link: 'https://jestjs.io/'
    },
    // {
    //   name: 'BASH',
    //   logo: BashLogo
    // },
    {
      name: 'ffmpeg',
      logo: FFmpegLogo,
      link: 'https://www.ffmpeg.org/'
    },
    {
      name: 'PHP',
      logo: PHPLogo,
      link: 'https://www.php.net/'
    },
    // {
    //   name: 'Adobe Creative Suites'
    // },
    {
      name: 'SQL',
      logo: SQLLogo,
      link: 'https://www.w3schools.com/sql/'
    },
    {
      name: 'PostgreSQL',
      logo: PostgreSQLLogo,
      link: 'https://www.postgresql.org/'
    },
    {
      name: 'Webpack',
      logo: WebpackLogo,
      link: 'https://webpack.js.org/'
    },
    {
      name: 'RollupJS',
      logo: RollupLogo,
      link: 'https://rollupjs.org/'
    },
    // {
    //   name: 'GraphQL',
    //   logo: GraphQLLogo,
    //   link: 'https://graphql.org/'
    // },
    {
      name: 'Django',
      logo: DjangoLogo,
      link: 'https://www.djangoproject.com/'
    },
    // {
    //   name: 'Cron',
    //   logo: CronLogo
    // },
    // {
    //   name: 'NextJS',
    //   logo: NextJSLogo,
    //   link: 'https://nextjs.org/'
    // },
    {
      name: 'TypeScript',
      logo: TypescriptLogo,
      link: 'https://www.typescriptlang.org/'
    }
  ]
};

export default constants;
