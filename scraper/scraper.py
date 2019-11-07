from bs4 import BeautifulSoup
import requests

#Get Zip Code as input and fetch data
zipCode = input('Enter Zip Code: ')
urlSearch = requests.get("https://www.ewg.org/tapwater/search-results.php?zip5=" + zipCode + "&searchtype=zip")
soup = BeautifulSoup(urlSearch.content, 'html.parser')

#Parsing information from tag list
#Sending it to a dictionary Dict so it's sorted
tagList = soup.find_all('td')
x = 0
Dict = {}
#tList = []
for item in tagList:
    try:
        tagT = str(soup.find_all('td')[3 + x]) + str(soup.find_all('td')[4 + x]) + str(soup.find_all('td')[5 + x])
        #tList.append(tagT)
        index = tagT.find('</span>')
        i = int(tagT[index+8:-5].replace(',',''))
        Dict[i] = tagT
        x += 3
    except:
        break

for i in reversed(sorted(Dict)):
    print(Dict[i])

#x = system.php?pws=FL2010749
#https://www.ewg.org/tapwater/ + x
