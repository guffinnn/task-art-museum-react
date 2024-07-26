import { JSX } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from '../CardList/styled';
import { CardImageSmall, CardListWrapper } from '../SmallCardList/styled';
import { ArtInfo, URL_IMAGE } from '../../constants/api';
import SmallCard from '../SmallCard/SmallCard';

interface SearchResultsListProps {
  loading: boolean;
  searchResults: ArtInfo[];
}

function SearchResultsList({
  loading,
  searchResults,
}: SearchResultsListProps): JSX.Element {
  return (
    <>
      {!loading ? (
        <CardListWrapper>
          {searchResults.map((item, index) => (
            <SmallCard item={item} key={index}>
              <Link
                to={`/task-art-museum-react/art/${item.id}`}
                className="image__link"
              >
                <CardImageSmall
                  image_url={URL_IMAGE({ imageId: item.image_id })}
                />
              </Link>
            </SmallCard>
          ))}
        </CardListWrapper>
      ) : (
        <Loader>Loading...</Loader>
      )}
    </>
  );
}

export default SearchResultsList;
