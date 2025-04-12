import { useRef } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Button, Card, Container, Group, Image, Text, Title } from '@mantine/core';
import landingImage from '@/public/images/upscalemedia-transformed.png';

export default function Provider() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const slides = [
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Recents Prestataires',
      image: landingImage,
      description: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
    },
  ];
  return (
    <Box py={50} style={{ background: 'linear-gradient(45deg, #BA0218 50%, #54010B)' }}>
      <Container size="80%">
        <Title order={3} c="white" ta="center" mb="20">
          Nos Prestataires
        </Title>
        <Carousel
          w="100%"
          slidesToScroll={3}
          slideSize="33.333333%"
          slideGap="md"
          align="start"
          loop
          withControls={false}
          withIndicators
          styles={{
            indicators: {
              position: 'relative',
              marginTop: 60,
            },
            indicator: {
              width: 20,
              height: 20,
              transition: 'width 250ms ease',

              '&[data-active]': {
                backgroundColor: '#ff6b6b',
              },
            },
          }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {slides.map((item, index) => (
            <CarouselSlide key={index}>
              <Card shadow="sm" padding="lg" radius={20} style={{ backgroundColor: ' #54010B40' }}>
                <Title order={5} c="white" ta="center" mb="20">
                  {item.title}
                </Title>
                <Card.Section px="lg" mb="20">
                  <Image
                    priority
                    style={{ objectFit: 'cover' }}
                    loading="eager"
                    component={NextImage}
                    src={item.image}
                    alt="Logo"
                    w="100%"
                    h="100%"
                  />
                </Card.Section>
                <Text mb="20" ta="center" size="sm" c="white">
                  {item.description}
                </Text>
                <Group align="center" justify="center">
                  <Button href="/" component={Link} c="#BA0218" bg="white" mt="md" radius="md">
                    Read more
                  </Button>
                </Group>
              </Card>
            </CarouselSlide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
