import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Loan } from './model/Loan';
import { LoanPage } from './model/LoanPage';
import { LoanEditComponent } from './loan-edit/loan-edit.component';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(
    private http: HttpClient
  ) { }

  getLoans(pageable: Pageable, gameId?: number, clientId?: number, date?: Date): Observable<LoanPage> {
    console.log({
      pageable: pageable, gameId: gameId,
      clientId: clientId, date: date
    });
    let hdrs = new HttpHeaders();
    hdrs.append('Content-Type','application/json');

    return this.http.post<LoanPage>('http://localhost:8080/loan', {
      pageable: pageable, gameId: gameId,
      clientId: clientId, date: date
    },{headers: hdrs});
  }

  saveLoan(loan: Loan): Observable<void> {
    let url = 'http://localhost:8080/loan';
    if (loan.id != null) url += '/' + loan.id;
    console.log(loan);
    return this.http.put<void>(url, loan);
  }

  deleteLoan(idLoan: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/loan/' + idLoan);
  }

  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>('http://localhost:8080/loan');
  }
}
