import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LoanBudgetVisualization from "./components/LoanBudgetVisualization";
import FirstPage from "./components/FirstPage";
import X2LoginScreen from "./components/X2LoginScreen";
import ScholarshipBudgetVisualization from "./components/ScholarshipBudgetVisualization";
import X3MakeProfileScreen from "./components/X3MakeProfileScreen";
import X2MakeProfileScreen from "./components/X2MakeProfileScreen";
import X4MakeProfileScreen from "./components/X4MakeProfileScreen";
import X5MakeProfileScreen from "./components/X5MakeProfileScreen";
import Loans from "./components/Loans";
import X6MakeProfileScreen from "./components/X6MakeProfileScreen";
import X8MakeProfileScreen from "./components/X8MakeProfileScreen";
import X7MakeProfileScreen from "./components/X7MakeProfileScreen";
import X9MakeProfileScreen from "./components/X9MakeProfileScreen";
import X10MakeProfileScreen from "./components/X10MakeProfileScreen";
import ScholarshipVsLoan from "./components/ScholarshipVsLoan";
import Scholarships from "./components/Scholarships";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/loan-budget-visualization">
          <LoanBudgetVisualization {...loanBudgetVisualizationData} />
        </Route>
        <Route path="/:path(|first-page)">
          <FirstPage
            rectangle1="/img/rectangle-1.png"
            rectangle14="/img/rectangle-14@2x.png"
            login="login"
            title="start your journey here |"
            getStarted="Get Started"
            learnGrowthrive={
              <React.Fragment>
                learn <br />
                grow
                <br />
                thrive
              </React.Fragment>
            }
          />
        </Route>
        <Route path="/2-login-screen">
          <X2LoginScreen {...x2LoginScreenData} />
        </Route>
        <Route path="/scholarship-budget-visualization">
          <ScholarshipBudgetVisualization {...scholarshipBudgetVisualizationData} />
        </Route>
        <Route path="/3-make-profile-screen">
          <X3MakeProfileScreen {...x3MakeProfileScreenData} />
        </Route>
        <Route path="/2-make-profile-screen">
          <X2MakeProfileScreen {...x2MakeProfileScreenData} />
        </Route>
        <Route path="/4-make-profile-screen">
          <X4MakeProfileScreen {...x4MakeProfileScreenData} />
        </Route>
        <Route path="/5-make-profile-screen">
          <X5MakeProfileScreen {...x5MakeProfileScreenData} />
        </Route>
        <Route path="/loans">
          <Loans
            layer4="/img/layer4.png"
            place="back"
            title="Lorem Ipsum Excellence Loan"
            loremIpsumLoan="Lorem Ipsum Loan"
            loremIpsumLoanIii="Lorem Ipsum Loan III"
            loans1="based on your answers, here is a list of the best loans we’ve found for you"
            loans2="loans"
          />
        </Route>
        <Route path="/6-make-profile-screen">
          <X6MakeProfileScreen {...x6MakeProfileScreenData} />
        </Route>
        <Route path="/8-make-profile-screen">
          <X8MakeProfileScreen {...x8MakeProfileScreenData} />
        </Route>
        <Route path="/7-make-profile-screen">
          <X7MakeProfileScreen {...x7MakeProfileScreenData} />
        </Route>
        <Route path="/9-make-profile-screen">
          <X9MakeProfileScreen
            title="make a profile"
            x1WhatIsYourEmploymentStatus=" connect credit cards"
            previous="previous"
            skip="skip"
            next="next"
            plaid="/img/plaid.png"
          />
        </Route>
        <Route path="/10-make-profile-screen">
          <X10MakeProfileScreen
            makeAProfile="make a profile"
            x1WhatIsYourEmploymentStatus="how much do you expect to pay towards your loan per month?"
            previous="previous"
            skip="skip"
            next="next"
          />
        </Route>
        <Route path="/scholarship-vs-loan">
          <ScholarshipVsLoan loans="scholarships/grants" scholarships="loans" place="back" />
        </Route>
        <Route path="/scholarships">
          <Scholarships
            loans1="based on your answers, here is a list of the best scholarships and grants we’ve found for you"
            loremIpsumExcellenceScholarship="Lorem Ipsum Excellence Scholarship"
            loans2="scholarships/grants"
            loremIpsumScholarshipIi="Lorem Ipsum Scholarship II"
            loremIpsumScholarshipIii="Lorem Ipsum Scholarship III"
            place="back"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const x2LoginScreenData = {
    title: "Create your account",
    spanText1: " ",
    spanText2: "first name",
    spanText3: " ",
    spanText4: "email address",
    spanText5: " ",
    spanText6: "create strong password",
    spanText7: " ",
    spanText8: "confirm password",
    pleaseEnterAValidPassword: "ⓘ please enter a valid password",
    letsGo: "Let’s go",
    spanText9: " ",
    spanText10: "last name",
};

