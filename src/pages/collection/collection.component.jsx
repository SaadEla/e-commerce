import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionItem from '../../components/collection-item/collection-item.components';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
        <div className="collection-page">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="items">
                {items.map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
};
const mapStateToProps = (state, {match}) =>
    createStructuredSelector({
        collection: selectCollection(match.params.collectionId)
    });
export default connect(mapStateToProps)(CollectionPage);