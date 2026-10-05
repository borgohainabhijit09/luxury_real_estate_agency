import { ImageResponse } from 'next/og'
import { properties } from '@/data/properties'

export const alt = 'Aurelia Private Real Estate'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    return new ImageResponse(
      (
        <div style={{ backgroundColor: '#0A0A09', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: '#B7A06A', fontSize: 60, letterSpacing: '8px' }}>AURELIA</h1>
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#0A0A09',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          borderTop: '12px solid #B7A06A',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ color: '#B7A06A', fontSize: 28, textTransform: 'uppercase', letterSpacing: '6px', margin: 0, marginBottom: 24 }}>
            {property.status} · {property.location}
          </p>
          <h1 style={{ color: '#F3F0E8', fontSize: 84, margin: 0, textTransform: 'uppercase', lineHeight: 1.1, fontFamily: 'serif' }}>
            {property.name}
          </h1>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
             <span style={{ color: '#C9C4B8', fontSize: 24, textTransform: 'uppercase', letterSpacing: '3px', margin: 0, marginBottom: 12 }}>
               {property.status === 'Rent' ? 'Annual Rent' : 'Asking Price'}
             </span>
             <span style={{ color: '#F3F0E8', fontSize: 56, margin: 0, fontFamily: 'serif' }}>
               {property.price}
             </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#B7A06A', fontSize: 48, letterSpacing: '12px', fontFamily: 'serif', textTransform: 'uppercase' }}>AURELIA</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
