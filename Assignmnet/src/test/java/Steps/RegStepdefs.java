package Steps;

import Base.BaseUtil;
import Pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.ui.Select;

public class RegStepdefs extends BaseUtil {

    private BaseUtil base;

    public RegStepdefs(BaseUtil base){
        this.base = base;
    }

    @Given("^I navigate to the sign up page$")
    public void iNavigateToTheSignUpPage()  {

        System.out.println("Navigate to sign up page");
        base.driver.get("https://twitter.com/i/flow/signup");
    }

    @When("^I enter name as \"([^\"]*)\"$")
    public void iEnterNameAs(String name)  {
        RegisterPage register = new RegisterPage(base.driver);
        register.InputName(name);
    }

    @And("^I click on use email$")
    public void iClickOnUseEmail() {
        RegisterPage register = new RegisterPage(base.driver);
        register.ClickEmailInstead();
        System.out.println("Click Use email instead");
    }

    @And("^I enter email as  \"([^\"]*)\"$")
    public void iEnterEmailAs(String email)  {
        RegisterPage register = new RegisterPage(base.driver);
        register.InputEmail(email);
        System.out.println("Email entered");
    }

    @And("^I select month as \"([^\"]*)\"$")
    public void iSelectMonthAs(String arg0)  {
        RegisterPage register = new RegisterPage(base.driver);
        register.SelectMonth(arg0);
        System.out.println("Month Selected");

    }

    @And("^I select day as \"([^\"]*)\"$")
    public void iSelectDayAs(String arg0)  {
        RegisterPage register = new RegisterPage(base.driver);
        register.SelectDay(arg0);
        System.out.println("Day Selected");

    }

    @And("^I select year as \"([^\"]*)\"$")
    public void iSelectYearAs(String arg0)  {
        RegisterPage register = new RegisterPage(base.driver);
        register.SelectYear(arg0);
        System.out.println("Year Selected");
    }

    @And("^I click on button Next$")
    public void iClickOnButtonNext() {
        RegisterPage register = new RegisterPage(base.driver);
        register.ClickBtnNext();
        System.out.println("Click Button Next");
    }
}
