import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface JobOpening {
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class JobService {

  // ✅ Direct Google Sheets URL — works on localhost AND Netlify (no CORS issue with published sheets)
  private readonly JOBS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRo7RUoXPVxs1Qh7FQits1DP7YmAZgewbqDJNBB6b7CuqN6m6VCUInHRqtMwVxyRAPFyLelROspOPWP/pub?gid=0&single=true&output=csv';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobOpening[]> {
    return this.http.get(this.JOBS_URL, { responseType: 'text' }).pipe(
      map(csv => this.parseCSV(csv))
    );
  }

  private parseCSV(csv: string): JobOpening[] {
    const lines = csv.trim().split('\n');

    // ✅ Lowercase headers so "Title" matches "title" in the interface
    const headers = lines[0].split(',').map(h =>
      h.trim().replace(/^"|"$/g, '').toLowerCase()
    );

    return lines.slice(1)
      .filter(line => line.trim())
      .map(line => {
        const values = this.splitCSVLine(line);
        const job: any = {};
        headers.forEach((h, i) => {
          // ✅ Strip surrounding quotes AND \r characters (Windows line endings from Sheets)
          job[h] = (values[i] || '').trim().replace(/^"|"$/g, '').replace(/\r/g, '');
        });
        return job as JobOpening;
      });
  }

  // ✅ Correctly handles commas inside quoted fields (e.g. description text)
  private splitCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  }
}
