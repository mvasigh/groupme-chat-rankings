import React from 'react';
import RankListItem from './rank_list_item';

const RankList = props => {
  const rankings = props.rankings;
  let rankItems;
  if (rankings) {
    rankItems = rankings.map(item => {
      return <RankListItem message={item} key={item.id} />;
    });
  }

  return <div className="list-group">{rankItems}</div>;
};

export default RankList;
