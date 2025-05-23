
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md doctor-card">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <div className="relative">
            <Avatar className="w-28 h-28 border-2 border-apollo-secondary">
              <AvatarImage 
                src={doctor.image} 
                alt={doctor.name}
                className="object-cover"
              />
              <AvatarFallback className="bg-apollo-light text-apollo-primary text-xl">
                {doctor.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {doctor.isAvailableNow && (
              <Badge className="absolute bottom-0 right-0 bg-green-500">Available Now</Badge>
            )}
          </div>
          
          <div className="mt-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-1">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="font-medium">{doctor.rating}</span>
              <span className="text-gray-400 text-sm ml-1">({doctor.reviewCount})</span>
            </div>
            <p className="text-sm text-gray-500">{doctor.experience} exp</p>
          </div>
        </div>
        
        <div className="md:w-3/4 md:pl-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-xl font-bold text-apollo-primary">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-sm text-gray-500 mb-2">{doctor.qualification}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {doctor.languages && doctor.languages.map((lang, index) => (
                  <Badge key={index} variant="outline" className="bg-apollo-light">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mt-2 md:mt-0 text-right">
              <p className="font-bold text-apollo-primary text-lg">₹{doctor.fee}</p>
              <p className="text-sm text-gray-500">Consultation Fee</p>
            </div>
          </div>
          
          <div className="mt-3">
            {doctor.hospitalName && (
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Hospital:</span> {doctor.hospitalName}
              </div>
            )}
            
            <div className="text-sm text-gray-600 mb-3">
              <span className="font-medium">Specializes in:</span> {doctor.specializations?.join(", ")}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Button 
                className="bg-apollo-secondary hover:bg-apollo-primary text-white flex-1"
              >
                Book Hospital Visit
              </Button>
              <Button 
                className="bg-white text-apollo-primary border border-apollo-primary hover:bg-apollo-light flex-1"
              >
                Video Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