const x3MakeProfileScreenData = {
    title: "make a profile",
    x1WhatIsYourHouseholdIncome: "1. What is your household income?",
    lessThan25000: "Less than $20,000",
    betweenThan2500075000: "Between than $20,000-$50,000",
    betweenThan75000125000: "Between than $50,000-$80,000",
    moreThan125000: "More than $80,000",
    previous: "previous",
    skip: "skip",
    next: "next",
};

const component122Data = {
    className: "component-1-7",
};

const x2MakeProfileScreenData = {
    title: "make a profile",
    betweenThan5000080000: "Between than $50,000-$80,000",
    moreThan80000: "More than $80,000",
    lessThan20000: "Less than $20,000",
    betweenThan2000050000: "Between than $20,000-$50,000",
    x1WhatIsYourAnnualIncome: "1. What is your annual income?",
    previous: "previous",
    skip: "skip",
    next: "next",
    component12Props: component122Data,
};

const component123Data = {
    className: "component-1-8",
};

const x4MakeProfileScreenData = {
    title: "make a profile",
    x1WhatIsYourEmploymentStatus: "what is your employment status?",
    lessThan25000: "full-time",
    betweenThan2500075000: "part-time",
    betweenThan75000125000: "currently seeking opportunities",
    previous: "previous",
    skip: "skip",
    next: "next",
    component12Props: component123Data,
};

const component124Data = {
    className: "component-1-9",
};

const quizSuares2Data = {
    className: "quiz-suares-2",
};

const x5MakeProfileScreenData = {
    title: "make a profile",
    howManyDependentsDoYouHave: "how many dependents do you have?",
    place: "none",
    text2: "1-2",
    text1: "3-4",
    moreThan4: "more than 4",
    previous: "previous",
    skip: "skip",
    next: "next",
    component12Props: component124Data,
    quizSuaresProps: quizSuares2Data,
};

const x6MakeProfileScreenData = {
    title: "make a profile",
    howManyDependentsDoYouHave: "what is your ethnicity?",
    none: "caucasian",
    x12: "african-american",
    x34: "asian",
    moreThan4: "latino or hispanic",
    previous: "previous",
    skip: "skip",
    next: "next",
    pacificIslander: "pacific islander",
    other: "other",
};

const x8MakeProfileScreenData = {
    title: "make a profile",
    x1WhatIsYourEmploymentStatus: "do you identify as lgbtq+?",
    lessThan25000: "yes",
    betweenThan2500075000: "no",
    betweenThan75000125000: "prefer not to answer",
    previous: "previous",
    skip: "skip",
    next: "next",
};

const x7MakeProfileScreenData = {
    title: "make a profile",
    x1WhatIsYourEmploymentStatus: "do you identify as a woman?",
    lessThan25000: "yes",
    betweenThan2500075000: "no",
    betweenThan75000125000: "prefer not to answer",
    previous: "previous",
    skip: "skip",
    next: "next",
};

const loanBudgetVisualizationData = {
    givenYourCurrentN: <React.Fragment>Given your current net income, your estimated budget per month is: <br />$XXX.XX</React.Fragment>,
    text: "",
    education: " education",
    rent: " rent",
    groceries: " groceries",
    dining: " dining",
    subscriptions: " subscriptions",
    misc: " misc",
    itsEstimatedToTa: "It’s estimated to take around XX years to pay off the loan..",
    place: "back",
};

const scholarshipBudgetVisualizationData = {
    givenYourCurrentN: <React.Fragment>Given your current net income, your estimated budget per month is: <br />$XXX.XX</React.Fragment>,
    text: "",
    education: " education",
    rent: " rent",
    groceries: " groceries",
    dining: " dining",
    subscriptions: " subscriptions",
    misc: " misc",
    youreOnTheRight: "You’re on the right track! You won’t have to repay any loans",
    place: "back",
};

