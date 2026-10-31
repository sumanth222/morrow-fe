import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/api-config';

export interface CreateInquiryRequest {
  name: string;
  email: string;
  phoneNumber: string;
  occasion: string;
  eventDate: string | null;
  package: string;
  design: string | null;
  styleNotes: string | null;
}

export interface InquiryCreatedResponse {
  id: number;
  status: string;
  createdAt: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class InquiryApiService {
  private readonly endpoint = `${API_BASE_URL}/inquiries`;

  constructor(private readonly http: HttpClient) {}

  createInquiry(payload: CreateInquiryRequest): Observable<InquiryCreatedResponse> {
    return this.http.post<InquiryCreatedResponse>(this.endpoint, payload);
  }
}
