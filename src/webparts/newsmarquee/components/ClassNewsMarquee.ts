import { INewsmarqueeProps } from "./INewsmarqueeProps";

export class ClassMarquee{
    public Title:string;
    public Url:string;
   
  
    
    constructor(item: INewsmarqueeProps){
        this.Title = item.Title;
        this.Url = item.Url;
    }
}