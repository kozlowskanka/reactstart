import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Container from '../Container/Container';
import ListLink from '../ListLink/ListLink';
import styles from './SearchResults.scss';
import {settings} from '../../data/dataStore';

class SearchResults extends Component {

  static propTypes = {
    cards: PropTypes.node,
    lists: PropTypes.node,
  };

  render() {
    const { cards, lists } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h2 className={styles.title}>{settings.search.results}</h2>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>

        {lists.map(list => (
          <ListLink key={list.id} {...list} />
        ))}
      </Container>
    );
  }
}

export default SearchResults;