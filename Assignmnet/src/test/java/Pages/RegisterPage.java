package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class RegisterPage {

    public RegisterPage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(how= How.XPATH, using = "//*[@id=\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[2]/label/div/div[2]/div/input")
    private WebElement txtName;

    @FindBy(how= How.NAME, using = "phone_number")
    private WebElement txtPhone;

    @FindBy(how= How.XPATH, using = "//*[@id=\"layers\"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[3]/label/div/div[2]/div/input")
    private WebElement txtEmail;

    @FindBy(how= How.LINK_TEXT, using = "Use email instead")
    private WebElement linktxtEmailInstead;

    @FindBy(how= How.XPATH, using = "//*[@id=\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[5]/div[3]/div/div[1]/div[2]/select")
    private Select dropDownMonth;

    @FindBy(how= How.XPATH, using = "//*[@id=\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[5]/div[3]/div/div[2]/div[2]/select")
    private Select dropDownDay;

    @FindBy(how= How.XPATH, using = "//*[@id=\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[5]/div[3]/div/div[3]/div[2]/select")
    private Select dropDownYear;

    @FindBy(how= How.XPATH, using = "//*[@id=\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div/div/div[3]/div/div/span/span")
    private WebElement btnNext;

    public void InputName(String nameText){ txtName.sendKeys(nameText); }

    public void InputPhone(String phoneText){ txtPhone.sendKeys(phoneText); }

    public void InputEmail(String emailText){ txtEmail.sendKeys(emailText); }

    public void ClickEmailInstead(){ linktxtEmailInstead.click(); }

    public void SelectMonth(String month){ dropDownMonth.selectByIndex(Integer.parseInt(month)); }

    public void SelectDay(String day){ dropDownDay.selectByIndex(Integer.parseInt(day)); }

    public void SelectYear(String year){ dropDownYear.selectByIndex(Integer.parseInt(year)); }

    public void ClickBtnNext(){ btnNext.click(); }
}
