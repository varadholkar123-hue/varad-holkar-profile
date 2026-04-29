import React, { useState } from "react";
import { text } from './utils/lang.jsx'

const Work = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const projects = [
    {
      title: {
        en: "IPL Scoreboard App",
        mr: "IPL स्कोअरबोर्ड अॅप"
      },
      desc: {
        en: "Live cricket score tracking system",
        mr: "लाईव्ह क्रिकेट स्कोअर ट्रॅकिंग सिस्टम"
      },
      details: {
        en: "Built interactive scoreboard where runs, wickets, overs can be updated dynamically using React state management.",
        mr: "React state management वापरून रन, विकेट्स, ओव्हर्स dynamic update करणारा interactive scoreboard बनवला."
      }
    },
    {
      title: {
        en: "Calculator App (Rupees / Math)",
        mr: "कॅल्क्युलेटर अॅप (रुपये / गणित)"
      },
      desc: {
        en: "Math + currency calculation system",
        mr: "गणित + चलन कॅल्क्युलेशन सिस्टम"
      },
      details: {
        en: "Advanced calculator that performs arithmetic operations and supports rupees-based calculations.",
        mr: "Advanced calculator जो arithmetic operations आणि rupees based calculations करतो."
      }
    },
    {
      title: {
        en: "Student Data Management",
        mr: "विद्यार्थी डेटा मॅनेजमेंट"
      },
      desc: {
        en: "Store and manage student records",
        mr: "विद्यार्थ्यांची माहिती साठवणे व व्यवस्थापन"
      },
      details: {
        en: "Add student name, marks, roll number and display structured data using React.",
        mr: "Student name, marks, roll number add करून structured data display करणे."
      }
    },
    {
      title: {
        en: "Light ON/OFF System",
        mr: "लाईट ऑन/ऑफ सिस्टम"
      },
      desc: {
        en: "Toggle switch simulation",
        mr: "टॉगल स्विच सिम्युलेशन"
      },
      details: {
        en: "Simple project using state toggle logic.",
        mr: "state toggle logic वापरून simple project."
      }
    },
    {
      title: {
        en: "Counter App",
        mr: "काउंटर अॅप"
      },
      desc: {
        en: "Increment / Decrement counter",
        mr: "वाढवा / कमी करा काउंटर"
      },
      details: {
        en: "Basic counter using React hooks.",
        mr: "React hooks वापरून basic counter app."
      }
    },
    {
      title: {
        en: "Watch / Timer App",
        mr: "वॉच / टाइमर अॅप"
      },
      desc: {
        en: "Digital stopwatch system",
        mr: "डिजिटल स्टॉपवॉच सिस्टम"
      },
      details: {
        en: "Start, pause, reset timer functionality.",
        mr: "Start, pause, reset timer functionality."
      }
    },
    {
      title: {
        en: "Multiple Practice Websites",
        mr: "अनेक प्रॅक्टिस वेबसाइट्स"
      },
      desc: {
        en: "Frontend UI practice projects",
        mr: "फ्रंटएंड UI प्रॅक्टिस प्रोजेक्ट्स"
      },
      details: {
        en: "Built responsive websites for learning HTML, CSS, React.",
        mr: "HTML, CSS, React शिकण्यासाठी responsive websites बनवल्या."
      }
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="work-page">
      <h1 className="title">
        {lang === "mr" ? "माझे काम" : "MY WORK"}
      </h1>

      <div className="work-grid">
        {projects.map((item, index) => (
          <div
            className="card"
            key={index}
            onClick={() => toggle(index)}
          >
            <h2>{item.title[lang]}</h2>
            <p>{item.desc[lang]}</p>

            {openIndex === index && (
              <div className="details">
                <p>{item.details[lang]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;