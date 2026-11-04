import React, { useState } from "react";
import "./index.css";

const committeeGroups = [
  {
    title: "Chief Patrons",
    members: [
      ["Padma Bhushan Dr. Vijay P. Bhatkar", "Founder Director General, C-DAC"],
      ["Padma Shri Prof. Dr. Ganapati D. Yadav", "Former Vice-Chancellor, ICT Mumbai"],
      ["Prof. Shekhar C. Mande", "President, INSA; Former Director General, CSIR"],
      ["Padma Shri Shri Prataprao Pawar", "Indian Industrialist; Chairman, Sakal Media"],
    ],
  },
  {
    title: "Patrons",
    members: [
      ["Honourable Harshwardhan S. Patil", "Chancellor, PCU; Trustee, PCET"],
      ["Shri Dnyaneshwar P. Landge", "Chairman, PCET"],
      ["Smt. Padma M. Bhosale", "Vice Chairperson, PCET"],
      ["Shri Vitthal S. Kalbhor", "Secretary, PCET"],
      ["Shri Shantaram D. Garade", "Treasurer, PCET"],
      ["Dr. Girish Desai", "Executive Director, PCET"],
      ["Dr. Santosh S. Sonavane", "Vice-Chancellor, PCU"],
    ],
  },
  {
    title: "General & Organizing Chairs",
    members: [
      ["Dr. Bharat Kale", "General Chair; Director, R&D, PCU"],
      ["Dr. Shankar Deosarkar", "Co-General Chair & International Relations Chair; Director, IRO, PCU"],
      ["Dr. Anil Maheshwari", "Organizing Secretary"],
      ["Dr. Sachin Pawar", "Organizing Secretary"],
      ["Dr. Vijay Patil", "Organizing Co-Secretary"],
      ["Dr. Ramdar Biradar", "Organizing Co-Secretary"],
      ["Dr. Rahul G. Sonkamble", "Conference Convener & Organizing Chair"],
      ["Dr. Swati Shirke-Deshmukh", "Conference Co-Convener & Co-Organizing Chair"],
    ],
  },
  {
    title: "Technical & Support Leadership",
    members: [
        ["Dr. Jaydeep Patil", "Technical Program Chair"],
        ["Dr. Amit Patil", "Technical Program Chair"],
      
        ["Dr. Amit Gadekar", "Technical Program Co-Chair"],
        ["Dr. Bhushan Chaudhari", "Technical Program Co-Chair"],
      
        ["Dr. Anand Rajavat", "Publication Chair"],
        ["Dr. Abhijeet Banubakode", "Publication Chair"],
      
        ["Mr. Shankar Patil", "Finance Chair"],
        ["Ms. Shalaka Sarode", "Finance Chair"],
      
        ["Mr. Satpalshing Rajput", "Co-Finance Chair"],
        ["Dr. Pranav Charkha", "Sponsorship Chair"],
        ["Mr. Deepak Pandey", "Hospitality Chair"],
        ["Mr. Mahesh Mahajan", "IT Support Chair"],
        ["Mr. Shivam Sarsar", "Promotion, Media & Marketing Chair"],
      ],
  },
];

