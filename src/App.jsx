import { useState } from "react";
import emailjs from '@emailjs/browser';

const profile = {
  name: "Mohammed Nilaam",
  role: "Aspiring IT Professional",
  location: "Valaichenai, Batticaloa, Sri Lanka 🇱🇰",
  email: "mohammednilam4433@gmail.com",
  phone: "0764433998",
  bio: "Motivated and dedicated IT graduate from University of Jaffna with knowledge in Information Technology, Web Designing, and Computer Applications.",
  technicalSkills: ["Python", "HTML", "CSS", "JavaScript", "MySQL", "WordPress", "Canva", "MS Office"],
  softSkills: ["Leadership", "Teamwork", "Communication", "Problem-Solving", "Decision-Making", "Project Management"],
  education: [
    { degree: "Bachelor of Arts (B.A.)", place: "University of Jaffna", year: "2026", stream: "IT, ELT, Economics" },
    { degree: "G.C.E. Advanced Level", place: "Arts Stream", year: "2020", stream: "Z-Score: 1.5932" },
    { degree: "G.C.E. Ordinary Level", place: "", year: "2017/2018", stream: "" }
  ],
  certifications: [
    "Journey to Salesforce Program (Cohort 2) – Distinction Pass",
    "IT Field Career Development Workshop (IFCD-2025)",
    "Diploma in Human Psychology",
    "Diploma in Organization Behaviorism",
    "Certificate in Fundamentals – Future Career Bridge Program"
  ],
  languages: ["Tamil - Fluent", "English - Intermediate"]
};

