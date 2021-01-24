import {
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

const constants = {
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
      title: 'AMC Networks',
      description: 'I made the AMC Sites.',
      links: [
        {
          component: faGlobeAmericas,
          link: 'https://www.amc.com/',
          key: 'amc',
          title: 'AMC'
        },
        {
          component: faGlobeAmericas,
          link: 'https://www.bbcamerica.com/',
          key: 'bbca',
          title: 'BBC America'
        },
        {
          component: faGlobeAmericas,
          link: 'https://www.ifc.com/',
          key: 'ifc',
          title: 'IFC'
        },
        {
          component: faGlobeAmericas,
          link: 'https://www.sundancetv.com/',
          key: 'sundance',
          title: 'SundanceTV'
        },
        {
          component: faGlobeAmericas,
          link: 'https://www.wetv.com/',
          key: 'wetv',
          title: 'WEtv'
        },
      ]
    }
  ]
};

export default constants;
