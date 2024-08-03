import { isKnown } from '@helpers/artHelpers';
import { StyledText } from '@pages/Art/ArtDetails/styled';

interface ArtDetailsProps {
  title: string | undefined;
  artistTitle: string | undefined;
  dateStart: number | undefined;
  dateEnd: number | undefined;
}

export const ArtDetails = ({
  title,
  artistTitle,
  dateStart,
  dateEnd,
}: ArtDetailsProps) => (
  <>
    <StyledText className="--heading">{isKnown(title)}</StyledText>
    <StyledText className="--subheading">{isKnown(artistTitle)}</StyledText>
    <StyledText className="--bold">{`${isKnown(dateStart)}–${isKnown(dateEnd)}`}</StyledText>
  </>
);
