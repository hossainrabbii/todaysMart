import { z } from "zod";

export const createShopValidationSchema = z.object({
  shopName: z
    .string()
    .min(2, { message: "Shop name must be at least 2 characters long" })
    .max(100, { message: "Shop name cannot exceed 100 characters" }),

  businessLicenseNumber: z
    .string()
    .min(3, { message: "Business License Number is required" })
    .max(50),

  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(200),

  contactNumber: z
    .string()
    .regex(/^[0-9]{8,15}$/, { message: "Invalid contact number format" }),

  website: z
    .string()
    .url({ message: "Please enter a valid website URL" })
    .optional()
    .or(z.literal("")), // allows empty string

  establishedYear: z
    .string()
    .regex(/^(19|20)\d{2}$/, { message: "Enter a valid year (e.g., 2005)" }),

  taxIdentificationNumber: z
    .string()
    .min(5, { message: "Tax ID must be at least 5 characters long" })
    .max(50),

  socialMediaLinks: z.object({
    facebook: z
      .string()
      .url({ message: "Enter a valid Facebook URL" })
      .optional()
      .or(z.literal("")),
    twitter: z
      .string()
      .url({ message: "Enter a valid Twitter URL" })
      .optional()
      .or(z.literal("")),
    instagram: z
      .string()
      .url({ message: "Enter a valid Instagram URL" })
      .optional()
      .or(z.literal("")),
  }),

  servicesOffered: z
    .string()
    .min(10, { message: "Please describe services in at least 10 characters" })
    .max(500, { message: "Too long — maximum 500 characters" }),
});
