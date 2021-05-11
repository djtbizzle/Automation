package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import Pages.LoginPage;

/**
 * Created by tolu on 21/09/2020.
 */
public class LoginStepdefs extends BaseUtil{

    private BaseUtil base;

    public LoginStepdefs(BaseUtil base){
        this.base = base;
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage()  {

        System.out.println("Navigate to login page");
        base.driver.get("https://twitter.com/login");
    }

    @And("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void iEnterTheUsernameAsAndPasswordAs(String user, String pass)  {

        LoginPage login = new LoginPage(base.driver);
        login.InputEmail(user);
        login.InputPaasword(pass);
    }


    @When("^I click login button$")
    public void iClickLoginButton()  {

        LoginPage login = new LoginPage(base.driver);
        login.ClickLogin();
        System.out.println("Clicking login button");
    }

    @Then("^I should see the user page$")
    public void iShouldSeeTheUserPage()  {

        LoginPage login = new LoginPage(base.driver);
        base.driver.get("https://twitter.com/home");
        //Assert.assertTrue(login.IsForgottenPasswordExist());
        System.out.println("User page access");
    }

    @And("^I click on sign up button$")
    public void iClickOnSignUpButton() {
        LoginPage login = new LoginPage(base.driver);
        login.ClickSignUp();
        System.out.println("Clicking SignUp button");

    }

    @And("^I am redirected to Sign up page$")
    public void iAmRedirectedToSignUpPage() {
        LoginPage login = new LoginPage(base.driver);
        base.driver.get("https://twitter.com/i/flow/signup");
    }


    // @Then("^I should see the error page$")
   // public void iShouldSeeTheErrorPage()  {

       // LoginPage login = new LoginPage(base.driver);
        //Assert.assertTrue(login.IsForgottenPasswordExist());
        //Assert.assertEquals(login.GetMeTheText(),"Forgotten password");
    //}


}
