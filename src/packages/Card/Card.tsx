import { CardProps } from "./types";
import { Image, Subtitle, Text, Title, Wrapper } from "./styled";

export function Card({ title, subtitle, image, className, ...args }: CardProps) {
  return (
    <Wrapper className={className} {...args}>
      <Image src={image} alt='card-image' />
      <Text>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Text>
    </Wrapper>
  );
}
