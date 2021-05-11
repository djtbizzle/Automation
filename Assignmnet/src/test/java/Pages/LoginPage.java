package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Tolu on 28/09/2020.
 */
public class LoginPage {

    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(how= How.XPATH, using = "//*[@id=\"react-root\"]/div/div/div[2]/main/div/div/div[1]/form/div/div[1]/label/div/div[2]/div/input")
    private WebElement txtEmail;

    @FindBy(how= How.XPATH, using = "//*[@id=\"react-root\"]/div/div/div[2]/main/div/div/div[1]/form/div/div[2]/label/div/div[2]/div/input")
    private WebElement txtPass;

    @FindBy(how= How.XPATH, using = "//*[@id=\"react-root\"]/div/div/div[2]/main/div/div/div[1]/form/div/div[3]/div/div")
    private WebElement btnLogin;

    //@FindBy(how= How.PARTIAL_LINK_TEXT, using = "Forgotten")
    //private WebElement lnkForgotPass;

    @FindBy(how= How.XPATH, using = "//*[@id=\"react-root\"]/div/div/div/main/div/div/div[1]/div[1]/div[2]/a[1]/div/span")
    private WebElement btnsignup;


    public void InputEmail(String emailText){ txtEmail.sendKeys(emailText); }

    public void InputPaasword(String passwordText){ txtPass.sendKeys(passwordText); }

    public void ClickLogin(){ btnLogin.click(); }

    public void ClickSignUp(){ btnsignup.click(); }

    //public boolean IsForgottenPasswordExist(){return lnkForgotPass.isDisplayed();}

    //public String GetMeTheText(){return lnkForgotPass.getText();}
}
