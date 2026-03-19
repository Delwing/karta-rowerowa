import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const SIGNS_DIR = join(__dirname, '..', 'public', 'signs');

const SIGN_CODES = [
  // A-series
  'A-1','A-2','A-3','A-4','A-5','A-6a','A-6b','A-6c','A-6d','A-7','A-8','A-9','A-10',
  'A-11','A-11a','A-12a','A-12b','A-13','A-14','A-15','A-16','A-17','A-18a','A-18b',
  'A-20','A-21','A-22','A-23','A-24','A-25','A-27','A-28','A-29','A-30','A-31','A-32','A-34',
  // B-series
  'B-1','B-2','B-9','B-10','B-20','B-21','B-22','B-23','B-24','B-29','B-30','B-31',
  'B-35','B-36','B-37','B-38','B-40','B-42',
  // C-series
  'C-1','C-2','C-3','C-4','C-5','C-6','C-7','C-8','C-9','C-10','C-11','C-12',
  'C-13','C-13a','C-16','C-16a',
  // D-series
  'D-1','D-2','D-3','D-4a','D-4b','D-5','D-6','D-6a','D-6b','D-7','D-9','D-11','D-12',
  'D-13','D-14','D-15','D-16','D-17','D-19','D-20','D-21a','D-22','D-24','D-25',
  'D-26a','D-26c','D-26d','D-27','D-28','D-29','D-30','D-31','D-32','D-33','D-34',
  'D-37','D-40','D-41','D-42','D-43','D-46','D-47','D-48',
  // E-series
  'E-1','E-1a','E-2a','E-2b','E-3','E-4','E-5','E-6b','E-7','E-8','E-9','E-10','E-11',
  'E-12a','E-13','E-14','E-15a','E-17a','E-18a','E-21','E-22a','E-22b','E-22c',
  // F-series
  'F-1','F-2','F-3','F-4','F-6','F-7','F-8','F-9','F-10','F-11','F-15','F-16','F-18','F-19',
  // G-series
  'G-1a','G-1b','G-1c','G-1d','G-1e','G-1f','G-2','G-3','G-4',
  // P-series
  'P-1','P-2','P-3','P-4','P-5','P-6','P-7a','P-7b','P-8a','P-8b','P-8c','P-9','P-10',
  'P-11','P-12','P-13','P-14','P-15','P-16','P-17','P-21','P-22','P-23','P-24','P-25',
  // R-series
  'R-1','R-1a','R-1b','R-2','R-2a','R-3',
  // T-series
  'T-1','T-2','T-3','T-4','T-5','T-6a','T-7','T-10','T-13','T-14','T-15','T-16','T-17',
  'T-18','T-19','T-20','T-21','T-22','T-25a','T-25b','T-25c','T-27','T-29',
];

function wikiUrl(code: string): string {
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/PL_road_sign_${code}.svg`;
}

async function downloadSign(code: string): Promise<{ code: string; ok: boolean; error?: string }> {
  const url = wikiUrl(code);
  const dest = join(SIGNS_DIR, `${code}.svg`);

  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) {
      return { code, ok: false, error: `HTTP ${res.status}` };
    }
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('svg') && !contentType.includes('xml')) {
      return { code, ok: false, error: `Unexpected content-type: ${contentType}` };
    }
    const body = await res.text();
    await writeFile(dest, body, 'utf-8');
    return { code, ok: true };
  } catch (e: any) {
    return { code, ok: false, error: e.message };
  }
}

async function main() {
  if (!existsSync(SIGNS_DIR)) {
    await mkdir(SIGNS_DIR, { recursive: true });
  }

  console.log(`Downloading ${SIGN_CODES.length} sign images to ${SIGNS_DIR}...\n`);

  const concurrency = 5;
  const results: { code: string; ok: boolean; error?: string }[] = [];

  for (let i = 0; i < SIGN_CODES.length; i += concurrency) {
    const batch = SIGN_CODES.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(downloadSign));
    results.push(...batchResults);

    for (const r of batchResults) {
      if (r.ok) {
        console.log(`  OK  ${r.code}`);
      } else {
        console.log(`  FAIL ${r.code} — ${r.error}`);
      }
    }
  }

  const ok = results.filter((r) => r.ok).length;
  const fail = results.filter((r) => !r.ok).length;
  console.log(`\nDone: ${ok} downloaded, ${fail} failed.`);

  if (fail > 0) {
    console.log('\nFailed signs:');
    for (const r of results.filter((r) => !r.ok)) {
      console.log(`  ${r.code}: ${r.error}`);
    }
  }
}

main();
