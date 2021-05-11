package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

    public HomePage(WebDriver driver){ PageFactory.initElements(driver,this); }

    @FindBy(how= How.XPATH, using = "//*[@id=\"react-root\"]/div/div/div/main/div/div/div/div[1]/div/a[1]")
    private WebElement btnHomeSignup;

    @FindBy(how= How.XPATH, using = "//*[@id=\"react-root\"]/div/div/div/main/div/div/div/div[1]/div/a[2]")
    private WebElement btnHomeLogin;

    public void ClickSignUp(){ btnHomeSignup.click(); }

    public void ClickHomeLogin(){ btnHomeLogin.click(); }
}
