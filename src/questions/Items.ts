import { RandomListPage } from '../pages/RandomListPage';
import { Text, Actor } from 'serenity-js/lib/screenplay-protractor';

export class Items {

    static Items_Available = Text.ofAll(RandomListPage.NUMBER_OF_THINGS_LISTED);

}