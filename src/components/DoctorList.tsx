
import React from "react";
import { DoctorCard } from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const DoctorList = ({ doctors, loading, currentPage, totalDoctors, onPageChange }) => {
  const doctorsPerPage = 10;
  const totalPages = Math.ceil(totalDoctors / doctorsPerPage);

  const renderPagination = () => {
    return (
      <div className="flex justify-center items-center mt-8 space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          // Always show first page, last page, current page, and pages around current
          let pageToShow;
          if (totalPages <= 5) {
            pageToShow = i + 1;
          } else if (currentPage <= 3) {
            pageToShow = i + 1;
          } else if (currentPage >= totalPages - 2) {
            pageToShow = totalPages - 4 + i;
          } else {
            pageToShow = currentPage - 2 + i;
          }

          return (
            <Button
              key={i}
              variant={currentPage === pageToShow ? "default" : "outline"}
              className={currentPage === pageToShow ? "bg-apollo-primary" : ""}
              onClick={() => onPageChange(pageToShow)}
            >
              {pageToShow}
            </Button>
          );
        })}
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <div className="flex">
              <Skeleton className="h-20 w-20 rounded-full mr-4" />
              <div className="flex-1">
                <Skeleton className="h-4 w-40 mb-2" />
                <Skeleton className="h-3 w-32 mb-2" />
                <Skeleton className="h-3 w-24 mb-2" />
                <div className="flex space-x-2 mt-4">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-24" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (doctors.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow text-center">
        <h3 className="text-xl font-semibold text-apollo-primary mb-2">No doctors found</h3>
        <p className="text-gray-600">Try adjusting your filters to find more doctors</p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
        <span className="text-apollo-primary font-medium">{totalDoctors} Doctors Available</span>
      </div>
      
      <div className="space-y-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      
      {totalPages > 1 && renderPagination()}
    </div>
  );
};
