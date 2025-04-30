
import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { DoctorList } from "@/components/DoctorList";
import { FilterPanel } from "@/components/FilterPanel";
import { SEOMetadata } from "@/components/SEOMetadata";
import { fetchDoctors } from "@/services/api";

const Index = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    gender: [],
    experience: [],
    availability: [],
    fee: [],
    language: [],
    sort: "relevance"
  });
  const [totalDoctors, setTotalDoctors] = useState(0);

  useEffect(() => {
    const loadDoctors = async () => {
      setLoading(true);
      try {
        const response = await fetchDoctors(currentPage, filters);
        setDoctors(response.doctors);
        setTotalDoctors(response.total);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, [currentPage, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOMetadata 
        title="General Physician & Internal Medicine Specialists | Apollo Doctor Finder"
        description="Find the best general physicians and internal medicine specialists in your area. Book appointments online with top doctors at Apollo clinics and hospitals."
        keywords="general physician, internal medicine, doctors, apollo, healthcare, online consultation, book doctor appointment"
        canonicalUrl="https://www.apollo247.com/specialties/general-physician-internal-medicine"
      />
      
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-apollo-primary">General Physician & Internal Medicine</h1>
          <p className="text-gray-600 mt-2">
            Find the best general physicians and internal medicine specialists in your area
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          <div className="lg:w-3/4">
            <DoctorList 
              doctors={doctors} 
              loading={loading}
              currentPage={currentPage}
              totalDoctors={totalDoctors}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
