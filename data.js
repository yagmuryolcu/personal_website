const data = {
  en: {
    heroSection: {
      greeting: "Hi! 👋",
      intro: <strong>"I'm Almila. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!" </strong>,
      profileImage: "profile-image.jpg",
      socials: [
        {
          logo: "logo-linkedin.png",
          alt_text: "linkedin",
          link: "https://www.linkedin.com"
        },
        {
          logo: "logo-github.png", 
          alt_text: "github",
          link: "https://www.github.com"
        }
      ],
      ctaHTML: "Currently <strong>Freelancing</strong> for <strong>UX, UI & Web Design</strong> Project. Invite me to join your team => <strong>pratamaiosi@gmail.com</strong>"
    },

    skillsSection: {
      title: "Skills",
      skills: [
        {
          name: "JAVASCRIPT",
          icon: "icon-js.png"
        },
        {
          name: "REACT",
          icon: "icon-react.png"
        },
        {
          name: "REDUX",
          icon: "icon-redux.png"
        },
        {
          name: "NODE",
          icon: "icon-node.png"
        },
        {
          name: "VS CODE",
          icon: "icon-vs-code.png"
        },
        {
          name: "FIGMA",
          icon: "icon-figma.png"
        }
      ]
    },
    profileSection: {
      title: "Profile",
      basicInfo: {
        title: "Basic Informmation",
        details: {
          birthDate: "24.03.1996",
          address: "Ankara",
          educationStatus: "Hacettepe Uni Biology License, 2016",
          preferredRole: "Frontend, UI"
        }
      },
      aboutMe: {
        title: "ABOUT ME",
        description: "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Veniam aut, odit laborum aliquam voluptatum nisl mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      }
    },
    projectsSection: {
      title: "Projects",
      items: [
        {
          id: 1,
          title: "Random Jokes",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur.",
          technologies: ["React", "Vercel", "Axios", "Router"],
          githubLink: "View on GitHub",
          demoLink: "Go to app =>",
          image: "random-jokes-project.jpg"
        },
        {
          id: 2,
          title: "Are you bored?",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          technologies: ["React", "Redux", "Axios", "Router", "Vercel"],
          githubLink: "View on GitHub",
          demoLink: "Go to app =>",
          image: "bored-project.jpg"
        }
      ]
    },
    ctaSection: {
      title: "Let's work together on your next product.",
      socialLinks: [
        {
          name: "Github",
          url: "https://github.com/username",
          type: "social"
        },
        {
          name: "Personal Blog", 
          url: "https://blog.example.com",
          type: "blog"
        },
        {
          name: "Linkedin",
          url: "https://linkedin.com/in/username", 
          type: "social"
        },
        {
          name: "Email",
          url: "mailto:pratamaiosi@gmail.com",
          type: "contact"
        }
      ]
    }
  },

  tr: {
    heroSection: {
      greeting: "Merhaba! 👋",
      intro: "Ben Almila. Full-stack developer'ım. Sağlam ve ölçeklenebilir frontend ürünleri geliştirebilirim. Tanışalım!",
      profileImage: "profile-image.jpg",
      socials: [
        {
          logo: "logo-linkedin.png",
          alt_text: "linkedin",
          link: "https://www.linkedin.com"
        },
        {
          logo: "logo-github.png", 
          alt_text: "github",
          link: "https://www.github.com"
        }
      ],
      ctaHTML: "Şu anda <strong>UX, UI & Web Tasarım</strong> projeleri için <strong>Freelancer</strong> olarak çalışıyorum. Ekibinize katılmam için beni davet edin => <strong>pratamaiosi@gmail.com</strong>"
    },
    skillsSection: {
      title: "Beceriler",
      skills: [
        {
          name: "JAVASCRIPT",
          icon: "icon-js.png"
        },
        {
          name: "REACT",
          icon: "icon-react.png"
        },
        {
          name: "REDUX",
          icon: "icon-redux.png"
        },
        {
          name: "NODE",
          icon: "icon-node.png"
        },
        {
          name: "VS CODE",
          icon: "icon-vs-code.png"
        },
        {
          name: "FIGMA",
          icon: "icon-figma.png"
        }
      ]
    },
    profileSection: {
      title: "Profil",
      basicInfo: {
        title: "Temel Bilgiler",
        details: {
          birthDate: "24.03.1996",
          address: "Ankara",
          educationStatus: "Hacettepe Üni Biyoloji Lisans, 2016",
          preferredRole: "Frontend, UI"
        }
      },
      aboutMe: {
        title: "HAKKIMDA",
        description: "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Veniam aut, odit laborum aliquam voluptatum nisl mollitia. Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      }
    },
    projectsSection: {
      title: "Projeler",
      items: [
        {
          id: 1,
          title: "Rastgele Şakalar",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur.",
          technologies: ["React", "Vercel", "Axios", "Router"],
          githubLink: "GitHub'da Görüntüle",
          demoLink: "Uygulamaya git =>",
          image: "random-jokes-project.jpg"
        },
        {
          id: 2,
          title: "Sıkıldın mı?",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          technologies: ["React", "Redux", "Axios", "Router", "Vercel"],
          githubLink: "GitHub'da Görüntüle",
          demoLink: "Uygulamaya git =>",
          image: "bored-project.jpg"
        }
      ]
    },
    ctaSection: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      socialLinks: [
        {
          name: "Github",
          url: "https://github.com/username",
          type: "social"
        },
        {
          name: "Kişisel Blog",
          url: "https://blog.example.com",
          type: "blog"
        },
        {
          name: "Linkedin",
          url: "https://linkedin.com/in/username", 
          type: "social"
        },
        {
          name: "Email",
          url: "mailto:pratamaiosi@gmail.com",
          type: "contact"
        }
      ]
    }
  }
};

export default data;