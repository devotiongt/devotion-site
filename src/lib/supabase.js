import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const submitFormData = async (tableName, data) => {
  try {
    const { data: result, error } = await supabase
      .from(tableName)
      .insert([data])
      .select()
    
    if (error) {
      throw error
    }
    
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { success: false, error: error.message }
  }
}

export const submitContactForm = async (formData) => {
  return submitFormData('contact_submissions', {
    name: formData.name,
    email: formData.email,
    organization: formData.organization,
    message: formData.message,
    submitted_at: new Date().toISOString(),
  })
}

export const submitHack2025PreRegistration = async (formData) => {
  return submitFormData('hack2025_preregistrations', {
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
    email: email,
    subscribed_at: new Date().toISOString(),
  })
}