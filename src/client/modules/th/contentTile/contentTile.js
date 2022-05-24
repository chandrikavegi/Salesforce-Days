import { LightningElement, api } from 'lwc';

export default class ContentTile extends LightningElement {
    @api imgUrl;
    @api badgeUrl;
    @api badgeType;

}
