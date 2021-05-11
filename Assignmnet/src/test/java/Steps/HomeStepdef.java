package Steps;

import Base.BaseUtil;
import Pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomeStepdef extends BaseUtil {

    private BaseUtil base;

    public HomeStepdef (BaseUtil base){ this.base = base; }
        @Given("^I Navigate to the Home Page$")
        public void iNavigateToTheHomePage()  {
            System.out.println("Navigate to Home page");
            base.driver.get("https://twitter.com");
        }

    @When("^I click on Sign up button$")
    public void iClickOnSignUpButton() {
        HomePage home = new HomePage(base.driver);
        home.ClickSignUp();
        System.out.println("Click sign up");

    }

    @Then("^I am redirected to the register page$")
    public void iAmRedirectedToTheRegisterPage() {
        HomePage home = new HomePage(base.driver);
        base.driver.get("https://twitter.com/i/flow/signup");
        System.out.println("I am on sign up page");
    }

    @When("^I click on the Login button$")
    public void iClickOnTheLoginButton() {
        HomePage home = new HomePage(base.driver);
        home.ClickHomeLogin();
        System.out.println("Click Login");
    }

    @Then("^I am redirected to the Login page$")
    public void iAmRedirectedToTheLoginPage() {
        base.driver.get("https://twitter.com/logi");
        System.out.println("I am on Login page");
    }
}
