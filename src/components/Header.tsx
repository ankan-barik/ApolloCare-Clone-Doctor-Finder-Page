
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="https://www.apollo247.com/images/apollo247.png" 
                alt="Apollo Doctor"
                className="h-8"
              />
            </a>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input 
                type="search" 
                placeholder="Search for doctors, specialties..." 
                className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-apollo-primary hover:text-apollo-secondary">
              Medicines
            </a>
            <a href="#" className="text-apollo-primary hover:text-apollo-secondary">
              Lab Tests
            </a>
            <Button className="bg-apollo-secondary hover:bg-apollo-primary text-white">
              Login / Signup
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