export default function CommitteePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeGroup = committeeGroups[activeIndex];
  const memberImages: Record<string, string> = {
    "Vijay P. Bhatkar": "Dr_Vijay_Bhatkar.webp",
    "Ganapati D. Yadav": "Dr_Ganapati_Yadav.webp",
    "Shekhar C. Mande": "Prof._Shekhar_Mande.webp",
    "Prataprao Pawar": "Prataprao_Pawar.webp",
  
    "Harshwardhan S. Patil": "Harshwardhan_Patil.webp",
    "Dnyaneshwar P. Landge": "Dnyaneshwar_Landge.webp",
    "Padma M. Bhosale": "Padma_Bhosale.webp",
    "Vitthal S. Kalbhor": "Vitthal_Kalbhor.webp",
    "Shantaram D. Garade": "Shantaram_Garade.webp",
    "Girish Desai": "Girish_Desai.webp",
    "Santosh S. Sonavane": "Santosh _Sonavane.webp",
  
    "Bharat Kale": "Bharat_Kale.webp",
    "Shankar Deosarkar": "Shankar_Deosarkar.webp",
    "Anil Maheshwari": "Anil_Maheshwari.webp",
    "Sachin Pawar": "Sachin_Pawar.webp",
    "Vijay Patil": "Vijay_Patil.webp",
    "Ramdar Biradar": "Ramdar_Biradar.webp",
    "Rahul G. Sonkamble": "Rahul_Sonkamble.webp",
    "Swati Shirke-Deshmukh": "Swati_Shirke_Deshmukh.webp",
  
    "Jaydeep Patil": "Jaydeep_Patil.webp",
    "Amit Patil": "Amit_Patil.webp",
    "Amit Gadekar": "Amit_Gadekar.webp",
    "Bhushan Chaudhari": "Bhushan_Chaudhari.webp",
    "Anand Rajavat": "Anand_Rajavat.webp",
    "Abhijeet Banubakode": "Abhijeet_Banubakode.webp",
    "Shankar Patil": "Shankar_Deosarkar.webp",
    "Shalaka Sarode": "Shalaka_Sarode.webp",
    "Satpalshing Rajput": "Satpalsingh_Rajput.webp",
    "Pranav Charkha": "Pranav_Charkha.webp",
    "Deepak Pandey": "Deepak_Pandey.webp",
    "Mahesh Mahajan": "Mahesh_Mahajan.webp",
    "Shivam Sarsar": "Shivam_Sarsar.webp",
  };

  return (
    <main className="committee-page">
      <div className="committee-container">
        <section className="committee-hero">
          <p className="committee-eyebrow">
            IM3-2027 <span>/</span> ACADEMIC LEADERSHIP
          </p>

          <h1>
            CONFERENCE
            <br />
            <span>COMMITTEES</span>
          </h1>

          <p className="committee-description">
            The distinguished national and international leaders, researchers,
            and professionals listed below support the conference’s academic
            direction, technical excellence, and organization, helping ensure
            a rigorous and successful IM3-2027.
          </p>

          <div className="committee-meta">
            <div>
              <span>CONFERENCE DATES</span>
              <strong>6–8 May 2027</strong>
            </div>

            <div>
              <span>VENUE</span>
              <strong>Pimpri Chinchwad University, Pune, India</strong>
            </div>

            <div>
              <span>GOVERNANCE</span>
              <strong>Conference Leadership</strong>
            </div>
          </div>
        </section>

        <div className="committee-tabs" role="tablist" aria-label="Conference committees">
          {committeeGroups.map((group, index) => (
            <button
              key={group.title}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              className={`committee-tab ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span>{group.title}</span>
              <span className="committee-tab-count">
                {String(group.members.length).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        <section className="committee-group">
          <p className="committee-eyebrow">IM3-2027 / COMMITTEE</p>
          <h2>{activeGroup.title}</h2>
          <p className="committee-description">
            Distinguished leaders and members supporting the conference.
          </p>

          <div className="committee-member-grid">
          {activeGroup.members.map(([name, designation], index) => {
  const initials = name
    .replace(
      /^(Padma Bhushan|Padma Shri|Honourable|Honourable|Shri|Smt\.|Prof\.|Professor|Dr\.|Mr\.|Ms\.)\s*/g,
      ""
    )
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

    const matchedImages = Object.entries(memberImages)
    .filter(([memberName]) => name.includes(memberName))
    .map(([, fileName]) => fileName);
    console.log("Card name:", name);
console.log("Matched images:", matchedImages);


  return (
    <article className="committee-person-card" key={name}>
      {matchedImages.length > 0 ? (
  <div className="committee-person-image">
    {matchedImages.map((fileName) => (
      <img
        key={fileName}
        src={`/Leadership_&_Committee/${fileName}`}
        alt={name}
      />
    ))}
  </div>
) : (
        <div className="committee-person-card-top">
          <span className="committee-person-initials">{initials}</span>
          <span className="committee-person-number">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}

      

      <h3>{name}</h3>
      <p className="committee-person-designation">{designation}</p>
    </article>
  );
})}
</div>
</section>
      </div>
    </main>
  );
}