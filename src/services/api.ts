
// This file simulates a real API service
// In a real application, this would make actual HTTP requests to your backend

// Mock data for doctors
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MD (Internal Medicine)",
    experience: "15+ years",
    languages: ["English", "Hindi", "Tamil"],
    fee: 600,
    rating: 4.7,
    reviewCount: 234,
    isAvailableNow: true,
    hospitalName: "Apollo Hospital, Chennai",
    specializations: ["General Health Problems", "Chronic Disease Management", "Preventive Healthcare"],
    image: "/lovable-uploads/1748ab25-4b35-452e-a51b-7c748e51969e.png",
    gender: "male",
    availability: ["available_today", "available_tomorrow", "next_3_days"]
  },
  {
    id: 2,
    name: "Dr. Priya Singh",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, DNB (General Medicine)",
    experience: "8+ years",
    languages: ["English", "Hindi", "Bengali"],
    fee: 500,
    rating: 4.9,
    reviewCount: 187,
    isAvailableNow: false,
    hospitalName: "Apollo Clinic, Bangalore",
    specializations: ["Women's Health", "Diabetes Management", "Thyroid Disorders"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500",
    gender: "female",
    availability: ["available_tomorrow", "next_3_days"]
  },
  {
    id: 3,
    name: "Dr. Sanjay Mehta",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MD (Internal Medicine), DM (Cardiology)",
    experience: "20+ years",
    languages: ["English", "Hindi", "Gujarati"],
    fee: 900,
    rating: 4.8,
    reviewCount: 312,
    isAvailableNow: true,
    hospitalName: "Apollo Hospital, Mumbai",
    specializations: ["Cardiac Health", "Hypertension Management", "Critical Care"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500",
    gender: "male",
    availability: ["available_today", "available_tomorrow"]
  },
  {
    id: 4,
    name: "Dr. Anita Desai",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MD (General Medicine)",
    experience: "12+ years",
    languages: ["English", "Hindi", "Kannada"],
    fee: 700,
    rating: 4.6,
    reviewCount: 156,
    isAvailableNow: false,
    hospitalName: "Apollo Clinic, Hyderabad",
    specializations: ["Infectious Diseases", "Tropical Medicine", "Geriatric Care"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=500",
    gender: "female",
    availability: ["next_3_days"]
  },
  {
    id: 5,
    name: "Dr. Vikram Reddy",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MRCP (UK)",
    experience: "10+ years",
    languages: ["English", "Telugu", "Hindi"],
    fee: 800,
    rating: 4.5,
    reviewCount: 204,
    isAvailableNow: true,
    hospitalName: "Apollo Hospital, Delhi",
    specializations: ["Respiratory Disorders", "Allergy Management", "Sleep Medicine"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500",
    gender: "male",
    availability: ["available_today"]
  },
  {
    id: 6,
    name: "Dr. Meena Sharma",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, DNB (Family Medicine)",
    experience: "7+ years",
    languages: ["English", "Hindi", "Punjabi"],
    fee: 550,
    rating: 4.7,
    reviewCount: 132,
    isAvailableNow: false,
    hospitalName: "Apollo Clinic, Kolkata",
    specializations: ["Family Medicine", "Child Health", "Preventive Healthcare"],
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=500",
    gender: "female",
    availability: ["available_tomorrow", "next_3_days"]
  },
  {
    id: 7,
    name: "Dr. Arjun Nair",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MD (Internal Medicine), Fellowship in Diabetology",
    experience: "14+ years",
    languages: ["English", "Malayalam", "Tamil"],
    fee: 750,
    rating: 4.8,
    reviewCount: 218,
    isAvailableNow: true,
    hospitalName: "Apollo Hospital, Cochin",
    specializations: ["Diabetes Management", "Metabolic Disorders", "Obesity"],
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500",
    gender: "male",
    availability: ["available_today", "available_tomorrow"]
  },
  {
    id: 8,
    name: "Dr. Fatima Khan",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MD (General Medicine)",
    experience: "9+ years",
    languages: ["English", "Hindi", "Urdu"],
    fee: 650,
    rating: 4.6,
    reviewCount: 145,
    isAvailableNow: false,
    hospitalName: "Apollo Clinic, Pune",
    specializations: ["Women's Health", "Thyroid Disorders", "Anemia"],
    image: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=500",
    gender: "female",
    availability: ["next_3_days"]
  },
  {
    id: 9,
    name: "Dr. Ramesh Iyer",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, MD (Internal Medicine), DM (Gastroenterology)",
    experience: "18+ years",
    languages: ["English", "Hindi", "Marathi"],
    fee: 950,
    rating: 4.9,
    reviewCount: 276,
    isAvailableNow: true,
    hospitalName: "Apollo Hospital, Ahmedabad",
    specializations: ["Digestive Disorders", "Liver Diseases", "Nutrition"],
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=500",
    gender: "male",
    availability: ["available_today"]
  },
  {
    id: 10,
    name: "Dr. Lakshmi Rao",
    specialty: "General Physician & Internal Medicine",
    qualification: "MBBS, DNB (General Medicine)",
    experience: "11+ years",
    languages: ["English", "Telugu", "Kannada"],
    fee: 680,
    rating: 4.7,
    reviewCount: 189,
    isAvailableNow: false,
    hospitalName: "Apollo Clinic, Chennai",
    specializations: ["Geriatric Care", "Hypertension", "Diabetes"],
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=500",
    gender: "female",
    availability: ["available_tomorrow", "next_3_days"]
  }
];

// Helper function to filter doctors based on criteria
const filterDoctors = (doctors, filters) => {
  return doctors.filter(doctor => {
    // Gender filter
    if (filters.gender && filters.gender.length > 0 && !filters.gender.includes(doctor.gender)) {
      return false;
    }
    
    // Experience filter
    if (filters.experience && filters.experience.length > 0) {
      const doctorExp = parseInt(doctor.experience);
      let matchesExp = false;
      
      for (const expRange of filters.experience) {
        if (expRange === "0-5" && doctorExp <= 5) {
          matchesExp = true;
        } else if (expRange === "5-10" && doctorExp > 5 && doctorExp <= 10) {
          matchesExp = true;
        } else if (expRange === "10+" && doctorExp > 10) {
          matchesExp = true;
        }
      }
      
      if (!matchesExp) {
        return false;
      }
    }
    
    // Availability filter
    if (filters.availability && filters.availability.length > 0) {
      let matchesAvail = false;
      for (const avail of filters.availability) {
        if (doctor.availability.includes(avail)) {
          matchesAvail = true;
          break;
        }
      }
      if (!matchesAvail) {
        return false;
      }
    }
    
    // Fee filter
    if (filters.fee && filters.fee.length > 0) {
      let matchesFee = false;
      for (const feeRange of filters.fee) {
        if (feeRange === "0-500" && doctor.fee <= 500) {
          matchesFee = true;
        } else if (feeRange === "500-1000" && doctor.fee > 500 && doctor.fee <= 1000) {
          matchesFee = true;
        } else if (feeRange === "1000+" && doctor.fee > 1000) {
          matchesFee = true;
        }
      }
      if (!matchesFee) {
        return false;
      }
    }
    
    // Language filter
    if (filters.language && filters.language.length > 0) {
      let matchesLanguage = false;
      for (const lang of filters.language) {
        if (doctor.languages.map(l => l.toLowerCase()).includes(lang)) {
          matchesLanguage = true;
          break;
        }
      }
      if (!matchesLanguage) {
        return false;
      }
    }
    
    return true;
  });
};

// Helper function to sort doctors
const sortDoctors = (doctors, sortBy) => {
  const sorted = [...doctors];
  
  switch (sortBy) {
    case "experience_high_low":
      sorted.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
      break;
    case "fee_low_high":
      sorted.sort((a, b) => a.fee - b.fee);
      break;
    case "fee_high_low":
      sorted.sort((a, b) => b.fee - a.fee);
      break;
    case "relevance":
    default:
      // For relevance, we'll sort by rating and then by experience
      sorted.sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        return parseInt(b.experience) - parseInt(a.experience);
      });
  }
  
  return sorted;
};

// Simulated API call to fetch doctors with filters and pagination
export const fetchDoctors = async (page = 1, filters = {}) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Apply filters
  let filtered = filterDoctors(mockDoctors, filters);
  
  // Apply sorting
  const sortOption = filters.sort || "relevance";
  filtered = sortDoctors(filtered, sortOption);
  
  // Calculate pagination
  const doctorsPerPage = 10;
  const startIndex = (page - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;
  const paginatedDoctors = filtered.slice(startIndex, endIndex);
  
  return {
    doctors: paginatedDoctors,
    total: filtered.length,
    page,
    perPage: doctorsPerPage,
  };
};

// Simulated API call to add a new doctor
export const addDoctor = async (doctorData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would send a POST request to your backend
  console.log("Adding doctor:", doctorData);
  
  // Simulate successful response
  return {
    success: true,
    message: "Doctor added successfully",
    doctor: {
      id: Date.now(),
      ...doctorData,
    }
  };
};
