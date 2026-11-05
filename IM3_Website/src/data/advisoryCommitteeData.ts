/**
 * IM3-2027 Advisory Committee Verified Directory Data
 * 
 * Source: Official IM3-2027 Conference Brochure (Final Edition)
 * Note: Under the IEEE Technical Co-Sponsorship submission, committee membership
 * and affiliations are proposed and provisional, subject to reconfirmation.
 * 
 * Strictly includes ONLY:
 * 1. National Advisory Committee
 * 2. International Advisory Committee
 * (Proposed Eminent / International Invitees are excluded per conference specification)
 */

export interface AdvisoryMember {
  id: string;
  name: string;
  designation?: string;
  institution: string;
  location?: string;
  category: 'national' | 'international';
  image?: string;
}

export const PROVISIONAL_STATUS_NOTICE = {
  title: 'Provisional Committee & Affiliation Notice',
  sourceQuote: 'Proposed advisory committee based on the IEEE Technical Co-Sponsorship submission; final confirmations and affiliations are subject to reconfirmation.',
  details: 'In accordance with academic conference governance, committee composition, designations, and institutional affiliations presented below are provisional and subject to formal reconfirmation before publication of the definitive proceedings agenda.',
};

export const nationalAdvisoryCommittee: AdvisoryMember[] = [
  {
    id: 'nat-01',
    name: 'Dr. Suhas Joshi',
    designation: 'Director',
    institution: 'IIT Indore',
    location: 'Indore, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Suhas_Joshi.webp',
  },
  {
    id: 'nat-02',
    name: 'Dr. Shirish Sonavane',
    designation: 'Professor and Head',
    institution: 'NIT Warangal',
    location: 'Warangal, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Shirish_Sonavane.webp',
  },
  {
    id: 'nat-03',
    name: 'Dr. Amitva Patra',
    designation: 'Director',
    institution: 'Nano-Centre, Chandigarh',
    location: 'Chandigarh, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Amitva_Patra.webp',
  },
  {
    id: 'nat-04',
    name: 'Dr. Shailendra Shukla',
    designation: 'Professor',
    institution: 'IIT BHU, Varanasi',
    location: 'Varanasi, India',
    category: 'national',
  },
  {
    id: 'nat-05',
    name: 'Dr. M. S. Rao',
    designation: 'Professor',
    institution: 'IIT Chennai',
    location: 'Chennai, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_M_S_Rao.webp',
  },
  {
    id: 'nat-06',
    name: 'Dr. Mahesh Abegaokar',
    designation: 'Professor',
    institution: 'IIT Delhi',
    location: 'New Delhi, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Mahesh_Abegaokar.webp',
  },
  {
    id: 'nat-07',
    name: 'Dr. Sujay Chatoppadhyay',
    designation: 'Professor',
    institution: 'IIT Roorkee',
    location: 'Roorkee, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Sujay_Chatoppadhyay.webp',
  },
  {
    id: 'nat-08',
    name: 'Dr. Anil Kumar',
    institution: 'IISc Bangalore',
    location: 'Bengaluru, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Anil_Kumar.webp',
  },
  {
    id: 'nat-09',
    name: 'Dr. S. D. Joshi',
    designation: 'Professor',
    institution: 'IIT Delhi',
    location: 'New Delhi, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_S_D_Joshi.webp',
  },
  {
    id: 'nat-10',
    name: 'Dr. T. RaviChandran',
    designation: 'Professor',
    institution: 'IIT Roorkee',
    location: 'Roorkee, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_T_RaviChandran.webp',
  },
  {
    id: 'nat-11',
    name: 'Dr. Sachin Rondhiya',
    designation: 'Professor',
    institution: 'IISc Bangalore',
    location: 'Bengaluru, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Sachin_Rondhiya.webp',
  },
  {
    id: 'nat-12',
    name: 'Dr. Ravi Kumar Varma',
    designation: 'Scientist',
    institution: 'ISRO SAC, Ahmedabad',
    location: 'Ahmedabad, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Ravi_Kumar_Varma.webp',
  },
  {
    id: 'nat-13',
    name: 'Dr. Ratheesh',
    designation: 'Director General',
    institution: 'CMET, Pune',
    location: 'Pune, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Ratheesh.webp',
  },
  {
    id: 'nat-14',
    name: 'Dr. Dharmendra Singh',
    designation: 'Director',
    institution: 'IIIT Gwalior',
    location: 'Gwalior, India',
    category: 'national',
  },
  {
    id: 'nat-15',
    name: 'Dr. Mukul Sutaone',
    designation: 'Director',
    institution: 'IIIT Allahabad',
    location: 'Prayagraj, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Mukul_Sutaone.webp',
  },
  {
    id: 'nat-16',
    name: 'Dr. S. K. Shukla',
    designation: 'Director',
    institution: 'NIT Surat',
    location: 'Surat, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_S_K_Shukla.webp',
  },
  {
    id: 'nat-17',
    name: 'Dr. Vinit Kansal',
    designation: 'Director',
    institution: 'IIIT Pune',
    location: 'Pune, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Vineet_Kansal.webp',
  },
  {
    id: 'nat-18',
    name: 'Dr. S. R. Mahadeva Prasanna',
    designation: 'Director',
    institution: 'IIT Chennai',
    location: 'Chennai, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_S_R_Mahadeva_Prasanna.webp',
  },
  {
    id: 'nat-19',
    name: 'Dr. Suresh Limkar',
    institution: 'Central University, Jammu',
    location: 'Jammu, India',
    category: 'national',
    image: '/Advisory_Committee/National/Dr_Suresh_Limkar.webp',
  },
];

