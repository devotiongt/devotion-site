import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const submitFormData = async (tableName, data) => {
  try {
    const { error } = await supabase
      .from(tableName)
      .insert([data])
    
    if (error) {
      throw error
    }
    
    return { success: true }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error: error.message }
  }
}

// Función para generar UUID v4
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const submitContactForm = async (formData) => {
  return submitFormData('contact_submissions', {
    id: generateUUID(),
    name: formData.name,
    email: formData.email,
    organization: formData.organization,
    message: formData.message,
    submitted_at: new Date().toISOString(),
  })
}

export const submitHack2025PreRegistration = async (formData) => {
  return submitFormData('hack2025_preregistrations', {
    id: generateUUID(),
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    role: formData.role,
    experience: formData.experience,
    motivation: formData.motivation,
    updates: formData.updates,
    submitted_at: new Date().toISOString(),
  })
}

export const submitHack2025VolunteerApplication = async (formData) => {
  return submitFormData('hack2025_volunteers', {
    id: generateUUID(),
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    areas: formData.areas,
    availability: formData.availability,
    experience: formData.experience,
    motivation: formData.motivation,
    submitted_at: new Date().toISOString(),
  })
}

export const subscribeToNewsletter = async (email) => {
  return submitFormData('newsletter_subscriptions', {
    id: generateUUID(),
    email: email,
    subscribed_at: new Date().toISOString(),
  })
}

export const submitVolunteerApplication = async (formData) => {
  return submitFormData('volunteer_applications', {
    id: generateUUID(),
    name: formData.name,
    email: formData.email,
    skills: formData.skills,
    experience: formData.experience,
    availability: formData.availability,
    motivation: formData.motivation,
    submitted_at: new Date().toISOString(),
  })
}

export const submitOrganizationRequest = async (formData) => {
  return submitFormData('organization_requests', {
    id: generateUUID(),
    organization_name: formData.organizationName,
    contact_name: formData.contactName,
    email: formData.email,
    organization_type: formData.organizationType,
    website: formData.website,
    needs: formData.needs,
    timeline: formData.timeline,
    budget: formData.budget,
    submitted_at: new Date().toISOString(),
  })
}