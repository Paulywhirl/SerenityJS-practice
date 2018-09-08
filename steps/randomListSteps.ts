import { Navigate } from "../src/tasks/Navigate";

export = function randomListSteps() {

    this.Given(/^(.*) wants a list of random items$/,
        function (name: string) {
            return this.stage.theActorCalled(name).attemptsTo(
                Navigate.toWebsite());
        });
}