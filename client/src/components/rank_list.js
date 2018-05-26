import React from 'react';
import RankListItem from './rank_list_item';

const RankList = props => {
  const rankings = props.rankings;
  const rankItems = rankings.map(item => {
    return <RankListItem message={item} key={item.id} />;
  });

  return <ul className="list-group">{rankItems}</ul>;
};

export default RankList;
