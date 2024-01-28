import { CardProps } from "./types";
import { Image, Subtitle, Text, Title, Wrapper, hiddenStyles } from "./styled";
import { useState } from "react";
import Skeleton from "react-content-loader";

export function Card({ title, subtitle, image, className, ...args }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);

  const toggleLoading = () => {
    setIsLoading(false);
  };

  return (
    <Wrapper className={className} {...args}>
      <Skeleton speed={5} width={"100%"} height={180} className={isLoading ? "" : hiddenStyles}>
        <rect width={320} height={180} />
      </Skeleton>
      <Image
        src={image}
        onLoad={toggleLoading}
        alt='card-image'
        className={isLoading ? hiddenStyles : ""}
      />
      <Text>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Text>
    </Wrapper>
  );
}
