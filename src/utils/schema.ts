export interface SchemaCourse {
  name: string;
  description: string;
  provider: string;
  category: string;
}

export interface SchemaFAQ {
  question: string;
  answer: string;
}

export const generateOrgSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://gloriousedubd.com/#organization",
    "name": "Glorious Edu BD",
    "url": "https://gloriousedubd.com",
    "logo": "https://gloriousedubd.com/assets/logo.png",
    "sameAs": [
      "https://facebook.com/gloriousedubd",
      "https://linkedin.com/company/gloriousedubd"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    }
  };
};

export const generateCourseSchema = (course: SchemaCourse) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.name,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": course.provider,
      "sameAs": "https://gloriousedubd.com"
    },
    "category": course.category
  };
};

export const generateFAQSchema = (faqs: SchemaFAQ[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};