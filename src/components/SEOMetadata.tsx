
import React from "react";

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
}

export const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = {
      description: description,
      keywords: keywords,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    });

    // Add or update canonical link
    if (canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    // Cleanup on unmount
    return () => {
      // Do nothing on cleanup, as we don't want to remove meta tags when component unmounts
    };
  }, [title, description, keywords, canonicalUrl]);

  return null; // This component doesn't render anything
};
