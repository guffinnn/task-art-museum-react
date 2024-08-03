import { StyledText } from '@components/ArtDetails/styled';
import { isKnown } from '@helpers/artHelpers';

interface ArtDetailsProps {
  title: string | undefined;
  artistTitle: string | undefined;
  dateStart: number | undefined;
  dateEnd: number | undefined;
}

const ArtDetails = ({
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

export default ArtDetails;
