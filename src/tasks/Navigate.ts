import { Open, PerformsTasks, step, Task }
    from 'serenity-js/lib/screenplay-protractor';

export class Navigate implements Task {

    public static toWebsite(): Navigate {
        return new Navigate();
    }

    performAs(actor: PerformsTasks): PromiseLike<void> { 
        return actor.attemptsTo(
            Open.browserOn('https://www.randomlists.com/things')
        )
    }
}