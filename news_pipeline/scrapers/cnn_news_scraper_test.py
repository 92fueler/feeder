import cnn_news_scraper as scraper

EXPECTED_STRING = "Adam Schiff, who was the lead Democratic House impeachment manager during Trump's first trial last year"
CNN_NEWS_URL = "https://www.cnn.com/2021/02/08/politics/donald-trump-president-joe-biden-impeachment-coronavirus-economy/index.html"

def test_basic():
    news = scraper.extract_news(CNN_NEWS_URL)
    print news
    assert EXPECTED_STRING in news
    print 'test_basic passed!'

if __name__ ==  "__main__":
    test_basic()