const projects = [
  { icon: "🛒", title: "MSM Communication POS", desc: "MSM Communication கடைக்காக உருவாக்கிய POS & Inventory System.", tags: ["React", "localStorage", "Vite"] },
  { icon: "👥", title: "HorizonHR System", desc: "Employee Records, Payroll, Leave, Attendance கொண்ட HR System.", tags: ["React", "Node.js", "Vite"] },
  { icon: "🎓", title: "ICT Workshop – Univ. of Jaffna", desc: "Faculty of Hindu Studies மாணவர்களுக்கு Internet, AI Tools கற்பித்தேன்.", tags: ["Education", "ICT", "Tamil"] },
  { icon: "🧑‍🏫", title: "English Teacher", desc: "J/Kokuvil Hindu College-ல் English கற்பித்தேன்.", tags: ["Teaching", "English", "2025"] },
];

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const scrollTo = (id) => document.getElementById(id).scrollIntoView({ behavior: "smooth" });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert("எல்லா fields-உம் நிரப்புங்கள்!");
      return;
    }
    try {
      await emailjs.send(
        'service_flpgqvr',
        'template_58tn5v9',
        { from_name: form.name, from_email: form.email, message: form.message },
        'Lz97Kzo78hViJY56Z'
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("அனுப்புவதில் பிரச்சனை!");
    }
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0f0c29", minHeight: "100vh", color: "white" }}>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "rgba(255,255,255,0.05)", position: "sticky", top: 0, zIndex: 100, flexWrap: "wrap", gap: "10px" }}>
        <div style={{ fontWeight: "bold", fontSize: "20px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Mohammed Nilaam ✨
        </div>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[["home","🏠"],["education","🎓"],["projects","💼"],["contact","📬"]].map(([id, icon]) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ background: "rgba(167,139,250,0.15)", border: "none", color: "white", padding: "7px 14px", borderRadius: "20px", cursor: "pointer", fontSize: "14px" }}>
              {icon} {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div id="home" style={{ textAlign: "center", padding: "60px 20px 40px", background: "linear-gradient(135deg, #0f0c29, #302b63)" }}>
        <div style={{ width: "150px", height: "150px", borderRadius: "50%", border: "4px solid #a78bfa", margin: "0 auto 20px", overflow: "hidden" }}>
          <img src="/nilaam.jpg" alt="Nilaam" style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={(e) => { e.target.style.display='none'; e.target.parentNode.innerHTML='👨‍💻'; e.target.parentNode.style.fontSize='60px'; e.target.parentNode.style.display='flex'; e.target.parentNode.style.alignItems='center'; e.target.parentNode.style.justifyContent='center'; }} />
        </div>
        <h1 style={{ fontSize: "36px", margin: "10px 0", fontWeight: "bold" }}>{profile.name}</h1>
        <p style={{ color: "#a78bfa", fontSize: "18px" }}>💼 {profile.role}</p>
        <p style={{ color: "#94a3b8", fontSize: "15px" }}>📍 {profile.location}</p>
        <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "16px auto", lineHeight: "1.8" }}>{profile.bio}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", margin: "12px 0" }}>
          <span style={{ padding: "6px 14px", background: "rgba(255,255,255,0.08)", borderRadius: "20px", fontSize: "14px" }}>📧 {profile.email}</span>
          <span style={{ padding: "6px 14px", background: "rgba(255,255,255,0.08)", borderRadius: "20px", fontSize: "14px" }}>📱 {profile.phone}</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", margin: "20px auto", maxWidth: "700px" }}>
          {profile.technicalSkills.map((s, i) => (
            <span key={i} style={{ padding: "7px 16px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", borderRadius: "20px", fontSize: "13px", fontWeight: "bold" }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div id="education" style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>🎓 Education</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {profile.education.map((e, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(167,139,250,0.3)" }}>
              <div style={{ fontWeight: "bold", marginBottom: "6px" }}>🏫 {e.degree}</div>
              <div style={{ color: "#94a3b8", fontSize: "14px" }}>{e.place} {e.year && `| ${e.year}`}</div>
              {e.stream && <span style={{ display: "inline-block", marginTop: "8px", padding: "4px 10px", background: "rgba(167,139,250,0.2)", borderRadius: "10px", fontSize: "12px", color: "#a78bfa" }}>{e.stream}</span>}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "24px", textAlign: "center", margin: "40px 0 20px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>🏆 Certifications</h2>
        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(167,139,250,0.3)" }}>
          {profile.certifications.map((c, i) => (
            <div key={i} style={{ padding: "10px 0", borderBottom: i < profile.certifications.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", color: "#94a3b8", fontSize: "14px" }}>
              ✅ {c}
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects" style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>💼 Projects & Experience</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", border: "1px solid rgba(167,139,250,0.3)" }}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>{p.icon}</div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{p.title}</div>
              <div style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>{p.desc}</div>
              <div style={{ marginTop: "12px" }}>
                {p.tags.map((t, j) => <span key={j} style={{ display: "inline-block", margin: "3px", padding: "4px 10px", background: "rgba(167,139,250,0.2)", borderRadius: "10px", fontSize: "12px", color: "#a78bfa" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div id="contact" style={{ padding: "50px 20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>📬 Contact Me</h2>
        <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "30px", border: "1px solid rgba(167,139,250,0.3)" }}>
          {sent ? (
            <div style={{ textAlign: "center", color: "#4ade80", fontSize: "20px", padding: "20px" }}>✅ Message அனுப்பப்பட்டது! நன்றி 🙏</div>
          ) : (
            <>
              <input style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "10px", color: "white", fontSize: "15px", marginBottom: "14px", boxSizing: "border-box", outline: "none" }}
                placeholder="உங்கள் பெயர்" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "10px", color: "white", fontSize: "15px", marginBottom: "14px", boxSizing: "border-box", outline: "none" }}
                placeholder="உங்கள் Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <textarea style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "10px", color: "white", fontSize: "15px", marginBottom: "14px", boxSizing: "border-box", outline: "none", height: "120px", resize: "vertical" }}
                placeholder="உங்கள் Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button style={{ width: "100%", padding: "14px", background: "linear-gradient(to right, #a78bfa, #60a5fa)", border: "none", borderRadius: "10px", color: "white", fontSize: "17px", fontWeight: "bold", cursor: "pointer" }}
                onClick={handleSubmit}>🚀 அனுப்பு</button>
            </>
          )}
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "30px", color: "#475569", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p>© 2026 Mohammed Nilaam | Valaichenai, Batticaloa, Sri Lanka 🇱🇰</p>
      </footer>
    </div>
  );
}

export default App;