import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface GitHubRepository {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  language: string;
  languages_url: string;
  downloads_url: string;
  stargazers_count: number;
  forks_count: number;
  owner: {
    login: string;
  };

}

export interface GitHubReadme {
  content: string;
  encoding: string;
}

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private token_github = environment.githubToken;
  private baseUrl = 'https://api.github.com/users/Pietro907';
  private repoUrl = 'https://api.github.com/repos/Pietro907';

  constructor(private http: HttpClient ) {}

  // Ottiene le repository dell'utente
  getRepositories(page: number = 1, perPage: number = 9999): Observable<GitHubRepository[]> {
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token_github}`
    });
    return this.http.get<GitHubRepository[]>(`${this.baseUrl}/repos?per_page=${perPage}&page=${page}`);
  }

  getRepoShow(repoName: string): Observable<GitHubRepository[]> {
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token_github}`
    });
    return this.http.get<GitHubRepository[]>(`${this.repoUrl}/${repoName}`)
  }

  getRepoLang(repoName: string): Observable<{ [key: string]: number;}> {
    const headers = new HttpHeaders({
      'Authorization': `token ${this.token_github}`
    });
    return this.http.get<{ [key: string]: number }>(`${this.repoUrl}/${repoName}/languages`)
  }


  // Ottiene il README di una repository specifica
  getReadme(repoName: string): Observable<GitHubReadme> {
    return this.http.get<GitHubReadme>(
      `https://api.github.com/repos/Pietro907/${repoName}/readme`
    );
  }
}
