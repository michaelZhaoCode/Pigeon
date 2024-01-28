from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains
import requests

DataAndCreds = {}
driver = None

def setup():
    DataAndCreds = {
        "email": "nandwanikhushaal@gmail.com",
        "password": "Hello@21112001",
        "username": "", # this will also be the font name
        "uploadFile": "",
    }

    # read username and uploadfile from details.csv
    with open("details.csv", "r") as file:
        lines = file.readlines()
        DataAndCreds["username"] = lines[0].strip()
        DataAndCreds["uploadFile"] = lines[1].strip()
    # clear the file
    with open("details.csv", "w") as file:
        file.write("")

    driver = webdriver.Firefox()


def login():
    driver.get("https://www.calligraphr.com/en/accounts/login/")
    driver.find_element(By.ID, "id_username").send_keys(DataAndCreds["email"])
    driver.find_element(By.ID, "id_password").send_keys(DataAndCreds["password"])
    driver.find_element(By.ID, "login_button").click()

def createFont():
    driver.get("https://www.calligraphr.com/en/webapp/app_home/?/fonts")
    driver.find_element(By.ID, "fonts-tb-load-template").click()

def uploadFontFile():
    fileinput = driver.find_element(By.ID, "template-upload-fileinput")
    fileinput.send_keys(DataAndCreds["uploadFile"])
    # click upload file
    driver.find_element(By.ID, "upload-template-submit-files-button").click()

def processFontFile():
    # wait for 
    element = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "upload-template-add-chars-button"))
    )
    #implicit wait 5 seconds
    driver.implicitly_wait(5)
    # add characters to your font button
    element.click()

    # using action chains
    buildFontButton = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "fonts-tb-build-font"))
    )

    # click build font
    driver.execute_script("document.getElementById('fonts-tb-build-font').click();")

def setFontName():
    # set the font name
    driver.find_element(By.ID, "build-font-fontname").clear()
    driver.find_element(By.ID, "build-font-fontname").send_keys(DataAndCreds["username"])

    # submit button
    driver.find_element(By.ID, "build-font-submit-button").click()

def downloadFont():
    # donwload the font file
    downloadLink = driver.find_element(By.CLASS_NAME, "result-font-link")
    downloadURL = downloadLink.get_attribute("href")

    response = requests.get(downloadURL)
    fontName = DataAndCreds["username"]
    with open(f"{fontName}.ttf", "wb") as file:
        file.write(response.content)

def createFont():
    setup()
    login()
    createFont()
    uploadFontFile()
    processFontFile()
    setFontName()
    downloadFont()
    driver.quit()

