import React, { Component } from "react";
import _ from "lodash";
import NewsCard from "../NewsCard/index";
import { NewsPanelContainer } from "./style";

class NewsPanel extends Component {
  constructor() {
    super();
    this.state = { news: null };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.loadMoreNews();
    this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
      console.log("Loading more news");
      this.loadMoreNews();
    }
  }

  loadMoreNews(e) {
    let request = new Request("http://localhost:3000/news", {
      method: "GET",
    });

    fetch(request)
      .then((res) => res.json())
      .then((news) => {
        this.setState({
          news: this.state.news ? this.state.news.concat(news) : news,
        });
      });
  }

  renderNews() {
    return this.state.news.map((oneNews) => (
      <NewsCard key={oneNews.digest} news={oneNews} />
    ));
  }

  render() {
    if (this.state.news) {
      return <NewsPanelContainer>{this.renderNews()}</NewsPanelContainer>;
    } else {
      return (
        <NewsPanelContainer>
          <div className="loading">Loading ...</div>
        </NewsPanelContainer>
      );
    }
  }
}

export default NewsPanel;
