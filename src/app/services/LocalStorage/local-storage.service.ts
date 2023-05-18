import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  setValue(key:string , value:string)
  {
    localStorage.setItem(key,value);
  }
  getValue(key:string)
  {
    return  localStorage.getItem(key);
  }
  remove(key: string) {
    localStorage.removeItem(key);
}

clear()
{
  localStorage.clear();
}

  constructor() { }
}
