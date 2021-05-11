package Steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * Created by Kunle on 21/09/2020.
 */
public class Hook extends BaseUtil{

    private BaseUtil base;

    public Hook(BaseUtil base){
        this.base = base;
    }

    @Before
    public void InitializaTest(){

        System.out.println("Opening the browser");

        //Passing a dummy webdriver instance
        System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir") + "/src/drivers/chromedriver.exe");
        base.driver = new ChromeDriver();
        base.driver.manage().window().maximize();

    }

    @After
    public void TearDownTest(Scenario scenario){

        if (scenario.isFailed()) {
            scenario.getName();

            try{
                final byte[] screenshot = ((TakesScreenshot)base.driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            }catch (Exception e){
                e.printStackTrace();
            }
        }else if (scenario.getStatus().equals("pass")){
            scenario.getName();
        }

        base.driver.close();

        System.out.println("Closing the browser");
    }
}
