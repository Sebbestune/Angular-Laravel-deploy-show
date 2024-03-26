import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = '%2049a1644c1b0b3ea76c42c0c837bc2a97';
  private app_id = 'ac7f880c';

  private httpOptions = {
    headers: new HttpHeaders({
      'accept':'application/json',
      'Accept-Language':'en'
    })
  }

  constructor(private http:HttpClient) { }

  getRecipes(searchterm = "Chicken", quisineType="British", mealType="Dinner"): Observable<any> {
    let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&cuisine_type=" + quisineType + "&mealType=" + mealType;
    return this.http.get<any>(url, this.httpOptions);
  }

  getRecipe(id: string){
    
  }
}
