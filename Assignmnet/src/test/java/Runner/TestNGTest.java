package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Created by Tolu on 02/10/2020.
 */

@CucumberOptions(features = {"src/test/java/features"}, format = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
        glue = "Steps")
public class TestNGTest extends AbstractTestNGCucumberTests{
}
