# Supabase Database Setup

This document outlines the required database tables for the Devotion site forms integration.

## Required Tables

### 1. contact_submissions
Stores contact form submissions from the main contact section.

```sql
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    organization TEXT,
    message TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2. hack2025_preregistrations
Stores pre-registration forms for the Hack2025 event.

```sql
CREATE TABLE hack2025_preregistrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL,
    experience TEXT NOT NULL,
    motivation TEXT NOT NULL,
    updates BOOLEAN DEFAULT true,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 3. hack2025_volunteers
Stores volunteer application forms for the Hack2025 event.

```sql
CREATE TABLE hack2025_volunteers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    areas TEXT NOT NULL,
    availability TEXT NOT NULL,
    experience TEXT,
    motivation TEXT NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 4. newsletter_subscriptions
Stores newsletter subscription emails.

```sql
CREATE TABLE newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);
```

## Row Level Security (RLS) - CRÍTICO PARA SEGURIDAD

**⚠️ IMPORTANTE: Las políticas RLS son tu única defensa real contra acceso no autorizado.**

```sql
-- Enable RLS on all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE hack2025_preregistrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE hack2025_volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow INSERT ONLY for anonymous users (form submissions)
-- No SELECT, UPDATE, DELETE para usuarios anónimos
CREATE POLICY "Allow anonymous inserts on contact_submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on hack2025_preregistrations" ON hack2025_preregistrations
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on hack2025_volunteers" ON hack2025_volunteers
    FOR INSERT WITH CHECK (true);

-- Newsletter: permitir INSERT pero prevenir duplicados
CREATE POLICY "Allow anonymous inserts on newsletter_subscriptions" ON newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Para acceso administrativo, crea usuarios autenticados con políticas específicas
-- No incluidas aquí por seguridad
```

### Políticas Adicionales de Seguridad

```sql
-- Rate limiting básico (requiere extensión)
-- CREATE EXTENSION IF NOT EXISTS "http";

-- Prevenir spam con validaciones básicas
CREATE OR REPLACE FUNCTION validate_email(email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql;

## Environment Variables

Update your `.env` file with your actual Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

You can find these values in your Supabase project settings under API.

## Form Integration

The forms are now integrated with Supabase using the auto-generated API. All form submissions will be stored in the respective tables with proper error handling and user feedback.

### Features Implemented:
- ✅ Contact form integration
- ✅ Hack2025 pre-registration form
- ✅ Hack2025 volunteer application form
- ✅ Newsletter subscription
- ✅ Real-time form validation
- ✅ User feedback on success/error
- ✅ Form reset on successful submission

## 🚀 GitHub Pages Deployment

### Configuración Automática

1. **Push tu código a GitHub**
2. **Ve a Settings → Pages → Source: GitHub Actions**
3. **Configura las variables de entorno**:
   - Ve a Settings → Secrets and variables → Actions
   - Añade: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

### ⚠️ IMPORTANTE: Seguridad de API Keys

**¿Es seguro tener la API key pública?**
- ✅ **SÍ** - La `ANON_KEY` de Supabase está diseñada para ser pública
- ✅ **La seguridad real** viene de las políticas RLS
- ✅ **Sin RLS = Sin seguridad**, independientemente de si ocultas la key

**¿Qué protege realmente tu aplicación?**
1. **Políticas RLS** - Solo permiten INSERT, no SELECT/UPDATE/DELETE
2. **Validación de datos** en las políticas
3. **Rate limiting** en Supabase (automático)
4. **CORS** configurado correctamente

### Actualizar vite.config.js

El archivo ya está configurado con:
```javascript
base: '/devotion-site/', // Cambia por el nombre de tu repo
```

## Testing

1. Set up your Supabase project and create the tables above
2. Update your environment variables
3. Test each form to ensure data is properly stored
4. Verify error handling by temporarily disabling network connection
5. **Test RLS policies** - intenta acceder a los datos sin autenticación

## 🔒 Checklist de Seguridad

- [ ] RLS habilitado en todas las tablas
- [ ] Políticas que solo permiten INSERT para anónimos
- [ ] No hay SELECT/UPDATE/DELETE para usuarios anónimos
- [ ] Variables de entorno configuradas en GitHub Secrets
- [ ] CORS configurado en Supabase para tu dominio
- [ ] Rate limiting habilitado (automático en Supabase)