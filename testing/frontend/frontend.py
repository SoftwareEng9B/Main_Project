import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_regular_input(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("32608")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_bad_input_short_zip(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("32")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_bad_input_long_zip(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("32608888888888")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_bad_input_letters(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("AbCdEfGhIjKlMnOpQrStUvWxYz")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_response_with_many_results(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("33124")
        elem.send_keys(Keys.RETURN)
        all_options = elem.find_element_by_tag("tbody")
        for option in all_options:
            print("Value is: %s" % option.get_attribute("tr"))
            option.click()

    def test_response_with_few_results(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("32610")
        elem.send_keys(Keys.RETURN)
        all_options = elem.find_elements_by_tag_name("tbody")
        for option in all_options:
            print("Value is: %s" % option.get_attribute("tr"))
            option.click()

    def test_random_zip_one(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("35801")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_random_zip_two(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("60602")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_random_zip_three(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("49036")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def test_random_zip_four(self):
        driver = self.driver
        driver.get("https://powerful-basin-62197.herokuapp.com/Home")
        self.assertIn("React App", driver.title)
        elem = driver.find_element_by_name("search")
        elem.send_keys("44179")
        elem.send_keys(Keys.RETURN)
        assert "No results found." not in driver.page_source

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
