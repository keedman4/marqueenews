import * as React from 'react';
import styles from './Newsmarquee.module.scss';
import { INewsmarqueeProps } from './INewsmarqueeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ClassMarquee } from './ClassNewsMarquee';
import pnp from 'sp-pnp-js';
import Send from '@material-ui/icons/VolumeUp';
import Marquee from 'react-double-marquee';


export default class Newsmarquee extends React.Component<INewsmarqueeProps, any> {
  public constructor(props:INewsmarqueeProps, any)
  {
  super(props);
  this.state={
      items:[]
  };
  }

     public render() {
    
      return (
    <div  style={{
        width: '100%',
        height: '3rem',
        whiteSpace: 'nowrap',
        padding: '0.5rem'
      }}>
        <div className={styles.alertBtns}><h3><i><Send /> </i>Alert</h3></div>
        <div className={styles.alertMarquee}>
      <Marquee>
        
        
      {
                    this.state.items.map((item:INewsmarqueeProps)=>{
                        return(
                         
                            <><b>{item.Title}</b> &nbsp;&nbsp;</>
                        );
                    })
                }
                  
        
              </Marquee> 
      </div>
    </div>
   
  );
}
public componentDidMount()
{
    // debugger;
    this._CarouselList();
}
private _CarouselList():void
{
    // pnp.sp.web.lists.getByTitle("Site Pages").items.filter("IsFeaturedNews eq ('Important Notice')").get().then
    pnp.sp.web.lists.getByTitle("headlines").items.select("Title").get().then
    ((response)=>{
        let CarouselCollection=response.map(item=> new ClassMarquee(item));
        this.setState({items:CarouselCollection});
    }

    );
}
}