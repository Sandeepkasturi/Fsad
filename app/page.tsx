import { readFileSync } from 'fs'
import { join } from 'path'

export default function Home() {
  const htmlPath = join(process.cwd(), 'public', 'lab-manual.html')
  const htmlContent = readFileSync(htmlPath, 'utf-8')

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <script dangerouslySetInnerHTML={{__html: `
        function toggle(headerElement) {
          const body = headerElement.nextElementSibling;
          if (body) {
            body.classList.toggle('open');
            const btn = headerElement.querySelector('.toggle-btn');
            if (btn) {
              btn.textContent = body.classList.contains('open') ? 'collapse' : 'expand';
            }
          }
        }
      `}} />
    </>
  )
}
