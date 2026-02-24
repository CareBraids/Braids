import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Route segment config
export const runtime = 'nodejs';
export const dynamic = 'force-static';

// Image metadata
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  try {
    const logoData = readFileSync(join(process.cwd(), 'public', 'logo.png'));
    const base64Logo = logoData.toString('base64');

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            padding: '50px', // Professional safe area padding
          }}
        >
          <img
            src={`data:image/png;base64,${base64Logo}`}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    // Fallback if logo.png is somehow missing during build
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 300,
            background: '#601438',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            borderRadius: '50%',
            fontWeight: 'bold',
            fontFamily: 'serif'
          }}
        >
          C
        </div>
      ),
      { ...size }
    );
  }
}
