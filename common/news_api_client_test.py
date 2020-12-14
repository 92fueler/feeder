import news_api_client as client

def test_basic():
  # CNN 
  # news = client.getNewsFromSource()
  # print news
  # assert len(news) > 0
  # assert len(news) > 0
  # The Verge
  # news = client.getNewsFromSource(sources=['the-verge'])
  # print news
  # assert len(news) > 0
  # assert len(news) > 0
  # BBC News
  news = client.getNewsFromSource(sources=['the-new-york-times'])
  print news
  assert len(news) > 0
  print 'test_basic passed!'

if __name__ == '__main__':
  test_basic()


