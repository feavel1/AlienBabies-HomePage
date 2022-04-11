import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

export function GridItem({ children, href, title, thumbnail }) {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          style={{ borderRadius: "12px" }}
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
}

export function WorkGridItem({ children, id, title, thumbnail }) {
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/works/${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            style={{ borderRadius: "12px" }}
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
}
