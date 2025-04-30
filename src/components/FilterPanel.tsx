
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export const FilterPanel = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const genderOptions = [
    { id: "male", label: "Male Doctors" },
    { id: "female", label: "Female Doctors" }
  ];

  const experienceOptions = [
    { id: "0-5", label: "0-5 years" },
    { id: "5-10", label: "5-10 years" },
    { id: "10+", label: "10+ years" }
  ];

  const availabilityOptions = [
    { id: "available_today", label: "Available Today" },
    { id: "available_tomorrow", label: "Available Tomorrow" },
    { id: "next_3_days", label: "Next 3 Days" }
  ];

  const feeOptions = [
    { id: "0-500", label: "₹0 - ₹500" },
    { id: "500-1000", label: "₹500 - ₹1000" },
    { id: "1000+", label: "₹1000+" }
  ];

  const languageOptions = [
    { id: "english", label: "English" },
    { id: "hindi", label: "Hindi" },
    { id: "tamil", label: "Tamil" },
    { id: "telugu", label: "Telugu" },
    { id: "kannada", label: "Kannada" }
  ];

  const sortOptions = [
    { id: "relevance", label: "Relevance" },
    { id: "experience_high_low", label: "Experience: High to Low" },
    { id: "fee_low_high", label: "Fee: Low to High" },
    { id: "fee_high_low", label: "Fee: High to Low" }
  ];

  const handleCheckboxChange = (category, id) => {
    setLocalFilters(prev => {
      const updated = { ...prev };
      
      if (updated[category].includes(id)) {
        updated[category] = updated[category].filter(item => item !== id);
      } else {
        updated[category] = [...updated[category], id];
      }
      
      return updated;
    });
  };

  const handleSortChange = (value) => {
    setLocalFilters(prev => ({
      ...prev,
      sort: value
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      gender: [],
      experience: [],
      availability: [],
      fee: [],
      language: [],
      sort: "relevance"
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Filter className="mr-2 h-5 w-5" /> Filters
        </h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleClearFilters}
          className="text-apollo-primary hover:text-apollo-secondary"
        >
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["gender", "experience", "availability", "sort"]}>
        <AccordionItem value="gender">
          <AccordionTrigger className="text-apollo-primary font-medium">Gender</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {genderOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`gender-${option.id}`} 
                    checked={localFilters.gender.includes(option.id)}
                    onCheckedChange={() => handleCheckboxChange("gender", option.id)}
                  />
                  <Label htmlFor={`gender-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger className="text-apollo-primary font-medium">Experience</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {experienceOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`experience-${option.id}`} 
                    checked={localFilters.experience.includes(option.id)}
                    onCheckedChange={() => handleCheckboxChange("experience", option.id)}
                  />
                  <Label htmlFor={`experience-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger className="text-apollo-primary font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {availabilityOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`availability-${option.id}`} 
                    checked={localFilters.availability.includes(option.id)}
                    onCheckedChange={() => handleCheckboxChange("availability", option.id)}
                  />
                  <Label htmlFor={`availability-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fee">
          <AccordionTrigger className="text-apollo-primary font-medium">Consultation Fee</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {feeOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`fee-${option.id}`} 
                    checked={localFilters.fee.includes(option.id)}
                    onCheckedChange={() => handleCheckboxChange("fee", option.id)}
                  />
                  <Label htmlFor={`fee-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="language">
          <AccordionTrigger className="text-apollo-primary font-medium">Languages</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {languageOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`language-${option.id}`} 
                    checked={localFilters.language.includes(option.id)}
                    onCheckedChange={() => handleCheckboxChange("language", option.id)}
                  />
                  <Label htmlFor={`language-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger className="text-apollo-primary font-medium">Sort By</AccordionTrigger>
          <AccordionContent>
            <RadioGroup value={localFilters.sort} onValueChange={handleSortChange}>
              {sortOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`sort-${option.id}`} />
                  <Label htmlFor={`sort-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button 
        onClick={handleApplyFilters}
        className="w-full mt-4 bg-apollo-secondary hover:bg-apollo-primary"
      >
        Apply Filters
      </Button>
    </div>
  );
};
