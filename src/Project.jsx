import React, { useState } from "react";
import { text } from "./utils/lang.jsx";

const Project = ({ lang = "en" }) => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    desc: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: URL.createObjectURL(file),
      });
    }
  };

  // ADD PROJECT (LATEST FIRST)
  const addProject = () => {
    if (!form.name || !form.desc || !form.image) return;

    const newProject = {
      ...form,
      id: Date.now(),
    };

    setProjects([newProject, ...projects]);

    setForm({
      name: "",
      desc: "",
      image: null,
    });

    setOpen(false);
  };

  // SEARCH FILTER
  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="projects-page">

      {/* LEFT TOP PANEL */}
      <div style={{display:"flex", justifyContent:"flex-start",gap:"30px"}} className="left-panel">

        {/* ADD BUTTON */}
        <button className="open-btn" onClick={() => setOpen(true)}>
          ➕ {lang === "mr" ? "प्रोजेक्ट जोडा" : "Add Project"}
        </button>

        {/* SEARCH */}
        <input style={{height:"40px",width:"230px",borderRadius:"50px",padding:"20px"}}
          type="text"
          placeholder={lang === "mr" ? "प्रोजेक्ट शोधा..." : "Search project..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* TITLE */}
     <h1
  style={{
    marginBottom: "10px",
    fontSize: "38px",
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: "1px",

    color: "#ffffff",

    textShadow: "0 2px 10px rgba(0,0,0,0.6)",

    padding: "10px 20px",
    borderRadius: "12px",

    background: "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(255,0,255,0.15))",
    backdropFilter: "blur(10px)",

    border: "1px solid rgba(255,255,255,0.1)",

    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",

    transition: "all 0.3s ease",
    width:"500px",
    marginLeft:"400px"
  }}
>
  {lang === "mr" ? "माझे प्रोजेक्ट्स 🚀" : "MY PROJECTS 🚀"}
</h1>

      {/* RIGHT SIDEBAR */}
      <div className={`sidebar ${open ? "active" : ""}`}>

        <h2>
          {lang === "mr" ? "प्रोजेक्ट जोडा" : "Add Project"}
        </h2>

        <input
          type="text"
          name="name"
          placeholder={lang === "mr" ? "प्रोजेक्ट नाव" : "Project Title"}
          value={form.name}
          onChange={handleChange}
        />

        <textarea style={{height:"100ch",marginTop:"10px"}}
          name="desc"
          placeholder={lang === "mr" ? "वर्णन" : "Description"}
          value={form.desc}
          onChange={handleChange}
        />

        <input type="file" accept="image/*" onChange={handleImage} />

        <button onClick={addProject}>
          {lang === "mr" ? "जोडा" : "ADD PROJECT"}
        </button>

        <button className="close" onClick={() => setOpen(false)}>
          ❌ {lang === "mr" ? "बंद करा" : "Close"}
        </button>

      </div>

      {/* PROJECT GRID */}
      <div className="project-grid">

        {filteredProjects.length === 0 ? (
          <p>
            {lang === "mr" ? "कोणतेही प्रोजेक्ट नाही 😅" : "No projects found 😅"}
          </p>
        ) : (
          filteredProjects.map((p) => (
            <div className="project-card" key={p.id}>

              <img src={p.image} alt="project" />

              <h3>{p.name}</h3>
              <p>{p.desc}</p>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Project;