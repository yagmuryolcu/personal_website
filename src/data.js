const data = {
  en: {
    heroSection: {
      greeting: "Hi! 👋",
      intro: "I'm Yağmur. I'm a full-stack developer. I can craft solid and scalable frontend products. Let's meet!",
      profileImage: "yağmur-fotoğraf.png",
      socials: [
        {
          logo: "logo-linkedin.png",
          alt_text: "linkedin",
          link: "https://www.linkedin.com/in/ya%C4%9Fmur-sude-yolcu-a229722b9/"
        },
        {
          logo: "logo-github.png", 
          alt_text: "github",
          link: "https://github.com/yagmuryolcu"
        }
      ],
    cta: {
      beforeFreelancing: "Currently ",
      freelancing: "Freelancing",
      betweenText: " for ",
      services: "UX, UI & Web Design",
      afterServices: " Project. Invite me to join your team → ",
      email: "yagmur_yolcu_12@hotmail.com"
    }    },
    skillsSection: {
      title: "Skills",
      skills: [
       { name: "JAVA", icon: "java.png" },
        { name: "JAVASCRIPT", icon: "js-logo-.jpg" },
        { name: "REACT", icon: "react-logoo.png" },
        { name: "REDUX", icon: "redux-logo-.png" },
        { name: "PHP", icon: "phplogo.png" },
        { name: "VS CODE", icon: "vs-logo-.png" },
        { name: "FIGMA", icon: "figma-logo-.jpg" },
        { name: "TAILWIND ", icon: "tacss.png" },
        { name: "POSTMAN ", icon: "postman.png" },
        { name: "SQL ", icon: "sqll.jpg" },
        { name: "C# ", icon: "csharp.jpg" },
        { name: "PYTHON ", icon: "python.png" },



      ]
    },
    profileSection: {
      title: "Profile",
      basicInfo: {
        title: "Basic Information",
        fields: [
          { label: "Birth Date", value: "20.09.2002" },
          { label: "Address", value: "İstanbul / Tuzla" },
          { label: "Education Status", value: "Piri Reis University, MIS License, 2025" },
          { label: "Preferred Role", value: "Frontend Developer, UX/UI Designer, Full-Stack Developer" }
        ]
      
      },
      aboutMe: {
        title: "About me",
            paragraphs: [
          "I am full-stack developer who has an interest in web development and enjoys growing with every new project. My academic background in Management Information Systems has given me both business and technology perspectives, which I aim to apply in all my software projects.",
          "By participating the intensive WorkinTech full-stack program, I am gaining hands-on experience with modern frontend and backend technologies. ",
          "Beyond development, I am also deeply interested in cybersecurity and continuously work to expand my knowledge in this field. My goal is to build web applications that are user-friendly, secure, and deliver real value." ,
           
        ]}
    },
    projectsSection: {
      title: "Projects",
      compimage:"bos-ekran.png",
      items: [
        {
          id: 1,
          title: "CyberSecurity Awareness Tool",
          description: "This cybersecurity awareness website was developed using PHP and runs locally on XAMPP. It integrates an API to allow users to check if their email has been compromised, create strong passwords and test existing ones, and access interactive educational content such as videos and quizzes. Security measures include prepared statements to prevent SQL injection and input validation to protect against XSS attacks.",
          technologies: ["php", "css", "javasript"],
          githubLink: "View on GitHub",
          githubUrl: "https://github.com/yagmuryolcu/final_project",
          appUrl:"https://replit.com/@yagmuryolcu12/CyberAnalyze",
          demoLink: "Go to app ⟶ ",
          image: "bitirme-projem.png"
        },
        {
          id: 2,
          title: "Pizza Project",
          description: "This React single-page application (SPA) allows users to enter data through a form and view a summary on the results page. I used prop-lifting to pass form data between pages and React Router for page navigation. The design is Figma-accurate, responsive, and user-friendly.",
          technologies: ["react", "redux", "axios", "router", "vercel","toastify", "cypress"],
          githubLink: "View on GitHub",
          githubUrl: "https://github.com/yagmuryolcu/ReactPizzaProject",
          demoLink: "Go to app ⟶ ",      
           appUrl:"https://react-pizza-project-yagmur.vercel.app/",

          image: "pizza-projem.png"
        }
      ]
    },
    ctaSection: {
      title: "Let's work together on your next product.",
      socialLinks: [
        { name: "Github", url: "https://github.com/yagmuryolcu", type: "social" },
        { name: "Personal Blog", url: "https://personal-website-gold-pi-38.vercel.app/", type: "blog" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/ya%C4%9Fmur-sude-yolcu-a229722b9/", type: "social" },
        { name: "Email", url: "mailto:yagmur_yolcu_12@hotmail.com", type: "contact" }
      ]
    }
  },

  tr: {
    heroSection: {
      greeting: "Merhaba! 👋",
      intro: "Ben Yağmur. Full-stack developer'ım. Sağlam ve ölçeklenebilir frontend ürünleri geliştirebilirim. Tanışalım!",
      profileImage: "yağmur-fotoğraf.png",
      socials: [
        { logo: "logo-linkedin.png", alt_text: "linkedin", link: "https://www.linkedin.com/in/ya%C4%9Fmur-sude-yolcu-a229722b9/" },
        { logo: "logo-github.png", alt_text: "github", link: "https://github.com/yagmuryolcu" }
      ],
    cta: {
      beforeFreelancing: "Şu anda ",
      freelancing: "Freelancer",
      betweenText: " olarak ",
      services: "UX, UI & Web Tasarım",
      afterServices: " projeleri için çalışıyorum. Ekibinize katılmam için beni davet edin → ",
      email: "yagmur_yolcu_12@hotmail.com",
    }    },
    skillsSection: {
      title: "Beceriler",
     skills: [
       { name: "JAVA", icon: "java.png" },
        { name: "JAVASCRIPT", icon: "js-logo-.jpg" },
        { name: "REACT", icon: "react-logoo.png" },
        { name: "REDUX", icon: "redux-logo-.png" },
        { name: "PHP", icon: "phplogo.png" },
        { name: "VS CODE", icon: "vs-logo-.png" },
        { name: "FIGMA", icon: "figma-logo-.jpg" },
        { name: "TAILWIND ", icon: "tacss.png" },
        { name: "POSTMAN ", icon: "postman.png" },
        { name: "SQL ", icon: "sqll.jpg" },
        { name: "C# ", icon: "csharp.jpg" },
        { name: "PYTHON ", icon: "python.png" },
      ]
    },
       profileSection: {
      title: "Profil", 
      basicInfo: {
        title: "Temel Bilgiler",
        fields: [
          { label: "Doğum Tarihi", value: "20.09.2002" },
          { label: "İkamet Şehri", value: "İstanbul / Tuzla" },
          { label: "Eğitim Durumu", value: "Piri Reis Üniversitesi, YBS Lisans, 2025" },
          { label: "Tercih Ettiği Rol", value: "Ön Yüz Geliştirici, Kullanıcı Deneyimi / Arayüz Tasarımcısı, Uçtan Uca Geliştirici" }
        ]
      },
      aboutMe: {
        title: "Hakkımda",
         paragraphs: [
        
          "Ben, web geliştirmeye ilgi duyan ve her yeni projede kendini geliştirmekten keyif alan bir full-stack geliştiriciyim. Yönetim Bilişim Sistemleri alanındaki akademik geçmişim, bana hem iş hem de teknoloji perspektifi kazandırdı ve bunu tüm yazılım projelerimde uygulamayı hedefliyorum.",

          "Yoğun WorkinTech full-stack programına devam ederek modern frontend ve backend teknolojileriyle uygulamalı deneyim elde ediyorum.",

          "Geliştirmenin ötesinde, siber güvenliğe de derin bir ilgim var ve bu alandaki bilgi birikimimi sürekli artırmaya devam ediyorum. Amacım, kullanıcı dostu, güvenli ve gerçek değer sağlayan web uygulamaları geliştirmek.",


        ]}
    },
    projectsSection: {
      title: "Projeler",
      compimage:"bos-ekran.png",
      items: [
        {
          id: 1,
          title: "Siber Güvenlik Farkındalık Aracı",
          description: "Bu siber güvenlik farkındalık web sitesi PHP kullanılarak geliştirilmiş olup XAMPP üzerinde yerel olarak çalışmaktadır. Kullanıcıların e-postalarının ihlal edilip edilmediğini kontrol etmelerini sağlayan bir API entegrasyonu içermektedir; ayrıca güçlü şifreler oluşturma ve mevcut şifreleri test etme ile videolar ve interaktif quizler gibi eğitim içeriklerine erişim imkanı sunar. Güvenlik önlemleri arasında SQL injection’ı önlemek için prepared statement kullanımı ve XSS saldırılarına karşı giriş doğrulama yer almaktadır.",
          technologies:  ["php", "css", "javasript"],
          githubLink: "GitHub'da Görüntüle",
          githubUrl: "https://github.com/yagmuryolcu/final_project",
          demoLink: "Uygulamaya git ⟶ ",
          appUrl:"https://replit.com/@yagmuryolcu12/CyberAnalyze",
          image: "bitirme-projem.png"
        },
        {
          id: 2,
          title: "Pizza Projesi",
          description: "Tek sayfa uygulaması olarak geliştirdiğim bu React projesinde, kullanıcıların form aracılığıyla veri girmesi ve sonuç sayfasında özetini görmesi sağlandı. Prop-lifting yöntemiyle form verilerini sayfalar arasında taşıdım ve React Router ile sayfa geçişlerini yönettim. Tasarım Figma’ya uygun, responsive ve kullanıcı dostu olacak şekilde hazırlandı.",
          technologies: ["react", "redux", "axios", "router", "vercel","toastify", "cypress"],
          githubLink: "GitHub'da Görüntüle",
          githubUrl: "https://github.com/yagmuryolcu/ReactPizzaProject",
          demoLink: "Uygulamaya git ⟶ ",
          appUrl:"https://react-pizza-project-yagmur.vercel.app/",

          image: "pizza-projem.png"
        }
      ]
    },
    ctaSection: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      socialLinks: [
        { name: "Github", url: "https://github.com/yagmuryolcu", type: "social" },
        { name: "Kişisel Blog", url: "https://personal-website-gold-pi-38.vercel.app/", type: "blog" },
        { name: "Linkedin", url: "https://www.linkedin.com/in/ya%C4%9Fmur-sude-yolcu-a229722b9/", type: "social" },
        { name: "Email", url: "mailto:yagmur_yolcu_12@hotmail.com", type: "contact" }
      ]
    }
  }
};

export default data;
