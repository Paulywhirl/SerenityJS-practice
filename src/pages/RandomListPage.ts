import { by } from 'protractor';
import { Target } from 'serenity-js/lib/screenplay-protractor';

export class RandomListPage{

    static QUANTITY = Target.the("quantity text box")
            .located(by.id('rand_options_qty'));

    static NUMBER_OF_THINGS_LISTED = Target.the("images of random things")
            .located(by.className('.img'));
}