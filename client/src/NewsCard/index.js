import React, { Component } from "react";

import {
  NewsCardContainer,
  NewsIntro,
  NewsImage,
  NewsTitle,
  NewsBrief,
  DescriptionItem,
  NewsDescription,
} from "./style";

class NewsCard extends Component {
  redirectToUrl(url) {
    window.open(url, "_blank");
  }

  render() {
    const {
      url,
      title,
      urlToImage,
      time,
      source,
      reason,
      description,
    } = this.props.news;

    return (
      <NewsCardContainer onClick={() => this.redirectToUrl(url)}>
        <NewsIntro>
          <NewsTitle>{title}</NewsTitle>
          <NewsBrief>
            {time != null && (
              <DescriptionItem className="time">{time}</DescriptionItem>
            )}
            {source != null && (
              <DescriptionItem className="source">
                {source.toUpperCase()}
              </DescriptionItem>
            )}
            {reason != null && (
              <DescriptionItem className="reason">
                {reason.toUpperCase()}
              </DescriptionItem>
            )}
          </NewsBrief>
          <NewsDescription>{description}</NewsDescription>
        </NewsIntro>
        <NewsImage src={urlToImage} />
      </NewsCardContainer>
    );
  }
}

export default NewsCard;
