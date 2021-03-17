import {
  faLinkedin,
  faMedium,
  faGithub,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import amcImage from "./assets/AMC_Image.png";
import bbcaImage from "./assets/BBCA_Image.png";
import ifcImage from "./assets/IFC_Image.png";
import sundanceImage from "./assets/Sundance_Image.png";
import wetvImage from "./assets/WeTv_Image.png";
import bloomImage from "./assets/Bloom_Full.jpg";
import simmerImage from "./assets/Simmer_Full.jpg";
import bigSpliceImage from "./assets/BigSplice_Full.jpg";
import portfolioImage from "./assets/Portfolio_Full.png";
import VideoHQ from "./assets/Portfolio_Video.mp4";
import VideoLQ from "./assets/Portfolio_Video_1mbps.webm";
import VideoPlaceholder from "./assets/Portfolio_Video Placeholder.jpg";

const constants = {
  backgroundVideo: {
    lowQuality: {
      src: VideoLQ,
      type: "video/webm"
    },
    highQuality: {
      src: VideoHQ,
      type: "video/mp4"
    },
    placeholder: VideoPlaceholder
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
      title: "AMC | AMC Networks",
      description: "Watch the latest full episodes and video extras for AMC shows: The Walking Dead, Better Call Saul, Killing Eve, Fear the Walking Dead, Mad Men and more.",
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
      description: "Watch the latest full episodes and video extras for BBC America shows: Doctor Who, Killing Eve, Orphan Black, Luther, Planet Earth and more.",
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
      description: "Watch the latest full episodes and video extras for IFC shows: Sherman's Showcase, Brockmire, Documentary Now!, Portlandia, Stan Against Evil and more.",
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
      description: "Watch the latest full episodes and video extras for SundanceTV shows: Liar, The Split, Back, The A Word, Close Up With Hollywood Reporter and more.",
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
      description: "Watch the latest full episodes and video extras for WE tv shows: Marriage Boot Camp, Growing Up Hip Hop, Braxton Family Values, Love After Lockup, Mama June: From Not to Hot and more.",
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
      description: "Write stories with the help of randomly-generated prompts and sentence suggestions.",
      image: bloomImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://bloom-writing.herokuapp.com",
          key: "bloom-site",
          title: "Site"
        },
        {
          component: faGithub,
          link: "https://github.com/brandonhrowe/bloom-writing",
          key: "bloom-github",
          title: "GitHub"
        },
        {
          component: faMedium,
          link: "https://medium.com/@brandon.h.rowe/in-search-of-lost-words-8a431227da67?source=friends_link&sk=a63a2cfe1c3ff9cf6d462754d452ab52",
          key: "bloom-medium",
          title: "Article"
        }
      ]
    },
    {
      title: "Simmer",
      description: "Bookmark recipes from various cooking sites through the Simmer Chrome extension for on- and off-line access.",
      image: simmerImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://simmer.brook.li",
          key: "simmer-site",
          title: "Site"
        },
        {
          component: faGithub,
          link: "https://github.com/1902cs-indigo-oscar/Simmer",
          key: "simmer-github",
          title: "GitHub"
        },
        {
          component: faYoutube,
          link: "https://www.youtube.com/embed/N-c-Lw-gp-o",
          key: "simmer-youtube",
          title: "Presentation"
        }
      ]
    },
    {
      title: "The Big Splice",
      description: "Create old-fashioned, film-noir collages by assembling clips selected from the Internet Archive.",
      image: bigSpliceImage,
      links: [
        {
          component: faGlobeAmericas,
          link: "https://www.thebigsplice.com",
          key: "big-splice-site",
          title: "Site"
        },
        {
          component: faGithub,
          link: "https://github.com/brandonhrowe/the-big-splice",
          key: "big-splice-github",
          title: "GitHub"
        },
        {
          component: faMedium,
          link: "https://medium.com/@brandon.h.rowe/splicing-concepts-together-faedc90170a9?source=friends_link&sk=12dc945a03cf4a027c9c7dd0c4a274ec",
          key: "big-splice-medium",
          title: "Article"
        }
      ]
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
          title: "GitHub"
        },
      ]
    }
  ],
};

export default constants;