export const internationalAdvisoryCommittee: AdvisoryMember[] = [
  {
    id: 'intl-01',
    name: 'Dr. Vidyasagar Potdar',
    designation: 'Director, Blockchain R&D Lab',
    institution: 'Curtin University',
    location: 'Australia',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Vidyasagar_Potdar.webp',
  },
  {
    id: 'intl-02',
    name: 'Dr. Jamil Abedalrahim Jamil Alsayaydeh',
    designation: 'FTKEK',
    institution: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    location: 'Malaysia',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Jamil_Abedalrahim_Jamil_Alsayaydeh.webp',
  },
  {
    id: 'intl-03',
    name: 'Dr. Amit Kore',
    designation: 'Manager',
    institution: 'Landmark Group',
    location: 'Dubai, United Arab Emirates',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Amit_Kore.webp',
  },
  {
    id: 'intl-04',
    name: 'Dr. Vilas Pol',
    designation: 'Professor',
    institution: 'Purdue University',
    location: 'United States of America',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Vilas_Pol.webp',
  },
  {
    id: 'intl-05',
    name: 'Dr. Ashok Joshi',
    designation: 'CEO',
    institution: 'Microlin',
    location: 'United States of America',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Ashok_Joshi.webp',
  },
  {
    id: 'intl-06',
    name: 'Dr. Victor Gorelykh',
    designation: 'Director',
    institution: 'Russian Centre of Sciences',
    location: 'Russia',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Victor_Gorelykh.webp',
  },
  {
    id: 'intl-07',
    name: 'Dr. Sanjay Mathur',
    designation: 'Chair of Inorganic & Materials Chemistry',
    institution: 'University of Cologne',
    location: 'Germany',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Sanjay_Mathur.webp',
  },
  {
    id: 'intl-08',
    name: 'Dr. Alminica AB',
    institution: 'Affiliation under reconfirmation',
    location: 'Sweden',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Alminica_AB.webp',
  },
  {
    id: 'intl-09',
    name: 'Dr. Satheesh Krishnamurthy',
    designation: 'Director, National Research Facility',
    institution: 'University of Surrey, Guildford',
    location: 'United Kingdom',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Satheesh_Krishnamurthy.webp',
  },
  {
    id: 'intl-10',
    name: 'Dr. Nigel P. Minton',
    designation: 'Director, Research Centre',
    institution: 'University of Nottingham',
    location: 'United Kingdom',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Nigel_Minton.webp',
  },
  {
    id: 'intl-11',
    name: 'Dr. Campos',
    institution: 'University of West London',
    location: 'United Kingdom',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Campos.webp',
  },
  {
    id: 'intl-12',
    name: 'Dr. Animesh Jha',
    institution: 'University of Leeds',
    location: 'United Kingdom',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Animesh_Jha.webp',
  },
  {
    id: 'intl-13',
    name: 'Dr. Ashutosh Tiwari',
    institution: 'University of Utah',
    location: 'United States of America',
    category: 'international',
    image: '/Advisory_Committee/International/Dr_Ashutosh_Tiwari.webp',
  },
];
