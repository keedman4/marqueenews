import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'NewsmarqueeWebPartStrings';
import Newsmarquee from './components/Newsmarquee';
import { INewsmarqueeProps } from './components/INewsmarqueeProps';

export interface INewsmarqueeWebPartProps {
  description: string;
  Title:string;
  Url:string;
}

export default class NewsmarqueeWebPart extends BaseClientSideWebPart<INewsmarqueeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<INewsmarqueeProps> = React.createElement(
      Newsmarquee,
      {
        description: this.properties.description,
        Title:this.properties.Title,
        Url:this.properties.Url
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
