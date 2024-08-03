import { MESSAGES } from '@constants/art';
import { DEFAULT_TEXT } from '@constants/values';
import { formatDimensions, isKnown } from '@helpers/artHelpers';
import { StyledText } from '@pages/Art/ArtDetails/styled';

interface ArtOverviewProps {
  placeOfOrigin: string | undefined;
  dimensions: string | undefined;
  creditLine: string | undefined;
  joinedThemeTitles: string;
  isPublicDomain: boolean | undefined;
}

export const ArtOverview = ({
  placeOfOrigin,
  dimensions,
  creditLine,
  joinedThemeTitles,
  isPublicDomain,
}: ArtOverviewProps) => (
  <>
    <StyledText className="--heading">{MESSAGES.OVERVIEW}</StyledText>
    <StyledText>
      <span>{MESSAGES.ARTIST_NATIONALITY}</span>
      {isKnown(placeOfOrigin)}
    </StyledText>
    <StyledText>
      <span>{MESSAGES.DIMENSIONS}</span>
      {formatDimensions(dimensions)}
    </StyledText>
    <StyledText>
      <span>{MESSAGES.CREDIT_LINE}</span>
      {isKnown(creditLine)}
    </StyledText>
    <StyledText>
      <span>Repository: </span>
      {isKnown(joinedThemeTitles)}
    </StyledText>
    <StyledText>
      {isPublicDomain ? DEFAULT_TEXT.PUBLIC : DEFAULT_TEXT.PRIVATE}
    </StyledText>
  </>
);
